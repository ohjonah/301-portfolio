'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('main').hide();
    $('.about-me').show();
  };

  module.aboutController = aboutController;
})(app);
