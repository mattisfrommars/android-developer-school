'use strict';

angular.module('adsApp')
  .directive('gist', function () {
    return {
      templateUrl: '/views/directives/gist.html',
      restrict: 'E',
      scope : {
        url : '@'
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
