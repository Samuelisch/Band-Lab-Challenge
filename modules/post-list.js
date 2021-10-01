// create elements to load into index
// container for list of posts
const listContainer = document.createElement('div');
listContainer.className = 'list-container';

// sorting bar - alphabetically sort using title and group posts by ID
const sortingBtns = document.createElement('div');
sortingBtns.className = 'sorting-btns';
sortingBtns.textContent = 'Sort by:'
const titleSort = document.createElement('button');
titleSort.className = 'title-sort btn';
titleSort.textContent = 'Title (a-z/z-a)'
const idSort = document.createElement('input');
idSort.className = 'id-sort';
idSort.textContent = 'ID';
idSort.placeholder = 'search ID..'

// post list - inner container to display posts from api
const postList = document.createElement('div');
postList.className = 'post-list';
// unordered list for list of posts
const posts = document.createElement('ul');
posts.className = 'posts';

sortingBtns.appendChild(titleSort);
sortingBtns.appendChild(idSort);
postList.appendChild(posts);
listContainer.appendChild(sortingBtns);
listContainer.appendChild(postList);

export default listContainer