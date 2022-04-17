const get = (num) => {
  fetch('https://jsonplaceholder.typicode.com/todos/' + num)
  .then(data => data.json())
  .then(obj => console.log(obj))
}

// get(1)

const post = () => {
  let todo = {
    completed : false,
    title : 'New Todo',
    userId : 8
  }
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers : {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then(result => result.json())
  .then(obj => console.log(obj))
  .catch(err => console.log(err))
}

post()


console.log('同期処理')