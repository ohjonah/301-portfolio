'use strict';

var app = app || {};

(function(module) {



  function Project(rawDataObj) {
    this.projectName = rawDataObj.projectName;
    this.description = rawDataObj.description;
    this.siteUrl = rawDataObj.siteUrl;
    this.repoUrl = rawDataObj.repoUrl;
  }

  Project.prototype.toHtml = function() {
    var template = $('#project-overlay').html();
    var templateRender = Handlebars.compile(template);
    return templateRender(this);
  };

  Project.loadAll = function(rawData) {

    var projects = rawData.map((projectObject) =>
      new Project(projectObject));

    projects.forEach(function(project) {
      $('#projects').append(project.toHtml());
    })
  }



  Project.fetchAll = function() {
    if (localStorage.rawData) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      app.projectView.initIndexPage();
    } else {
      $.getJSON('./data/rawData.json')
      .then(function(data) {
        localStorage.rawData = JSON.stringify(data);
        Project.loadAll(data);
        app.projectView.initIndexPage();
      }, function(err) {
        console.error('my stuff broke:', err);
      });
    }
  }

module.Project = Project;
} (app));
