import "./auth_observer.js";
import { initSignOut } from "./signout.js";

import { loadPreviousDogs } from "./local-storage.js";
import { loadInitialDogs } from "./initial-dogs.js";
import { renderDogArray } from "./render.js";

import {
  toggleFilters,
  cleanFilters,
  filterBreeds,
  filterAge,
  filterSize,
  badge,
} from "./filters.js";

import { search } from "./search.js";
import { dogsArray } from "./state.js";
import "./add-dog.js";

// Sign out
initSignOut();

// Cargar perros y renderizar

loadPreviousDogs();

if (dogsArray.length === 0) {
  await loadInitialDogs();
}

renderDogArray();

// Inicializar filtros
toggleFilters();
cleanFilters();
filterBreeds();
filterAge();
filterSize();

// Search
search();

// Badge inicial
badge();






