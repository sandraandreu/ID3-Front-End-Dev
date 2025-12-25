const perricosArray = [];


// Definición de nombres de perros

const dogName = ["Sucky","Drako","Pitter","Frida","Rocky","Neu","Body","Chena","Ghost", "Fiona", "Balto", "Canela", "Chispa", "Rocco", "Sombra"]

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

// Card del perrito en la interfaz

function renderPerricoArray() {
  const dogList = document.querySelector('#dog-list');
  dogList.innerHTML = '';

  perricosArray.forEach((dog, index) => {
    
    const htmlAdd = `<div class="card">
      <img src="${dog}" alt="Perro" />
      <br />
      <h2>${dog.name}</h2>
      <p>❤️ 🤮</p>
      <button>Preciosísimo</button> <button>Feísisimo</button>
    </div>`;

    console.log('innerHtml posición', index, dogList.innerHTML);

    dogList.innerHTML += htmlAdd;
  });
}

// Filtros por nombres

function renderPerricoFilter() {
  const dogFilterName = document.querySelector('#dog-filter-name');
  dogFilterName.innerHTML = '';

  dogName.forEach(function(name, index){

    const htmlAdd = `<button class="filterButton"> ${name} </button>`;

    console.log('innerHtml posición', index, dogFilterName.innerHTML);

    dogFilterName.innerHTML += htmlAdd;
  })

  const filterButtonActive = document.querySelectorAll('.filterButton')

  filterButtonActive.forEach(function(button){
      button.addEventListener ('click', function(){
        button.classList.toggle('filterButton__active')
    })
  })

}

renderPerricoFilter()



