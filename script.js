const profileInfo = document.querySelector('.card__info--profile');
const shareButton = document.querySelector('#share');
const shareMobile = document.querySelector('#share-mobile');

shareButton.addEventListener('click', toggleShareMobile);

function toggleShareMobile() {
    const isProfileViewOpen = profileInfo.classList.contains('inactive');

    if(isProfileViewOpen) {
        profileInfo.classList.remove('inactive');
    }
}