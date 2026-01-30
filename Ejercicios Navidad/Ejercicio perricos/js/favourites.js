//Mostrar en la interfaz los perros guardados en favoritos
import "./general.js";

loadPreviousDogs();

function renderFavouriteDogArray() {
  const dogList = document.querySelector("#favourite-dogs-list");
  const addmessage = document.querySelector(".messageinfo");
  addmessage.innerHTML = "";
  dogList.innerHTML = "";

  const favDogsStoratge = localStorage.getItem(`Perros favoritos -- ${auth.currentUser.uid}:`);
  const favDogsStoratgeArray = JSON.parse(favDogsStoratge);

  dogsArray.forEach(function (dog, index) {
    const passFav = dog.isLiked === true;

    if (passFav) {
      const htmlAdd = `<div class="card">
        <img class="card__img" src="${dog.img}" alt="Perro" />
        <div class="card__infoprincipal"> 
          <h3>${dog.name}</h3>
          <img data-like=${index} class="buttonheart icon20px" src="${dog.heart}" alt="heart icon"> 
        </div>
        <span>Raza: <span class="capitalize">${dog.breed}</span></span>
        <span>Edad: ${dog.age}</span>
        <span>Tamaño: ${dog.size}</span>
      </div>`;

      dogList.innerHTML += htmlAdd;
    }
  });

  if (favDogsStoratgeArray.length == 0) {
      addmessage.innerHTML = `<p>Aún no has añadido ningún perrito a favoritos.
    Explora nuestro refugio y guarda a los que te roben el corazón.</p>
    <a href="dogs.html" class="cta">Empezar a explorar</a>`;
    }

  likeDogFav();
}

renderFavouriteDogArray();

//Quitar like

function likeDogFav() {
  const likeButton = document.querySelectorAll(".buttonheart");

  likeButton.forEach(function (button) {
    button.addEventListener("click", function () {
      const idButtonClicked = Number(button.getAttribute("data-like"));
      const dog = dogsArray[idButtonClicked];

      dog.isLiked = false;
      dog.heart = heartEmpty;
      saveDogsStoratge();
      saveDogsFavouritesStoratge();

      renderFavouriteDogArray();
    });
  });
}
