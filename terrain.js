var pl = planck, Vec2 = pl.Vec2;
var TK = {NONE: "none", GROUND: "ground", ICE: "ice", GLUE: "glue", LAVA: "lava"};

var GLOBAL_TILE_COUNT = 0;
class Tile {
  constructor(tileDef) {
    this.m_kind = tileDef.kind;
    this.m_p1 = Vec2(tileDef.p1.x, tileDef.p1.y);
    this.m_p2 = Vec2(tileDef.p2.x, tileDef.p2.y);
    this.m_tileID = GLOBAL_TILE_COUNT;
    GLOBAL_TILE_COUNT++;
  }
  getKindFD() {
    switch (this.m_kind) {
      case TK.GROUND: return {density: 0.0, friction: 0.6, userData: {kind: this.m_kind, tileID: this.m_tileID}};
      case TK.ICE: return {density: 0.0, friction: 0.2, userData: {kind: this.m_kind, tileID: this.m_tileID}};
      case TK.GLUE: return {density: 0.0, friction: 10., userData: {kind: this.m_kind, tileID: this.m_tileID}};
      case TK.LAVA: return {density: 0.0, friction: 0.0, userData: {kind: this.m_kind, tileID: this.m_tileID}};
      default: return {density: 0.0, friction: 1.0, userData: {kind: this.m_kind, tileID: this.m_tileID}};
    }
  }
  getColor() {
    switch(this.m_kind) {
      case TK.GROUND: return '#663300';
      case TK.ICE: return '#00FFFF';
      case TK.GLUE: return '#00CC00';
      case TK.LAVA: return '#FF6600'
      default: return '#FFFFFF';
    }
  }
}

function createTerrain(ground, levelData) {
  var terrainTiles = [];
  levelData.terrain.forEach(function(tileDef) {
    var tile = new Tile(tileDef);
    terrainTiles.push(tile);
    if (tile.m_kind !== TK.NONE)
      ground.createFixture(pl.Edge(tile.m_p1, tile.m_p2), tile.getKindFD());
  });

  return terrainTiles;
}