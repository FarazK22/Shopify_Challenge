// Builds 5 card components to populate with API image
for (let i = 0; i < 5; i++) {
    const container = document.querySelector('.container');
    const wrapper = document.createElement('div');
    const test = document.createElement('div');
    const body = document.createElement('div');
    const image = document.createElement('img');
    const header = document.createElement('h5');
    const description = document.createElement('p');
    const likeButton = document.createElement('button');
    const unlikeButton = document.createElement('button');

    wrapper.className = "d-flex justify-content-center"

    test.className = 'card'
    test.style = 'width: 30rem;'

    image.id = 'nasaImage';
    image.src = '...';
    image.className = 'card-img-top'
    image.alt = '...';

    body.className = 'card-body'

    header.className = 'card-title'
    header.innerHTML = 'Card title'

    description.className = 'card-text'
    description.innerHTML = '....'

    likeButton.id = `like-${i}`
    likeButton.className = 'btn btn-primary'
    likeButton.innerHTML = 'Like'

    unlikeButton.id = 'unlike'
    unlikeButton.className = 'btn btn-outline-danger'
    unlikeButton.innerHTML = 'Unlike'


    body.appendChild(header);
    body.appendChild(description);
    body.appendChild(likeButton);
    body.appendChild(unlikeButton);
    test.appendChild(image);
    test.appendChild(body);
    wrapper.appendChild(test);
    container.append(wrapper);

}

const likeButtons = document.querySelectorAll('.btn.btn-primary');
const unlikeButtons = document.querySelectorAll('.btn.btn-outline-danger');


// Listen's for user's click on specific 'Like' button to trigger like effect
for (i = 0; i < likeButtons.length; i++) {
    const likeButton = likeButtons[i];
    const card = likeButton.parentElement.parentElement;
    likeButton.addEventListener('click', () => {
        if (card.classList.contains('unliked')) {
            card.classList.remove('unliked');
            card.classList.add('liked');
        } else {
            card.classList.add('liked');
        }

        cardimg.classList.add('liked');
    })
}


// Listen's for user's click on 'Unlike' button to trigger unlike effect
for (i = 0; i < unlikeButtons.length; i++) {
    const unlikeButton = unlikeButtons[i];
    const card = unlikeButton.parentElement.parentElement;
    unlikeButton.addEventListener('click', () => {
        if (card.classList.contains('liked')) {
            card.classList.remove('liked');
            card.classList.add('unliked');
        } else {
            card.classList.add('unliked');
        }

        card.classList.add('unliked');
    })
}


displayImage();


// Converts API data into an image that is displayed on card
async function displayImage() {
    var nasaImgs = document.querySelectorAll('#nasaImage');
    var headers = document.querySelectorAll('.card-title');
    var descriptions = document.querySelectorAll('.card-text');
    for (i = 0; i < nasaImgs.length; i++) {
        const API_Key = 'YLicbNKWnHymGEo7zCllC60Al37rAwb1Hretr647'
        var day = 9 - i;
        var date = `2022-01-${day}`;
        let res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_Key}&date=${date}`)
        let data = await res.json();
        var curr = nasaImgs[i];
        var currh = headers[i];
        var currb = descriptions[i];
        curr.src = data.url;
        currh.innerHTML = data.title;
        currb.innerHTML = data.explanation.substring(0, data.explanation.indexOf('.') + 1);
    }
}