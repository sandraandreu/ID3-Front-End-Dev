const perricosArray = [];
let filteractive = null

const cookieFull = "../perricos-id3-main/img/cookie.svg";
const cookieEmpty = "../perricos-id3-main/img/cookie_empty.svg"


// Definición de nombres de perros

const dogName = ["Sucky","Drako","Atenea","Harby","Lacy","Nico","Timy","Pitter","Frida","Rocky","Neu","Body","Chena","Ghost", "Fiona", "Balto", "Canela", "Chispa", "Rocco", "Sombra"]

function randomPerritoName () {
    const randomIndex = Math.floor(Math.random() * dogName.length);
    return dogName[randomIndex];
}

// Añadir perritos al pulsar los botones

  // Añadir 1 perrito

  const addPerrico = async () => {
    const perricoImg = await getRandomDogImage();
    const name = randomPerritoName();
    let cookie = cookieEmpty
    const perrico = {
      name,
      perricoImg,
      likes: 0,
      isliked: false,
      cookie
    }

    perricosArray.push(perrico);
    renderPerricoArray();
  };

  renderPerricoArray();

  document.querySelector('#add-1-perrico').addEventListener('click', function () {
    addPerrico();
  });

  // Añadir 5 perricos
  
  function add5Perrico () {
    for(let counter = 1; counter <= 5; counter++) {
    addPerrico();}
  }

  document.querySelector('#add-5-perrico').addEventListener('click', function () {
    add5Perrico();
  });

// Filtros por nombres

function renderPerricoFilter() {
  const dogFilterName = document.querySelector('#dog-filter-name');
  dogFilterName.innerHTML = '';

  dogName.forEach(function(name, index){

    const htmlAdd = `<button class="filterButton"> ${name} </button>`;

    console.log('innerHtml posición', index, dogFilterName.innerHTML);

    dogFilterName.innerHTML += htmlAdd;

  })

  const filterButton = document.querySelectorAll('.filterButton')

  filterButton.forEach (function(button){ 
    button.addEventListener('click', function(event) {
    let buttonClicked = event.target;
    const textButtonClicked = buttonClicked.textContent.trim()

    if (filteractive === null) {
      buttonClicked.classList.add("filterButton__active")
      filteractive = textButtonClicked 
    }

    else if (filteractive === textButtonClicked) {
      buttonClicked.classList.remove("filterButton__active")
      filteractive = null
    }

    else {
      filterButton.forEach (function(button){
        button.classList.remove("filterButton__active")
      })
      
      buttonClicked.classList.add("filterButton__active")
      filteractive = textButtonClicked 
    }

    renderPerricoArray()
    });
  })

}

renderPerricoFilter()

// Card del perrito en la interfaz

function renderPerricoArray() {
  const dogList = document.querySelector('#dog-list');
  dogList.innerHTML = '';

  perricosArray.forEach(function(dog,index){
    if (filteractive === null || dog.name === filteractive) {
      const htmlAdd = `<div class="card">
        <img src="${dog.perricoImg}" alt="Perro" />
        <h3>${dog.name}</h3>
        <div> 
          <img src="${dog.cookie}" alt=""> 
        </div>
        <button data-like=${index} class="buttonCookie">Darle una galleta</button>
      </div>`;

      console.log('innerHtml posición', index, dogList.innerHTML);

      dogList.innerHTML += htmlAdd; 
    }
  })

  likePerrico()

}

//Darle un like al perrico

  function likePerrico () {

    const likeButton = document.querySelectorAll('.buttonCookie')

    likeButton.forEach(function(button){

      button.addEventListener('click', function() {
      const idButtonClicked = Number(button.getAttribute('data-like'))
      const perrico = perricosArray[idButtonClicked]

      function perricoaddlike (perrico) {
        if(perrico.isliked === false) {
          perrico.likes += 1
          perrico.isliked = true
          perrico.cookie = cookieFull
        }
        else {
          perrico.likes -= 1
          perrico.isliked = false
          perrico.cookie = cookieEmpty
          }
      }
      perricoaddlike(perrico)
      renderPerricoArray()
      })
    })
  }

//que sepa los botones que hay de las galletas
//que sepa cuando se pulsan
//que sepa que boton ha pulsado, a que perro pertenece
//acceder a la informacion de los perros
//buscar un perro que coincida con el index del boton pulsado
//si ese perro no le has dado like sumarle uno y cambiar el texto o el estilo del boton
// si le has dado like quitarselo, volver al estilo principal


// que funcione el boton de darle una galleta
// que solo salgan los botones de los perros que si que estan
// que te diga cuantos perros con ese nombre hay
// que solo puedas pulsar un filtro o que puedas tener todos los filtros que quieras activos




