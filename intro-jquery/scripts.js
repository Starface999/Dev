$(document).ready(function(){
    $('.enlarge').hover(function() {
        $(this).addClass('transition');
    
    }, function() {
        $(".enlarge").removeClass('transition');
    });
});