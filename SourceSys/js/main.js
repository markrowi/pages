$(document).ready(function(){

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
})