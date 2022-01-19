$('#datepicker-1').datepicker({});

$('#datepicker-2').datepicker({});


// Initialises like display on nav bar to read '0' likes
var likes = 0;
var likeDisplay = document.getElementById('like-display');
likeDisplay.innerHTML = likes;


const goButton = document.getElementById('goButton');

// Listens for user's click on 'Go!' button to initiate loading of cards from selected date range
goButton.addEventListener('click', () => {
    likes = 0;
    likeDisplay.innerHTML = likes;
    const startDate = new Date(document.getElementById('datepicker-1').value);
    const endDate = new Date(document.getElementById('datepicker-2').value);
    const days = getDays(startDate, endDate);
    const dateRange = getDateRange(startDate, endDate);
    buildCards(days);
    displayImage(dateRange);
})

// Returns the amount of days between datepicker1 input and datepicker2 input
function getDays(startDate, endDate) {
    var timeDif = endDate.getTime() - startDate.getTime();
    return timeDif / (1000 * 3600 * 24);
}


// Returns an array of dates between datepicker1 date input and datepicker2 date input
function getDateRange(startDate, endDate) {
    for (var arr = [], dt = new Date(startDate); dt <= endDate; dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt));
    }
    return arr;
}


// Takes input of days and builds as many cards as days selected in datepicker items, cards are built within 'card-container' div
function buildCards(days) {
    const container = document.getElementById('card-container');
    container.innerHTML = '';

    for (let i = 0; i < days; i++) {
        const wrapper = document.createElement('div');
        const test = document.createElement('div');
        const body = document.createElement('div');
        const image = document.createElement('img');
        const header = document.createElement('h5');
        const description = document.createElement('p');
        const likeButton = document.createElement('button');
        const unlikeButton = document.createElement('button');

        wrapper.className = "p-2 d-flex justify-content-center"

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

        unlikeButton.id = `unlike-${i}`
        unlikeButton.className = 'm-2 btn btn-outline-danger'
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

    linkButtons();
}



// Converts API data into an image that is displayed on card
async function displayImage(dateRange) {
    var nasaImgs = document.querySelectorAll('#nasaImage');
    var headers = document.querySelectorAll('.card-title');
    var descriptions = document.querySelectorAll('.card-text');
    for (i = 0; i < dateRange.length; i++) {
        const API_Key = 'YLicbNKWnHymGEo7zCllC60Al37rAwb1Hretr647'
        var date = dateRange[i].toISOString().slice(0, 10);
        let res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_Key}&date=${date}`)
        let data = await res.json();
        var curr = nasaImgs[i];
        var currh = headers[i];
        var currb = descriptions[i];
        curr.src = data.url;
        curr.alt = `Nasa's image of the day for ${data.date}`
        currh.innerHTML = `${data.title} - <span class='h6 text-muted'> ${data.date} </span>`;
        currb.innerHTML = data.explanation.substring(0, data.explanation.indexOf('.') + 1);
    }
}


// Links 'Like' and 'Unlike' button to stylesheet to trigger like and unlike effects
function linkButtons() {
    const likeButtons = document.getElementById('card-container').querySelectorAll('.btn.btn-primary');
    const unlikeButtons = document.getElementById('card-container').querySelectorAll('.btn.btn-outline-danger');

    const likeBadge = document.createElement('span');
    likeBadge.className = 'position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle';


    // Listen's for user's click on specific 'Like' button to trigger like effect
    for (i = 0; i < likeButtons.length; i++) {
        const likeButton = likeButtons[i];
        const card = likeButton.parentElement.parentElement;
        likeButton.addEventListener('click', () => {
            likes = likes + 1;
            likeDisplay.innerHTML = likes;
            if (card.classList.contains('unliked')) {
                card.classList.remove('unliked');
                card.classList.add('liked');
                likeButton.appendChild(likeBadge);
            } else {
                card.classList.add('liked');
                likeButton.appendChild(likeBadge);
            }

            card.classList.add('liked');


        })


    }


    // Listen's for user's click on 'Unlike' button to trigger unlike effect
    for (i = 0; i < unlikeButtons.length; i++) {
        const unlikeButton = unlikeButtons[i];
        const card = unlikeButton.parentElement.parentElement;
        unlikeButton.addEventListener('click', () => {
            likes = likes - 1;
            likeDisplay.innerHTML = likes;
            if (card.classList.contains('liked')) {
                card.classList.remove('liked');
                card.classList.add('unliked');
                unlikeButton.previousElementSibling.removeChild(likeBadge);
            } else {
                card.classList.add('unliked');
                unlikeButton.previousElementSibling.removeChild(likeBadge);
            }

            card.classList.add('unliked');


        })
    }

}



