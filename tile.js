class Tile
{

  constructor(twidth, theight, w, h)
  {
    this.tiles = [];
    this.w = w;
    this.h = h;
    this.nTiles = twidth / w * theight / h;

    var tempx = 0;
    var tempy = 0;

    for (var i = 0; i < sqrt(this.nTiles); i++)
    {
      this.tiles[i] = [];
      for (var j = 0; j < sqrt(this.nTiles); j++)
      {
        tempx += this.w;
        this.tiles[i][j] = new Blink(tempx, tempy, this.w, this.h, color(200, 200, 255));
      }
      tempx = 0;
      tempy += this.h;
    }

    //you add your edgese here
    this.configMap();
  }

  draw()
  {
    // draw all blinks
    for (var i = 0; i < sqrt(this.nTiles); i++)
    {
      for (var j = 0; j < sqrt(this.nTiles); j++)
      {
        if (this.tiles[i][j] instanceof Blink)
          this.tiles[i][j].draw(color(20, 255, 20));
      }
    }

    //draw all solids
    for (var i = 0; i < sqrt(this.nTiles); i++)
    {
      for (var j = 0; j < sqrt(this.nTiles); j++)
      {
        if (this.tiles[i][j] instanceof Solid)
          this.tiles[i][j].draw(color(20, 255, 20));
      }
    }
  }

  drawGrid()
  {
    for (var i = 0; i < sqrt(this.nTiles); i++)
    {
      for (var j = 0; j < sqrt(this.nTiles); j++)
      {
        this.tiles[i][j].drawGrid();
      }
    }
  }

  collisionLeft(x, y, w, h)
  {
    var result = false;
    for (var i = 0; i < sqrt(this.nTiles); i++)
    {
      for (var j = 0; j < sqrt(this.nTiles); j++)
      {
        if (this.tiles[i][j] instanceof Solid)
        {
          if ((this.tiles[i][j].rot === 1 || this.tiles[i][j].rot === 5 || this.tiles[i][j].rot === 8) && this.tiles[i][j].collisionLeft(x, y, w, h))
          {
            result = true;
            break;
          }
        }
      }
    }
    return result;
  }

  collisionRight(x, y, w, h)
  {
    var result = false;
    for (var i = 0; i < sqrt(this.nTiles); i++)
    {
      for (var j = 0; j < sqrt(this.nTiles); j++)
      {
        if (this.tiles[i][j] instanceof Solid)
        {
          if ((this.tiles[i][j].rot === 2 || this.tiles[i][j].rot === 6 || this.tiles[i][j].rot === 7) && this.tiles[i][j].collisionRight(x, y, w, h))
          {
            result = true;
            break;
          }
        }
      }
    }
    return result;
  }

  collisionDown(x, y, w, h)
  {
    var result = false;
    for (var i = 0; i < sqrt(this.nTiles); i++)
    {
      for (var j = 0; j < sqrt(this.nTiles); j++)
      {
        if (this.tiles[i][j] instanceof Solid)
        {
          if ((this.tiles[i][j].rot === 3 || this.tiles[i][j].rot === 7 || this.tiles[i][j].rot === 8) && this.tiles[i][j].collisionDown(x, y, w, h))
          {
            result = true;
            break;
          }
        }
      }
    }
    return result;
  }

  collisionUp(x, y, w, h)
  {
    var result = false;
    for (var i = 0; i < sqrt(this.nTiles); i++)
    {
      for (var j = 0; j < sqrt(this.nTiles); j++)
      {
        if (this.tiles[i][j] instanceof Solid)
        {
          if ((this.tiles[i][j].rot === 4 || this.tiles[i][j].rot === 5 || this.tiles[i][j].rot === 6) && this.tiles[i][j].collisionUp(x, y, w, h))
          {
            result = true;
            break;
          }
        }
      }
    }
    return result;
  }

  configMap()
  {
    var x;
    var y;
    //start line
    x = 3;
    y = 13;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 8);
    x = 3;
    y = 12;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 1);
    x = 3;
    y = 11;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 1);
    x = 3;
    y = 10;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 1);
    x = 3;
    y = 9;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 1);
    x = 3;
    y = 8;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 1);
    x = 3;
    y = 7;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 1);
    x = 3;
    y = 6;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 5);
    x = 4;
    y = 6;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 4);
    x = 5;
    y = 6;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 6);
    x = 5;
    y = 11;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 2);
    x = 5;
    y = 10;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 2);
    x = 5;
    y = 9;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 2);
    x = 5;
    y = 8;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 2);
    x = 5;
    y = 7;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 2);
    x = 5;
    y = 12;
    this.tiles[y][x] = new Blink(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200));
    x = 5;
    y = 13;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 3);
    x = 4;
    y = 13;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 3);
    x = 4;
    y = 12;
    this.tiles[y][x] = new Blink(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200));
    x = 4;
    y = 11;
    this.tiles[y][x] = new Blink(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200));
    x = 4;
    y = 10;
    this.tiles[y][x] = new Blink(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200));
    x = 4;
    y = 9;
    this.tiles[y][x] = new Blink(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200));
    x = 4;
    y = 8;
    this.tiles[y][x] = new Blink(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200));
    x = 4;
    y = 7;
    this.tiles[y][x] = new Blink(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200));

    //game field
    x = 6;
    y = 13;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 3);
    x = 6;
    y = 12;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 4);
    x = 7;
    y = 11;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 1);
    x = 7;
    y = 11;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 1);
    x = 7;
    y = 12;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 2);
    x = 7;
    y = 13;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 7);
    x = 7;
    y = 10;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 1);
    x = 7;
    y = 9;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 1);
    x = 7;
    y = 8;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 5);
    x = 8;
    y = 8;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 4);
    x = 9;
    y = 8;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 4)
    x = 10;
    y = 8;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 4)
    x = 11;
    y = 8;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 4)
    x = 12;
    y = 8;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 4)
    x = 13;
    y = 8;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 4)
    x = 14;
    y = 8;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 4)
    x = 15;
    y = 8;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 4)
    x = 16;
    y = 8;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 4)
    x = 17;
    y = 8;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 2)
    x = 17;
    y = 9;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 2)
    x = 8;
    y = 11;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 3);
    x = 9;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 3);
    x = 10;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 3)
    x = 11;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 3)
    x = 12;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 3)
    x = 13;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 3)
    x = 14;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 3)
    x = 15;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 3)
    x = 15;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 3)
    x = 16;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 3)
    x = 17;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 7)
    x = 17;
    y = 10;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 2);

    //finish line
    x = 17;
    y = 7;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 1)
    x = 17;
    y = 6;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 5)
    x = 18;
    y = 7;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 3)
    x = 18;
    y = 6;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(255), 4)
    x = 19;
    y = 6;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 4)
    x = 20;
    y = 6;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 6)
    x = 20;
    y = 7;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 7)
    x = 19;
    y = 7;
    this.tiles[y][x] = new Solid(this.w * (x + 1), this.h * y, this.h, this.w, color(200, 255, 200), 3)
  }
}