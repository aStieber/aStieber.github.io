var pl = planck, Vec2 = pl.Vec2;
class Painter {
  constructor(context, width, height) {
    this.m_context = context;
    this.m_width = width;
    this.m_height = height;
  }

  draw(world, marble, terrainTiles, history) {
    this.m_context.clearRect(0, 0, this.m_width, this.m_width);

    terrainTiles.forEach((tile) => {
      if (tile.m_kind !== TK.NONE)
        this.drawLine(this.translatePosition(tile.m_p1), this.translatePosition(tile.m_p2), tile.getColor());      
    });
    //marble
    var marbleBody = marble.m_marbleBody;
    var marbleShape = marbleBody.m_fixtureList.getShape();
    var pos = this.translatePosition(marbleBody.getPosition());
    this.drawMarble(pos, marbleShape.m_radius);
    this.drawLine(pos, 
      Vec2( pos.x + Math.cos(marbleBody.getAngle()) * marbleShape.m_radius * 15, 
            pos.y - Math.sin(marbleBody.getAngle()) * marbleShape.m_radius * 15), '#FF0000');
    //history
    var shadowPos = this.translatePosition(history.getOldFrame(2.));
    this.drawMarble(shadowPos, marbleShape.m_radius, true);
  }

  drawMarble(pos, rad, isShadow=false) {
    this.m_context.beginPath();
    this.m_context.arc(pos.x, pos.y, rad * 15, 0, 360);
    this.m_context.strokeStyle = isShadow ? '#770000' : '#FF0000';
    this.m_context.stroke();
    this.m_context.closePath();

  }

  drawLine(p1, p2, color) {
    this.m_context.beginPath();
    this.m_context.moveTo(p1.x, p1.y);
    this.m_context.lineTo(p2.x, p2.y);
    this.m_context.strokeStyle = color;
    this.m_context.lineWidth=2;
    this.m_context.stroke();
    this.m_context.closePath();
  }

  translatePosition(worldPos) {
    return Vec2(worldPos.x * this.m_width / 80, worldPos.y * (-this.m_height / 30) + (this.m_height / 2));
  }
}