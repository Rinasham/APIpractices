const moviePlanets = function(movieNum){
  let url = 'https://swapi.dev/api/films/'

  // fetch(url + movieNum + '/')
  // .then(result => result.json())
  // .then(obj => console.log(obj))

  $.getJSON( `${url}${movieNum}/`)
  .then(obj => {
    console.log(obj.title)

    obj.planets.forEach(planetURL => {
      $.getJSON(planetURL)
      .then(planetData => console.log(planetData.name))
    })
    .catch(err => console.log(err))
  })
}

moviePlanets(1)