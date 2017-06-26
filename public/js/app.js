'use strict';

var projects = [];

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
  rawData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });

  projects.forEach(function(project) {
    $('#projects').append(project.toHtml());
  });
}



Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    projectView.initIndexPage();
  } else {
    $.getJSON('./data/rawData.json')
    .then(function(data) {
      localStorage.rawData = JSON.stringify(data);
      Project.loadAll(data);
      projectView.initIndexPage();
    }, function(err) {
      console.error('my stuff broke:', err);
    });
  }
}
