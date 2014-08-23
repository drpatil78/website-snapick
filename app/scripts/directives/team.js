'use strict';

/**
 * @ngdoc directive
 * @name websiteSnapickApp.directive:team
 * @description
 * # team
 */
angular.module('websiteSnapickApp')
  .directive('team', function () {
    return {
      template: '<canvas></canvas>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	var canvas = element.find('canvas')[0];
      	var ctx = canvas.getContext('2d');
		var thresholdEnergy = 50;
		var TwoPI = Math.PI * 2;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

      	function Particle(xMax,yMax,eMax, eMin){
      		// Add sanitzation
      		this.generate(xMax, yMax, eMax, eMin);
      		//this.findConnectedParticles();
      		this.dead = false;
      	}

      	Particle.prototype.generate = function(xMax, yMax, eMax, eMin){
      		this.x = ~~xMax * Math.random();
      		this.y = ~~yMax * Math.random();
      		this.xVel = Math.random() * 2;
      		this.yVel = Math.random() * 5;
      		this.energy   = ~~(((eMax - eMin) * Math.random()) + eMin);
      	}

      	Particle.prototype.distance = function(par2){
      		// Use the abs distance some day.
      		return Math.sqrt(Math.pow(par2.x - this.x, 2) + Math.pow(par2.y - this.y, 2)); 
      	}

      	Particle.prototype.isConnected = function(p2){
      		///console.log((p2.energy * this.energy)/ Math.pow(this.manhattanDistance(p2),1) > thresholdEnergy);
      		return ((p2.energy * this.energy)/ this.distance(p2)) > thresholdEnergy;
      	}
      	
      	Particle.prototype.findConnectedParticles = function(arrayOfParticles){
      		this.connectedParticles = arrayOfParticles.filter( this.isConnected.bind(this) ); 
      	}

      	Particle.prototype.render = function(ctx){

      		var r,g,b,a;
      		r = g = b = a = (this.energy/10) * 255;

      		ctx.beginPath();
      		ctx.shadowColor = ctx.strokeStyle = ctx.fillStyle =
      			'rgba(cr,cg,cb,ca)'.replace('cr', r).replace('cg', g).replace('cb', b).replace('ca', a);
      		ctx.shadowBlur = this.energy/2;
      		// Draw the particle itself
      		ctx.arc(this.x, this.y, this.energy/10,0,  TwoPI, false);
      		ctx.closePath();
      		ctx.stroke();
      		ctx.fill();

      		ctx.strokeStyle = 'white';
      		ctx.shadowBlur = 0;
      		var parLength = this.connectedParticles.length;
      		
      		for( var i = 0; i < parLength; i++ ){

      			ctx.beginPath();
      			ctx.moveTo(this.x, this.y);
      			ctx.lineTo(this.connectedParticles[i].x, this.connectedParticles[i].y);
      			ctx.closePath();
      			ctx.stroke();
      		}
      		
      		// Draw the lines b/w conencted particles
      	}

      	Particle.prototype.move = function(maxX, maxY){
      		this.x += this.xVel;
      		this.y += this.yVel;
      		if( this.x < -10 || this.x > maxX ){
      			this.dead = true;
      		}
      		if( this.y < -10 || this.y > maxY ){
      			this.dead = true;
      		}
      	}

      	function render(){
      		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      		
      		particles = particles.filter(function(p){
      			return !p.dead;
      		});
      		var aliveParticles = particles.length;
	      	for( var i = 0; i < aliveParticles; i++){
	      		particles[i].move(w, h);
	      		particles[i].findConnectedParticles( particles );
	      		particles[i].render(ctx);
	      	}
	      	
	      	for( var j = 0; j < noOfParticles - aliveParticles; j++ ){
	      		particles.push( new Particle(w, 0, eMax, eMin) );
	      	}

	      	requestAnimationFrame( render );
      	}


      	var particles = [];
      	var noOfParticles = 50;
      	var w  = window.innerWidth, h = window.innerHeight, eMax = 100, eMin = 10;

      	for( var i = 0; i < noOfParticles; i++){
      		particles.push( new Particle(w,h, eMax, eMin) );
      	}

      	requestAnimationFrame( render );
      }
    };
  });
