var moviesListed = ["tt0107290", "tt3336368", "tt0245429", "tt0068646", "tt0424774", "tt0952640", "tt0114709", "tt1877830", "tt0371746", "tt0117060", "tt0974015", "tt1490017", "tt2953050", "tt1375670", "tt1517451", "tt6751668", "tt0499549", "tt0325980", "tt0241527", "tt2488496", "tt0077651", "tt4154796", "tt1745960", "tt4633694", "tt2865120"];
var users = [
  {
    username: "Antonio",
    password: "1234",
    watchlist: [""]
  },
  {
    username: "Erik",
    password: "1234",
    watchlist: [""]
  },
  {
    username: "Enrique",
    password: "1234",
    watchlist: [""]
  },
  {
    username: "Skyler",
    password: "1234",
    watchlist: [""]
  },
  {
    username: "Emily",
    password: "1234",
    watchlist: [""]
  }
]

var moviesArray = [];

//console.log(moviesListed);

function loadMovieContent() {




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

      var dir = response.Director;
      var name = response.Title;
      var act = response.Actors;
      var img = response.Poster;
      var year = response.Year;
      var rate = response.imdbRating;
      var tim = response.Runtime;

      var tempObj = {
        movieName: name,
        director: dir,
        listOfActors: act,
        poster: img,
        year: year,
        time: tim,
        rating: rate
      }

      moviesArray.push(tempObj);

      //console.log(moviesArray[i]);

    })
   
  }

  
  setTimeout(function() {   var jsonArr = JSON.stringify(moviesArray);localStorage.setItem("mArray", jsonArr); }, 5000);

  // var str = localStorage.getItem("mArray");
  //var parsedArr = JSON.parse(str);




  

}









//sign in page 

function signInPageLoad() {
  hideSignUp();





}
function hideSignIn() {
  $(".signIn-Indiv").hide();
  $(".signIn-Updiv").show();

}
function hideSignUp() {

  $(".signIn-Updiv").hide();
  $(".signIn-Indiv").show();
}
function signUp() {
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

  users.push(newUser);
  for (let v = 0; v < users.length; v++) {
    console.log(users[v]);
  }
  alert("Sign up successful! Welcome to Cinemo!")
  sessionStorage.setItem("sName", localName);
  sessionStorage.setItem("sPass", localPass);
  //loadMovieContent();
  $(this).display = "none";
  window.location = "Home_Page.html";
}
function signOut() {
  sessionStorage.setItem("sName", "");
  sessionStorage.setItem("sPass", "");
  sessionStorage.setItem("sStatus", "none");
}
function authenticate() {

  var testName = document.getElementById("signIn-userG").value;
  var testPassword = document.getElementById("signIn-passG").value;


  var loginState = true;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == testName) {
      if (users[i].password == testPassword) {
        sessionStorage.setItem("sName", testName);
        sessionStorage.setItem("sPass", testPassword);
        sessionStorage.setItem("sStatus", "yes");





        loginState == true;
        alert("Welcome back, " + sessionStorage.getItem("sName") + "!");
        // loadMovieContent();
        //document.getElementById("form-block").style.display = "none";

        $(this).display = "none";

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

function addMoviesToLibrary() {

  //user[].watchlist.push(movieArray[x]);
  console.log("Test");
  console.log("Test");
  //var str = localStorage.getItem("movieArray");
  // var parsedArr = JSON.parse(str);

  //moviesArray == parsedArr;
  //console.log(moviesArray);




  for (let l = 0; l < moviesArray.length; l++) {
    document.getElementById("library-image" + l).innerHTML = "<img src=" + moviesArray[l].poster + " class='card-img-top' alt'...'>";
    document.getElementById("library-title" + l).innerHTML = " <h5 class='card-title'> <a href='Detailed_Page.html'>" + moviesArray[l].movieName + " </a></h5> ";
    document.getElementById("library-btnPlay" + l).innerHTML = " <a href='#' class='btn btn-primary'>Play</a> ";
    document.getElementById("library-btnAdd" + l).innerHTML = " <a href='#' class='btn btn-primary'>Add</a> ";
  }



}
function showMovies() {
  
console.log(moviesArray[4].year);
  var addDiv = "<div onclick=\"addMoviesToLibrary(x)\" class=\"col\"> <div class=\"movie-card\">  <div id=\"library-image1\"> <img src=" + moviesArray[4].poster + " class='card-img-top' alt'...'></div>     <div class=\"card-body\"> <div id=\"library-title1\"></div> <div id=\"library-btnPlay1\"></div><div id=\"library-btnAdd1\"></div>  </div>     </div> </div>";
        
                  
               
                       
                       
                        
                  
           
           

         for(let x = 0; x < moviesArray.length; x++){
          $("#movies").append(addDiv);
         }
}