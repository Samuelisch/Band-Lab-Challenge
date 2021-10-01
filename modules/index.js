import postPage from './post-list.js'
import audioPage from './audio-sample.js'

// selectors for page buttons
const postsBtn = document.getElementById('post-page');
const audioBtn = document.getElementById('audio-page');

const content = document.getElementById('content');

const changeToPostsPage = () => {
  content.innerHTML = '';
  content.appendChild(postPage);
}

const changeToAudioPage = () => {
  content.innerHTML = '';
  content.appendChild(audioPage);
}

postsBtn.addEventListener('click', changeToPostsPage);
audioBtn.addEventListener('click', changeToAudioPage);