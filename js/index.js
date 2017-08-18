$(window).scroll(function(evt){
  if ($(window).scrollTop()>0)
    $(".navbar").removeClass("navbar-top");
  else
    $(".navbar").addClass("navbar-top");
});

//skrollr初始化
//https://cdnjs.com/libraries/skrollr
//https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js
//skrollor cdn
//此範例用相對定位
var s = skrollr.init();