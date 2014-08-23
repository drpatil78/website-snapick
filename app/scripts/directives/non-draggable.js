'use strict';

/**
 * @ngdoc directive
 * @name websiteSnapickApp.directive:nonDraggable
 * @description
 * # nonDraggable
 */
angular.module('websiteSnapickApp')
  .directive('nonDraggable', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
      	element.on('dragstart', function(){
      		return false;
      	});
      }
    };
  });
