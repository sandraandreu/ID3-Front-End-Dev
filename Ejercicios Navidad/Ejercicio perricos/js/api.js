
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

export async function getImageBreed(breed) {
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