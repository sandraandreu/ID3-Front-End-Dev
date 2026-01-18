const perricosArray = [];
let filterNameActive = [];
let filterBreedsActive = "Todas las razas";
let filterAgesActive = "Todas las edades";
let filterSizeActive = "Todos los tamaños";
let breeds;
let passFilters = true;

const heartFull = "../img/heart.svg";
const heartEmpty = "../img/heart-outline.svg";

//Definición de edad de los perros

const dogAge = ["Cachorro", "Adulto", "Senior"];

function randomPerritoAge() {
  const randomIndex = Math.floor(Math.random() * dogAge.length);
  return dogAge[randomIndex];
}

//Definición de edad de los perros

const dogSize = ["Pequeño", "Mediano", "Grande"];

function randomPerritoSize() {
  const randomIndex = Math.floor(Math.random() * dogSize.length);
  return dogSize[randomIndex];
}

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

// Dar una raza aleatoria

function randomPerritoBreed() {
  breeds.unshift("Todas las razas");
  const randomIndex = Math.floor(Math.random() * breeds.length);
  return breeds[randomIndex];
}

//Mensajes informativos

function addMessageInfo() {
  const addmessage = document.querySelector(".messageinfo");
  addmessage.innerHTML = "";
  let texthtml;
  if (perricosArray.length == 0) {
    texthtml = `<p>Aún no hay perros por aquí. Pulsa “Añadir perro” y empieza a conocer a los perros de nuestro refugio.</p>`;
  } else if (passFilters === false)
    texthtml = `<p>No hemos encontrado ningún perro con estos filtros. Cambia los filtros o añade más perros para seguir explorando.</p>`;
  else {
    texthtml = "";
  }
  addmessage.innerHTML = texthtml;
}

addMessageInfo();

//Abrir y cerrar filtros

function toggleFilters() {
  const filterToggle = document.querySelector(".filter__toggle");
  const filterPanel = document.querySelector(".filter__panel");

  filterToggle.addEventListener("click", function () {
    if (document.querySelector(".filter__panel__active")) {
      filterToggle.classList.remove("filter__toggle__open");
      filterPanel.classList.remove("filter__panel__active");
    } else {
      filterPanel.classList.add("filter__panel__active");
      filterToggle.classList.add("filter__toggle__open");
    }
  });
}

toggleFilters();

//Saber si algun perro pasa los filtros

function passFiltersIsTrue() {
  passFilters = false;
  perricosArray.forEach(function (dog) {
    const passBreed =
      filterBreedsActive === "Todas las razas" ||
      dog.perricoBreed === filterBreedsActive;

    const passAge =
      filterAgesActive === "Todas las edades" || dog.age === filterAgesActive;

    const passSize =
      filterSizeActive === "Todos los tamaños" || dog.size === filterSizeActive;

    if (passBreed && passAge && passSize) {
      passFilters = true;
    }
  });
}

passFiltersIsTrue();

//Badge para los filtros activos

function badge() {
  const badge = document.querySelector(".filters__badge");

  let totalFilterActive = [
    filterBreedsActive != "Todas las razas",
    filterAgesActive != "Todas las edades",
    filterSizeActive != "Todos los tamaños",
  ];
  let numberBadge = 0;
  const filtersActive = totalFilterActive.filter(function (value) {
    return value === true;
  }).length;

  numberBadge = filtersActive;

  if (numberBadge < 4 && numberBadge > 0) {
    badge.innerHTML = `<span>${numberBadge}</span>`;
    badge.classList.add("filters__badge__active");
  } else {
    numberBadge = 0;
    badge.innerHTML = ``;
    badge.classList.remove("filters__badge__active");
  }
}

//Limpiar filtros

function cleanFilters() {
  const cleanFilters = document.querySelector(".clean__filters");
  cleanFilters.addEventListener("click", function () {
    filterBreedsActive = "Todas las razas";
    filterAgesActive = "Todas las edades";
    filterSizeActive = "Todos los tamaños";

    document.querySelector("#dog-filter-breed").value = "selected";
    document.querySelector("#dog-filter-age").value = "selected";
    document.querySelector("#dog-filter-size").value = "selected";

    badge();
    renderPerricoArray();
    passFiltersIsTrue();
    addMessageInfo();
  });
}

cleanFilters();

//Filtrar por raza

async function filterBreeds() {
  const message = await getListAllBreeds();
  breeds = Object.keys(message);

  const dogFilterBreed = document.querySelector("#dog-filter-breed");
  dogFilterBreed.innerHTML = `<option value="selected" disabled selected>Raza</option> 
  <option class="capitalize" value="Todas las razas">Todas las razas</option>`;

  breeds.forEach(function (name) {
    const texthtml = `
    <option class="capitalize" value="${name}">${name}</option>`;

    dogFilterBreed.innerHTML += texthtml;
  });

  dogFilterBreed.addEventListener("change", function () {
    filterBreedsActive = this.value;
    renderPerricoArray();
    passFiltersIsTrue();
  });
}

filterBreeds();

//Filtrar por etapa de vida

function filterAge() {
  const dogFilterAge = document.querySelector("#dog-filter-age");
  dogFilterAge.innerHTML = `<option value="selected" disabled selected>Etapa de vida</option>
  <option class="capitalize" value="Todas las edades">Todas las edades</option>`;

  dogAge.forEach(function (age) {
    const texthtml = `
    <option class="capitalize" value="${age}">${age}</option>`;
    dogFilterAge.innerHTML += texthtml;
  });

  dogFilterAge.addEventListener("change", function () {
    filterAgesActive = this.value;
    renderPerricoArray();
  });
}

filterAge();

//Filtrar por tamaño

function filterSize() {
  const dogFilterSize = document.querySelector("#dog-filter-size");
  dogFilterSize.innerHTML = `<option value="selected" disabled selected>Tamaño</option>
  <option class="capitalize" value="Todos los tamaños">Todos los tamaños</option>`;

  dogSize.forEach(function (size) {
    const texthtml = `
    <option class="capitalize" value="${size}">${size}</option>`;

    dogFilterSize.innerHTML += texthtml;
  });

  dogFilterSize.addEventListener("change", function () {
    filterSizeActive = this.value;
    renderPerricoArray();
  });
}

filterSize();

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
  let perricoImg =
    filterBreedsActive === "Todas las razas"
      ? await getRandomDogImage()
      : await getImageBreedActive();
  const perricoBreed = getBreedFromImageUrl(perricoImg);
  const age =
    filterAgesActive === "Todas las edades"
      ? randomPerritoAge()
      : filterAgesActive;
  const name = randomPerritoName();
  const size =
    filterSizeActive === "Todos los tamaños"
      ? randomPerritoSize()
      : filterSizeActive;
  let heart = heartEmpty;

  const perrico = {
    name,
    age,
    size,
    perricoBreed,
    perricoImg,
    isLiked: false,
    heart,
  };

  perricosArray.push(perrico);

  addMessageInfo();
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

// Card del perrito en la interfaz

function renderPerricoArray() {
  const dogList = document.querySelector("#dog-list");
  dogList.innerHTML = "";

  perricosArray.forEach(function (dog, index) {
    const passBreedFilter =
      filterBreedsActive === "Todas las razas" ||
      dog.perricoBreed === filterBreedsActive;

    const passAgeFilter =
      filterAgesActive === "Todas las edades" || dog.age === filterAgesActive;

    const passSizeFilter =
      filterSizeActive === "Todos los tamaños" || dog.size === filterSizeActive;

    if (passBreedFilter && passSizeFilter && passAgeFilter) {
      const htmlAdd = `<div class="card">
        <img class="card__img" src="${dog.perricoImg}" alt="Perro" />
        <div class="card__infoprincipal"> 
          <h3>${dog.name}</h3>
          <img data-like=${index} class="buttonheart icon20px" src="${dog.heart}" alt="heart icon"> 
        </div>
        <span>Raza: <span class="capitalize">${dog.perricoBreed}</span></span>
        <span>Etapa de vida: ${dog.age}</span>
        <span>Tamaño: ${dog.size}</span>
      </div>`;

      console.log("innerHtml posición", index, dogList.innerHTML);

      dogList.innerHTML += htmlAdd;
    }
  });

  badge();
  passFiltersIsTrue();
  addMessageInfo();
  likePerrico();
}

//Darle un like al perrico

function likePerrico() {
  const likeButton = document.querySelectorAll(".buttonheart");

  likeButton.forEach(function (button) {
    button.addEventListener("click", function () {
      const idButtonClicked = Number(button.getAttribute("data-like"));
      const perrico = perricosArray[idButtonClicked];

      function perricoaddlike(perrico) {
        if (perrico.isLiked === false) {
          perrico.isLiked = true;
          perrico.heart = heartFull;
        } else {
          perrico.isLiked = false;
          perrico.heart = heartEmpty;
        }
      }
      perricoaddlike(perrico);
      renderPerricoArray();
    });
  });
}
