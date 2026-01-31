//Guardar en local storatge los perros favoritos

function saveDogsFavouritesStoratge() {
  const favourites = dogsArray.filter(function (dog) {
    return dog.isLiked === true;
  });
  localStorage.setItem(DOGS_FAVOURITES_STORAGE_KEY, JSON.stringify(favourites));
}

//Darle un like al dog

function likeDog() {
  const likeButton = document.querySelectorAll(".buttonheart");
  const messageLogin = document.querySelector(".message__login");

  likeButton.forEach(function (button) {
    button.addEventListener("click", function () {
      const idButtonClicked = Number(button.getAttribute("data-like"));
      const dog = dogsArray[idButtonClicked];

      if (!auth.currentUser) {
        messageLogin.hidden = false;
      } else {
        DOGS_FAVOURITES_STORAGE_KEY = `Perros favoritos -- ${auth.currentUser.uid}:`;
        messageLogin.hidden = true;
        function dogaddlike(dog) {
          if (dog.isLiked === false) {
            dog.isLiked = true;
            dog.heart = heartFull;

            saveDogsFavouritesStoratge();
          } else {
            dog.isLiked = false;
            dog.heart = heartEmpty;

            saveDogsFavouritesStoratge();
          }
        }
        dogaddlike(dog);
        renderDogArray();
      }
    });
  });
}



