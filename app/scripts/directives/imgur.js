'use strict';

angular.module('adsApp')
  .directive('imgur', function () {
    return {
      templateUrl: '/views/directives/imgur.html',
      restrict: 'E',
      scope : {
        url : '@'
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
