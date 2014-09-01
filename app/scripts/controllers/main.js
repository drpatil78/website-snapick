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
        'Photo Sharing in built !',
    	'Enhance & Filter'
    ];
    
    $scope.featurePhotos = [
        '/images/app/Cloud.png',
        '/images/app/catalog.png',
        '/images/app/social.png',
        '/images/app/filter.png',
    ];
    
    $scope.featureExplanations = [
        'Photosphere (TM) is the collection of all your photos in multiple cloud & social services, In one place. The smart photosphere you can access all your photos, without filling your device.',
        'Snapick organizes your library smartly, buidling Smart Folders(tm) these dynamic folders are built on content and make it easy to browse through photos.',
        'Snapick comes with inbuilt social network, which allows you to share your photos with your friends &amp; family with ease. It also integrates with popular social networks and organizes the content automagically, so you never miss a moment ever stay social !.',
        'Snapick comes with simple yet powerful filters and editing tools to enhance your photos, whats more is using our incredible AI we provide automated suggestions that are content aware.',
    ];


    $scope.feedImages = [
    	{ url: '/images/top/frag3.png' },
    	{ url: '/images/top/frag2.png' },
    	{ url: '/images/top/frag1.png' },
    	{ url: '/images/top/frag4.png' },
    ];

    $scope.plans = [
        {
            name: "Free",
            details: "Store upto 2 GB of images free for life"
        },{
            name: "Standard",
            details: "Upto 5 GB of photos for $0.99 a month"
        },{
            name: "Savetastic",
            details: "Upto 12 GB of memories for $2.99"
        },{
            name: "Premium",
            details: "Save upto 20 GB of memories for $5.99"
        }
    ];
    $scope.state = {
    	featureTagLine: $scope.featureTagLines[0],
        activeSlide: 0
    }


    function handleSlideChange(newVal, oldVal){
    	if( newVal !== oldVal ){
		    $scope.state.featureTagLine = $scope.featureTagLines[newVal];
    	}
    }
    $scope.$watch('state.activeSlide', handleSlideChange);
    setInterval(console.log.bind(console, $scope.state.activeSlide), 1000);
  });	
