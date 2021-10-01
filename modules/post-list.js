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

// function to be exported - fetches JSON data and appends to content
fetch('https://jsonplaceholder.typicode.com/posts/')
.then(response => response.json())
.then(json => {
  for (let post of json) {
    const postNode = document.createElement('li');
    postNode.className = 'post-node';
    const body = post.body, title = post.title, id = post.userId;
    postNode.dataset.userid = id;
    // create container for content of post
    const postContent = document.createElement('div');
    postContent.className = 'post-content';
    // create h5 element for title
    const postTitle = document.createElement('div');
    postTitle.className = 'post-title';
    postTitle.innerHTML = `<b>${title}</b>`;
    // create p element for post body
    const postBody = document.createElement('p');
    postBody.textContent = body

    postContent.appendChild(postTitle);
    postContent.appendChild(postBody);
    postNode.appendChild(postContent);
    posts.appendChild(postNode);
  }
})

export default listContainer