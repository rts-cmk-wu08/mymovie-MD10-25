document.addEventListener("DOMContentLoaded", () => {

    let params = new URLSearchParams(window.location.search) 
    let id = params.get("id")
    let body = document.querySelector("body")


    
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6c6e28dc244ab843223b5dd51082dc14`)
    .then(movies => movies.json())
    .then(movie => {
            console.log(movie)

            let section = document.createElement("section")
            body.append(section)

            let div = document.createElement("div")
            div.classList.add("img__container")
            div.innerHTML = `
            <figure>
            <img src="https://image.tmdb.org/t/p/original${movie.backdrop_path}" alt="">    
            </figure>
            `

            section.append(div)

            let article = document.createElement("article")
            article.classList.add("container")
            article.innerHTML = `
            <h1 class="movie_title">${movie.original_title}</h1>
            <p class="card__rating">${movie.vote_average}</p>
            <p class="card__genre"></p>
            
            `
            section.append(article)
            
            let pGenre = document.querySelector(".card__genre")

            movie.genres.forEach( (genre) => {
            let span = document.createElement("span")
            span.classList.add("genre")
            span.innerHTML = `
                ${genre.name}
            `

            pGenre.append(span)
            
            })


        })
        
    
})