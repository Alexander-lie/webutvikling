const movieService = ( function(){

    const movies = [
        {title: "2001: a space odyssey ", release: 1968, image: "2001.jpg"},
        {title: "Blade Runner", release: 1982, image: "blade-runner.jpg"},
        {title: "Star Wars Episode IV", release: 1977, image: "star-wars.jpg"},
        {title: "Alien", release: 1979, image: "alien.jpg"},
        {title: "The Matrix", release: 1999, image: "matrix.jpg"},
        {title: "The Intouchables", release: 2011, image: "DeUrorlige.jpg"},
        {title: "Green Book", release: 2018, image: "greenbook.jpg"},
        {title: "Jakten", release: 2012, image: "jakten.jpeg"},
        {title: "Saving Private Ryan", release: 1998, image: "savingPrivate.jpeg"},
        {title: "Taxi Driver", release: 1976, image: "taxidriver.jpg"}

    ];

    const getAllMovies = () => {
        return movies;
    }

    return { getAllMovies }

}() );



export default movieService;