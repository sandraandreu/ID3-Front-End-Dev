import {
  dogsArray,
  filterBreedsActive,
  filterAgesActive,
  filterSizeActive,
  search,
} from "./state.js";

export function renderDogArray() {
  const dogList = document.querySelector("#dog-list");
  const addmessage = document.querySelector(".messageinfo");

  if (!dogList || !addmessage) return;
  
  addmessage.innerHTML = "";
  dogList.innerHTML = "";

  let hasResults = false;

  dogsArray.forEach(function (dog, index) {
    const passSearch =
      !search ||
      dog.name.toLowerCase().startsWith(search) ||
      dog.breed.toLowerCase().startsWith(search);
    const passBreed =
      filterBreedsActive === "Todas las razas" ||
      dog.breed === filterBreedsActive;
    const passAge =
      filterAgesActive === "Todas las edades" || dog.age === filterAgesActive;
    const passSize =
      filterSizeActive === "Todos los tamaños" || dog.size === filterSizeActive;

    if (passBreed && passAge && passSize && passSearch) {
      hasResults = true;

      const htmlAdd = `<div class="card">
        <img class="card__img" src="${dog.provisionalPhoto}" alt="Perro" />
        <div class="card__infoprincipal"> 
          <h3>${dog.name}</h3>
          <img data-like=${dog.id} class="buttonheart icon20px" src="" alt="heart icon"> 
        </div>
        <span>Raza: <span class="capitalize">${dog.breed}</span></span>
        <span>Edad: ${dog.age}</span>
        <span>Tamaño: ${dog.size}</span>
      </div>`;

      dogList.innerHTML += htmlAdd;

      console.log(dogsArray)
    }
  });

  if (hasResults === false)
    addmessage.innerHTML = `<p>No hemos encontrado ningún perro con estos filtros. Cambia los filtros o añade más perros para seguir explorando.</p>`;
  
}

