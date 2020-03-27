
$('document').ready(function(){
    $('#da .img a').hover(function(){
        $(this).animate({opacity:1},'fast');
    },function(){
        $(this).animate({opacity:0.6},'fast');
    });

    $('#db .img img').addClass("img_scale");

    $('#dc .img img').hover(function(){
        $(this).animate({opacity:0},'fast');
    },function(){
        $(this).animate({opacity:1},'fast');
    });
    $('#dd .img img').hover(function(){
        $(this).animate({opacity:0.6},'fast');
    },function(){
        $(this).animate({opacity:0},'fast');
    });
    $('#de .img img').hover(function(){
        $(this).animate({marginTop:'-851px'},'fast');
    },function(){
        $(this).animate({marginTop:0},'fast');
    });
    $('.img a').fancybox({
        openEffect:'fade'
    });
});