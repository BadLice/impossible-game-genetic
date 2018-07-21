var tiles;
var player;

function setup()
{
  createCanvas(1200, 800);
  tiles = new Tile(width, height, 40, 40);
  player = new Player(100, 100, 20, 20, tiles);
}

function draw()
{
  background(255);
  // tiles.drawGrid();
  tiles.draw();
  player.update();
  player.draw();
}