'use strict';

/**
 * @ngdoc function
 * @name softwaveClientSideAngularJsApp.controller:ContactCtrl
 * @description
 * # MainCtrl
 * Controller of the softwaveClientSideAngularJsApp
 */
angular.module('softwaveClientSideAngularJsApp')
  .controller('ContactCtrl', ['$scope', 'HttpService', '$location',
    function ($scope, HttpService, $location) {

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
        } else {
          const messageDetails = {
            m_email: $scope.email,
            m_phoneNumber: $scope.phone,
            m_subject: $scope.subject,
            m_content: $scope.message
          }

          HttpService.post('/createdetail', messageDetails);
          alert("Thanks!" +" "+ $scope.email +"\nYour message has been sent and will be answered soon!")
          $location.path('/');
        }
      }

      $scope.clearEmailText = function () {
        $scope.email = '';
      }

      $scope.clearPhoneText = function () {
        $scope.phone = '';
      }

      $scope.clearSubjectText = function () {
        $scope.subject = '';
      }

      $scope.clearMessageText = function () {
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
        if (isValidEmail($scope.email)
          && isValidPhoneNumber($scope.phone)
          && isStringValid($scope.subject)
          && isStringValid($scope.message)) {
          return true;
        } else {
          return false;
        }
      }

      function isValidEmail(str) {
        if ((/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9_\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(str)) || str == "" || str == null) {
          return true;
        }
        else {
          alert("Please enter a valid email");
          return false;
        }
      }

      function isValidPhoneNumber(str) {
        if ((/^(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)$/.test(str)) || str == "" || str == null) {
          return true;
        }
        else {
          window.alert("invalid phone number");
          return false;
        }
      }
    }]);