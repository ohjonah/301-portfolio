'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('.hero-container').hide();
    $('.projects').hide();
    $('.about-me').show();
  };

  module.aboutController = aboutController;
})(app);
