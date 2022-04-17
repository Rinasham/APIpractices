const swapi = function (num){
  let url = 'https://swapi.dev/api/people/'

  fetch(url + num + '/')
  .then(function(result){
    // fetch return data that includes json() method
    // you can convert the data into json obj by using that method
    return result.json()
  })
  .then(function(obj){
    console.log(obj);
    return fetch(obj.homeworld)
  })
  .then(function(result){
    return result.json()
  })
  .then(function(obj){
    console.log(obj);
  })
  .catch(function(err){
    console.log(err);
  })
}

swapi(1)

console.log('同期処理コマンド');