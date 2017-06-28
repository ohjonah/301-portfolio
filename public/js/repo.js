var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = () =>
    $.ajax({
      url: 'https://api.github.com/user/repos',
      headers: {'Authorization': `token ${githubToken}`},
      method: 'GET'
    }).then((data) => repos.all = data);

  module.repos = repos;
})(app);
