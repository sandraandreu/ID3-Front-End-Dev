import { setSearch } from "./state.js";
import { renderDogArray } from "./render.js";

export function search() {
  const input = document.querySelector(".search__input");

  if (!input) return;

  input.addEventListener("input", () => {
    setSearch(input.value.toLowerCase());
    renderDogArray();
  });
}

