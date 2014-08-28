'use strict';

/**
 * @ngdoc directive
 * @name websiteSnapickApp.directive:team
 * @description
 * # team
 */
angular.module('websiteSnapickApp').directive('team', function () {
      // The minimum field effect required to 
      // form a connection
      var thresholdEnergy = 75,
      eMax = 125,
      eMin = 50,
      // Cache the 2 Pi
      TwoPI = Math.PI * 2;
      
      function Particle(xMax,yMax,eMax, eMin){
            //Todo: Add sanitzation
            this.generate(xMax, yMax, eMax, eMin);
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
            // Find absolute distance
            return Math.sqrt(Math.pow(par2.x - this.x, 2) + Math.pow(par2.y - this.y, 2)); 
      }

      Particle.prototype.isConnected = function(p2){
            return ((p2.energy * this.energy)/ this.distance(p2)) > thresholdEnergy;
      }
      
      Particle.prototype.findConnectedParticles = function(arrayOfParticles){
            this.connectedParticles = arrayOfParticles.filter( this.isConnected.bind(this) ); 
      }

      Particle.prototype.render = function(ctx){
            ctx.shadowBlur = this.energy* 2;
            ctx.beginPath();
            //Draw the particle itself
            ctx.arc(this.x, this.y, this.energy/10, 0,  TwoPI, false);
            ctx.closePath();
            ctx.fill();

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


      return {
            template: '<canvas class="hidden-xs"></canvas>',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                  var canvas = element.find('canvas')[0],
                  ctx = canvas.getContext('2d'),
                  aliveParticles = 0,     
                  particles = [],
                  noOfParticles = 50,
                  w  = window.innerWidth,
                  h = window.innerHeight,
                  a = 255,r = 87,g = 46,b = 189,
                  animating = true;
      

                  // Bootstrap it
                  for( var i = 0; i < noOfParticles; i++){
                        particles.push( new Particle(w,h, eMax, eMin) );
                  }
                  
                  canvas.width = window.innerWidth;
                  canvas.height = window.innerHeight;
                  ctx.shadowColor = ctx.strokeStyle = ctx.fillStyle =
                  'rgba(cr,cg,cb,ca)'.replace('cr', r).replace('cg', g).replace('cb', b).replace('ca', a);

                  window.addEventListener('resize', handleResize);

                  function handleResize(){
                        canvas.width = w = window.innerWidth;
                        canvas.height = h = window.innerHeight;
                        ctx.shadowColor = ctx.strokeStyle = ctx.fillStyle =
                              'rgba(cr,cg,cb,ca)'.replace('cr', r).replace('cg', g).replace('cb', b).replace('ca', a);

                        if( w < 768 ){
                              animating = false;
                        }else if( animating === false ){
                              animating = true;
                              render();
                        }
                  }

                  function render(){
                        ctx.clearRect(0, 0, w, h);

                        
                        particles = particles.filter(function(p){
                              return !p.dead;
                        });

                        aliveParticles = particles.length;
                        for( var i = 0; i < aliveParticles; i++){
                              particles[i].move(w, h);
                              particles[i].findConnectedParticles( particles );
                              particles[i].render(ctx);
                        }
                        
                        for( var j = 0; j < noOfParticles - aliveParticles; j++ ){
                              particles.push( new Particle(w, 0, eMax, eMin) );
                        }
                        if( animating ){
                              requestAnimationFrame( render );
                        }
                  }
                  if( w < 768 ){
                        animating = false;
                        return;
                  }

                  render();
            }
      }; 
});
