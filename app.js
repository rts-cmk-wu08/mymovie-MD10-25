document.addEventListener("DOMContentLoaded", () => {
    let body = document.querySelector("body")


   
    let header = document.createElement("header")
    header.innerHTML =`
    <div class="header__title__container">
    <h1>MyMovies</h1>

    <div class="checkbox-div__index">
        <input type="checkbox" class="checkbox__index"  id="chk"/>
        <label class="label__index" for="chk">
            <div class="ball__index"></div>
        </label>
    </div>
    </div>

    ` 
    body.append(header)


    let btn = document.querySelector("#chk")

btn.addEventListener('click', (event) => {


    if(event.target.checked)
    {
        setActiveStyleSheet("dark")
        localStorage.setItem("checked", true)
    }
    else{
        setActiveStyleSheet("light")
        localStorage.setItem("checked", false)
    }
})

window.addEventListener('DOMContentLoaded', () => {
    let checkbox = document.querySelector(".checkbox__index")

    // henter et string fra din localStorage
    let checkedValue = localStorage.getItem("checked")
    // du laver dit string om til en boolean
    let CheckedValue = checkedValue === 'true'   

    if(CheckedValue == true) checkbox.checked = true

    
})










    
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=6c6e28dc244ab843223b5dd51082dc14&language=en-US&page=1")
        .then(movies => movies.json())
        .then(movie => {
            


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

            let pSection = document.createElement("section")
            pSection.classList.add("pMovies__container")
            body.append(pSection)

            let h3Div = document.createElement("div")
            h3Div.classList.add("pop__container")
            h3Div.innerHTML = `
            <h3>Popular</h3>
            <button>See more</button>
            `

            pSection.append(h3Div)
            
            let scrollDiv = document.createElement("div")
            scrollDiv.classList.add("scroll__div")
            pSection.append(scrollDiv)



            pMovie.results.forEach(pMovies => {

                fetch(`https://api.themoviedb.org/3/movie/${pMovies.id}?api_key=6c6e28dc244ab843223b5dd51082dc14`)
                .then(pmovies => pmovies.json())
                .then(pmovie => {

                let pCardGenre = pDiv.querySelector(".pCard__genre")

                function time_convert(num)
                { 
                var hours = Math.floor(num / 60);  
                var minutes = num % 60;
                return hours + "h" + " " + minutes + "min";            
                }

                let runtime = pDiv.querySelector(".runtime__text")

                    runtime.innerHTML = `${time_convert(pmovie.runtime)}` 
                        
                    

                pmovie.genres.forEach( (genre) => {
                    let p = document.createElement("p")
                    p.classList.add("p__genre")
                    p.innerHTML = `
                    ${genre.name}
                    
                    `
        
                    pCardGenre.append(p)

                })

                })


                let pDiv = document.createElement("div")
                pDiv.classList.add("Pcard")
                pDiv.innerHTML = `
                <img src="https://image.tmdb.org/t/p/original${pMovies.backdrop_path}" alt="${pMovies.original_title}"
                onclick="window.location.href='detail.html?id=${pMovies.id}';">
                <div class="pCard__info__container">
                <p class="pCard__title">${pMovies.title}</p>
                <div class="PNowPlaying__card__rating__container"> 
                    <i class="fa-solid fa-star"></i>
                    <p class="pCard__rating">${pMovies.vote_average}/10 IMDb</p>
                </div>
                <div class="pCard__genre">
                </div>
                <div class="pCard__time__container">
                <i class="fa-regular fa-clock"></i>
                <p class="runtime__text"></p>
                </div>
                </div>
                
                `
                scrollDiv.append(pDiv)
            })

            let footer = document.createElement("footer")
            footer.innerHTML = `
            <div class="footer__icons">
            <i class="fa-solid fa-clapperboard"></i>
            <i class="fa-solid fa-ticket-simple"></i>
            <i class="fa-regular fa-bookmark"></i>
            </div>
            
            `
    
            body.append(footer)
        })


})