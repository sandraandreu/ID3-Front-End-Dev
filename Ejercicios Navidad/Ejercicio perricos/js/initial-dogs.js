import { dogsArray } from "./state.js";
import { getImageBreed } from "./api.js";

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

async function addImageToDog(dog) {
  const provisionalPhoto = await getImageBreed(dog.breed);
  return {
    ...dog,
    id: new Date().toISOString(),
    provisionalPhoto,
  };
}

export async function loadInitialDogs() {
  const initialDogs = await Promise.all(
    initialDogsData.map((dog) => addImageToDog(dog))
  );

  dogsArray.push(...initialDogs);
}