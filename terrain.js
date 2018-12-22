var pl = planck, Vec2 = pl.Vec2;
var TK = {NONE: 0, GROUND: 1, ICE: 2, GLUE: 3};

class Tile {
  constructor(kind, yPos, dx=5.) {
    this.m_kind = kind;
    this.m_yPos = yPos;
    this.m_dx = dx;
    this.kindFD = this.getKindFD();

  }
  getKindFD() {
    switch (this.m_kind) {
      case TK.GROUND: return {density: 0.0, friction: 0.6};
      case TK.ICE: return {density: 0.0, friction: 0.2};
      case TK.GLUE: return {density: 0.0, friction: 10.};
      default: return {density: 0.0, friction: 1.0};
    }
  }


}

var createTerrain = function(world) {
  var ground = world.createBody();

  var groundFD = {
    density : 0.0,
    friction : 10.
  };

  ground.createFixture(pl.Edge(Vec2(-35.0, 0.0), Vec2(-25.0, 0.0)), groundFD);
  var tiles = [ new Tile(TK.GROUND, 0.25),
                 new Tile(TK.GROUND, 1.),
                 new Tile(TK.GROUND, 2.5, 4),
                 new Tile(TK.NONE, 1, 14),
                 new Tile(TK.GROUND, -2.0),
                 new Tile(TK.ICE, -2.5, 2.5),
                 new Tile(TK.ICE, -2.0, 2.5),                 
                 new Tile(TK.GROUND, 1.25),
                 new Tile(TK.GLUE, 1.25, 2),
                 new Tile(TK.NONE, 3.5, -.5),
                 new Tile(TK.GLUE, 9, 5) ];

  var x = -25.0, y1 = 0.0;

  tiles.forEach(function(tile) {
    if (tile.m_kind !== TK.NONE) {
      ground.createFixture(pl.Edge(Vec2(x, y1), Vec2(x + tile.m_dx, tile.m_yPos)), tile.kindFD);
    }
    y1 = tile.m_yPos;
    x += tile.m_dx;
  });
};