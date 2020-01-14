window.addEventListener('load', function() {
  var goSimulation = new Simulation();
  goSimulation.createLife();
});
// 'use strict';

// var Simuation = function() {
//   this.aquarium = new Aquarium(this);
// };

// Simulation.prototype.start = function() {
//   this.aquarium.drawAquarium();
//   this.aquarium.addFishEvent();
//   setInterval(this.aquarium.swimFish.bind(this.aquarium), 100);
// };

// var mySimulation = new Simulation();
// mySimulation.start();
