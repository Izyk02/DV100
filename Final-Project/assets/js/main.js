(function () {

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://imdb8.p.rapidapi.com/title/get-full-credits?tconst=tt1745960",
    "method": "GET",
    "headers": {
      "X-RapidAPI-Key": "e62dc10aa5msh39921492f48bc1ep1c251fjsn53b4cd5e4cf1",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com"
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
  });




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

})() 


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


function signInPageLoad() {
  $(".signIn-Updiv").hide();
  $(".signIn-Indiv").show();

}
function hideSignIn() {
  alert("click");
  $(".signIn-Updiv").show();
  $(".signIn-Indiv").hide();
}

function hideSignUp() {
  alert("click");
  $(".signIn-Updiv").hide();
  $(".signIn-Indiv").show();
}


//sign in page 

//adding the users in array of objects
users = [
  {
    Username: "Antonio",
    password: "1234"
  },
  {
    Username: "Erik",
    password: "1234"
  },
  {
    Username: "Enrique",
    password: "1234"
  },
  {
    Username: "Skyler",
    password: "1234"
  },
  {
    Username: "Emily",
    password: "1234"
  }
]




//api for movies
//movies listed in array
moviesListed["tt0107290", "tt0910970", "tt0245429", "tt0068646", "tt0952640", "tt0952640", "tt0114709", "tt1877830", "tt0371746", "tt0117060", "tt0974015", "tt1490017", "tt2953050", "tt1375670", "tt1517451", "tt6751668", "tt0499549", "tt0325980", "tt0241527", "tt2488496", "tt0077651", "tt4154796", "tt1745960", "tt4633694"];

var moviesArray = [
  //movie 1
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 2
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 3
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 4
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 5
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 6
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 7
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 8
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 9
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 10
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 11
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 12
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 13
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 14
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 15
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 16
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 17
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 18
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 19
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 20
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 21
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 22
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 23
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 24
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  },
  //movie 25
  {
    movieName: "",
    director: "",
    listOfActors: "",
    poster: "",
    year: "",
    time: "",
  }

]

$(document).ready(function () {

  for (leti = 0; i <= moviesListed.legnth; i++) {

    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://imdb8.p.rapidapi.com/title/get-full-credits?tconst=" + moviesListed[i],
      "method": "GET",
      "headers": {
        "X-RapidAPI-Key": "e62dc10aa5msh39921492f48bc1ep1c251fjsn53b4cd5e4cf1",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com"
      }
    };


    $.ajax(settings).done(function (response) {
      console.log(response);
      moviesArray[i].director = response.crew.director[0].name;
      moviesArray[i].movieName = response.base.title;
      moviesArray[i].listOfActors = response.crew.cast[0].names;
      moviesArray[i].img = response.base.image.url;
      moviesArray[i].year = response.base.year;
      moviesArray[i].time = response.base.runningTimeInMinutes + "min";

      /*$("#director").text("Director: " + response.crew.director[0].name);
      $("#movieName").text(response.base.title);
 
      var temp = "";
      for (let i = 0; i < 4; i++) {
          temp += " " + response.cast[i].name + "   ";
 
      }
      $("#listOfActors").text("Cast:  " + temp);
      $("#img").append("<img id = 'moviePoster' src=" + response.base.image.url + " alt=''>");
      $("#year").text("Release date: " + response.base.year);
      $("#time").text("Run Time: " + response.base.runningTimeInMinutes + "min");*/

    });

  }
})



