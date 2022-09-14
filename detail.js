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
            div.classList.add("hero__container")
            div.innerHTML = `
            <div class="darkMode__container">
            <i class="fa-solid fa-arrow-left" onclick="window.location.href='index.html'"></i>
            <div class="checkbox-div">
                <input type="checkbox" class="checkbox"  id="chk" onclick="switchTheme()" />
                <label class="label" for="chk">
                    <div class="ball"></div>
                </label>
            </div>
            </div>
            <figure>
            <img src="https://image.tmdb.org/t/p/original${movie.backdrop_path}" alt="">    
            </figure>
            `

            section.append(div)

            let article = document.createElement("article")
            article.classList.add("detail__container")
            article.innerHTML = `
            <div class="movie__container">
            <h1 class="movie__title">${movie.title}</h1>
            <i class="fa-regular fa-bookmark"></i>
            </div>

            <div class="card__rating__container">
            <i class="fa-solid fa-star"></i>
            <p class="card__rating">${movie.vote_average}/10 IMDb</p>
            </div>

            <div class="card__genreContainer">
            </div>

            <div class="card__infoContainer">

            <div class="card__infoColumn">
                <p class="card__infoLenght">Lenght</p>
                <p class="card__infoRuntime">${movie.runtime}min </p>
            </div> 

            <div class="card__infoColumn">
                <p class="card__infoLanguage">Language</p>
                <p class="card__infoSpokenLanguage"></p>
            </div> 

            <div class="card__infoColumn">
                <p class="card__infoRating">Rating</p>
                <p class="card__infoPG">PG</p>
            </div> 
            </div>

            <div class="decription__container">
            <h2 class="description">Description</h2>
            <p class="description__text">${movie.overview}</p>
            </div>

            <div class="cast__container">

            <div class="cast__seeMoreContainer">
            <h3 class="cast">Cast</h3>
            <button>See more</button>
            </div>

            <div class="all__cast__img__container">

            </div>

            </div>
            
            `
            section.append(article)
            
            let pGenre = document.querySelector(".card__genreContainer")

            movie.genres.forEach( (genre) => {
            let p = document.createElement("p")
            p.classList.add("genre")
            p.innerHTML = `
            ${genre.name}
            
            `

            pGenre.append(p)
            
            })

            let pLanguage = document.querySelector(".card__infoSpokenLanguage")

            movie.spoken_languages.forEach( (language) => {
            let span = document.createElement("span")
            span.classList.add("languageSpan")
            span.innerHTML = `
            ${language.english_name}
            
            `

            pLanguage.append(span)
            
            })

            fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=6c6e28dc244ab843223b5dd51082dc14&language=en-US`)
        .then(actors => actors.json())
        .then(actor => {
    
            console.log(actor)

            let actorsImg = document.querySelector(".all__cast__img__container")

            const actorShort = actor.cast.slice(0,4)

            console.log(actorShort)

            actorShort.forEach((actor) => {

            let cast = document.createElement("figure")
            cast.classList.add("cast__img__container")
            cast.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/original${actor.profile_path}" alt="${actor.name}" class="cast__img">
                    <figcaption>${actor.name}</figcaption>


            `
            

            actorsImg.append(cast)
            })




        })

        })




        
    
})