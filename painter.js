var pl = planck, Vec2 = pl.Vec2;
class Painter {
  constructor(context, width, height) {
    this.m_context = context;
    this.m_width = width;
    this.m_height = height;
  }

  draw(world) {
    this.m_context.clearRect(0, 0, this.m_width, this.m_width);
    for (var body = world.getBodyList(); body; body = body.getNext()) {
      for (var fixture = body.getFixtureList(); fixture; fixture = fixture.getNext()) {
        var type = fixture.getType();
        var shape = fixture.getShape();
        if (type === 'circle') {
          this.drawCircle(this.translatePosition(body.getPosition()), shape.m_radius);
        }
        else if (type === 'edge') {
          this.drawLine(this.translatePosition(shape.m_vertex1), this.translatePosition(shape.m_vertex2));
        }
      }
    }
  }

  drawCircle(pos, rad) {
    this.m_context.beginPath();
    this.m_context.arc(pos.x, pos.y, rad * 10, 0, 360);
    this.m_context.strokeStyle = '#FF0000';
    this.m_context.lineWidth = 2;
    this.m_context.stroke();
  }

  drawLine(p1, p2) {
    this.m_context.beginPath();
    this.m_context.moveTo(p1.x, p1.y);
    this.m_context.lineTo(p2.x, p2.y);
    this.m_context.strokeStyle = '#CCCCCC';
    this.m_context.lineWidth=2;
    this.m_context.stroke();
  }

  translatePosition(worldPos) {
    return Vec2(worldPos.x * this.m_width / 80, worldPos.y * (-this.m_height / 60) + (this.m_height / 2));
  }
}