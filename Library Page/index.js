$(document).ready(function () {

    $(".movie-card1").hover(function(){
       $(".movie-buttons1").slideToggle(200);
    })

    $(".movie-card2").hover(function(){
        $(".movie-buttons2").slideToggle(200);
    })

    $(".movie-card3").hover(function(){
        $(".movie-buttons3").slideToggle(200);
    })

    $(".movie-card4").hover(function(){
        $(".movie-buttons4").slideToggle(200);
    })


    

    $("#play-hover").hover(
        function () {
            $("#play-hover").attr('src', 'Icons/play-circle-blue.svg');
        },
        function () {
            $("#play-hover").attr('src', 'Icons/play-circle.svg');
        }
    )

    $("#heart-hover").hover(
        function () {
            $("#heart-hover").attr('src', 'Icons/heart-blue.svg');
        },
        function () {
            $("#heart-hover").attr('src', 'Icons/heart.svg');
        }
    )


        

})


