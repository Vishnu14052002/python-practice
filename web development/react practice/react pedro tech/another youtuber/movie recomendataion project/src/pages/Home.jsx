import { useState } from "react"
import MyMovieList from "../components/MovieCard"



function Home(){

    const MyMovies = [
        {id: 1, title: "enthiran", rating : "5 star", genre : "action"},
        {id: 2, title: "facebook", rating : "5 star", genre : "coding"},
        {id: 3, title: "steve jobs", rating : "5 star", genre : "business"},
        {id: 4, title: "the walk", rating : "5 star", genre : "dream"},
        {id: 5, title: "Money heist", rating : "5 star", genre : "action"},
    ]

    
    const [SearchQuery , SetSearchQuery] = useState("")
    const HandleSearch = (e) => {
        e.preventDefault()
        alert(SearchQuery)
        
    }


    return (
        <>
            <h1>Home Page</h1>
            <form onSubmit={HandleSearch}>
                <input onChange={(e) => SetSearchQuery(e.target.value)} value={SearchQuery} type="text" placeholder="search for movies..."></input>
                <button>Submit</button>
            </form>
            <div>
                {MyMovies.map((movie => (movie.title.toLowerCase().startsWith(SearchQuery ) && <MyMovieList movie={movie} key = {movie.id} />)))}
            </div>

        </>
    ) 
}

export default Home