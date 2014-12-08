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


// Fancybox

$(document).ready(function() {
  $("a.fancybox").fancybox();
  $("a.fancybox").click(function() {
    var mediumPictureUrlNode = $(this).parent().find(".medium_picture_url"),
        mediumPictureUrlText = mediumPictureUrlNode.text();

    mediumPictureUrlNode.html("<img src='" + mediumPictureUrlText + "'>");
  });
});