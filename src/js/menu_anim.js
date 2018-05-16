


$(document).ready(function () {




    var ScreenWidthMenu = $('#menu').width(),
        ScreenWidth = $(window).width(),
        ScreenHeigth = $(window).height();


    var resize = function () {
        ScreenWidthMenu = $('#menu').width();
            ScreenHeigth = $(window).height();
        ScreenWidth = $(window).width();
    };
    $(window).resize(function() {
        resize();
    });




    $('#menu-content li .inner').hide();

    var animateOn = function () {
        if(ScreenWidthMenu !== 0){
            $('#menu .line').animate({
                width:ScreenWidthMenu
            },300,function () {
                $('#menu').addClass('lineAnimJs');
                $('#menu').animate({
                    height:ScreenHeigth
                },250,function () {
                    $('#header').addClass('open');
                    $('#menu').removeClass('lineAnimJs');

                    $('#menu-content li:nth-child(even) .inner').slideDown(250,function () {
                        $('#menu-content li:nth-child(odd) .inner').slideDown(250);
                    })

                });

            });
        } else {resize();}
    };
    var animateOff = function () {
        if(ScreenWidthMenu !== 0){
            $('#menu').addClass('lineAnimJs');
            $('#header').removeClass('open');
            $('#menu-content li .inner').slideUp(100);
            $('#menu').animate({
                height:0,
            },300,function () {
                $('#menu').removeClass('lineAnimJs');
                $('#menu .line').animate({
                    width:0
                },500)
            });
        } else {resize();}
    };

    $("#menu-btn").on('click',function (e) {
        e.preventDefault();
        resize();
        if ($(this).hasClass('open')) {
            animateOff();
            $(this).removeClass('open');
        } else {
            animateOn();
            $(this).addClass('open');
        }

    });
    $("#menu ul li a").on('click',function () {
      animateOff();
      $("#menu-btn").removeClass('open');
    });



    var menuScroll = function (mainBtn,ScrollBlock,colorChange) {
        if (ScrollBlock.length) {
            mainHs = mainBtn.offset().top;
            ScrollOf = ScrollBlock.offset().top;
            ScrollHs = ScrollBlock.outerHeight();

            if (mainHs > ScrollOf && mainHs < (ScrollOf + ScrollHs)) {
                mainBtn.children('span').css('background-color',colorChange);
                mainBtn.children('p').css('color',colorChange);
                return true;
            }else {
                return false;
            }
        }

    };


    $(window).scroll(function() {
        var menuBtn = $('#menu-btn');
        var sc = $('.our-advantages');
        var sc1 = $('.contact-us .form');
        var sc2 = $('.our-portfolio');
        var sc3 = $('.desktop-version');
        var sc4 = $('.btn-js-color');
        var sc5 = $('.our-services');
        var sc6 = $('.contact-us-js-color');


        if (!menuScroll(menuBtn,sc,'#000') && !menuScroll(menuBtn,sc2,'#000') && !menuScroll(menuBtn,sc3,'#000')
           && !menuScroll(menuBtn,sc4,'#000')  && !menuScroll(menuBtn,sc5,'#000') && !menuScroll(menuBtn,sc6,'#000')
        ) {
            $('#menu-btn span').css('background-color','#fff');
            // $('#menu-btn span').css('background-color','#64c8ca');
            $('#menu-btn p').css('color','#fff');
        }

        if(ScreenWidth < 992) {
            if (!menuScroll(menuBtn,sc,'#000') && !menuScroll(menuBtn,sc1,'#000') && !menuScroll(menuBtn,sc2,'#000')
              && !menuScroll(menuBtn,sc3,'#000') && !menuScroll(menuBtn,sc4,'#000') && !menuScroll(menuBtn,sc5,'#000')
              && !menuScroll(menuBtn,sc6,'#000')  ) {
                $('#menu-btn span').css('background-color','#fff');
                $('#menu-btn p').css('color','#fff');
            }
        }

    });

});
