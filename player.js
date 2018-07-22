class Player
{
  constructor(x, y, w, h, tile, maxMoves, childDNA)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.tile = tile;
    this.speed = 3;
    this.updateTilesCoordinates();

    this.cicles = 0;
    this.fitness = 0;
    this.finished = false;
    this.dnaIndex = 0;
    this.count = 0;
    this.duration = 10;

    if (childDNA === undefined)
    {
      this.dna = [];

      for (var i = 0; i < 30; i++)
      {
        this.dna.push(floor(random(0, 8)));
      }
    }
    else
    {
      // console.log(childDNA.length);
      this.dna = childDNA;
      // console.log("len= " + (maxMoves));
      if (maxMoves)
      {
        // var c = 0;
        for (var i = 0; i < 5; i++)
        {
          this.dna.push(floor(random(0, 8)));
          // c++;
        }
        // console.log(c);
      }
    }

  }
  update()
  {
    this.move();
    if (this.collisionEnemy())
      this.finished = true;
    this.calculateFitness();
  }

  updateTilesCoordinates()
  {
    var tileCoord = this.tileCoordinates();
    this.tileX = tileCoord[0];
    this.tileY = tileCoord[1];

    // console.log(tileCoord)
  }

  edgesLeft()
  {
    // console.log(this.tile.collisionLeft(this.x, this.y, this.w, this.h));
    return this.tile.collisionLeft(this.x, this.y, this.w, this.h, this.tileX, this.tileY);
  }

  edgesRight()
  {
    // console.log(this.tile.collisionLeft(this.x, this.y, this.w, this.h));
    return this.tile.collisionRight(this.x, this.y, this.w, this.h, this.tileX, this.tileY);
  }

  edgesDown()
  {
    // console.log(this.tile.collisionLeft(this.x, this.y, this.w, this.h));
    return this.tile.collisionDown(this.x, this.y, this.w, this.h, this.tileX, this.tileY);
  }

  edgesUp()
  {
    return this.tile.collisionUp(this.x, this.y, this.w, this.h, this.tileX, this.tileY);
  }

  move()
  {
    for (var i = 0; i < this.speed; i++)
    {
      if (!this.finished)
      {
        if (this.count >= this.duration)
        {
          this.count = 0;
          if (this.dnaIndex < this.dna.length)
            this.dnaIndex++;
          else
            this.finished = true;
        }

        this.updateTilesCoordinates();
        var edgesLeft = this.edgesLeft();
        var edgesRight = this.edgesRight();
        var edgesDown = this.edgesDown();
        var edgesUp = this.edgesUp();

        var dir = this.dna[this.dnaIndex];

        //left
        if ((dir === 0 || dir === 4 || dir === 5) && !edgesLeft)
        {
          this.x -= 1;
        }

        //right
        if ((dir === 1 || dir === 6 || dir == 7) && !edgesRight)
        {
          this.x += 1;
        }

        //up
        if ((dir === 2 || dir === 4 || dir === 6) && !edgesUp)
        {
          this.y -= 1;
        }

        //down
        if ((dir === 3 || dir === 5 || dir === 7) && !edgesDown)
        {
          this.y += 1;
        }

        this.count++;
        this.cicles++;
      }
    }
  }

  // move()
  // {
  //   var edgesLeft = this.edgesLeft();
  //   var edgesRight = this.edgesRight();
  //   var edgesDown = this.edgesDown();
  //   var edgesUp = this.edgesUp();
  //
  //   if (keyIsPressed)
  //   {
  //     if (keyCode === UP_ARROW && !edgesUp)
  //     {
  //       this.y -= this.speed;
  //     }
  //
  //     if (keyCode === DOWN_ARROW && !edgesDown)
  //     {
  //       this.y += this.speed;
  //     }
  //
  //     if (keyCode === LEFT_ARROW && !edgesLeft)
  //     {
  //       this.x -= this.speed;
  //     }
  //
  //     if (keyCode === RIGHT_ARROW && !edgesRight)
  //     {
  //       this.x += this.speed;
  //     }
  //   }
  // }

  collisionEnemy()
  {
    var coll = false;
    for (var o of enemies)
    {
      if (o.collision(this.x, this.y, this.w, this.h))
      {
        coll = true;
        break;
      }
    }
    return coll;
  }

  tileCoordinates()
  {
    for (var y = 0; y < sqrt(this.tile.nTiles); y++)
    {
      for (var x = 0; x < sqrt(this.tile.nTiles); x++)
      {
        if (this.x >= this.tile.tiles[y][x].x - this.tile.tiles[y][x].w && this.x < this.tile.tiles[y][x].x && this.y < this.tile.tiles[y][x].y + (this.tile.tiles[y][x].h) && this.y >= this.tile.tiles[y][x].y)
        {
          return [x, y];
        }
      }
    }
  }

  crossover(partner)
  {
    var r = random(0, this.dna.length)
    // console.log(partner.dna.length);
    var dna = [];
    for (var i = 0; i < this.dna.length; i++)
    {
      if (i < r)
        dna[i] = this.dna[i];
      else
        dna[i] = partner.dna[i];
    }
    return dna;
  }

  mutate(mr)
  {
    for (var i = 0; i < this.dna.length; i++)
    {
      if (random(1) < mr)
      {
        this.dna[i] = floor(random(0, 8));
      }
    }
  }

  calculateFitness()
  {
    var fit = 0;
    if (this.x < 260)
      // fit = 1 / (dist(this.x, this.y, 280, height - 240) * this.cicles);
      fit = map(1 / dist(this.x, this.y, 260, height - 240), 0, width / 2, 0, 1)
    else
    if (this.x < 500)
      fit = map(1 / dist(this.x, this.y, 500, 400), 0, width / 2, 0, 1) * 100;
    else
      fit = map(1 / dist(this.x, this.y, 820, 280), 0, width / 2, 0, 1) * 100000;

    if (dist(this.x, this.y, 820, 280) < 60)
    {
      fit *= 100;
      this.finished = true
    }

    this.fitness = pow(fit, 8);
  }

  draw(col)
  {
    push();
    translate(this.x, this.y);
    rectMode(CENTER);
    stroke(72);
    strokeWeight(4)
    fill(col);
    rect(0, 0, this.w, this.h);
    pop();
  }
}