var Fish = function(x, y, aquarium) {
  this.x = x;
  this.y = y;
  this.aquarium = aquarium;
  this.height = '10px';
  this.width = '10px';
  this.color = function() {
    var color = [];
    for (var i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(',') + ')';
  };
  this.position = 'absolute';
};

Fish.prototype.drawFish = function() {
  this.myFish = document.createElement('div');
  document.body.appendChild(this.myFish);
  this.styleFish();
};

Fish.prototype.styleFish = function() {
  this.myFish.style.width = this.width;
  this.myFish.style.height = this.height;
  this.myFish.style.backgroundColor = this.color();
  this.myFish.style.left = this.x + 'px';
  this.myFish.style.top = this.y + 'px';
  this.myFish.style.position = this.position;
};

Fish.prototype.setDirection = function() {
  var randomX = Math.random() * 9000;
  var randomY = Math.random() * 6000;
  console.log(randomX);
  console.log(randomY);

  // théorème de sami
  this.coefDir = (randomY - this.y) / (randomX - this.x);
  this.m = this.y - this.coefDir * this.x;
  this.direction = Math.random() > 0.5 ? 1 : -1;
  console.log(this.direction);
};

Fish.prototype.move = function() {
  this.x = this.x + this.direction;
  this.y = this.coefDir * this.x + this.m;
  this.styleFish();
};
