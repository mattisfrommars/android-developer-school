'use strict';

angular.module('adsApp')
  .service('ProblemsService', function Problems( $http ) {

    var BASE_URL = "http://127.0.0.1:9011/problem/";


    this.get = function ( id ) {
      if ( !id ) {
        return $http.get( BASE_URL );
      }
      return $http.get( BASE_URL+id );
    }


  });
