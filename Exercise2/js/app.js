const MAINAPP = (function(nsp) {
    "use strict";

    let posts = [],
        comments = [],
        todos = [];

    /*
    This IIFE is the start of an application.
    The first thing we want to do is download all the posts,
    comments and todos so that we can work with them.

    Add the code in order to do that.

    Also, make sure that you add the posts,
    comments and todos to the MAINAPP variable
    so they are accessible outside this function
    (e.g. nsp.posts = posts & return nsp).

    Because the code is asynchronous,
    you will need to consider the best way to do that.
    */

    const url = 'https://jsonplaceholder.typicode.com/'

    fetch(url + 'posts')
    .then(result => result.json())
    .then(posts => nsp.posts = posts)
    .catch(err => console.log(err))

    fetch(url + 'comments')
    .then(result => result.json())
    .then(comments => nsp.comments = comments)
    .catch(err => console.log(err))

    fetch(url + 'todos')
    .then(result => result.json())
    .then(todos => nsp.todos = todos)
    .catch(err => console.log(err))

    console.log(nsp);
    return nsp;
})({})
// (MAINAPP || {});