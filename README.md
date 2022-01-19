# Spacestagram - NASA Image of the Day Browser

Spacestagram is a platform for users to browse through all of NASA's Image of the Day images. User's can select any valid date range and Spacestagram will display the respective image of the day for each day in the date range. The user's can 'like' and 'unlike' photos and track how many photo's they have liked. Each photo is displayed alongside its title, description, and date of capture.

# Installation

Page is static so user simply has to visit Github Pages link

# Usage

## Loading Images

In order to load images, the user must select a valid start and end date and hit the 'Go!' button on the main screen. A valid end date would be any date equal to the current date or before. Once the user click's the 'Go!' button, a series of cards will load on the page with the first image being from the start date and the last image being from the end date. Each card will display the image, image title, an image decription, and the date that the image was taken.

## Liking an Image

Under each image card will be a blue 'Like' button. Clicking on the 'Like' button will highlight the liked card with a golden border. In addition, the 'Liked' counter in the header will update with the number of liked images the user has selected. The most recently liked image will display a red dot badge in the top right corner.

## Unliking an Image

Under each image card will also be an 'Unlike' button. Clicking on the 'Unlike' button will remove any golden border around the card. The 'Liked' counter in the header will update with the number of liked images decreasing depending on the number of photos unliked. If the photo was not liked prior to clicking 'Unlike' there will be no effect

# Future considerations

The next thing I would implement for this project would be proper error handling to handle issues such as when the API sends the user back a video instead of an image or simply an image that does not exist. Other errors can include the user entering an invalid input into the datepicker boxes (date out of range, invalid date format, etc.). Additionally, I would work on adding loading screens to eliminate the awkward pause between the user hitting 'Go!' and the cards loading on screen. 


