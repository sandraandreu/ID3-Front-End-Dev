import {dogsArray, DOGS_STORAGE_KEY } from "./state.js";

//Guardar en local storatge los perros 

export function saveDogsStorage() {
  localStorage.setItem(DOGS_STORAGE_KEY, JSON.stringify(dogsArray));
}

//Mostrar los perros añadidos a local storage

export function loadPreviousDogs() {
  const previousDogs = localStorage.getItem(DOGS_STORAGE_KEY);
  if (!previousDogs) return;

  const parsedDogs = JSON.parse(previousDogs);

  dogsArray.length = 0;
  dogsArray.push(...parsedDogs);
}