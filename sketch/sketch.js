
/* My Sketch
–––––––––––––––––––––––––––––––––––––––––––––––––– */
// Making the Paper scope global
paper.install(window);

// Setup
window.onload = function() {
  paper.setup('js-my-paper-js-canvas');

  setup();
  paper.view.draw();

  // Draw Loop
  paper.view.onFrame = function(event) {
    draw()
  };
};


// Re-size
window.onresize = function() {
  project.clear();
  setup();
};



/* Setup
–––––––––––––––––––––––––––––––––––––––––––––––––– */
function setup() {
  var background = new Path.Rectangle({
    size: view.bounds,
    fillColor: '#ffc800'
  });
};


/* Draw
–––––––––––––––––––––––––––––––––––––––––––––––––– */
function draw() {

};