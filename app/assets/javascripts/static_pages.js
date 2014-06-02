// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/


$(function() {


// ---------------------------------------------
// PAGE LOADING AND INIT

    // Load the music
    // Old HTML: <%= audio_tag 'Nat_King_Cole_LOVE.wav', autoplay: true %>
    var musicLOVE = new Audio(),
        musicLoaded = false;

    // Begin music loading
    console.log('Musics loading has started...');
    musicLOVE.src = 'audios/Nat_King_Cole_LOVE.ogg';

    musicLOVE.addEventListener('canplay', function() {
        console.log('... Musics loaded!');
        musicLoaded = true;
        musicLOVE.play();
        $('#loading_overlay').hide();
    });

    // Fallback if music can't be loaded
    setTimeout(function() {
        if (musicLoaded != true) {
            console.log('... Musics not loaded, fallback.');
            $('#loading_overlay').hide();
        }
    }, 5000);

    // Initiates dates
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


// ---------------------------------------------
// COMING YES/NO BUTTONS

    // Buttons coming from up on page load
    $('#coming_buttons').removeClass('up');

    // Buttons + form animation on click
    $('.yes, .no').on('click', function() {
        $('#coming_buttons').addClass('down');
        $('#form_container').removeClass('up');
    });

    // YES I'll come!
    $('#will_be_present').on('click', function() {
        $('#guest_will_be_present').val('true');
        $('label').text("Ton adresse nous permettra de t'envoyer un mail de rappel à quelques jours de l'événement !");
    });

    // NO I won't come...
    $('#wont_be_present').on('click', function() {
        $('#guest_will_be_present').val('false');
        $('label').text("Laisse-nous tes coordonnées, juste au cas où !");
    });


// ---------------------------------------------
// CONFIRMATION / CANCEL

    // Cancel button: restore previous "Yes/No" buttons
    $('.cancel').on('click', function() {
        $('#coming_buttons').removeClass('down');
        $('#form_container').addClass('up');
    });

    $("#new_guest").on("ajax:success", function(e, data, status, xhr) {
        $('#success_confirmation').removeClass('up');
        $('#form_container').addClass('down');
    });

    $("#new_guest").on("ajax:error", function(e, data, status, xhr) {
        console.log(e, data, status, xhr);
    });
});