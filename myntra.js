    
   

$('.single').slick({
  slidesToShow: 1,                                         //banner slider
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});
              // to change theme
// $('#activity3').click(function(){
// $('#theme2').text("Light");
// $('.theme1').html('<ion-icon name="sunny-outline"></ion-icon>');
// $(".activity").css({"color":"blue"});
// $(".profile_img a ion-icon").css({"color":"blue"});
// });


$('.slick').slick({
    dots: true,                                         // row1
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
                  