import postPage from './post-list.js'

// selectors for page buttons
const postsBtn = document.getElementById('post-page');
const audioBtn = document.getElementById('audio-page');

const content = document.getElementById('content');

content.appendChild(postPage)