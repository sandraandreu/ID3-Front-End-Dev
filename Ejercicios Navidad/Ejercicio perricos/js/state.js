export const dogsArray = [];

export let filterBreedsActive = "Todas las razas";
export let filterAgesActive = "Todas las edades";
export let filterSizeActive = "Todos los tamaños";

export let search = "";

export const dogAge = ["Cachorro", "Adulto", "Senior"];
export const dogSize = ["Pequeño", "Mediano", "Grande"];

export const DOGS_STORAGE_KEY = `Perros añadidos:`;
export let DOGS_FAVOURITES_STORAGE_KEY = "";

export const heartFull = "../img/heart.svg";
export const heartEmpty = "../img/heart-outline.svg";

export function setFilterBreeds(value) {
  filterBreedsActive = value;
}

export function setFilterAges(value) {
  filterAgesActive = value;
}

export function setFilterSize(value) {
  filterSizeActive = value;
}

export function setSearch(value) {
  search = value;
}