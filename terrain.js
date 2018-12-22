var pl = planck, Vec2 = pl.Vec2;
var TK = {NONE: 0, GROUND: 1, ICE: 2, GLUE: 3};

class Tile {
  constructor(tileDef) {
    this.m_kind = tileDef.kind;
    this.m_p1 = Vec2(tileDef.p1.x, tileDef.p1.y);
    this.m_p2 = Vec2(tileDef.p2.x, tileDef.p2.y);
  }
  getKindFD() {
    switch (this.m_kind) {
      case TK.GROUND: return {density: 0.0, friction: 0.6, userData: {kind: this.m_kind}};
      case TK.ICE: return {density: 0.0, friction: 0.2, userData: {kind: this.m_kind}};
      case TK.GLUE: return {density: 0.0, friction: 10., userData: {kind: this.m_kind}};
      default: return {density: 0.0, friction: 1.0, userData: {kind: this.m_kind}};
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

function createTerrain(world, levelData) {
  var ground = world.createBody({userData: "ground"});
  var terrainTiles = [];

  levelData.level.terrain.forEach(function(tileDef) {
    var tile = new Tile(tileDef);
    terrainTiles.push(tile);
    if (tile.m_kind !== TK.NONE)
      ground.createFixture(pl.Edge(tile.m_p1, tile.m_p2), tile.getKindFD());
  });

  return terrainTiles;
}