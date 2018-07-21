class Player
{
  constructor(x, y, w, h, tile)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.tile = tile;
    this.speed = 5;
  }
  update()
  {
    this.move();
  }

  edgesLeft()
  {
    // console.log(this.tile.collisionLeft(this.x, this.y, this.w, this.h));
    return this.tile.collisionLeft(this.x, this.y, this.w, this.h);
  }

  edgesRight()
  {
    // console.log(this.tile.collisionLeft(this.x, this.y, this.w, this.h));
    return this.tile.collisionRight(this.x, this.y, this.w, this.h);
  }

  edgesDown()
  {
    // console.log(this.tile.collisionLeft(this.x, this.y, this.w, this.h));
    return this.tile.collisionDown(this.x, this.y, this.w, this.h);
  }

  edgesUp()
  {
    return this.tile.collisionUp(this.x, this.y, this.w, this.h);
  }

  move()
  {
    var edgesLeft = this.edgesLeft();
    var edgesRight = this.edgesRight();
    var edgesDown = this.edgesDown();
    var edgesUp = this.edgesUp();

    if (keyIsPressed)
    {
      if (keyCode === UP_ARROW && !edgesUp)
      {
        this.y -= this.speed;
      }

      if (keyCode === DOWN_ARROW && !edgesDown)
      {
        this.y += this.speed;
      }

      if (keyCode === LEFT_ARROW && !edgesLeft)
      {
        this.x -= this.speed;
      }

      if (keyCode === RIGHT_ARROW && !edgesRight)
      {
        this.x += this.speed;
      }
    }
  }

  draw()
  {
    push();
    translate(this.x, this.y);
    rectMode(CENTER);
    stroke(72);
    fill(255, 0, 0);
    rect(0, 0, this.w, this.h);
    pop();
  }
}