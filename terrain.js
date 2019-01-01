var pl = planck, Vec2 = pl.Vec2;
var TK = {NONE: "none", GROUND: "ground", ICE: "ice", GLUE: "glue", LAVA: "lava"};

var GLOBAL_TERRAIN_COUNT = 1024;
class TerrainEdge {
  constructor(tileDef) {
    this.m_kind = tileDef.kind;
    this.m_p1 = Vec2(tileDef.p1.x, tileDef.p1.y);
    this.m_p2 = Vec2(tileDef.p2.x, tileDef.p2.y);
    this.m_id = GLOBAL_TERRAIN_COUNT;
    GLOBAL_TERRAIN_COUNT++;
  }
  getKindFD() {
    var userData = {type: "terrain", kind: this.m_kind, id: this.m_id};
    switch (this.m_kind) {
      case TK.GROUND: return {density: 0.0, friction: 0.6, userData};
      case TK.ICE: return {density: 0.0, friction: 0.2, userData};
      case TK.GLUE: return {density: 0.0, friction: 10., userData};
      case TK.LAVA: return {density: 0.0, friction: 0.0, userData};
      default: return {density: 0.0, friction: 1.0, userData};
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
    var tile = new TerrainEdge(tileDef);
    terrainTiles.push(tile);
    if (tile.m_kind !== TK.NONE)
      ground.createFixture(pl.Edge(tile.m_p1, tile.m_p2), tile.getKindFD());
  });

  return terrainTiles;
}