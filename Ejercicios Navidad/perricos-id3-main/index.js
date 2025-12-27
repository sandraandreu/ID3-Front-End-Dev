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
      perricoImg
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
        <div> <img src="../perricos-id3-main/img/cookie.svg" alt=""> </div>
        <button>Darle una galleta</button>
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
        <div> <img src="../perricos-id3-main/img/cookie.svg" alt=""> </div>
        <button>Darle una galleta</button>
      </div>`;

      console.log('innerHtml posición', index, dogList.innerHTML);

      dogList.innerHTML += htmlAdd;
    });
  }

}




//crear boton de filtros
//al pulsar ese boton se le añade una clase de boton activo
//guardar el contenido del boton activo en una variable que vaya cambiando
//borrarlo de la variable si se desactiva
//si la variable esta vacia () mostrar todos los perros
//si no comparar el contenido de la variable de botones activos con los nombres de los perros 
  //mostrar solo los perros que coincidan con ese nombre




