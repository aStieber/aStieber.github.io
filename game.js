var pl = planck, Vec2 = pl.Vec2;

class Game {
  constructor(world, levelData) {
    this.m_marble = new Marble(world, levelData.level.marbleStart);
    this.m_terrainTiles = createTerrain(world, levelData);
    this.m_objectives = createObjectives(world, levelData);
  }
}

