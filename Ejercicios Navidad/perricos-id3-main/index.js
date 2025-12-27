const perricosArray = [];
let filteractive = null


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
    const perrico = {
      name,
      perricoImg,
      likes: 0,
      isliked: false
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
    button.addEventListener('click', function() {
    
    if (filteractive === null ) {
      button.classList.add("filterButton__active")
      const textButton = button.textContent.trim()
      filteractive = textButton 
    }

    else {
      button.classList.remove("filterButton__active")
      filteractive = null
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

  if (filteractive === null) {
    perricosArray.forEach((dog, index) => {
      
      const htmlAdd = `<div class="card">
        <img src="${dog.perricoImg}" alt="Perro" />
        <h3>${dog.name}</h3>
        <div> 
          <img src="../perricos-id3-main/img/cookie.svg" alt=""> 
          <span>${dog.likes}</span>
        </div>
        <button data=${index} class="buttonCookie">Darle una galleta</button>
      </div>`;

      console.log('innerHtml posición', index, dogList.innerHTML);

      dogList.innerHTML += htmlAdd;
    });
  }

  else {
    const perricosFiltered = perricosArray.filter(function(perrico){
      return perrico.name === filteractive
    })

    perricosFiltered.forEach((dog, index) => {
      
      const htmlAdd = `<div class="card">
        <img src="${dog.perricoImg}" alt="Perro" />
        <h3>${dog.name}</h3>
        <div> 
          <img src="../perricos-id3-main/img/cookie.svg" alt=""> 
          <span>${dog.likes}</span>
        </div>
        <button class="buttonCookie">Darle una galleta</button>
      </div>`;

      console.log('innerHtml posición', index, dogList.innerHTML);

      dogList.innerHTML += htmlAdd;
    });
  }

}

//Darle un like al perrico

//que sepa los botones que hay de las galletas
//que sepa cuando se pulsan
//que sepa que boton ha pulsado, a que perro pertenece
//acceder a la informacion de los perros
//buscar un perro que coincida con el index del boton pulsado
//si ese perro no le has dado like sumarle uno y cambiar el texto o el estilo del boton
// si le has dado like quitarselo, volver al estilo principal

const likeButton = document.querySelectorAll('.buttonCookie')
likeButton.addEventListener('click', function() {
//seguir por aqui
}) 

//es de antes
function liketoggle () {
  renderPerricoArray()

  
  likeButton.forEach (function(button){ 
    button.addEventListener('click', function() {
    
    perricosArray.forEach(function(perrico){
      if (perrico.isliked === false) {
      perrico.likes += 1
      perrico.isliked = true
    }

    else {
      perrico.likes -= 1
      perrico.isliked = false
    }
    })
    });
  })
}

liketoggle()



// que funcione el boton de darle una galleta
// que solo salgan los botones de los perros que si que estan
// que te diga cuantos perros con ese nombre hay
// que solo puedas pulsar un filtro o que puedas tener todos los filtros que quieras activos




