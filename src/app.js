export class App {
  message = 'Welcome to Aurelia!';
  squares = [];

  randomColor() {
  	var key = Math.floor(Math.random() * (666)) + 333; 
  	return '#' + key;
  }

  created() {
  	for (var i = 0; i < 10000; i++) {
  		this.squares.push({color: this.randomColor()});
  	}
  }
}