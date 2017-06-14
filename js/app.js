'use strict';

$('.icon-menu').click(function() {
  $('nav').show().toggle();
});

function Project(projectName, description, siteURL, repoURL) {
  this.projectName = projectName;
  this.description = description;
  this.siteURL = siteURL;
  this.repoURL = repoURL;
}

var test = new Project('States Game', 'Lorem Ipsum Text', 'www.google.com', 'www.bing.com');

console.log(test);
