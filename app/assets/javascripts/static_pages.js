// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/


$(function() {


// ---------------------------------------------
// PAGE LOADING AND INIT

    //Initiates dates
    var dDay = new Date(2014, 7, 15, 14, 0, 0),
        now = new Date(); 

    // Difference between target and now
    var timeLeft = dDay.getTime() / 1000 - now.getTime() / 1000;

    // Flipclock for homepage countdown
    var countdown = $('#countdown_container').FlipClock({
        clockFace: 'DailyCounter',
        language: 'fr'
    });

    countdown.setTime(timeLeft);
    countdown.setCountdown(true);

    // Hide hidden (hiddable ?) fields (lol) at page load
    $('#guest_will_be_present').hide();

// END DATE
// ---------------------------------------------


// ---------------------------------------------
// BUTTONS ANIMATIONS

    $('button').hover(
        function() {
            $(this).addClass('beating');
        },
        function() {
            $(this).removeClass('beating');
        }
    );

// END BUTTONS ANIMATIONS 
// ---------------------------------------------


// ---------------------------------------------
// COMING YES/NO BUTTONS

    // Buttons coming from up on page load
    $('#coming_buttons').removeClass('up');

    // Buttons + form animation on click
    $('.yes, .no').on('click', function() {
        $('#coming_buttons').addClass('down');
        $('#form_container').removeClass('up');
        $('#final_buttons').removeClass('up');
    });

    // YES I'll come!
    $('#will_be_present').on('click', function() {
        $('#guest_will_be_present').val('true');
    });

    // NO I won't come...
    $('#wont_be_present').on('click', function() {
        $('#guest_will_be_present').val('false');
        $('#guest_email').hide();
        $('label').hide();
    });



// END COMING YEST/NO BUTTONS
// ---------------------------------------------

});