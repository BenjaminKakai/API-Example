const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const postsContainer = document.getElementById('posts');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            const postTitle = document.createElement('div');
            postTitle.classList.add('post-title');
            postTitle.textContent = post.title;
            postElement.appendChild(postTitle);

            const postBody = document.createElement('div');
            postBody.textContent = post.body;
            postElement.appendChild(postBody);

            postsContainer.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
