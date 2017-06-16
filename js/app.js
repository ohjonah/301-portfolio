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

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
