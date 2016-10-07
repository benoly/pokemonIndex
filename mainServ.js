angular.module("pokemonIndex")
.service("mainServ",function($http){

this.getPokemon=function(){
    return $http({
      method: "GET",
      url: "http://pokeapi.co/api/v2/pokemon"
    }).then(function(response){
      return response.data.results;
    });
  };

  this.getOne=function(obj){
    return $http({
      method: "GET",
      url: obj.url
    }).then(function(response){
      return response.data;
    });
  };


});
