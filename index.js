




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

$(document).ready(function() {
  $("#carousel").waterwheelCarousel({
    // include options like this:
    // (use quotes only for string values, and no trailing comma after last option)
    // option: value,
    // option: value
  });
});

var timeOnSlide = 3,  
timeBetweenSlides = 1,  
  animationstring = 'animation',
  animation = false,
  keyframeprefix = '',
  domPrefixes = 'Webkit Moz O Khtml'.split(' '),  
  pfx = '',
  slidy = document.getElementById("slidy");  
if (slidy.style.animationName !== undefined) { animation = true; }  

if( animation === false ) {
  for( var i = 0; i < domPrefixes.length; i++ ) {
  if( slidy.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
  pfx = domPrefixes[ i ];
  animationstring = pfx + 'Animation';
  keyframeprefix = '-' + pfx.toLowerCase() + '-';
  animation = true;
  break;
  }
  }
}

if( animation === false ) {
} else {
  var images = slidy.getElementsByTagName("img"),
  firstImg = images[0],  
  imgWrap = firstImg.cloneNode(false);  
  slidy.appendChild(imgWrap);  
  var imgCount = images.length,  
  totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1),  
  slideRatio = (timeOnSlide / totalTime)*100,  
  moveRatio = (timeBetweenSlides / totalTime)*100,  
  basePercentage = 100/imgCount,  
  position = 0,  
  css = document.createElement("style");  
  css.type = "text/css";
  css.innerHTML += "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%; }\n";  
  css.innerHTML += "#slidy img { float: left; width: " + basePercentage + "%; }\n";
  css.innerHTML += "@"+keyframeprefix+"keyframes slidy {\n";  
  for (i=0;i<(imgCount-1); i++) {  
  position+= slideRatio;  
  css.innerHTML += position+"% { left: -"+(i * 100)+"%; }\n";
  position += moveRatio;  
  css.innerHTML += position+"% { left: -"+((i+1) * 100)+"%; }\n";
}
  css.innerHTML += "}\n";
  css.innerHTML += "#slidy { left: 0%; "+keyframeprefix+"transform: translate3d(0,0,0); "+keyframeprefix+"animation: "+totalTime+"s slidy infinite; }\n";  
document.body.appendChild(css);  
}