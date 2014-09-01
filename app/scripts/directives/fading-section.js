'use strict';

/**
 * @ngdoc directive
 * @name websiteSnapickApp.directive:fadingSection
 * @description
 * # fadingSection
 */
angular.module('websiteSnapickApp')
  .directive('fadingSection', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
      	var scrollMaxY = window.innerHeight - 100;
      	var child = element.find('.container');
      	var lastY = 0;
      	function handleWindowScroll(){
      		var y =  window.scrollY;

      		if( lastY < 1 || lastY > scrollMaxY ){
      			scope.$emit('fadingHeaderTransparentize', !!lastY);
      		}

      		if( y < 1 && lastY > 1 ){
      			scope.$emit('fadingHeaderOpaque', !!lastY);      			
      		}

      		lastY = y;

      		element.css('opacity', 1 - y/scrollMaxY );
      		child.css('transform', 'scale('+ Math.min((1 - y*0.25/scrollMaxY), 1) +')')
      	}
      	if( !(device.mobile() || device.tablet()) ){
	      	window.addEventListener('scroll', handleWindowScroll);
      	}
      }
    };
  });
