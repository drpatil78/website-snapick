'use strict';

/**
 * @ngdoc directive
 * @name websiteSnapickApp.directive:coverDemo
 * @description
 * # coverDemo
 */
angular.module('websiteSnapickApp')
  .directive('coverDemo', function () {

    return {

      template: '<div class="demo-feed">\
      				<div class="demo-feed-inner" ng-transclude>\
      				</div>\
      			</div>',

      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
      	images:'='
      },

      link: function postLink(scope, element, attrs) {
      	var animating = true;
      	var velocity = 20;
      	var scrolly = element.find('.demo-feed-inner')[0];
      	var el_list = scrolly.children;
      	var scroll_pos = 0;

      	function move(){
      		//console.log( 'raf' );

      		scroll_pos += 1;
      		//alert(el_list[0].offsetWidth, scrolly.scrollLeft);
      		if( el_list[0].offsetWidth < scroll_pos ){
      			// push it up the ass
      			scroll_pos -= el_list[0].offsetWidth;
      			scrolly.appendChild(el_list[0]);
      		}

      		scrolly.scrollLeft = (~~scroll_pos);
      		if( animating === true ){
      			requestAnimationFrame(move, element[0]);
      		}
      	}

      	function destroy(){
      		animating = false;
      	}
      	
      	scope.$on('$destroy', destroy);
      	var raf = requestAnimationFrame.bind(window, move, element [0]);
      	setTimeout(raf, 1000);
      	console.log("initalized");
      
      }
    };
  });
