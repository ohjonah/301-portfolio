'use strict';

var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.hero-container .tab-content .template').hide();
    // $('.tab-content').hide();
    // $('.template').hide();
    $('.' + $(this).data('content')).show();
    console.log($(this).data('content'));
    // $('.tab-content').hide();
    // $('.' + $(this).data('content')).fadeIn();

  });
  //
  // $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

projectView.handleMainNav();
