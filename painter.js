var pl = planck, Vec2 = pl.Vec2;
class Painter {
  constructor(canvas) {
    this.m_canvas = canvas;
    this.m_width = canvas.width;
    this.m_height = canvas.height;
  }

  drawGame(game) {
    this.getContext().clearRect(0, 0, this.m_width, this.m_width);
    //order = layers
    this.drawDynamics(game);
    this.drawTerrain(game);
    this.drawObjectives(game);
    this.drawMarble(game);
    this.drawUI(game);
  }
  
  drawDynamics(game) {
    if (game.m_dynamics === undefined) return;
    game.m_dynamics.forEach((dynamic) => {
      if (dynamic.getUserData().kind === "seesaw") {
        var context = this.getContext();
        context.beginPath();
        //center & rotate our context
        var center = this.translatePosition(dynamic.getBody().getPosition());
        var angle = dynamic.getBody().getAngle() * 2;
        context.translate(center.x, center.y);
        context.rotate(-angle);
        context.beginPath();
        //get top left
        var x = dynamic.getShape().getVertex(0).x;
        var y = dynamic.getShape().getVertex(0).y;
        var rectWidth = this.translateX(Math.abs(dynamic.getShape().getVertex(1).x - x));
        var rectHeight = this.translateY(Math.abs(dynamic.getShape().getVertex(3).y - y)) - (this.m_height / 2.); //fuck
        context.rect(this.translateX(x), y, rectWidth, rectHeight);
        context.strokeStyle = "#FFFFFF";
        context.stroke();
        context.closePath();
        context.closePath();
        //undo context changes
        context.rotate(angle);
        context.translate(-center.x, -center.y);
      }
    });
  }

  drawTerrain(game) {
    game.m_terrainTiles.forEach((tile) => {
      if (tile.m_kind !== TK.NONE)
        this.drawLine(this.translatePosition(tile.m_p1), this.translatePosition(tile.m_p2), tile.getColor());      
    });
  }

  drawObjectives(game) {
    game.m_objectives.forEach((objective) => {
      if (objective.m_isVisible) {
        if (objective.m_kind === "coin")
          this.drawRect(this.translatePosition(objective.m_topLeft), '#FF9900');
        else if (objective.m_kind === "finish")
          this.drawRect(this.translatePosition(objective.m_topLeft), game.m_remainingCoins === 0 ? '#00FF00' : '#FF0000');
      }
    });
  }

  drawMarble(game) {
    //shadow
    var marbleBody = game.m_marble.m_marbleBody;
    var marbleShape = marbleBody.m_fixtureList.getShape();
    var shadowPos = this.translatePosition(game.m_frameHistory.getOldFrame(2.));
    this.drawCircle(shadowPos, marbleShape.m_radius, true);

    //marble
    var pos = this.translatePosition(marbleBody.getPosition());
    this.drawCircle(pos, marbleShape.m_radius);
    this.drawLine(pos, Vec2(pos.x + Math.cos(marbleBody.getAngle()) * marbleShape.m_radius * 15, 
                            pos.y - Math.sin(marbleBody.getAngle()) * marbleShape.m_radius * 15),
                            "#99C2FF");
  }

  drawUI(game) {
    var context = this.getContext();
    context.font = "30px Arial";
    context.fillText(`Coins remaining: ${game.m_remainingCoins}`, 10, 50);
    context.fillText(`Warps remaining: ${game.m_remainingReverts}`, 10, 80);
    context.fillText(`Contact count: ${game.m_marble.m_contactList.length}`, 10, 110);
    context.fillText(game.m_levelData.text, 40, 500);

    context.font = "14px Arial";
    context.fillText('Left/Right/Up: move', 280, 50);
    context.fillText('Spacebar: warp to shadow (maintains momentum)', 280, 70);
    context.fillText('R: reset', 280, 90);
    context.fillText('Press a number to select level.', 280, 110);
    if (!game.m_alive) {
      context.font = "200px Comic Sans";
      context.fillStyle = '#FF0000';
      context.fillText("u dead", 50, 300);
      context.fillStyle = '#000000';
    }
    else if (game.m_victory) {
      context.font = "270px Comic Sans";
      context.fillStyle = '#22FF33';
      context.fillText('Terrific', 2, 340);
      context.fillStyle = '#000000';
    }
  }

  drawCircle(pos, rad, isShadow=false) {
    var context = this.getContext();
    context.beginPath();
    context.arc(pos.x, pos.y, rad * 15, 0, 360);
    context.strokeStyle = isShadow ? '#0066FF' : '#99C2FF';
    context.stroke();
    context.closePath();
  }

  drawLine(p1, p2, color) {
    var context = this.getContext();
    context.beginPath();
    context.moveTo(p1.x, p1.y);
    context.lineTo(p2.x, p2.y);
    context.strokeStyle = color;
    context.lineWidth=2;
    context.stroke();
    context.closePath();
  }

  drawRect(topLeft, color) {
    var context = this.getContext();
    context.beginPath();
    context.rect(topLeft.x+1, topLeft.y - 4, 3, 8);
    context.strokeStyle = color;
    context.stroke();
    context.closePath();
  }

  translatePosition(worldPos) {
    return Vec2(this.translateX(worldPos.x), this.translateY(worldPos.y));
  }

  translateX(x_phys) {
    return x_phys * this.m_width / 80.;
  }

  translateY(y_phys) {
    return y_phys * (-this.m_height / 30.) + (this.m_height / 2.)
  }

  getContext() {
    return this.m_canvas.getContext("2d");
  }
}