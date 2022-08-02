


const DatosPeliculas = require("./movies");

//console.log(DatosPeliculas);


let moviesDH = {DatosPeliculas,
    listMovies: DatosPeliculas.map(function(pelicula){
        return console.log(pelicula.title)
    }),
    searchMovie: function()
    };