'use strict';

angular.module('adsApp')
  .service('SolutionsService', function Problems( $http ) {


    this.post = function ( problemId, params ) {
      return $http.post( "http://127.0.0.1:9011/problem/"+problemId+"/solution", params );
    }


  });
