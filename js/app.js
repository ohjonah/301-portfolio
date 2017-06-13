'use strict';

function Projects(projectName, summary, siteURL, repoURL) {
  this.projectName = projectName;
  this.summary = summary;
  this.siteURL = siteURL;
  this.repoURL = repoURL;
}

Projects('States Game', 'Lorem Ipsum Text', 'www.google.com', 'www.bing.com');
