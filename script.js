const likeButton = document.querySelector('#like');
const unlikeButton = document.querySelector('#unlike');
const fetchButton = document.querySelector('#fetch');
const spaceHead = document.querySelector('#spaceHead');
const image = document.querySelector('#nasaImage');



// Listen's for user's click on 'Spacestagram' header
// fetchButton.addEventListener('click', () => {
//     alert('clicked!')
//     sendApiRequest();
// })





// Listen's for user's click on 'Like' button to trigger like effect
likeButton.addEventListener('click', () => {
    if (image.classList.contains('unliked')) {
        image.classList.remove('unliked');
        image.classList.add('liked');
    } else {
        image.classList.add('liked');
    }

    image.classList.add('liked');
})


// Listen's for user's click on 'Unlike' button to trigger unlike effect
unlikeButton.addEventListener('click', () => {
    if (image.classList.contains('liked')) {
        image.classList.remove('liked');
        image.classList.add('unliked');
    } else {
        image.classList.add('unliked');
    }
})