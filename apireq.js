sendApiRequest();

// Asynchronous function that sends the API request to NASA APOD API
async function sendApiRequest() {
    const API_Key = 'YLicbNKWnHymGEo7zCllC60Al37rAwb1Hretr647'
    let res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_Key}`)
    let data = await res.json();
    displayImage(data);
}

// Converts API data into an image that is displayed on screen
function displayImage(data) {
    document.getElementById('nasaImage').src = data.url;
    var nasaImgs = document.querySelectorAll('#nasaImage');
    for (i = 0; i < nasaImgs.length; i++) {
        var curr = nasaImgs[i];
        curr.src = data.url;
    }
}


// <!-- Script meant to load 5 most recent spacestagram images -->
// <!-- <script>
//     const container = document.querySelector('#container')
//     for (let i = 0; i < 5; i++) {
//         
//     }
// </script> -->