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
    postNode.dataset.id = id;
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

// sorted aToz or zToa
let aToz = false

const orderTitle = () => {
  aToz = !aToz
  const postList = document.querySelector('.posts');
  let newList = postList.cloneNode(false);
  // declare a new list to store all list elements
  let list = [];
  for (let i = postList.childNodes.length; i--;) {
    if (postList.childNodes[i].nodeName === 'LI') {
      list.push(postList.childNodes[i]);
    }
  }
  // sort list based on title
  if (aToz) {
    titleSort.textContent = 'Title (a-z)'
    list.sort((a, b) => {
      let aTitle = a.childNodes[0].childNodes[0].textContent;
      let bTitle = b.childNodes[0].childNodes[0].textContent;
      return aTitle.localeCompare(bTitle);
    })
  } else {
    titleSort.textContent = 'Title (z-a)'
    list.sort((a, b) => {
      let aTitle = a.childNodes[0].childNodes[0].textContent;
      let bTitle = b.childNodes[0].childNodes[0].textContent;
      return bTitle.localeCompare(aTitle);
    })
  }

  for (let i = 0; i < list.length; i++) {
    newList.appendChild(list[i]);
  }
  // replace with new list
  postList.parentNode.replaceChild(newList, postList);
}

const filterList = () => {
  const idInput = document.querySelector('.id-sort');
  const idNum = idInput.value;
  // checkes if each node's dataset is idNum, if it is or input empty, display.
  const postList = document.querySelectorAll('.posts li');
  postList.forEach(post => {
    if (idNum == post.dataset.id || idNum === '') {
      post.style.display = 'block';
    }
    else {
      post.style.display = 'none';
    }
  })
}

// event listeners
titleSort.addEventListener('click', orderTitle)
idSort.addEventListener('change', filterList)

export default listContainer