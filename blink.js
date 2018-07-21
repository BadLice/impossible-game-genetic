class Blink
{
  constructor(x, y, w, h, color)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }

  collision()
  {
    return false;
  }
  draw(color)
  {
    push();
    translate(this.x - this.w, this.y);
    fill(this.color);
    noStroke();
    rect(0, 0, this.w, this.h);
    pop();
  }

  drawGrid()
  {
    push();
    translate(this.x - this.w, this.y);
    noFill();
    stroke(255);
    rect(0, 0, this.w, this.h);
    pop();
  }
}