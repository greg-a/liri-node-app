# LIRI Bot

### What does it do?
LIRI is like SIRI but instead of Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI allows you to find information on a movie, song, or upcoming shows for your favorite band!

#### Search for a Movie and get back:
  * Title
  * Release Year
  * IMDB Rating
  * Rotten Tomatoes Rating
  * Release Year
  * Language
  * Plot
  * Cast
  
  #### Search for a Song and get back:
  * Artist
  * Song
  * Link to song preview
  * Album
  
  #### Search for a band and get back concert details:
  * Venue
  * Location
  * Date
  
  ### Instructions
  
  Category | LIRI-Command
------------ | -------------
Movie Search | movie-this
Song Search | spotify-this-song
Band Search | concert-this
Randomized Search | do-what-it-says

  1. Open your terminal
  1. CD into the directory that contains liri.js
  1. Enter node liri.js followed by your LIRI-Command and search parameters. 
  Example: `node liri.js movie-this donnie darko`
  
[Video guide!](./guide.mp4)

### Technologies
* [OMDB API](http://www.omdbapi.com)
* [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
* [Axios](https://www.npmjs.com/package/axios)
* [DotEnv](https://www.npmjs.com/package/dotenv)
* [Moment](https://www.npmjs.com/package/moment)
* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

### Credits
* [@greg-a](https://github.com/greg-a)
