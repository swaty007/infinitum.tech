$(document).ready(function () {

   var styleJs = {
      offer : function () {
         var heigth = $('.offer-block.js-heigth').width();
         if (heigth>0){
            $('.offer-block.js-heigth').css({height:heigth});
          }
       },
     offerPortfolio : function () {
       var heigth = $('.our-portfolio .sites-item').width();
       if (heigth>0){
         $('.our-portfolio .sites-item').css({height:heigth,maxHeight:heigth,minHeight:heigth});
       }
      }
   };



    (function initilize () {
       styleJs.offer();
       // styleJs.offerPortfolio();
    }());


    $( window ).resize(function() {
        styleJs.offer();
        // styleJs.offerPortfolio();
    });

});


$(window).load(function() {
    $('#page-preloader').addClass('loaded');
});
