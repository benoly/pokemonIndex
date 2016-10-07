angular.module("pokemonIndex",["ui.router"])
.config(function($urlRouterProvider, $stateProvider){
  $stateProvider
    .state("home", { 
      url: "/",
      templateUrl: "/templates/home.html"
    })
    .state("list", {
      url: "/list",
      templateUrl: "/templates/list.html"
    })
    .state("result", {
      url: "/result",
      templateUrl: "/templates/results.html"
    });

  $urlRouterProvider.otherwise("/");


});
