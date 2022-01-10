const likeButton = document.querySelector('#like')
const unlikeButton = document.querySelector('#unlike')
const spaceHead = document.querySelector('#spaceHead')
const image = document.querySelector('#container');



// Listen's for user's click on 'Spacestagram' header
spaceHead.addEventListener('click', () => {
    sendApiRequest();
})

// Asynchronous function that sends the API request to NASA APOD API
async function sendApiRequest() {
    const API_Key = 'mdeebkyai5eBWBqfW7B06JfCMhUqyN3ZiNRcMEl5'
    let res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_Key}`)
    let data = await res.json();
    console.log(data);
    pullApiImage(data);
}

// Converts API data into an image that is displayed on screen
function pullApiImage(data) {
    document.querySelector('#container').innerHTML = `<img id='nasa' src= "${data.url}">`
    const nasaImg = document.querySelector('#nasa');
    nasaImg.classList.add('item');

}




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