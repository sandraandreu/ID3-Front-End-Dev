import "./auth_observer.js";

import { initSignOut } from "./signout.js";
initSignOut();

const dogsArray = [];
const initialDogsData = [
  {
    name: "Luna",
    age: "Adulto",
    gender: "female",
    breed: "labrador",
    size: "Grande",
    weight: "28 kg",

    healthStatus: "healthy",
    vaccinated: "yes",
    dewormed: "yes",
    sterilized: "yes",
    specialNeeds: "",

    temperament: "Sociable",
    energyLevel: "Alto",
    dogsCompatibility: "yes",
    catsCompatibility: "unknown",
    kidsCompatibility: "yes",
    trainingLevel: "basic",

    adoptionStatus: "available",
    homeType: "any",
    entryDate: "2026-01-10",
    adoptionRequirements: "",

    shortDescription: "Muy cariñosa y sociable.",
    longDescription:
      "Luna es una perra muy equilibrada, le encanta estar con personas y pasear.",

    photos: [],
    mainPhoto: null,
  },
  {
    name: "Rocky",
    age: "Senior",
    gender: "male",
    breed: "bulldog",
    size: "Mediano",
    weight: "24 kg",

    healthStatus: "healthy",
    vaccinated: "yes",
    dewormed: "yes",
    sterilized: "yes",
    specialNeeds: "Articulaciones delicadas",

    temperament: "Tranquilo",
    energyLevel: "Bajo",
    dogsCompatibility: "yes",
    catsCompatibility: "unknown",
    kidsCompatibility: "depends",
    trainingLevel: "basic",

    adoptionStatus: "available",
    homeType: "apartment",
    entryDate: "2025-12-01",
    adoptionRequirements: "Paseos cortos y ambiente tranquilo",

    shortDescription: "Perro tranquilo ideal para piso.",
    longDescription:
      "Rocky es un perro mayor muy bueno, perfecto para una familia calmada.",

    photos: [],
    mainPhoto: null,
  },
  {
    name: "Nala",
    age: "Cachorro",
    gender: "female",
    breed: "husky",
    size: "Grande",
    weight: "14 kg",

    healthStatus: "healthy",
    vaccinated: "in_progress",
    dewormed: "yes",
    sterilized: "no",
    specialNeeds: "",

    temperament: "Activo",
    energyLevel: "Alto",
    dogsCompatibility: "yes",
    catsCompatibility: "no",
    kidsCompatibility: "yes",
    trainingLevel: "none",

    adoptionStatus: "available",
    homeType: "house",
    entryDate: "2026-01-20",
    adoptionRequirements: "Familia activa",

    shortDescription: "Cachorra muy activa y juguetona.",
    longDescription:
      "Nala es una cachorra llena de energía, ideal para personas deportistas.",

    photos: [],
    mainPhoto: null,
  },
];

let filterBreedsActive = "Todas las razas";
let filterAgesActive = "Todas las edades";
let filterSizeActive = "Todos los tamaños";
let breeds;
let search = "";

const DOGS_STORAGE_KEY = `Perros añadidos:`;
let DOGS_FAVOURITES_STORAGE_KEY = "";

const heartFull = "../img/heart.svg";
const heartEmpty = "../img/heart-outline.svg";

const dogAge = ["Cachorro", "Adulto", "Senior"];
const dogSize = ["Pequeño", "Mediano", "Grande"];

//Api

async function getListAllBreeds() {
  const url = "https://dog.ceo/api/breeds/list/all";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json.message;
  } catch (error) {
    console.error(error.message);
  }
}

async function getImageBreed(breed) {
  if (!breed) return null;

  const url = `https://dog.ceo/api/breed/${breed}/images/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Breed not found");

    const json = await response.json();
    return json.message;
  } catch (error) {
    console.error("Error fetching breed image:", error.message);
  }
}

//Buscador

function searcher() {
  const input = document.querySelector(".search__input");

  input.addEventListener("input", function () {
    search = input.value.toLowerCase();
    renderDogArray();
  });
}

searcher();

//Abrir y cerrar filtros

function toggleFilters() {
  const filterToggle = document.querySelector(".filter__toggle");
  const filterPanel = document.querySelector(".filter__panel");
  const iconClose = document.querySelector(".filter__icon_close img");

  filterToggle.addEventListener("click", function () {
    filterPanel.classList.toggle("filter__panel__active");
    filterToggle.classList.toggle("filter__toggle__open");
  });

  iconClose.addEventListener("click", function () {
    filterPanel.classList.remove("filter__panel__active");
    filterToggle.classList.remove("filter__toggle__open");
  });
}

toggleFilters();

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
    badge.innerHTML = `<span class="filters__badge__active">${numberBadge}</span>`;
  } else {
    numberBadge = 0;
    badge.innerHTML = ``;
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
    renderDogArray();
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
    renderDogArray();
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
    renderDogArray();
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
    renderDogArray();
  });
}

filterSize();

//Añadir imagen si no tiene imagen 
async function addImageToDog(dog) {
  const provisionalPhoto = await getImageBreed(dog.breed);

  return {
    ...dog,
    id: new Date().toISOString(),
    provisionalPhoto,
  };
}

const initialDogs = await Promise.all(
  initialDogsData.map((dog) => addImageToDog(dog))
);

dogsArray.push(...initialDogs);
renderDogArray()

//Guardar perro a partir del formulario
const btnSaveDog = document.querySelector('form[name="add-dog"]');

btnSaveDog.addEventListener("submit", function (event) {
  event.preventDefault();
  addDog();
});

// Añadir perrito a partir de las respuestas del formulario

async function addDog() {
  const baseDog = {
    name: document.querySelector("#name").value.trim(),
    age: document.querySelector("#age").value.trim(),
    gender: document.querySelector("#gender").value.trim(),
    breed: document.querySelector("#breed").value.trim(),
    size: document.querySelector("#size").value.trim(),
    weight: document.querySelector("#weight").value.trim(),

    healthStatus: document.querySelector("#healthStatus").value.trim(),
    vaccinated: document.querySelector("#vaccinated").value.trim(),
    dewormed: document.querySelector("#dewormed").value.trim(),
    sterilized: document.querySelector("#sterilized").value.trim(),
    specialNeeds: document.querySelector("#specialNeeds").value.trim(),

    temperament: document.querySelector("#temperament").value.trim(),
    energyLevel: document.querySelector("#energyLevel").value.trim(),
    dogsCompatibility: document
      .querySelector("#dogsCompatibility")
      .value.trim(),
    catsCompatibility: document
      .querySelector("#catsCompatibility")
      .value.trim(),
    kidsCompatibility: document
      .querySelector("#kidsCompatibility")
      .value.trim(),
    trainingLevel: document.querySelector("#trainingLevel").value.trim(),

    adoptionStatus: document.querySelector("#adoptionStatus").value.trim(),
    homeType: document.querySelector("#homeType").value.trim(),
    entryDate: document.querySelector("#entryDate").value.trim(),
    adoptionRequirements: document
      .querySelector("#adoptionRequirements")
      .value.trim(),

    shortDescription: document
      .querySelector("#shortDescription")
      .value.trim(),
    longDescription: document
      .querySelector("#longDescription")
      .value.trim(),

    photos: document.querySelector("#photos").files,
    mainPhoto: document.querySelector("#mainPhoto").files[0],
  };

  const fullDog = await addImageToDog({
    ...baseDog,
  });

  dogsArray.push(fullDog);
  renderDogArray();
}
// Card del perrito en la interfaz

function renderDogArray() {
  const dogList = document.querySelector("#dog-list");
  const addmessage = document.querySelector(".messageinfo");
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

  badge();
  
}

