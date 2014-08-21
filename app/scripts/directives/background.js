'use strict';

/**
 * @ngdoc directive
 * @name websiteSnapickApp.directive:background
 * @description
 * # background
 */
angular.module('websiteSnapickApp')
  .directive('background', function () {
    return {
      template: '<div class="background" ng-transclude></div>',
      restrict: 'E',
      replace: true,
      transclude: true
    };
  });
