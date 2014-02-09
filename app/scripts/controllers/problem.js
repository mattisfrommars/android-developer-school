'use strict';

angular.module('adsApp')
  .controller('ProblemCtrl', function ($scope, $routeParams, $window, ProblemsService, SolutionsService) {
    var id = $routeParams.problem_id;


    var defaultPerson = {
      "id":null,
      "displayName":"LOGGED OUT",
      "image":{}
    };


    function getProblem () {
      ProblemsService.get( id ).then(function( problem ){
        $scope.problem = problem.data;
      }, function(){
        debugger;
      });
    }

    getProblem();

    $scope.person = defaultPerson;


    $scope.$on('event:google-plus-signin-success', function (event,authResult) {
      $window.gapi.client.load('plus','v1', function(){
        var request = $window.gapi.client.plus.people.get({
          'userId': 'me'
        });
        request.execute(function(resp) {
          $scope.$apply(function(){
            $scope.person = resp;
          });
        });
      });
    });
    $scope.$on('event:google-plus-signin-failure', function (event,authResult) {
      $scope.$apply(function(){
        $scope.person = defaultPerson;
      });
    });

    $scope.signOut = function() {
      $window.gapi.auth.signOut();
    };

    $scope.submit = function() {
      var postId = $scope.problem.id;
      var submittedBy = $scope.person;
      var body = {
        submitted_by : submittedBy,
        gist : $scope.gist,
        imgur : $scope.imgur
      };

      SolutionsService.post( postId, body )
        .then(function(){
          success();
          getProblem();
        }, function( err ){
          error( err );
          getProblem();
        });
    };

    function success () {
      $scope.gist = "";
      $scope.imgur = "";
    }

    function error ( err ) {
      if ( /Model exists at key/.test( err.data.message ) ) {
         return $scope.serverError = "Only one entry per person at the moment";
      }
      debugger;
    }

  });
