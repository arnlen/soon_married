//= require fancybox
//= require modernizr
//= require shufflejs

// Overrideable options
Shuffle.options = {
  group: "preparation", // Initial filter group.
  speed: 250, // Transition/animation speed (milliseconds).
  easing: 'ease-out', // CSS easing function to use.
  itemSelector: '', // e.g. '.picture-item'.
  sizer: null, // Sizer element. Use an element to determine the size of columns and gutters.
  gutterWidth: '', // A static number or function that tells the plugin how wide the gutters between columns are (in pixels).
  columnWidth: '', // A static number or function that returns a number which tells the plugin how wide the columns are (in pixels).
  delimeter: null, // If your group is not json, and is comma delimeted, you could set delimeter to ','.
  buffer: 0, // Useful for percentage based heights when they might not always be exactly the same (in pixels).
  initialSort: null, // Shuffle can be initialized with a sort object. It is the same object given to the sort method.
  // throttle: throttle, // By default, shuffle will throttle resize events. This can be changed or removed.
  throttleTime: 300, // How often shuffle can be called on resize (in milliseconds).
  sequentialFadeDelay: 150, // Delay between each item that fades in when adding items.
  // supported: CAN_TRANSITION_TRANSFORMS // Whether to use transforms or absolute positioning.
};

$(document).ready(function() {
  var $grid = $('#grid'),
  		$filterOptions = $('.filter-options'),
      $sizer = $grid.find('.shuffle__sizer');

  $grid.shuffle({
    itemSelector: '.picture-item',
    sizer: $sizer
  });

  setupFilters($grid, $filterOptions);
});

// Set up button clicks
setupFilters = function($grid, $filterOptions) {
  var $btns = $filterOptions.children();
  $btns.on('click', function() {
    var $this = $(this),
        isActive = $this.hasClass( 'active' ),
        group = isActive ? 'all' : $this.data('group');

    // Hide current label, show current label in title
    if ( !isActive ) {
      $('.filter-options .active').removeClass('active');
    }

    $this.toggleClass('active');

    // Filter elements
    $grid.shuffle( 'shuffle', group );
  });

  $btns = null;
};


// Image Box
$(document).ready(function() {

  $('img.thumb_image').click(function() {
    var mediumPicturePlaceholder = $('.medium-picture-placeholder'),
        mediumPictureUrlText = $(this).parent().find('.medium-picture-url').text(),
        currentPictureId = $(this).parent().find('.current-id').text();

    $('.overlay').addClass('active');
    $('.image_box_container').addClass('active');

    console.log(mediumPicturePlaceholder);
    console.log(mediumPictureUrlText);
    console.log(currentPictureId);

    mediumPicturePlaceholder.html("<img src='" + mediumPictureUrlText + "'>");
  });

  $('.overlay').click(function() {
    $('.overlay').removeClass('active');
    $('.image_box_container').removeClass('active');
  });

  // Previous/Next picture
  $('button.previous').on('click', function() {
    previousPicture(context);
  });

  $('button.next').on('click', function() {
    nextPicture(context);
  });

  $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        previousPicture(context);
        break;

        case 39: // right
        nextPicture(context);
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  function previousPicture(context) {
    var picture_id = $(context).parent().attr('id'),
        previousPictureId = $(context).parent().parent().parent().parent().parent().parent().parent().find('#grid').find('.' + picture_id).find('.previous-id').text(),
        previous_picture_medium_url = $(context).parent().parent().parent().parent().parent().parent().parent().find('#grid').find('.' + picture_id).find('.previous-medium').text(),
        previous_picture_hd_url = $(context).parent().parent().parent().parent().parent().parent().parent().find('#grid').find('.' + picture_id).find('.previous-hd').text(),
        mediumPictureUrlNode = $(context).parent().find(".medium_picture_url"),
        hdPictureUrlNode = $(context).parent().find(".hd_picture_url");

    mediumPictureUrlNode.html("<img src='" + previous_picture_medium_url + "'>");
    hdPictureUrlNode.attr('href', previous_picture_hd_url);
    $(context).parent().attr('id', previousPictureId);
  }

  function nextPicture(context) {
    var picture_id = $(context).parent().attr('id'),
        nextPictureId = $(context).parent().parent().parent().parent().parent().parent().parent().find('#grid').find('.' + picture_id).find('.next-id').text(),
        next_picture_medium_url = $(context).parent().parent().parent().parent().parent().parent().parent().find('#grid').find('.' + picture_id).find('.next-medium').text(),
        next_picture_hd_url = $(context).parent().parent().parent().parent().parent().parent().parent().find('#grid').find('.' + picture_id).find('.next-hd').text(),
        mediumPictureUrlNode = $(context).parent().find(".medium_picture_url"),
        hdPictureUrlNode = $(context).parent().find(".hd_picture_url");

    mediumPictureUrlNode.html("<img src='" + next_picture_medium_url + "'>");
    hdPictureUrlNode.attr('href', next_picture_hd_url);
    $(context).parent().attr('id', nextPictureId);
  }
});