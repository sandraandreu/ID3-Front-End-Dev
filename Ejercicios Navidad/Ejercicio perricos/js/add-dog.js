import { dogsArray } from "./state.js";
import { getImageBreed, getListAllBreeds } from "./api.js";
import { saveDogsStorage} from "./local-storage.js";

const form = document.querySelector('form[name="add-dog"]');
const messagePassAddDog = document.querySelector(".message__form.add-dog__pass");

if (form) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    await addDogFromForm();
  });
}

async function addDogFromForm() {
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
  };

  // Imagen desde la API
  const provisionalPhoto = await getImageBreed(baseDog.breed);

  const fullDog = {
    ...baseDog,
    id: new Date().toISOString(),
    provisionalPhoto,
  };

  if (messagePassAddDog) {
    messagePassAddDog.hidden = false;
  }

  dogsArray.push(fullDog);
  saveDogsStorage()

  form.reset();
}


// Selector de raza del formulario
async function selectorBreedsForm() {
  const selectorBreed = document.querySelector("#breed");

  const message = await getListAllBreeds();
  const breeds = Object.keys(message);

  breeds.forEach((breed) => {
    selectorBreed.innerHTML += `
      <option value="${breed}">${breed}</option>
    `;
  });
}

selectorBreedsForm() 