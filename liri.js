var axios = require("axios");

var userCommand = process.argv[2];
var userSearch = process.argv[3];

if (process.argv.length > 4) {
    for (var i = 4; i < process.argv.length; i++) {
        userSearch += "+" + process.argv[i];
    }
}

if (userCommand === "movie-this") {
    axios.get("http://www.omdbapi.com/?t=" + userSearch + "&apikey=trilogy").then(
        function (response) {
            ;
            //    * Title of the movie.
            console.log("Title: " + response.data.Title)
            //    * Year the movie came out.
            console.log("Release year: " + response.data.Year)
            //    * IMDB Rating of the movie.
            console.log("IMDB Rating: " + response.data.imdbRating)
            //    * Rotten Tomatoes Rating of the movie.
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value)
            //    * Country where the movie was produced.
            console.log("Produced in: " + response.data.Country)
            //    * Language of the movie.
            console.log("Language: " + response.data.Language)
            //    * Plot of the movie.
            console.log("Plot: " + response.data.Plot)
            //    * Actors in the movie.
            console.log("Actors: " + response.data.Actors)
        })
}