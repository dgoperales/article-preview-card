const profileInfo = document.getElementsByClassName("card__info--profile");
const shareButton = document.getElementById("share");
const shareMobileOptions = document.getElementById("share-mobile");
const backToProfileInfo = document.getElementById("back-button");

shareMobileOptions.style.display = "none";

function showShareMobileOptions() {
    shareMobileOptions.style.display = 'flex';
    profileInfo[0].style.display = 'none';
}

function hideProfileInfo() {
    shareButton.style.display = 'none';
}

//backToProfileInfo.addEventListener("click", hideShareMobileOptions);
shareButton.addEventListener("click", showShareMobileOptions);