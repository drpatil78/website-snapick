'use strict';

/**
 * @ngdoc function
 * @name websiteSnapickApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteSnapickApp
 */
angular.module('websiteSnapickApp')
  .controller('MainCtrl', function ($scope) {
    $scope.featureTagLines = [
    	'Streaming',
    	'Syncing',
    	'Sharing',
    	'Filters',
    ];

    $scope.backgroundImages = [
    	'hero2',
    	'hero3',
    	'hero4',
    	'hero5'	
    ];

    $scope.feedImages = [
    	{ url: 'http://lorempixel.com/967/967/?t=1' },
    	{ url: 'http://lorempixel.com/967/967/?t=2' },
    	{ url: 'http://lorempixel.com/967/967/?t=3' },
    	{ url: 'http://lorempixel.com/967/967/?t=4' },
    ];

    $scope.state = {
    	featureBackgroundStyle : {
    		backgroundImage: ''
    	},
    	featureTagLine: $scope.featureTagLines[0],
    	activeSlide: 0
    }

    function setBackgroundStyle(index){
    	$scope.state.featureBackgroundStyle.backgroundImage = 'url(/images/backgrounds/' + $scope.backgroundImages[index] + '.jpg)';
    }
    setBackgroundStyle(0);

    function handleSlideChange(newVal, oldVal){
    	if( newVal !== oldVal ){
    		setBackgroundStyle(newVal);
		    $scope.state.featureTagLine = $scope.featureTagLines[newVal];
    	}
    }
    $scope.$watch('state.activeSlide', handleSlideChange);
    setInterval(console.log.bind(console, $scope.state.activeSlide), 1000);
  });	
