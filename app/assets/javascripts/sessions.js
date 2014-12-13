// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

//= require flipclock.min

$(function() {

// ---------------------------------------------
// PAGE LOADING AND INIT

    console.log($('#countdown_container').attr('style'));

    // Initiates dates
    var dDay = new Date(2014, 7, 15, 14, 0, 0),
        now = new Date();

    // Difference between target and now
    var timeLeft = now.getTime() / 1000 - dDay.getTime() / 1000;

    // Flipclock for homepage countdown
    var countdown = $('#countdown_container').FlipClock({
        clockFace: 'DailyCounter',
        language: 'fr'
    });

    countdown.setTime(timeLeft);
    countdown.setCountdown(false);
});