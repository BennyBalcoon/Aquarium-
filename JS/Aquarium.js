var Aquarium = function() {
  // this.x = x;
  // this.y = y;
  // this.simulation = simulation;
  this.width = '900px';
  this.height = '600px';
  this.color = 'aquamarine';
  this.border = '2px solid gray';
  this.position = 'relative';
  this.fishArray = [];
};

Aquarium.prototype.drawAquarium = function() {
  this.myAquarium = document.createElement('div');
  document.body.appendChild(this.myAquarium);
  // this.myAquarium.setAttribute('id', 'aquarium');
  this.myAquarium.style.backgroundColor = this.color;
  this.myAquarium.style.width = this.width;
  this.myAquarium.style.height = this.height;
  this.myAquarium.style.border = this.border;
  this.myAquarium.style.position = this.position;
};

Aquarium.prototype.addFish = function(newFish) {
  this.fishArray.push(newFish);
  console.log(this.fishArray);
};

// Aquarium.prototype.swimFish = function() {
//   for (var i = 0; i > this.fishArray.length; i++) {
//     this.fishArray[i].move();
//   }
// };
