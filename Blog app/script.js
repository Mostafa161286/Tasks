// Get posts from API
async function getPosts() {
  try {
    // Fetch 5 posts from JSONPlaceholder
    let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    let posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

//  Show posts in the HTML page
function displayPosts(posts) {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";

  posts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;
    postsContainer.appendChild(postDiv);
  });
}

//  Switch form to add a new post
document.getElementById("postForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  let newPost = { title, body };

  // Add new post directly to the page
  const postsContainer = document.getElementById("posts");
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");
  postDiv.innerHTML = `
    <h3>${newPost.title}</h3>
    <p>${newPost.body}</p>
  `;
  postsContainer.prepend(postDiv);

  document.getElementById("postForm").reset();
});

//  Load posts only when button is clicked
document.getElementById("loadPosts").addEventListener("click", getPosts);
