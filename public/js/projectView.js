'use strict';
var app = app || {};

(function(module) {

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

  projectView.create = function() {
    var project;
    $('#projects').empty();

    project = new Project({
      projectName: $('#project-title').val(),
      description: $('#project-description').val(),
      siteUrl: $('#project-url').val(),
      siteRepo: $('#project-repo').val()
    });

    console.log(this.siteRepo);

    $('#projects').append(project.toHtml());

    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

    $('#export-field').show();
    $('#project-json').val(JSON.stringify(project) + ',');
  }


  projectView.initIndexPage = function() {
    hamburgerClick();
    projectView.handleMainNav();
  }

  module.projectView = projectView;
} (app));
