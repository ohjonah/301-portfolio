'use strict';

$('.icon-menu').click(function() {
  $('nav').show();
});

var projects = [];

function Project(rawDataObj) {
  this.projectName = rawDataObj.projectName;
  this.description = rawDataObj.description;
  this.siteUrl = rawDataObj.siteUrl;
  this.repoUrl = rawDataObj.repoUrl;
}

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

console.log(projects);
