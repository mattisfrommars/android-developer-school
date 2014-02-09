'use strict';

angular.module('adsApp')
  .controller('ProblemsListCtrl', function ($scope, ProblemsService) {

    ProblemsService.get().then(function( problemList ){
      $scope.problemList = problemList.data;
    }, function(){
      debugger;
    })

  });
