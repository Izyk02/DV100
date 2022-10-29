var moviesListed = ["tt0107290", "tt3336368", "tt0245429", "tt0068646", "tt0424774", "tt0952640", "tt0114709", "tt1877830", "tt0371746", "tt0117060", "tt0974015", "tt1490017", "tt2953050", "tt1375670", "tt1517451", "tt6751668", "tt0499549", "tt0325980", "tt0241527", "tt2488496", "tt0077651", "tt4154796", "tt1745960", "tt4633694", "tt2865120"];
var users = [
  {
    username: "Antonio",
    password: "1234"
  },
  {
    username: "Erik",
    password: "1234"
  },
  {
    username: "Enrique",
    password: "1234"
  },
  {
    username: "Skyler",
    password: "1234"
  },
  {
    username: "Emily",
    password: "1234"
  }
]


var moviesArray = [
  //movie 1
  {
    movieName: "TestName1",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
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
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 5
  {
    movieName: "TestName",
    director: "TestDirector",
    listOfActors: "TestActors",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: "TestYear",
    time: "TestMin",
    rating: ""
  },
  //movie 6
  {
    movieName: "TestName",
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



function loadHome() {
  $(".signIn-welcomeText").append("<h4 id='signIn-welcomeTextStyle'> Welcome to Cinemo " + sessionStorage.getItem("sName") + "!</h4>");
/*if(sessionStorage.getItem("sStatus" = "yes")){
 $(".signIn-welcomeText").append("<h4 id='signIn-welcomeTextStyle'> Welcome back, " + sessionStorage.getItem("sName") + "! We hope you are having an awesome day!</h4>");
}else if(sessionStorage.getItem("sStatus") = "none"){
  $(".signIn-welcomeText").append("<h4 id='signIn-welcomeTextStyle'> Welcome to Cinemo! We hope you are having an awesome day!</h4>");
}*/
 
  //URGENT do not take the comments away from this code!!!!!!!
  //URGENT do not take the comments away from this code!!!!!!!
  //URGENT do not take the comments away from this code!!!!!!!
  //URGENT do not take the comments away from this code!!!!!!!
  /*
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
        console.log(response);
        moviesArray[i].director = response.Director;
        moviesArray[i].movieName = response.Title;
  
        moviesArray[i].listOfActors = response.Actors;
        moviesArray[i].poster = response.Poster;
        moviesArray[i].year = response.Year;
        moviesArray[i].rating = response.imdbRating;
        moviesArray[i].time = response.Runtime;
  
  
      })
  
    }
    */
  console.log("Movies in our array:");
  console.log("Movies in our array:");
  console.log("Movies in our array:");
  for (let a = 0; a < moviesListed.length; a++) {

    console.log(moviesArray[a]);
  }





  /* const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://moviesdb5.p.rapidapi.com/om?i=tt1285016",
     "method": "GET",
     "headers": {
       "X-RapidAPI-Key": "ccd27e8962msh7debb0e3492d593p1961a8jsn90e63bb1c339",
       "X-RapidAPI-Host": "moviesdb5.p.rapidapi.com"
     }
   };
 
   $.ajax(settings).done(function (response) {
     console.log(response);
     //$("#director").text("Director "+response.crew.director[0].name);
     //$("#H-movieName1").text("Name "+response.base.title); 
 
     var temp = "";
     for (let i = 0; i < 4; i++) {
       temp += response.cast[i].name;
 
     }
     //$("#listOfActors").text("Actors "+temp); 
     //$("#H-movieImg1").append("<img class='H-movie-img' src="+response.base.image.url+" alt=''>"); 
     // $("#year").text("Year: "+response.base.year);
     // $("#time").text("Run Time: "+response.base.runningTimeInMinutes +"min");
   });*/




  // This code gets the details for a specified movie, enter the movie code you will get when searching the API's database eg.tt1745960
  //this is the code for Top Gun Maverick.
  // in the url replace "const=(movie code starting with tt)"












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

  /**
   * Easy event listener function
   */
  /*const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  /* let navbarlinks = select('#navbar .scrollto', true)
   const navbarlinksActive = () => {
     let position = window.scrollY + 200
     navbarlinks.forEach(navbarlink => {
       if (!navbarlink.hash) return
       let section = select(navbarlink.hash)
       if (!section) return
       if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
         navbarlink.classList.add('active')
       } else {
         navbarlink.classList.remove('active')
       }
     })
   }
   window.addEventListener('load', navbarlinksActive)
   onscroll(document, navbarlinksActive)
 
   /**
    * Scrolls to an element with header offset
    */
  /* const scrollto = (el) => {
     let header = select('#header')
     let offset = header.offsetHeight
 
     if (!header.classList.contains('header-scrolled')) {
       offset -= 16
     }
 
     let elementPos = select(el).offsetTop
     window.scrollTo({
       top: elementPos - offset,
       behavior: 'smooth'
     })
   }
 
   /**
    * Header fixed top on scroll
    */
  /* let selectHeader = select('#header')
   if (selectHeader) {
     let headerOffset = selectHeader.offsetTop
     let nextElement = selectHeader.nextElementSibling
     const headerFixed = () => {
       if ((headerOffset - window.scrollY) <= 0) {
         selectHeader.classList.add('fixed-top')
         nextElement.classList.add('scrolled-offset')
       } else {
         selectHeader.classList.remove('fixed-top')
         nextElement.classList.remove('scrolled-offset')
       }
     }
     window.addEventListener('load', headerFixed)
     onscroll(document, headerFixed)
   }
 
   /**
    * Back to top button
    */
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

  /**
   * Mobile nav toggle
   */
  /* on('click', '.mobile-nav-toggle', function(e) {
     select('#navbar').classList.toggle('navbar-mobile')
     this.classList.toggle('bi-list')
     this.classList.toggle('bi-x')
   })
 
   /**
    * Mobile nav dropdowns activate
    */
  /* on('click', '.navbar .dropdown > a', function(e) {
     if (select('#navbar').classList.contains('navbar-mobile')) {
       e.preventDefault()
       this.nextElementSibling.classList.toggle('dropdown-active')
     }
   }, true)
 
   /**
    * Scrool with ofset on links with a class name .scrollto
    */
  /*  on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
  /* window.addEventListener('load', () => {
     if (window.location.hash) {
       if (select(window.location.hash)) {
         scrollto(window.location.hash)
       }
     }
   });
 
   /**
    * Preloader
    */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate glightbox
   */
  /*const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Skills animation
   */
  /*let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Hero slider
   */
  new Swiper('.hero-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });//

  /**
   * Porfolio isotope and filter
   */
  /*window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  /*const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /* Slider */
  new Swiper('.swiper-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

}


/*
function loadHomeContent(){

  
    const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://imdb8.p.rapidapi.com/title/get-full-credits?tconst=tt1745960",
     "method": "GET",
     "headers": {
       "X-RapidAPI-Key": "ccd27e8962msh7debb0e3492d593p1961a8jsn90e63bb1c339",
       "X-RapidAPI-Host": "imdb8.p.rapidapi.com"
     }
   };
   
   $.ajax(settings).done(function (response) {
     console.log(response);
       $("#director").text("Director "+response.crew.director[0].name);
       $("#H-movieName1").text("Name "+response.base.title); 
   
       var temp = "";
       for( let i = 0; i <4; i++){
            temp +=response.cast[i].name; 
   
       }
     $("#listOfActors").text("Actors "+temp); 
    $("#H-movieImg1").append("<img src="+response.base.image.url+" alt=''>"); 
     $("#year").text("Year: "+response.base.year);
     $("#time").text("Run Time: "+response.base.runningTimeInMinutes +"min");
   });
   
   

   
   // This code gets the details for a specified movie, enter the movie code you will get when searching the API's database eg.tt1745960
   //this is the code for Top Gun Maverick.
   // in the url replace "const=(movie code starting with tt)"
   
}
*/


function dropdownfilter() {

  $('.filter-year').click(function () {

    $('.year-menu').slideToggle();

  })

  $('.filter-genre').click(function () {

    $('.genre-menu').slideToggle();

  })

  $('.filter-score').click(function () {

    $('.score-menu').slideToggle();

  })

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
function signUp(){
  alert("Sign up successful! Welcome to Cinemo!")
  $(this).display = "none";
  window.location = "Home_Page.html";
}
function signOut(){
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
        alert("Welcome back, "+ sessionStorage.getItem("sName")+"!");
        //document.getElementById("form-block").style.display = "none";

        $(this).display = "none";

                          window.location = "Home_Page.html";
      
      } else {
        loginState = false;
        
      }
    }else if(users[i].password != testPassword){
      loginState = false;
    }
  }
  if (!loginState) {
    alert("Incorrect info.");

  }

}


