import { randomDogBreed } from "./general.js";

export async function getRandomDogImage() {
  const url = `https://dog.ceo/api/breed/${randomDogBreed()}/images/random`;
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

export async function getListAllBreeds() {
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

async function getImageBreedActive() {
  const url = `https://dog.ceo/api/breed/${filterBreedsActive}/images/random`;
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
