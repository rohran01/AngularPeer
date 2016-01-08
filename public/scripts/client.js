/**
 * Created by jeremycloutier on 1/8/16.
 */
var app = angular.module('myApp', []);

console.log('It works!');

app.controller('myController', function($scope, $http){
   $scope.candidates = function(){           // ng-click='candidates'
      $http.get('/getRepublican').then(function(response){
         $scope.repCandidates = response.data.republicans;
         $scope.repNumber = randomNumber(1, response.data.republicans.length);
         $scope.repPick = response.data.republicans[$scope.repNumber-1].Name;
         console.log('republican' + $scope.repPick);
         console.log(response.data.republicans);
      })

      $http.get('/getDemocrat').then(function(response){
         $scope.demCandidates = response.data.democrats;
         $scope.demNumber = randomNumber(1, response.data.democrats.length);
         $scope.demPick = response.data.democrats[$scope.demNumber-1].Name;
         console.log(response.data.democrats);
      })

   };

   $scope.choose = function(){               // ng-click='choose'
      //$http.get('/getRepublican').then(function(response){
      //   $scope.repNumber = randomNumber(1, response.data.republicans.length);
      //   $scope.repPick = response.data.republicans[$scope.repNumber-1].Name;
      //    console.log('republican' + $scope.repPick);
      //}).then(
      //$http.get('/getDemocrat').then(function(response){
      //   $scope.demNumber = randomNumber(1, response.data.democrats.length);
      //   $scope.demPick = response.data.democrats[$scope.demNumber-1].Name;
      //   console.log('democrat' + $scope.demPick);
      //
      //}));
       $scope.winner =(pickBetween($scope.repPick, $scope.demPick));
   }


});

function randomNumber(min, max) {
   return Math.floor(Math.random() * (1 + max - min) + min);
}

function pickBetween(rep, dem){

    if (randomNumber(0, 1) == 0){
        return rep
    } else {
        return dem;
    }
}