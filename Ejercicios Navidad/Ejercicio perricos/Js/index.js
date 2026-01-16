const perricosArray = [];
let filterNameActive = [];
let filterBreedsActive = "Todos los perritos";
let breeds;

const cookieFull = "../img/cookie.svg";
const cookieEmpty = "../img/cookie_empty.svg";

// Definición de nombres de perros

const dogName = [
  "Sucky",
  "Drako",
  "Atenea",
  "Harby",
  "Lacy",
  "Nico",
  "Timy",
  "Pitter",
  "Frida",
  "Rocky",
  "Neu",
  "Body",
  "Chena",
  "Ghost",
  "Fiona",
  "Balto",
  "Canela",
  "Chispa",
  "Rocco",
  "Sombra",
];

function randomPerritoName() {
  const randomIndex = Math.floor(Math.random() * dogName.length);
  return dogName[randomIndex];
}

//Filtrar por raza

async function filterBreeds() {
  const message = await getListAllBreeds();
  breeds = Object.keys(message);

  const dogFilterBreed = document.querySelector("#dog-filter-breed");
  dogFilterBreed.innerHTML = "";

  breeds.unshift("Todos los perritos");

  breeds.forEach(function (name) {
    const optionElement = document.createElement("option");
    optionElement.value = `${name}`;
    optionElement.innerText = `${name}`;
    optionElement.className = "capitalize";

    dogFilterBreed.appendChild(optionElement);
  });

  dogFilterBreed.addEventListener("change", function () {
    filterBreedsActive = this.value;
    renderPerricoArray();
  });
}

filterBreeds();

// Dar una raza aleatoria

function randomPerritoBreed() {
  breeds.unshift("Todos los perritos");
  const randomIndex = Math.floor(Math.random() * breeds.length);
  return breeds[randomIndex];
}

// Añadir perritos al pulsar los botones

//Recibir la raza del perro a partir de la img

function getBreedFromImageUrl(url) {
  const parts = url.split("/");
  const breedWithSub = parts[parts.indexOf("breeds") + 1];
  const mainBreed = breedWithSub.split("-")[0];
  return mainBreed;
}

// Añadir 1 perrito

const addPerrico = async () => {
  let perricoImg;
  if (filterBreedsActive === "Todos los perritos") {
    perricoImg = await getRandomDogImage();
  } else {
    perricoImg = await getImageBreedActive();
  }

  const perricoBreed = getBreedFromImageUrl(perricoImg);

  const name = randomPerritoName();
  let cookie = cookieEmpty;
  const perrico = {
    name,
    perricoBreed,
    perricoImg,
    likes: Math.floor(Math.random() * 1001),
    isLiked: false,
    cookie,
  };

  perricosArray.push(perrico);

  renderPerricoFilter();
  renderPerricoArray();
};

renderPerricoArray();

document
  .querySelector("#add-1-perrico")
  .addEventListener("click", async function () {
    disabledAllButtons();
    await addPerrico();
    enableAllButtons();
  });

// Añadir 5 perricos

async function add5Perrico() {
  await Promise.all([
    addPerrico(),
    addPerrico(),
    addPerrico(),
    addPerrico(),
    addPerrico(),
  ]);
  console.log("end");
}

document
  .querySelector("#add-5-perrico")
  .addEventListener("click", async function () {
    disabledAllButtons();
    await add5Perrico();
    enableAllButtons();
  });

//Desactivar botones de añadir perrito

function disabledAllButtons() {
  document.querySelectorAll(".buttons__add button").forEach(function (button) {
    button.disabled = true;
  });
}

//Activar botones de añadir perrito

function enableAllButtons() {
  document.querySelectorAll(".buttons__add button").forEach(function (button) {
    button.disabled = false;
  });
}

// Filtros por nombres

function renderPerricoFilter() {
  const dogFilterName = document.querySelector("#dog-filter-name");
  dogFilterName.innerHTML = "";

  const filterCount = {};
  perricosArray.forEach(function (perrico) {
    filterCount[perrico.name] = filterCount[perrico.name]
      ? filterCount[perrico.name] + 1
      : 1;
  });

  Object.keys(filterCount).forEach(function (name, index) {
    const buttonElement = document.createElement("button");
    buttonElement.className = `filterButton ${
      filterNameActive.includes(name) ? "filterButton__active" : ""
    }`;
    buttonElement.innerText = `${name} (${filterCount[name]})`;

    console.log("innerHtml posición", index, dogFilterName.innerHTML);
    dogFilterName.appendChild(buttonElement);

    buttonElement.addEventListener("click", function () {
      if (filterNameActive.includes(name)) {
        buttonElement.classList.remove("filterButton__active");
        const removeName = filterNameActive.filter(function (dogName) {
          return dogName !== name;
        });
        filterNameActive = removeName;
        renderPerricoArray();

        console.log(filterNameActive);

        return;
      }

      buttonElement.classList.add("filterButton__active");
      filterNameActive.push(name);

      renderPerricoArray();
    });
  });
}

// Card del perrito en la interfaz

function renderPerricoArray() {
  const dogList = document.querySelector("#dog-list");
  dogList.innerHTML = "";

  perricosArray.forEach(function (dog, index) {
    const passNameFilter =
      filterNameActive.length === 0 || filterNameActive.includes(dog.name);

    const passBreedFilter =
      filterBreedsActive === "Todos los perritos" ||
      dog.perricoBreed === filterBreedsActive;

    if (passNameFilter && passBreedFilter) {
      const htmlAdd = `<div class="card">
        <img src="${dog.perricoImg}" alt="Perro" />
        <h3>${dog.name}</h3>
        <span>Raza: <span class="capitalize">${dog.perricoBreed}</span></span>
        <div class="likesContainer"> 
          <span>${dog.likes}</span>
          <img src="${dog.cookie}" alt=""> 
        </div>
        <button data-like=${index} class="buttonCookie">Darle una galleta</button>
      </div>`;

      console.log("innerHtml posición", index, dogList.innerHTML);

      dogList.innerHTML += htmlAdd;
    }
  });

  likePerrico();
}

//Darle un like al perrico

function likePerrico() {
  const likeButton = document.querySelectorAll(".buttonCookie");

  likeButton.forEach(function (button) {
    button.addEventListener("click", function () {
      const idButtonClicked = Number(button.getAttribute("data-like"));
      const perrico = perricosArray[idButtonClicked];

      function perricoaddlike(perrico) {
        if (perrico.isLiked === false) {
          perrico.likes += 1;
          perrico.isLiked = true;
          perrico.cookie = cookieFull;
        } else {
          perrico.likes -= 1;
          perrico.isLiked = false;
          perrico.cookie = cookieEmpty;
        }
      }
      perricoaddlike(perrico);
      renderPerricoArray();
    });
  });
}
