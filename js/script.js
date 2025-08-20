$(function(){
    $(".answer").hide();
    $(".question").click(function(){
        $(this).next().slideToggle()
        $(this).children().children('img').toggleClass('turn')
    });
});