class Solid extends Blink
{
  constructor(x, y, w, h, color, r)
  {
    super(x, y, w, h, color);
    this.rot = r;
  }

  collisionLeft(x, y, w, h)
  {
    switch (this.rot)
    {
      case 8:
      case 5:
      case 1:
        if (x - (w / 2) <= this.x - this.w)
        {
          return true;
        }
        break;
    }
    return false;
  }

  collisionRight(x, y, w, h)
  {
    switch (this.rot)
    {
      case 7:
      case 6:
      case 2:
        if (x + (w / 2) >= this.x)
        {
          return true;
        }
        break;
    }

    return false;
  }

  collisionDown(x, y, w, h)
  {
    switch (this.rot)
    {
      case 8:
      case 7:
      case 3:
        if (y + h / 2 >= this.y + this.h)
        {
          return true;
        }
        break;
    }
    return false;
  }

  collisionUp(x, y, w, h)
  {

    switch (this.rot)
    {
      case 6:
      case 5:
      case 4:
        if (y - h / 2 <= this.y)
        {
          return true;
        }
        break;
    }
    return false;
  }


  isIntoTile(x, y)
  {
    return (x >= this.x - this.w && x < this.x && y < this.y + (this.h) && y >= this.y);
    return true;
  }

  draw(color)
  {
    push();
    translate(this.x - this.w, this.y);

    fill(this.color);
    noStroke();
    rect(0, 0, this.w, this.h)
    noFill();
    stroke(0);
    strokeWeight(3)
    switch (this.rot)
    {
      //vertical left
      case 1:
        line(0, 0, 0, this.h);
        break;
        //vertical right
      case 2:
        line(this.w, 0, this.w, this.h);
        break;
        //orizontal down
      case 3:
        line(0, this.h, this.w, this.h);
        break;
        //orizontal up
      case 4:
        line(0, 0, this.w, 0);
        break;
        //top left corner
      case 5:
        line(0, 0, 0, this.h);
        line(0, 0, this.w, 0);
        break;
        //top right corner
      case 6:
        line(this.w, 0, this.w, this.h);
        line(0, 0, this.w, 0);
        break;
        //bottom right corner
      case 7:
        line(this.w, 0, this.w, this.h);
        line(0, this.h, this.w, this.h);
        break;
        //bottom left corner
      case 8:
        line(0, 0, 0, this.h);
        line(0, this.h, this.w, this.h);
        break;
    }
    pop();
  }
}