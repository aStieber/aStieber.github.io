var pl = planck, Vec2 = pl.Vec2;
var TK = {NONE: 0, GROUND: 1, LAVA: 2};

class Tile {
  constructor(kind, yPos, dx=5.) {
    this.m_kind = kind;
    this.m_yPos = yPos;
    this.m_dx = dx;
  }
}

var createTerrain = function(world) {
  var ground = world.createBody();

  var groundFD = {
    density : 0.0,
    friction : 0.6
  };

  ground.createFixture(pl.Edge(Vec2(-35.0, 0.0), Vec2(-25.0, 0.0)), groundFD);
  var tiles = [ new Tile(TK.GROUND, 0.25),
                 new Tile(TK.GROUND, 1.),
                 new Tile(TK.GROUND, 2.5, 4),
                 new Tile(TK.NONE, 1, 11),
                 new Tile(TK.GROUND, -2.0),
                 new Tile(TK.GROUND, -2.5, 2.5),
                 new Tile(TK.GROUND, -2.0, 2.5),                 
                 new Tile(TK.GROUND, 1.25),
                 new Tile(TK.GROUND, 1.25),
                 new Tile(TK.NONE, 3.5, -4),
                 new Tile(TK.GROUND, 9, 5),
                 new Tile(TK.GROUND, 15, 5), ];

  var x = -25.0, y1 = 0.0;

  tiles.forEach(function(tile) {
    if (tile.m_kind !== TK.NONE) {
      ground.createFixture(pl.Edge(Vec2(x, y1), Vec2(x + tile.m_dx, tile.m_yPos)), groundFD);
    }
    y1 = tile.m_yPos;
    x += tile.m_dx;
  });
};