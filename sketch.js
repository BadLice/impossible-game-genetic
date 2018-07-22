var tiles;
var population;
var maxPop;
var mutationRate;
var info;
var precBest = 0;
var bestEver = 0;
var enemies = [];
var enemySlider;

function setup()
{
  createCanvas(1200, 800);
  info = createP();
  enemySlider = createSlider(1, 20, 5);

  maxPop = 200;
  mutationRate = 0.01;

  tiles = new Tile(width, height, 40, 40);
  population = new Population(tiles, mutationRate, maxPop)
  initEnemies();

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

function initEnemies()
{
  var dir = 1;
  for (var i = 0; i < 4; i++)
  {
    enemies[i] = new Enemy(500, 340 + (40 * i), 11, dir, enemySlider.value(), tiles);
    dir *= -1;
  }
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

  infostr = "Best fitness: " + sqrt(bestEver) / 100 + " <br>Generation: " + population.generation + " <br>Improve rate: " + map(best.fitness, 0, bestEver, 0, 1) + "<br>Mutation rate: " + (mutationRate * 100) + "%<br>Population: " + maxPop + "<br>Moves number: " + population.population[0].dna.length + "<br>Enemy speed:";

  info.html(infostr);

  precBest = best.fitness;

}