$(document).ready(function(){

  // Slick slider pour la section les incontournables

    $('.incontournables__slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        cssEase: 'ease-out',
        speed: 1200,
        autoplay: true,
        prevArrow: $(".fleche-gauche"),
        nextArrow: $(".fleche-droite")
    });


    // Instagram feed

    var feed = new Instafeed({
        get: 'user',
        userId: '19505419463',
        limit: 6,
        accessToken: '19505419463.1677ed0.012da08be4a8481183653872a627aae4',
        clientId: '976ad116eb8d41fd8929cdc14b590060',
        resolution: 'low_resolution',
        after: function() {
            $('.instagram__flux').slick({
                dots: false,
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 5,
                autoplay: true,
                responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true,
                        dots: true
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                  ]
            })
        } ,
        sortBy: 'least-recent',
        template: '<a href="{{link}}" target="_blank" class="photo-container"><img class="insta-photo" src="{{image}}" /></a>'
    });
    feed.run();

   
      //toggle menu
    
        //toggle menu
        $(".hamburger-container").click(function() {
          $("#menu").animate({
            left: "toggle"
          });
        });
      
        //icon animation
        var topBar = $(".hamburger li:nth-child(1)"),
          middleBar = $(".hamburger li:nth-child(2)"),
          bottomBar = $(".hamburger li:nth-child(3)");
      
        $(".hamburger-container").on("click", function() {
          if (middleBar.hasClass("rot-45deg")) {
            topBar.removeClass("rot45deg");
            middleBar.removeClass("rot-45deg");
            bottomBar.removeClass("hidden");
          } else {
            bottomBar.addClass("hidden");
            topBar.addClass("rot45deg");
            middleBar.addClass("rot-45deg");
          }
        });

    
  });

  /* Effets avec GSAP */

  const menuNavigation = document.querySelector('.hero__container span');
  const heroAccueil = document.querySelector('.hero_image');

  const tl = new TimelineMax();


  tl.fromTo(menuNavigation, 6, {width: '0', x: 30}, {width: '100px', x: 0, ease: Power2.easeInOut}, "-=1")

 

/* Effet scrollbar */

document.addEventListener("DOMContentLoaded", function() {
	//The first argument are the elements to which the plugin shall be initialized
	//The second argument has to be at least a empty object or a object with your desired options
	OverlayScrollbars(document.querySelectorAll("body"), {
    
   });
});

