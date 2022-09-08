let posts = [{
    body: 'My name'
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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if (!error) {
                resolve
            } else {
                reject('There is an error')
            }
        }, 2000)
    })

}

createPost({ title: DelayNode, body: 'This is my body' })
    .then(getPosts)
    .catch(err => console.log(err))


