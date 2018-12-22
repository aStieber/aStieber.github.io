var pl = planck, Vec2 = pl.Vec2;
var TK = {NONE: 0, GROUND: 1, ICE: 2, GLUE: 3};

class Tile {
  constructor(x, y1, tileDef) {
    this.m_kind = tileDef.type;
    this.m_p1 = Vec2(x, y1);
    this.m_p2 = Vec2(x + tileDef.dx, tileDef.yPos);
  }
  getKindFD() {
    switch (this.m_kind) {
      case TK.GROUND: return {density: 0.0, friction: 0.6};
      case TK.ICE: return {density: 0.0, friction: 0.2};
      case TK.GLUE: return {density: 0.0, friction: 10.};
      default: return {density: 0.0, friction: 1.0};
    }
  }
  getColor() {
    switch(this.m_kind) {
      case TK.GROUND: return '#663300';
      case TK.ICE: return '#00FFFF';
      case TK.GLUE: return '#00CC00';
      default: return '#333333';
    }
  }
}

function createTerrain(world) {
  var ground = world.createBody();

  var tileDefs = [{type: TK.GROUND, yPos: 0, dx: 15},
                  {type: TK.GROUND, yPos: 0.25, dx: 5},
                  {type: TK.GROUND, yPos: 1., dx: 5.},
                  {type: TK.GROUND, yPos: 2.5, dx: 5.},
                  {type: TK.NONE, yPos: 1, dx: 14},
                  {type: TK.GROUND, yPos: -2.0, dx: 5},
                  {type: TK.ICE, yPos: -2.5, dx: 2.5},
                  {type: TK.ICE, yPos: -2.0, dx: 2.5},                 
                  {type: TK.GROUND, yPos: 1.25, dx: 5},
                  {type: TK.GLUE, yPos: 1.25, dx: 2},
                  {type: TK.NONE, yPos: 3.5, dx: -.5},
                  {type: TK.GLUE, yPos: 9, dx: 5} ];

  var terrainTiles = [];
  var x = 10.0, y1 = 0.0;
  tileDefs.forEach(function(tileDef) {
    if (tileDef.type !== TK.NONE) {
      var tile = new Tile(x, y1, tileDef);
      ground.createFixture(pl.Edge(tile.m_p1, tile.m_p2), tile.getKindFD());
      terrainTiles.push(tile);
    }
    y1 = tileDef.yPos;
    x += tileDef.dx;
  });

  return terrainTiles;
}