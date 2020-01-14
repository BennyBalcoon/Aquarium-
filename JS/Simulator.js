function Simulation() {
  // this.aquarium = aquarium;
}

Simulation.prototype.createLife = function() {
  var aquarium = new Aquarium();
  aquarium.drawAquarium();

  window.addEventListener('click', function(event) {
    // var nemo = window.document.createElement('div');
    var nemo = new Fish(event.pageX, event.pageY, aquarium);
    var AquariumBorderLeft = nemo.x >= aquarium.myAquarium.offsetLeft;
    var AquariumBorderRight = nemo.x <= aquarium.myAquarium.offsetWidth;
    var AquariumBorderTop = nemo.y >= aquarium.myAquarium.offsetTop;
    var AquariumBorderBottom =
      nemo.y <=
      aquarium.myAquarium.clientHeight + aquarium.myAquarium.offsetTop;

    if (
      AquariumBorderBottom &&
      AquariumBorderLeft &&
      AquariumBorderRight &&
      AquariumBorderTop
    ) {
      aquarium.addFish(nemo);
      nemo.drawFish();
      nemo.move();
    }
  });
};
