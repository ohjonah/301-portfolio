'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('.hero-container').hide();
    $('.tab-content').hide();
    $('.about-me').show();
  };

  module.aboutController = aboutController;
})(app);
