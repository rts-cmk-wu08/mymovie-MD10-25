document.addEventListener("DOMContentLoaded", () => {
    let body = document.querySelector("body")


   
    
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=6c6e28dc244ab843223b5dd51082dc14&language=en-US&page=1")
        .then(movies => movies.json())
        .then(movie => {
            console.log(movie)
            let header = document.createElement("header")
            header.innerHTML =`
            <div class="header__title__container">
            <h1>MyMovies</h1>

            <div class="checkbox-div__index">
                <input type="checkbox" class="checkbox__index"  id="chk" onclick="switchTheme()" />
                <label class="label__index" for="chk">
                    <div class="ball__index"></div>
                </label>
            </div>
            </div>

            ` 

            body.append(header)

            let section = document.createElement("section")
            section.classList.add("cards__column")
            body.append(section)
           

            let h2Div = document.createElement("div")
            h2Div.classList.add("nowShowing__container")
            h2Div.innerHTML = `
            <h2>Now Playing</h2>
            <button>See more</button>
            `

            section.append(h2Div)

            let divFlex = document.createElement("div")
            divFlex.classList.add("all__cards")
            section.append(divFlex)

            movie.results.forEach(movies => {
                

                let div = document.createElement("div")
                div.classList.add("card")
                div.innerHTML = `
                <img src="https://image.tmdb.org/t/p/original${movies.backdrop_path}" alt="${movies.original_title}"
                onclick="window.location.href='detail.html?id=${movies.id}';">
                <p class="card__title">${movies.title}</p>
                <div class="nowPlaying__card__rating__container"> 
                    <i class="fa-solid fa-star"></i>
                    <p class="card__rating">${movies.vote_average}/10 IMDb</p>
                </div>
                
                `
                divFlex.append(div)
            })
        })



        fetch("https://api.themoviedb.org/3/movie/popular?api_key=6c6e28dc244ab843223b5dd51082dc14&language=en-US&page=1")
        .then(pMovies => pMovies.json())
        .then(pMovie => {
            console.log(pMovie)

            let pSection = document.createElement("section")
            pSection.classList.add("pMovies__container")
            body.append(pSection)


            let h3Div = document.createElement("div")
            h3Div.classList.add("pop__container")
            h3Div.innerHTML = `
            <h3>Now Playing</h3>
            <button>See more</button>
            `

            pSection.append(h3Div)

            pMovie.results.forEach(pMovies => {
                let pDiv = document.createElement("div")
                pDiv.classList.add("Pcard")
                pDiv.innerHTML = `
                <img src="https://image.tmdb.org/t/p/original${pMovies.backdrop_path}" alt="${pMovies.original_title}"
                onclick="window.location.href='detail.html?id=${pMovies.id}';">
                <p class="pCard__title">${pMovies.title}</p>
                <div class="PNowPlaying__card__rating__container"> 
                    <i class="fa-solid fa-star"></i>
                    <p class="pCard__rating">${pMovies.vote_average}/10 IMDb</p>
                </div>
                
                `
                pSection.append(pDiv)

            })
        })

        


})