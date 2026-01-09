const perricosArray = [];
let filterActive = null;

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

// Añadir perritos al pulsar los botones

// Añadir 1 perrito

const addPerrico = async () => {
  const perricoImg = await getRandomDogImage();
  const name = randomPerritoName();
  let cookie = cookieEmpty;
  const perrico = {
    name,
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

document.querySelector("#add-1-perrico").addEventListener("click", function () {
  addPerrico();
});

// Añadir 5 perricos

function add5Perrico() {
  for (let counter = 1; counter <= 5; counter++) {
    addPerrico();
  }
}

document.querySelector("#add-5-perrico").addEventListener("click", function () {
  add5Perrico();
});

// Filtros por nombres

function renderPerricoFilter() {
  //Crear botones de los filtros
  const dogFilterName = document.querySelector("#dog-filter-name");
  dogFilterName.innerHTML = "";

  let namesFilter = [];
  let nameDogFilter;

  perricosArray.forEach(function (perrico) {
    if (!namesFilter.includes(perrico.name)) namesFilter.push(perrico.name);
  });

  namesFilter.forEach(function (name, index) {
    const count = perricosArray.filter(function (perrico) {
      return perrico.name === name;
    });

    const htmlAdd = `<button class="filterButton" id="filter-${name}"> ${name} (${count.length}) </button>`;

    console.log("innerHtml posición", index, dogFilterName.innerHTML);

    dogFilterName.innerHTML += htmlAdd;
  });

  //Funcionalidad de los botones de filtros

  const filterButton = document.querySelectorAll(".filterButton");

  filterButton.forEach(function (button) {
    button.addEventListener("click", function (event) {
      let buttonClicked = event.target;
      const textButtonClicked = button.id.replace("filter-", "");

      if (filterActive === null) {
        buttonClicked.classList.add("filterButton__active");
        filterActive = textButtonClicked;
      } else if (filterActive === textButtonClicked) {
        buttonClicked.classList.remove("filterButton__active");
        filterActive = null;
      } else {
        filterButton.forEach(function (button) {
          button.classList.remove("filterButton__active");
        });

        buttonClicked.classList.add("filterButton__active");
        filterActive = textButtonClicked;
      }

      renderPerricoArray();
    });
  });
}

// Card del perrito en la interfaz

function renderPerricoArray() {
  const dogList = document.querySelector("#dog-list");
  dogList.innerHTML = "";

  perricosArray.forEach(function (dog, index) {
    if (filterActive === null || dog.name === filterActive) {
      const htmlAdd = `<div class="card">
        <img src="${dog.perricoImg}" alt="Perro" />
        <h3>${dog.name}</h3>
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
