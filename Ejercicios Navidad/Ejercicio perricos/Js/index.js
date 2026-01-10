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
  const dogFilterName = document.querySelector('#dog-filter-name');
  dogFilterName.innerHTML = '';

  const filterCount = {};
  perricosArray.forEach(function (perrico) {
    filterCount[perrico.name] = filterCount[perrico.name] ? filterCount[perrico.name] + 1 : 1;
  });

  Object.keys(filterCount).forEach(function (name, index) {
    const buttonElement = document.createElement('button');
    buttonElement.className = `filterButton ${name === filterActive ? 'filterButton__active' : ''}`;
    buttonElement.innerText = `${name} (${filterCount[name]})`;

    console.log('innerHtml posición', index, dogFilterName.innerHTML);
    dogFilterName.appendChild(buttonElement);

    buttonElement.addEventListener('click', function () {
      if (filterActive === name) {
        buttonElement.classList.remove('filterButton__active');
        filterActive = null;
        renderPerricoArray();

        return;
      }

      document.querySelectorAll('.filterButton__active').forEach(function (button) {
        button.classList.remove('filterButton__active');
      });

      buttonElement.classList.add('filterButton__active');
      filterActive = name;

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