//= require modernizr
//= require shufflejs

// --------------------------------------------------------------------
//                            ShuffleJS

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


// --------------------------------------------------------------------
//          Image Box: custom Image display by @arnlen

$(document).ready(function() {

  // Open the ImageBox on click on an image
  $('img.thumb_image').on('click', function() {
    var mediumPicturePlaceholder = $('.medium-picture-placeholder'),
        mediumPictureUrlText = $(this).parent().find('.medium-picture-url').text(),
        hdPictureUrlText = $(this).parent().find('.hd-picture-url').text(),
        currentPictureId = $(this).parent().find('.current-id').text();

    $('.hd_picture_url').attr('href', hdPictureUrlText);
    mediumPicturePlaceholder.html("<img src='" + mediumPictureUrlText + "'>");
    $('.selected-picture-id').text(currentPictureId);

    openImageBox();
  });

  // Close the Image box on demand
  $('.overlay').on('click', function() { closeImageBox(); });
  $('.close').on('click', function() { closeImageBox(); });

  // Previous/Next picture
  $('button.previous').on('click', function() {
    var context = this;

    // DEBUG
    console.log(context);

    changeImageBoxPicture('previous', context);
  });
  $('button.next').on('click', function() {
    var context = this;

    // DEBUG
    console.log(context);

    changeImageBoxPicture('next', context);
  });

  $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        var context = $('button.previous')[0];
        changeImageBoxPicture('previous', context);
        break;

        case 39: // right
        var context = $('button.next')[0];
        changeImageBoxPicture('next', context);
        break;

        case 27: // escape
        closeImageBox();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });


  // --------------------------------------------------------------------
  //                            FUNCTIONS

  function openImageBox() {
    $('.overlay').addClass('active');
    $('.image_box_container').addClass('active');
    $('body').css('overflow', 'hidden');
  }

  function closeImageBox() {
    $('.overlay').removeClass('active');
    $('.image_box_container').removeClass('active');
    $('body').css('overflow', 'auto');
  }

  function changeImageBoxPicture(previousOrNext, context) {
    var selectedPictureId = $(context).parent().find('.selected-picture-id').text(),
        selectedPictureNode = $('#grid').find('.picture-' + selectedPictureId),
        previousPictureId = selectedPictureNode.find('.previous-id').text(),
        nextPictureId = selectedPictureNode.find('.next-id').text(),
        previousPictureMediumUrl = selectedPictureNode.find('.previous-medium').text(),
        nextPictureMediumUrl = selectedPictureNode.find('.next-medium').text(),
        previousPictureHdUrl = selectedPictureNode.find('.previous-hd').text(),
        nextPictureHdUrl = selectedPictureNode.find('.next-hd').text(),
        mediumPicturePlaceholder = $('.medium-picture-placeholder');

    if (previousOrNext == 'next') {
      mediumPicturePlaceholder.html("<img src='" + nextPictureMediumUrl + "'>");
      $('.hd_picture_url').attr('href', nextPictureHdUrl);
      $('.selected-picture-id').text(nextPictureId);
    } else {
      mediumPicturePlaceholder.html("<img src='" + previousPictureMediumUrl + "'>");
      $('.hd_picture_url').attr('href', previousPictureHdUrl);
      $('.selected-picture-id').text(previousPictureId);
    }
  }
});