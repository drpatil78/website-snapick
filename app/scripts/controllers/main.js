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
    	'Introducing the Photosphere',
        'Organize your photos smartly',
    	'Enhance & Filter',
        'Design',
        
    ];
    
    $scope.featurePhotos = [
        '/images/app/Cloud.png',
        '/images/app/catalog.png',
        '/images/app/Cloud.png',
        '/images/app/Cloud.png'
    ];
    
    $scope.featureExplanations = [

        'Photosphere (TM) is the collection of all your photos in multiple cloud & social services, In one place. The smart photosphere you can access all your photos, without filling your device.',
        'Snapick organizes your library smartly, buidling Smart Folders(tm) these dynamic folders are built on content and make it easy to browse through photos.',
        'Snapick comes with simple yet powerful filters and editing tools to enhance your photos, whats more is using our incredible AI we provide automated suggestions that are content aware.',
        'Snapick is designed from ground up to provide your photos the respect they deserve, the app adapts automatically with the content appearing fresh and appealing everytime in a brand new way !',
    ];

    $scope.backgroundImages = [
    	'hero2',
    	'hero3',
    	'hero4',
    	'hero5'	
    ];

    $scope.feedImages = [
    	{ url: '/images/top/frag3.png' },
    	{ url: '/images/top/frag2.png' },
    	{ url: '/images/top/frag1.png' },
    	{ url: '/images/top/frag4.png' },
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
