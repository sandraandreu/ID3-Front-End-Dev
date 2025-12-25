const perricosArray = [];


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

// Card del perrito en la interfaz

function renderPerricoArray() {
  const dogList = document.querySelector('#dog-list');
  dogList.innerHTML = '';

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

// Filtros por nombres

function renderPerricoFilter() {
  const dogFilterName = document.querySelector('#dog-filter-name');
  dogFilterName.innerHTML = '';

  dogName.forEach(function(name, index){

    const htmlAdd = `<button class="filterButton"> ${name} </button>`;

    console.log('innerHtml posición', index, dogFilterName.innerHTML);

    dogFilterName.innerHTML += htmlAdd;
  })

}

renderPerricoFilter()


function perricoFilter () {

  const filterButtonActive = document.querySelectorAll('.filterButton')

  filterButtonActive.forEach(function(button){
      button.addEventListener ('click', function(){
        button.classList.toggle('filterButton__active')
    })
  })

  if (/*Nose muy bien como hacer para poner aquí si no hay ningún filtro activado*/ '') {
    return perricosArray
  }

  else { 
    const filterActive = perricosArray.filter(function(perrico){
      return perrico.name === ''/*Necesito acceder a los nombres de los botones activos*/
    })
  }
}

perricoFilter()




