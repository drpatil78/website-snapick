'use strict';

/**
 * @ngdoc directive
 * @name websiteSnapickApp.directive:content
 * @description
 * # content
 */
angular.module('websiteSnapickApp')
  .directive('content', function () {
    return {
      template: '<div class="content" ng-transclude></div>',
      transclude: true,
      restrict: 'E',
      replace: true
    };
  });
