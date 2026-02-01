import {
  dogAge,
  dogSize,
  setFilterBreeds,
  setFilterAges,
  setFilterSize,
  filterBreedsActive,
  filterAgesActive,
  filterSizeActive,
} from "./state.js";

import { getListAllBreeds } from "./api.js";
import { renderDogArray } from "./render.js";

// Abrir y cerrar panel de filtros
export function toggleFilters() {
  const filterToggle = document.querySelector(".filter__toggle");
  const filterPanel = document.querySelector(".filter__panel");
  const iconClose = document.querySelector(".filter__icon_close img");

  if (!filterToggle || !filterPanel || !iconClose) return;

  filterToggle.addEventListener("click", () => {
    filterPanel.classList.toggle("filter__panel__active");
    filterToggle.classList.toggle("filter__toggle__open");
  });

  iconClose.addEventListener("click", () => {
    filterPanel.classList.remove("filter__panel__active");
    filterToggle.classList.remove("filter__toggle__open");
  });
}

// Limpiar filtros
export function cleanFilters() {
  const cleanFiltersBtn = document.querySelector(".clean__filters");
  if (!cleanFiltersBtn) return;

  cleanFiltersBtn.addEventListener("click", () => {
    setFilterBreeds("Todas las razas");
    setFilterAges("Todas las edades");
    setFilterSize("Todos los tamaños");

    document.querySelector("#dog-filter-breed").value = "selected";
    document.querySelector("#dog-filter-age").value = "selected";
    document.querySelector("#dog-filter-size").value = "selected";

    renderDogArray();
  });
}

// Filtro por raza
export async function filterBreeds() {
  const dogFilterBreed = document.querySelector("#dog-filter-breed");
  if (!dogFilterBreed) return;

  const message = await getListAllBreeds();
  const breeds = Object.keys(message);

  dogFilterBreed.innerHTML = `
    <option value="selected" disabled selected>Raza</option>
    <option value="Todas las razas">Todas las razas</option>
  `;

  breeds.forEach((breed) => {
    dogFilterBreed.innerHTML += `
      <option class="capitalize" value="${breed}">${breed}</option>
    `;
  });

  dogFilterBreed.addEventListener("change", function () {
    setFilterBreeds(this.value);
    renderDogArray();
  });
}

// Filtro por edad
export function filterAge() {
  const dogFilterAge = document.querySelector("#dog-filter-age");
  if (!dogFilterAge) return;

  dogFilterAge.innerHTML = `
    <option value="selected" disabled selected>Etapa de vida</option>
    <option value="Todas las edades">Todas las edades</option>
  `;

  dogAge.forEach((age) => {
    dogFilterAge.innerHTML += `
      <option value="${age}">${age}</option>
    `;
  });

  dogFilterAge.addEventListener("change", function () {
    setFilterAges(this.value);
    renderDogArray();
  });
}

// Filtro por tamaño
export function filterSize() {
  const dogFilterSize = document.querySelector("#dog-filter-size");
  if (!dogFilterSize) return;

  dogFilterSize.innerHTML = `
    <option value="selected" disabled selected>Tamaño</option>
    <option value="Todos los tamaños">Todos los tamaños</option>
  `;

  dogSize.forEach((size) => {
    dogFilterSize.innerHTML += `
      <option value="${size}">${size}</option>
    `;
  });

  dogFilterSize.addEventListener("change", function () {
    setFilterSize(this.value);
    renderDogArray();
  });
}
//Badge

export function badge() {
  const badge = document.querySelector(".filters__badge");
  if (!badge) return;

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
