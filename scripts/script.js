//team-section-scripts
$('#section-team--carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [
        "<i class='fa fa-arrow-left'></i>",
        "<i class='fa fa-arrow-right'></i>",
      ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
//blog-section-scripts
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [
        "<i class='fa fa-arrow-left'></i>",
        "<i class='fa fa-arrow-right'></i>",
      ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
//video-scripts
$(".video__item--button").on("click", function () {
    $(this).parent().children(".video").css({
      "z-index": 1,
      opacity: 1,
    });
    $(this).parent().children(".video").trigger("play");
  });

  //header-scripts
  $(".header-burger").click(function(){
      $(".header-mobile--menu").css("display","flex")
  })
  $(".close").click(function(){
    $(".header-mobile--menu").css("display","none")
})