const posts = [{
    title: 'Post 1', body: 'My name'
}, {
    title: 'Post 1', body: 'My name'
}, {
    title: 'Post 1', body: 'My name'
},


]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output
    }, 1000)
}

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
        getPosts();
    }, 2000)
}



createPost({ title: 'Post 3', body: 'My name is' }, getPosts())