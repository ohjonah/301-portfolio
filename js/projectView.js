'use strict';

var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.hero-container').hide();
    $('.tab-content').hide();
    $('.template').hide();
    $('.' + $(this).data('content')).show();
  });
};

projectView.handleMainNav();
