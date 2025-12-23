const perricosArray = [];

// addPerrico();

const dogName = ["Sucky","Drako","Pitter","Frida","Rocky","Neu","Body","Chena","Ghost", "Fiona", "Balto", "Canela", "Chispa", "Rocco", "Sombra"]

function randomPerritoName () {
    const randomIndex = Math.floor(Math.random() * dogName.length);
    return dogName[randomIndex];
}

function renderPerricoFilter() {
  const dogFilterName = document.querySelector('#dog-filter-name');
  dogFilterName.innerHTML = '';

  dogName.forEach(function(name, index){

    const htmlAdd = `<button class="filterButton"> ${name} </button>`;

    console.log('innerHtml posición', index, dogFilterName.innerHTML);

    dogFilterName.innerHTML += htmlAdd;
  })

  const filerButtonActive = document.querySelectorAll('button.filterButton')
  .addEventListener ('click', function(){
    /*AQUÍ NECESITO AYUDAAA*/
  })
}


renderPerricoFilter()

function renderPerricoArray() {
  const dogList = document.querySelector('#dog-list');
  dogList.innerHTML = '';

  perricosArray.forEach((dogImage, index) => {
    

    const htmlAdd = `<div class="card">
      <img src="${dogImage}" alt="Perro" />
      <br />
      <h2>${randomPerritoName()}</h2>
      <p>❤️ 🤮</p>
      <button>Preciosísimo</button> <button>Feísisimo</button>
    </div>`;

    console.log('innerHtml posición', index, dogList.innerHTML);

    dogList.innerHTML += htmlAdd;
  });
}

const addPerrico = async () => {
  const perricoImg = await getRandomDogImage();
  perricosArray.push(perricoImg);
  renderPerricoArray();
};

renderPerricoArray();

document.querySelector('#add-1-perrico').addEventListener('click', function () {
  addPerrico();
});



function add5Perrico () {
  for(let counter = 1; counter <= 5; counter++) {
	addPerrico();}
}



document.querySelector('#add-5-perrico').addEventListener('click', function () {
  add5Perrico();
});