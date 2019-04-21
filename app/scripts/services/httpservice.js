'use strict';

/**
 * @ngdoc service
 * @name softwaveClientSideAngularJsApp.HttpService
 * @description
 * # HttpService
 * Service in the softwaveClientSideAngularJsApp.
 */
angular.module('softwaveClientSideAngularJsApp')
  .service('HttpService', function ($http) {
    let endPoint = 'http://localhost:59295';

    function post(path, data) {
      $http.post(endPoint + path, data);
    }

    return {
      post: post
    }
  });
