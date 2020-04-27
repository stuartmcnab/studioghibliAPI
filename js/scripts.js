


//identify div to populate with app content - using ID
const app = document.getElementById('root')

//identifies the image
const logo = document.createElement('img')
logo.src = 'https://taniarascia.github.io/sandbox/ghibli/logo.png'

//create a new div and set its class to container
const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)


//request the API info
var request = new XMLHttpRequest()
//get the list of films from herokluapp (Ghibli API)
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
//
request.onload = function() {
  // Begin accessing JSON data here and parse the JSON data
  var data = JSON.parse(this.response)
  //if statement
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {

  	//layout for movie info which uses some of the predefined CSS
      const card = document.createElement('div')
      card.setAttribute('class', 'card')
    //title sets and H1 for each of the tiles which should be H2 as there are multiple
      const h1 = document.createElement('h1')
      h1.textContent = movie.title
    //description
      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
    //error for if it breaks, but dosent work if there is no internet connection, this is purely to show a broken API call
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}
//send command
request.send()