class Enemy
{
  constructor(x, y, r, dir, tile)
  {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dir = dir;
    this.tile = tile;
    this.speed = 5;
  }

  update()
  {

    for (var i = 0; i < this.speed; i++)
    {
      if (this.tile.collision(this.x, this.y, this.r * 2, this.r * 2))
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
    // console.log(x >= this.x - (w / 2));
    // console.log((x >= this.x - (w / 2) && x <= this.x + (w / 2) && y >= this.y - (h / 2) && y <= this.y + (h / 2)));
    return (x >= this.x - (w / 2) && x <= this.x + (w / 2) && y >= this.y - (h / 2) && y <= this.y + (h / 2));
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