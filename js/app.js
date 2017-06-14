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

+  $newArticle.removeClass('template');
    if (!this.publishedOn) $newArticle.addClass('draft');
    $newArticle.data('category', this.category);

   /* TODO: Now use jQuery traversal and setter methods to fill in the rest
   of the current template clone with properties from this particular Article instance.
   We need to fill in:

     1. author name,
     2. author url,
     3. article title,
      4. article body, and
      5. publication date. */

 -    $newArticle.find('.byline a').html(this.author);
 +  $newArticle.find('.byline a').html(this.author);
 +  $newArticle.find('.byline a').attr('href', this.authorUrl);
 +  $newArticle.find('h1').html(this.title);
 +  $newArticle.find('.article-body').html(this.body);
 +  $newArticle.find('time').attr('datetime', this.publishedOn);

    // Display the date as a relative number of 'days ago'
    $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
   $newArticle.append('<hr>');
   return $newArticle;
 };

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

console.log(projects);
