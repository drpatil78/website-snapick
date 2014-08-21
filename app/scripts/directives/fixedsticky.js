'use strict';

/**
 * @ngdoc directive
 * @name websiteSnapickApp.directive:fixedsticky
 * @description
 * # fixedsticky
 */
angular.module('websiteSnapickApp')
  .directive('fixedsticky', function () {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
      	element.fixedsticky();
      }
    };
  });
