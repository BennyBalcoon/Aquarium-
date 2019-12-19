function Simulation() {
  // this.aquarium;
  // this.mouseX;
  // this.mouseY;
}

Simulation.prototype.createLife = function() {
  var myAquarium = window.document.createElement('div');
  var aquarium = new Aquarium();
  myAquarium.style.backgroundColor = aquarium.color;
  myAquarium.style.width = aquarium.width;
  myAquarium.style.height = aquarium.height;
  myAquarium.style.border = aquarium.border;
  myAquarium.style.position = 'relative';

  window.document.body.appendChild(myAquarium);

  window.addEventListener('click', function(event) {
    var nemo = window.document.createElement('div');
    var fish = new Fish(event.pageX, event.pageY);

    nemo.style.backgroundColor = fish.color;
    nemo.style.width = fish.width;
    nemo.style.height = fish.height;
    nemo.style.top = fish.y - myAquarium.offsetTop + 'px';
    nemo.style.left = fish.x - myAquarium.offsetLeft + 'px';
    nemo.style.position = 'absolute';

    var AquariumBorderLeft = event.pageX >= myAquarium.offsetLeft;
    var AquariumBorderRight = event.pageX <= myAquarium.offsetLeft + 900;
    var AquariumBorderTop = event.pageY >= myAquarium.offsetTop;
    var AquariumBorderBottom = event.pageY <= myAquarium.offsetTop + 600;

    console.log(aquarium);
    console.log(myAquarium);
    console.log(fish);
    console.log(nemo);

    if (
      AquariumBorderBottom &&
      AquariumBorderLeft &&
      AquariumBorderRight &&
      AquariumBorderTop
    ) {
      aquarium.fishArray.push(fish);
      // fish.aquarium = aquarium;
      console.log(aquarium.fishArray);
      myAquarium.appendChild(nemo);
    }
  });
};
