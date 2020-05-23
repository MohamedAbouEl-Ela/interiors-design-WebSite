$(function(){

// Navigation Bar

    $(window).scroll(function(){
        $('nav').toggleClass('toggle', $(this).scrollTop() > 130);
    });


    $('.first').click(function () {
        $('.one').show();
        $('.two').hide();
    });

    $('.second').click(function () {
        $('.two').show();
        $('.one').hide();
    });



    // Ask Section

    $('.answer1').css('display','block');
  
    $('.ask h5').click(function () {
        $(this).next().slideToggle();
        $('.ask p').not($(this).next()).slideUp();
    })


});











