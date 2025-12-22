function updateLikeUI(isLiked, count) {
    const likeBtn = document.querySelector("#like-button");
    const likeCount = document.querySelector("#like-count");

    likeBtn.classList.toggle("liked", isLiked);
    likeCount.textContent = count;
}

let isLiked = false;
let totalLikes = 0;

function toggleLike() {
    // TODO:
    // - Si isLiked es true, quitar like y restar
    if (isLiked) {
        totalLikes -= 1
        isLiked = false
    }
    // - Si es false, poner like y sumar
    else {
        totalLikes += 1
        isLiked = true
    }

    updateLikeUI(isLiked, totalLikes)
    // - llamar a updateLikeUI(isLiked, totalLikes)
}
