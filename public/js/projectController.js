'use strict';

var app = app || {};

(cuntion(module) {
  const projectController = {};

  projectController.index = () => {
    $('main').hide();
    $('.projects').show();
    $('#projects').show();
  };

  module.projectController = projectController;
})(app);
