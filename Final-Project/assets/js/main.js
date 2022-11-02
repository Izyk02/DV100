/*HEAD


//This variable has the list of tt codes we will need when calling the API to tell the API what movies we want
//They are sourced from IMDB
 616eae0379b3813cf7f93ebb40e44a1c355e00db*/

var moviesListed = ["tt0107290", "tt3336368", "tt0245429", "tt0068646", "tt0424774", "tt0952640", "tt0114709", "tt1877830", "tt0371746", "tt0117060", "tt0974015", "tt1490017", "tt2953050", "tt1375670", "tt1517451", "tt6751668", "tt0499549", "tt0325980", "tt0241527", "tt2488496", "tt0077651", "tt4154796", "tt1745960", "tt4633694", "tt2865120"];
//This users array stores the list of watchlist movies as well as login info
var users = [
  {
    username: "Antonio",
    password: "1234",
    watchlist: []
  },
  {
    username: "Erik",
    password: "1234",
    watchlist: [15,3,6]
  },
  {
    username: "Enrique",
    password: "1234",
    watchlist: []
  },
  {
    username: "Skyler",
    password: "1234",
    watchlist: []
  },
  {
    username: "Emily",
    password: "1234",
    watchlist: []
  }
]
//This array will store all 25 movies when the API calls them
var moviesArray = [];



function loadMovieContent() {
  //This function is called in order to retrieve the  25 movies then save them using JSON into the Local Storage


  //The for loop loops through the tt codes and substitutes them in the API to retrieve the info
  for (let i = 0; i < moviesListed.length; i++) {

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://moviesdb5.p.rapidapi.com/om?i=" + moviesListed[i],
      "method": "GET",
      "headers": {
        "X-RapidAPI-Key": "ccd27e8962msh7debb0e3492d593p1961a8jsn90e63bb1c339",
        "X-RapidAPI-Host": "moviesdb5.p.rapidapi.com"
      }

    };


    $.ajax(settings).done(function (response) {
      //These Temporary variables store the movie information
      console.log(response);
      var dir = response.Director;
      var name = response.Title;
      var act = response.Actors;
      var img = response.Poster;
      var year = response.Year;
      var rate = response.imdbRating;
      var tim = response.Runtime;
      var plo = response.Plot;
      var gen = response.Genre;
      //After getting th movie info it is then stored in a temporary obj to then be sent to the array of objects called mArray in Local Storage

      var tempObj = {
        movieName: name,
        director: dir,
        listOfActors: act,
        poster: img,
        year: year,
        time: tim,
        rating: rate,
        plot: plo,
        genre: gen
      }
      //Here the temporary onj is sent to be added to the movie array
      moviesArray.push(tempObj);

      //console.log(moviesArray[i]);

    })

  }

  //This peace of code was added because the API we use lags a bit and that causes the code to not read it before 
  //saving the info, so this time function waits 5 seconds before loading the info into the array to make sure
  //the info is there and that the API has had enough time to call it before we try and save it.
  setTimeout(function () { var jsonArr = JSON.stringify(moviesArray); localStorage.setItem("mArray", jsonArr); }, 5000);

  // var str = localStorage.getItem("mArray");
  //var parsedArr = JSON.parse(str);






}
function loadOnHome() {
  loadMovieContent();
  document.querySelectorAll(".carousel-control-prev").onclick = () => plusSlide(-1);
  document.querySelectorAll(".carousel-control-prev").onclick = () => plusSlide(1);

  $('.carousel').carousel(cycle)({
    interval: 2000
  })
}






//sign in page 

function signInPageLoad() {
  hideSignUp();
}
function hideSignIn() {
  //This code just shows and hides the relevant divs depending on what the user wants to do.
  $(".signIn-Indiv").hide();
  $(".signIn-Updiv").show();

}
function hideSignUp() {
  //This code just shows and hides the relevant divs depending on what the user wants to do.
  $(".signIn-Updiv").hide();
  $(".signIn-Indiv").show();
}
function signUp() {
  //Here we save the sign up information to local storage so that it can be sent to the Home Page
  var localName = document.getElementById("signIn-nameL").value;
  var localPass = document.getElementById("signIn-passL").value;

  localStorage.setItem("lName", localName);
  localStorage.setItem("lPass", localPass);
  var newUser = [
    {
      username: localName,
      password: localPass
    }
  ]
  //Here we save the new user to the array of users
  users.push(newUser);
  for (let v = 0; v < users.length; v++) {
    console.log(users[v]);
  }
  alert("Sign up successful! Welcome to Cinemo!")
  //Here the information is also sent to session storage so that the Home Page can display the person's name
  sessionStorage.setItem("sName", localName);
  sessionStorage.setItem("sPass", localPass);
  //Here we hide the sign in page and show the Home Page
  $(this).display = "none";
  window.location = "Home_Page.html";
}
function signOut() {
  //Once the relevant button is clicked the code wipes the current logged in user
  //from the session storage and then returns them to the sign in screen
  sessionStorage.setItem("sName", "");
  sessionStorage.setItem("sPass", "");

}
function authenticate() {
  //This code makes sure that the user trying to sign in is a valid user 

  //After getting the info from the sign in page the code stores it to test it
  var testName = document.getElementById("signIn-userG").value;
  var testPassword = document.getElementById("signIn-passG").value;


  var loginState = true;
  //This for loop, loops throught the array of users testing to see if the info entered matches one of the saved users

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == testName) {
      if (users[i].password == testPassword) {
        sessionStorage.setItem("sName", testName);
        sessionStorage.setItem("sPass", testPassword);






        loginState == true;
        alert("Welcome back, " + sessionStorage.getItem("sName") + "!");
        //Log in is successful and the page displays an alert with their name

        $(this).display = "none";
        //Redirect to the Home page
        window.location = "Home_Page.html";

      } else {
        loginState = false;

      }
    } else if (users[i].password != testPassword) {
      loginState = false;
    }
  }
  if (!loginState) {
    alert("Incorrect info.");

  }

}
function addMoviesToLibraryS(x) {
  sessionStorage.setItem("selectedMovie", x);
  console.log(x);
  //var t = sessionStorage.getItem("selectedMovie");
  //console.log("t ="+t);
}
function addMoviesToLibrary(t) {
  //when a user clicks on a movie it adds the movie info to the detailed page

  //First calling the saved data
  var str = localStorage.getItem("mArray");

  var parsedArr = JSON.parse(str);

  moviesArray = parsedArr;

  //Displaying the data
  //console.log(moviesArray[t].movieName);
  var strPoster = "<img src=" + moviesArray[t].poster + " width=\"150px\" height=\"225px\"></img>";

  $("#detailed-posterJ").append(strPoster);
  $("#detailed-movieNameJ").append(moviesArray[t].movieName);
  $("#detailed-YearJ").append(moviesArray[t].year);
  $("#detailed-directorJ").append(moviesArray[t].director);
  $("#detailed-actorsJ").append(moviesArray[t].listOfActors);
  $("#detailed-runtimeJ").append(moviesArray[t].time);
  $("#detailed-plotJ").append(moviesArray[t].plot);
  $("#detailed-ratingJ").append(moviesArray[t].rating);
  $("#detailed-genreJ").append(moviesArray[t].genre);


}

function addToWatchlist() {
  var tempName = sessionStorage.getItem("sName");
  var movieToAdd = sessionStorage.getItem("selectedMovie");
  var pos;
  console.log(tempName);

  for (let u = 0; u < users.length; u++) {
    if (users[u].username == tempName) {
      pos = u;
    } console.log(pos);
  }

  users[pos].watchlist.push(movieToAdd);
  console.log(users);
}

function detailedPage() {
  //This function runs when the deatailed page loads and gets the stored selected movie
  var t = sessionStorage.getItem("selectedMovie");
  console.log("t =" + t);
  addMoviesToLibrary(t);
}
function showMovies() {

  //This code displays the movies on the library page by adding info to a default div 25 times
  var str = localStorage.getItem("mArray");

  var parsedArr = JSON.parse(str);
  //console.log(parsedArr);
  moviesArray = parsedArr;
  console.log("showMoviesRuns");
  console.log(moviesArray);

  //var addDiv = "<div onclick=\"addMoviesToLibrary(x)\" class=\"col\"> <div class=\"movie-card\">  <div id=\"library-image1\"> <img src=" + moviesArray[x].poster + " class='card-img-top' alt'...'></div>     <div class=\"card-body\"> <div id=\"library-title1\"><h5 class='card-title'> <a href='Detailed_Page.html'>" + moviesArray[x].movieName + " </a></h5></div> <div id=\"library-btnPlay1\"><a href='#' class='btn btn-primary'>Play</a></div><div id=\"library-btnAdd1\"> <a href='#' class='btn btn-primary'>Add</a></div>  </div>     </div> </div>";

  for (let x = 0; x < moviesArray.length; x++) {
    var addDiv = "<div onclick=\"addMoviesToLibraryS(" + x + ")\" class=\"col\"> <div class=\"movie-card\">  <div id=\"library-image1\"> <img src=" + moviesArray[x].poster + " class='card-img-top' alt'...'></div>     <div class=\"card-body\"> <div id=\"library-title1\"><h5 class='card-title'> <a href='Detailed_Page.html'>" + moviesArray[x].movieName + " </a></h5></div> <div id=\"library-btnPlay1\"><a href='#' class='btn btn-primary'>Play</a></div><div id=\"library-btnAdd1\"> <a href='#' class='btn btn-primary'>Add</a></div>  </div>     </div> </div>";
    $("#movies").append(addDiv);
  }
}
function loadWatchlist(){
  var str = localStorage.getItem("mArray");

  var parsedArr = JSON.parse(str);
 
  moviesArray = parsedArr;
 
  var pos;
  var tempName = sessionStorage.getItem("sName");
  for (let u = 0; u < users.length; u++) {
    if (users[u].username == tempName) {
      pos = u;
    } console.log("watchlist for user at: " + pos);
  }
  for (let x = 0; x < users[pos].watchlist.length; x++) {
    var mviePos = users[pos].watchlist[x];
    console.log(moviesArray[mviePos].movieName);

  
    var addDiv = "<div onclick=\"addMoviesToLibraryS(" + x + ")\" class=\"col\"> <div class=\"movie-card\">  <div id=\"library-image1\"> <img src=" + moviesArray[mviePos].poster + " class='card-img-top' alt'...'></div>     <div class=\"card-body\"> <div id=\"library-title1\"><h5 class='card-title'> <a href='Detailed_Page.html'>" + moviesArray[mviePos].movieName + " </a></h5></div> <div id=\"library-btnPlay1\"><a href='#' class='btn btn-primary'>Play</a></div><div id=\"library-btnAdd1\"> <a href='#' class='btn btn-primary'>Add</a></div>  </div>     </div> </div>";
    $("#watchlist-content").append(addDiv);
  }
}