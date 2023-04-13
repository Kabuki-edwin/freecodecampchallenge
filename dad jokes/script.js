const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generatJoke()

function generatJoke() {
    fetch ('https://icanhazdadjoke.com', {
        headers: {
            'Accept':'application/json'
        }
    })
}