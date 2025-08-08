const searchbar = document.getElementById("search_container")
const searchButton=document.getElementById("search_icon")

//Event Listner
searchbar.addEventListener("input", () => searchListSorting())
searchbar.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        searchListSorting();
        searchbarClear();
    }
})

//Clear searchbar
function searchbarClear(){
    searchbar.value=""
}


//Search functionality
function searchListSorting() {
    const searchLetter = document.getElementById("search_container").value.trim().toLowerCase()
    const allMovies = document.getElementsByClassName("movie_poster_list")
    //stop function if search empty
    if (!searchLetter) {
        return;
    } else {
        for (let i = 0; i < allMovies.length; i++) {
            const movieName = allMovies[i].getAttribute("data-movie-name").toLowerCase();
            const movieTitle = allMovies[i].querySelector(".movie-title").textContent.toLowerCase();
            const movieDescription = allMovies[i].querySelector(".movie-description").textContent.toLowerCase();
            const movieGenre = allMovies[i].querySelector(".genre-tag").textContent.toLowerCase();
            if(movieDescription.includes(searchLetter)||
                movieGenre.includes(searchLetter)||
                movieTitle.includes(searchLetter)||
                movieName.includes(searchLetter)){
                    allMovies[i].style.display="block"
                    

            }else{
                allMovies[i].style.display="none"
            }

            
        }
    }
}