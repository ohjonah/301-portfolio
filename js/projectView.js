'use strict';

var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.hero-container').hide();
    $('.tab-content').hide();
    $('.' + $(this).data('content')).show();
    $('.template').hide();
  });
};

function hamburgerClick() {
  $('.icon-menu').on('click', function() {
    $('nav').toggleClass('toggle');
  });
}

projectView.initNewProjectPage = function() {
  $('.tab-content').show();

  $('#export-field').hide();
  $('project-json').on('focus', function() {
    this.select();
  });

  $('#new-form').on('change', 'input, textarea', projectView.create);
}



projectView.initIndexPage = function() {
  hamburgerClick();
  projectView.handleMainNav();
}
