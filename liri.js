require("dotenv").config();

//npm require
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var request = require("request");
var Spotify = require("node-spotify-api");
var inquirer = require("inquirer");

//ACCESS API KEYS
var spotify = new Spotify(keys.spotify);
var omdb = (keys.omdb);
var seatgeek = keys.seatgeek;

//variables
var movie;



// PROMPT for choosing commands

inquirer
  .prompt([
    {
      name: "choices",
      type: "list",
      message: "Choose a command",
      choices: [
        "concert-this",
        "spotify-this-song",
        "movie-this",
        "do-what-it-says"
      ]
    }
  ])
  .then(function(user) {
    if (user.choices === "movie-this") {
      inquirer
  .prompt([
    {
      name: "movie",
      type: "input",
      message: "Enter a movie name. (Use quotations if the title is more than one word)"
    }
  ])
  .then(function(res) {
    console.log (res.movie)
    movie = res.movie;
    movieThis()
  });
    }
    // else (user.choices === "do-what-it-says") {
    //   console.log (

    //   )
    // };
  });

// functions


function movieThis() {
  var queryUrl =
    "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  axios
    .get(queryUrl)
    .then(function(response) {
      console.log(
        "Title: " + response.data.Title,
        "Year: " + response.data.Year,
        "IMDB Rating: " + response.data.imdbRating,
        "Rotten Tomatoes Rating: " + response.data.Ratings.value, // need to access rotten tomatoes rating
        "Country: " + response.data.Country,
        "Language: " + response.data.Language,
        "Plot: " + response.data.Plot,
        "Actors: " + response.data.Actors
      );
    })
    .catch(function(error) {
      console.log(error);
    });

};

function spotifyThis() {

};

function concertThis() {

};

function doWhatev() {
  fs.readFile("random.txt", "utf8", function(err, data) {

  })
};
  