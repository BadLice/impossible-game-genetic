class Enemy
{
  constructor(x, y, r, dir, speed, tile)
  {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dir = dir;
    this.tile = tile;
    this.speed = speed;
    this.updateTilesCoordinates();
  }

  update()
  {

    for (var i = 0; i < this.speed; i++)
    {
      this.updateTilesCoordinates();
      if (this.tile.collisionLeft(this.x, this.y, this.r * 2, this.r * 2, this.tileX, this.tileY) || this.tile.collisionRight(this.x, this.y, this.r * 2, this.r * 2, this.tileX, this.tileY))
      {
        this.dir *= -1
      }
      if (this.dir > 0)
        this.x += 1;
      else
        this.x -= 1;
    }
  }

  collision(x, y, w, h)
  {
    return (x >= this.x - (w / 2) && x <= this.x + (w / 2) && y >= this.y - (h / 2) && y <= this.y + (h / 2));
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

  updateTilesCoordinates()
  {
    var tileCoord = this.tileCoordinates();
    this.tileX = tileCoord[0];
    this.tileY = tileCoord[1];
  }

  draw()
  {
    push();
    translate(this.x, this.y);
    stroke(0);
    strokeWeight(2);
    fill(0, 0, 255);
    ellipseMode(CENTER);
    ellipse(0, 0, this.r * 2, this.r * 2);
    pop()
  }
}