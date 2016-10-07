angular.module("pokemonIndex")
.controller("mainCtrl",function($scope, mainServ){

  $scope.getPokemon = function(){
  mainServ.getPokemon()
  .then(function(response){
    $scope.data=response;
    console.log(response);
    });
  };
  $scope.getPokemon();

  $scope.getOne=function(obj) {
    mainServ.getOne(obj)
    .then(function(response){
      $scope.onePokemon=response;
      console.log(response);
    });
  };

});
