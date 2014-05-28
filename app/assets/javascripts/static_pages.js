// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/


$(function() {

    // Initiates dates
    var dDay = new Date(2014, 7, 15, 14, 0, 0),
        now = new Date(); 

    // Difference between target and now
    var timeLeft = dDay.getTime() / 1000 - now.getTime() / 1000;

    // Flipclock for homepage countdown
    var countdown = $('.countdown_container').FlipClock({
        clockFace: 'DailyCounter',
        language: 'fr'
    });

    countdown.setTime(timeLeft);
    countdown.setCountdown(true);

    // Images

    // Image 1 coming from left
    $('.wendy_arnaud_01').addClass('visible');

    // Buttons hover and heart beats

    $('button').hover(
        function() {
            $(this).addClass('active');
        },
        function() {
            $(this).removeClass('active');
        }
    );

});