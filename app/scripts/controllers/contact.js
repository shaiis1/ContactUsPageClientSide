'use strict';


/**
 * @ngdoc function
 * @name softwaveClientSideAngularJsApp.controller:ContactCtrl
 * @description
 * # MainCtrl
 * Controller of the softwaveClientSideAngularJsApp
 */
angular.module('softwaveClientSideAngularJsApp')
  .controller('ContactCtrl', ['$scope', 'HttpService',
    function ($scope, HttpService) {

      $scope.header = {
        "color": "#4a4",
        "text-align": "center"
      };

      $scope.email = 'Email';
      $scope.phone = 'Phone Number';
      $scope.subject = 'Subject';
      $scope.message = 'Message';
      $scope.isFormValid = true;

      $scope.createContactDetails = function () {
        $scope.isFormValid = true;
        if (!isArgumentsValid()) {
          $scope.isFormValid = false;
          console.error('Some arguments are not valid, aborting.');
          $scope.email = 'Email';
          $scope.phone = 'Phone Number';
          $scope.subject = 'Subject';
          $scope.message = 'Message';
          return;
        }

        else
        {
        const messageDetails = {
          m_email: $scope.email,
          m_phoneNumber: $scope.phone,
          m_subject: $scope.subject,
          m_content: $scope.message
        }

        HttpService.post('/createdetail', messageDetails);
       }
      }

      $scope.clearEmailText = function(){
        $scope.email = '';
      }

      $scope.clearPhoneText = function(){
        $scope.phone = '';
      }

      $scope.clearSubjectText = function(){
        $scope.subject = '';
      }

      $scope.clearMessageText = function(){
        $scope.message = '';
      }

      function isStringValid(str) {
        if (str === null || str === undefined || str === '') {
          return false;
        } else {
          return true;
        }
      }

      function isArgumentsValid() {
        if (isStringValid($scope.email)
          || isStringValid($scope.phone)
          || isStringValid($scope.subject)
          || isStringValid($scope.message)) {
          return true;
        } else {
          return false;
        }
      }
    }]);