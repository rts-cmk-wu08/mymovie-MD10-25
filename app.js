document.addEventListener("DOMContentLoaded", () => {
    let body = document.querySelector("body")

    let section = document.createElement("section")
    section.classList.add("all__cards")
    body.append(section)
   
    
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=6c6e28dc244ab843223b5dd51082dc14&language=en-US&page=1")
        .then(movies => movies.json())
        .then(movie => {
            console.log(movie)
            let headline = document.createElement("h1")
            headline.classList.add("headline")
            headline.innerText = "Apartments for rent"

            body.append(headline)


            movie.results.forEach(movies => {
                

                let div = document.createElement("div")
                div.classList.add("card")
                div.innerHTML = `
                <img src="https://image.tmdb.org/t/p/original${movies.backdrop_path}" alt="${movies.original_title}"
                onclick="window.location.href='detail.html?id=${movies.id}';">
                <p class="card__title">${movies.original_title}</p>
                <p class="card__rating">${movies.vote_average}</p>
                `
                section.append(div)
            })
        })


        


})