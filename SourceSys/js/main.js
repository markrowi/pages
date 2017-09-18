$(document).ready(function(){

    var $root = $('html, body');
    $('a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 500,
            specialEasing: {
              width: "linear",
              height: "easeOutBounce"
            }
        }
        , function () {
            window.location.hash = href;
        });
        return false;
    });

    $(document).scroll(function(){
        document_top = $(document).scrollTop()-1000;
        event_wapper_top = $("#portfolio").position().top-1110;
        if(document_top<event_wapper_top){
            degree = (360/event_wapper_top)*(document_top);
            event_animate_num = event_wapper_top - document_top;
            event_animate_alpha = (1/event_wapper_top)*(document_top);
            $("#portfolio .port-header i").css({
                        '-webkit-transform': 'rotate(' + degree + 'deg)',
                        '-moz-transform': 'rotate(' + degree + 'deg)',
                        '-ms-transform': 'rotate(' + degree + 'deg)',
                        '-o-transform': 'rotate(' + degree + 'deg)',
                        'transform': 'rotate(' + degree + 'deg)',
            });
            $("#portfolio .port-header").css({
                        'opacity':event_animate_alpha
            });
        }else{
            $("#portfolio .port-header i").css({
                        '-webkit-transform': 'rotate(' + 360 + 'deg)',
                        '-moz-transform': 'rotate(' + 360 + 'deg)',
                        '-ms-transform': 'rotate(' + 360 + 'deg)',
                        '-o-transform': 'rotate(' + 360 + 'deg)',
                        'transform': 'rotate(' + 360 + 'deg)',
            });
            $("#portfolio .port-header").css({
                        'opacity':1
            });
        }
    });

    $(document).scroll(function(){
        document_top = $(document).scrollTop()-2000;
        event_wapper_top = $("#blog").position().top-2110;
        if(document_top<event_wapper_top){
            event_animate_num = event_wapper_top - document_top;
            event_animate_alpha = (1/event_wapper_top)*(document_top);
            $("#blog .event_animate_left").css({'left': -event_animate_num,'opacity':event_animate_alpha});
            $("#blog .event_animate_right").css({'left':event_animate_num,'opacity':event_animate_alpha});
        }else{
            $("#blog .event_animate_left").css({'left': 0,'opacity':1});
            $("#blog .event_animate_right").css({'left':0,'opacity':1});
        }
    });

    var owli = $("#intro");
    
    owli.owlCarousel({
        navigation : true, 
        slideSpeed : 4000,
        paginationSpeed : 1000,
        singleItem: true,
        pagination: false,
        rewindSpeed: 1000,
        autoplay:true,
        autoplayTimeout:4000,
        loop:true,
        responsive : {
            0: {
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false
            },
        }
    });
  
    var owlt = $("#testimonials-carousel");
    owlt.owlCarousel({
        navigation : true, 
        slideSpeed : 4000,
        paginationSpeed : 1000,
        singleItem: true,
        pagination: false,
        rewindSpeed: 1000,
        autoplay:true,
        autoplayTimeout:4000,
        loop:true,
        transitionStyle: "backSlide",
        items:1
	});

    var owlc = $('#client-carousel');
    owlc.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive : {
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                loop:true
            }
        }
    });

    owlc.on('mouseleave', function (e){
        owlc.trigger('play.owl.autoplay', [1500]);
    });
    owlc.on('mouseover', function(e){
        owlc.trigger('stop.owl.autoplay');
    });



    //   <!-- Do not change the code! -->
    //         <a id="foxyform_embed_link_897261" href="http://www.foxyform.com/">foxyform</a>
    //         <script type="text/javascript">
    //         (function(d, t, jQuery){
    //           var g = d.createElement(t),
    //               s = d.getElementsByTagName(t)[0];
    //           g.src = "http://www.foxyform.com/js.php?id=897261&sec_hash=2a5f86000c9&width=350px";
    //           // jQuery(d).find('input').addClass('form-control');
    //           // console.log(s,"sssss");
    //           // console.log(g, "gggsa")
    //           s.parentNode.insertBefore(g, s);
              
    //         }(document, "script"));
    //         </script>
    //         <!-- Do not change the code! -->
})