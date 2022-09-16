document.addEventListener("DOMContentLoaded", () => {

    let params = new URLSearchParams(window.location.search) 
    let id = params.get("id")
    let body = document.querySelector("body")

    
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6c6e28dc244ab843223b5dd51082dc14`)
    .then(movies => movies.json())
    .then(movie => {

        
            let section = document.createElement("section")
            body.append(section)

            let div = document.createElement("div")
            div.classList.add("hero__container")
            div.innerHTML = `
            <div class="remove__heroCon">
            <div class="darkMode__container">
            <i class="fa-solid fa-arrow-left" onclick="window.location.href='index.html'"></i>
            <div class="checkbox-div">
                <input type="checkbox" class="checkbox"  id="chk"/>
                <label class="label" for="chk">
                    <div class="ball"></div>
                </label>
            </div>
            </div>
            <figure>
            <img src="https://image.tmdb.org/t/p/original${movie.backdrop_path}" alt="">    
            </figure>
            </div>
            `
            section.append(div)


            let heroCon = document.querySelector(".remove__heroCon")
            let playDiv = document.createElement("div")
            playDiv.classList.add("play__div")
            playDiv.innerHTML = `
            <i class="fa-solid fa-circle-play"></i>
            <p>Play trailer</p>
            `
            section.append(playDiv)


       
            
            fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=6c6e28dc244ab843223b5dd51082dc14&language=en-US`)
            .then(trailers => trailers.json())
            .then(trailer => {

                console.log(trailer.results)

                let test = trailer.results.find(element => element.type.toLowerCase() === "Trailer".toLowerCase()).key

                console.log(test)

            
                    console.log(trailer)

                    let iframeContainer = document.createElement("div")
                    iframeContainer.classList.add("iframe__container")
                    iframeContainer.innerHTML = `
                  

                    <iframe class="trailer__iframe display__none" width="100%" height="200" src="https://www.youtube.com/embed/${test}?controls=0" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    `

                    div.append(iframeContainer)
               

                    let trailerIframe = document.querySelector(".trailer__iframe")
                    
                    playDiv.addEventListener('click', () => {
                        
                        heroCon.classList.add("display__none")
                        playDiv.classList.remove("play__div")
                        playDiv.classList.add("display__none")
                        trailerIframe.classList.remove("display__none")
                    })
                
            })






            
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
            
            

            
                let checkbox = document.querySelector(".checkbox")
            
                // henter et string fra din localStorage
                let checkedValue = localStorage.getItem("checked")
                // du laver dit string om til en boolean
                let CheckedValue = checkedValue === 'true'   
            
                if(CheckedValue == true) checkbox.checked = true

                
                console.log(checkedValue)
                
            
            


            function time_convert(num)
            { 
            var hours = Math.floor(num / 60);  
            var minutes = num % 60;
            return hours + "h" + " " + minutes + "min";            
            }

            


            let article = document.createElement("article")
            article.classList.add("detail__container")
            article.innerHTML = `
            <div class="movie__container">
            <h1 class="movie__title">${movie.title}</h1>
            <i class="fa-regular fa-bookmark"></i>
            </div>

            <div class="card__rating__container">
            <i class="fa-solid fa-star"></i>
            <p class="card__rating">${movie.vote_average.toFixed(1)}/10 IMDb</p>
            </div>

            <div class="card__genreContainer">
            </div>

            <div class="card__infoContainer">

            <div class="card__infoColumn">
                <p class="card__infoLength">Length</p>
                <p class="card__infoRuntime">${time_convert(movie.runtime)}</p>
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
    

            let actorsImg = document.querySelector(".all__cast__img__container")

            const actorShort = actor.cast.slice(0,4)


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