# Double Application page


## Layout of application
### Two pages: 
This application is done with a skeleton HTML file containing an empty 'content' node in the document's body tag. This empty node will be filled up according to the buttons in the nav-bar at the top of the page. 
The two modules imported into index.js file are the two required pages in the challenge.


## Page 1: JSONPlaceholder API
HTML elements are created in the JS file, and API information is fetched from JSONPlaceholder API. The information is mapped to:
- Post title
- Post content
- User ID (into dataset attribute)
These information are then used to create a dynamic list of posts, and appended to a 'div' element container, for the user to access. As there might be a big number of posts at once, I set a height limit to the viewing container, so the user can scroll through the posts instead.

### Sorting posts:
Users are able to sort posts alphabetically by the posts' headings. They will be able to sort these posts from A - Z, or flip them around (Z - A). By default, the posts are not sorted.
Users are also able to view a group of posts, selected by UserID. They will be able to input a number into an input element. The posts shown will be by their respective userIDs. If an unwanted character, or non-existing user ID is entered into the input area, there will be no posts shown.


## Page 2: Web Audio API
HTML. elements are created in the JS file, and audio samples are loaded into the webpage as files.
### Functionality:
Users are able to selected a track from the tracks displayed as buttons. When a track is selected, the track is then displayed at the top of the div container, so that users will bea ble to see the track that they have selected.
The tracks are loaded and connected into their own HTML audio nodes upon user selection. When the 'play' button is clicked, the selected track will start playing. when the 'pause' button is clicked, the selected track will pause at the exact point of the track, where it can be resumed with the play button again.
If the track is paused, and a new track is selected, the track will then reload and start from the beginning, when it is selected again.
Track selection buttons are disabled when any current track's audio is playing, and are enabled again whenever the audio pauses, or when the track has ended.
