var tiles;
var population;
var maxPop;
var mutationRate;
var info;
var precBest = 0;
var bestEver = 0;
var enemies = [];

function setup()
{
  createCanvas(1200, 800);

  maxPop = 100;
  mutationRate = 0.01;

  tiles = new Tile(width, height, 40, 40);
  // player = new Player(100, 100, 20, 20, tiles);
  population = new Population(tiles, mutationRate, maxPop)

  var dir = 1;
  for (var i = 0; i < 4; i++)
  {
    enemies[i] = new Enemy(500, 340 + (40 * i), 11, dir, tiles);
    dir *= -1;
  }
  info = createP();
}

function draw()
{
  background(255);

  // tiles.drawGrid();
  tiles.draw();
  drawEnemies();
  updateEnemies();
  population.generate();
  population.update();
  population.draw();

  displayInfo();
}

function drawEnemies()
{
  for (var o of enemies)
    o.draw();
}

function updateEnemies()
{
  for (var o of enemies)
    o.update();
}

function displayInfo()
{
  var best = population.currentMax();
  if (best.fitness > bestEver)
    bestEver = best.fitness;

  infostr = "Best fitness: " + sqrt(bestEver) / 100 + " <br>Generation: " + population.generation + " <br>Improve rate: " + map(best.fitness, 0, bestEver, 0, 1) + "<br>Mutation rate: " + (mutationRate * 100) + "%<br>Population: " + maxPop + "<br>Moves number: " + population.population[0].dna.length;

  info.html(infostr);

  precBest = best.fitness;

}