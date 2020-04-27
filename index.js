




$(document).ready(function() {
  $('.banner__burger').click(function(event) {
    $('.banner__burger,.banner__menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
});

$(document).ready(function(){
  $('.slider3').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    responsive:[
			{
				breakpoint: 992,
				settings: {
          slidesToShow:2,
          arrows: false
				}
			},
			{
				breakpoint: 550,
				settings: {
          slidesToShow:1,
          arrows: false
				}
			}
    ],
    prevArrow: '<div class="left-arrow"><div class="arrow"><div class="arrow__vertical"></div></div></div>',
    nextArrow: '<div class="right-arrow"><div class="arrow"><div class="arrow__vertical"></div></div></div>'
  });
  
})

// $(document).ready(function(){
//   let cssValuesPrev1 = {
//     "margin-right" : "-170px",
// 		"z-index": "-5",
//   }
//   let cssValuesPrev2 = {
//     "margin-right" : "-220px",
// 		"z-index": "-2",
//   }
//   $('.slick-center').not('.slick-cloned').prev().css(cssValuesPrev1)
//   // $('.slick-active').prev().prev().css(cssValuesPrev2)
// })

