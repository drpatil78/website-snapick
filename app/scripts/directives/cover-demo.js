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
      	var scrollingElement = element.find('.demo-feed-inner')[0];
      	var elementList = scrollingElement.children;
      	var scrollPos = 0;

      	/*
         * function updateContentArray
         * return type : Reference to a Dom Element,
         * The dom element will be pushed at the end of the .children of the gutter
       	 */
      	function updateContentArray(){
      		var el = elementList[0];

      		// Remove the first element;
      		scrollingElement.removeChild( el );
      		if( scope.updateContentArray ){
      			scrollingElement.appendChild( scope.updateContentArray () );
      		}else{
      			scrollingElement.appendChild( el );
      		}
      	}

      	function move(){
      		//console.log( 'raf' );

      		scrollPos += 1;
      		//alert(elementList[0].offsetWidth, scrollingElement.scrollLeft);
      		if( elementList[0].offsetWidth < scrollPos ){
      			// push it up the ass
      			scrollPos -= elementList[0].offsetWidth;
      			updateContentArray();
      		}

      		scrollingElement.scrollLeft = (~~scrollPos);
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
