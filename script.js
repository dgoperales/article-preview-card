const profileInfo = document.getElementsByClassName("card__info--profile");
const shareButton = document.getElementById("share");
const shareMobileOptions = document.getElementById("share-mobile");
const backToProfileInfo = document.getElementById("back-button");

shareMobileOptions.style.display = "none";

function showShareMobileOptions() {
    if(window.matchMedia("(min-width: 1440px)").matches) {
        profileInfo[0].style.display = 'flex';
        shareMobileOptions.style.display = 'flex';
    } else {
        shareMobileOptions.style.display = 'flex';
        profileInfo[0].style.display = 'none';
    }
}

function showProfileInfo() {
    profileInfo[0].style.display = 'flex';
    shareMobileOptions.style.display = 'none';
}

backToProfileInfo.addEventListener("click", showProfileInfo);
shareButton.addEventListener("click", showShareMobileOptions);