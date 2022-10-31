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


var moviesArray = [
  //movie 1
  {
    movieName: "TestName1",
    director: "TestDirector1",
    listOfActors: "TestActors1",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear1",
    time: "TestMin1",
    rating: "3.2"
  },
  //movie 2
  {
    movieName: "TestName2",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 3
  {
    movieName: "TestName3",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 4
  {
    movieName: "TestName4",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 5
  {
    movieName: "TestName5",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 6
  {
    movieName: "TestName6",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 7
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 8
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 9
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 10
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 11
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 12
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 13
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 14
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 15
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 16
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 17
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 18
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 19
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 20
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 21
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 22
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 23
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 24
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: "4.6"
  },
  //movie 25
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  }

]


function loadMovieContent() {
  var moviesArray = [];
  var moviesArra = [
    //movie 1
    {
      movieName: "TestName1",
      director: "TestDirector1",
      listOfActors: "TestActors1",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear1",
      time: "TestMin1",
      rating: "3.2"
    },
    //movie 2
    {
      movieName: "TestName2",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 3
    {
      movieName: "TestName3",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 4
    {
      movieName: "TestName4",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 5
    {
      movieName: "TestName5",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 6
    {
      movieName: "TestName6",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 7
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 8
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 9
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 10
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 11
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 12
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 13
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 14
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 15
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 16
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 17
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 18
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 19
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 20
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 21
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 22
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 23
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    },
    //movie 24
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: "4.6"
    },
    //movie 25
    {
      movieName: "TestName",
      director: "TestDirector",
      listOfActors: "TestActors",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      year: "TestYear",
      time: "TestMin",
      rating: ""
    }
  
  ]
  /*if(sessionStorage.getItem("sStatus" = "yes")){
   $(".signIn-welcomeText").append("<h4 id='signIn-welcomeTextStyle'> Welcome back, " + sessionStorage.getItem("sName") + "! We hope you are having an awesome day!</h4>");
  }else if(sessionStorage.getItem("sStatus") = "none"){
    $(".signIn-welcomeText").append("<h4 id='signIn-welcomeTextStyle'> Welcome to Cinemo! We hope you are having an awesome day!</h4>");
  }*/

  //URGENT do not take the comments away from this code!!!!!!!
  //URGENT do not take the comments away from this code!!!!!!!
  //URGENT do not take the comments away from this code!!!!!!!
  //URGENT do not take the comments away from this code!!!!!!!

  for (let i = 0; i < moviesListed.length; i++) {

    const settings = {
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
      console.log("ojejncejkfbvjernvnjervrubvubrv3ervc");
      console.log(moviesArray[i]);

    })
  if(moviesArray[0].movieName != "TestName1"){

  console.log("Movies in our array:");
  console.log("Movies in our array:");
  console.log("Movies in our array:");
  for (let a = 0; a < moviesListed.length; a++) {

    console.log(moviesArray[a]);


  }

  var jsonArr = JSON.stringify(moviesArray);
  localStorage.setItem("movieArray", jsonArr);
  var str = localStorage.getItem("movieArray");
  var parsedArr = JSON.parse(str);

  moviesArray == parsedArr;
  console.log("testARRRRRRRRR");
  console.log(moviesArray[0]);
}

  }





  // This code gets the details for a specified movie, enter the movie code you will get when searching the API's database eg.tt1745960
  //this is the code for Top Gun Maverick.
  // in the url replace "const=(movie code starting with tt)"


}
(function () {
  // document.getElementById("place-pic" + r).innerHTML = "<img class='cart-image'  src = \"../" + vinyls[randomVinylCart].Image + "\">";
  //document.getElementByClass(".signIn-welcomeText").append("<h4 id='signIn-welcomeTextStyle'> Welcome to Cinemo " + sessionStorage.getItem("sName") + "!</h4>");
  //$(".signIn-welcomeText").append("<h4 id='signIn-welcomeTextStyle'> Welcome to Cinemo " + sessionStorage.getItem("sName") + "!</h4>");
  "use strict";

  /**
   * Easy selector helper function //Erik was here
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }


  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }


  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });


})()










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
