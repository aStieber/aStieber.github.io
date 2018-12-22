var pl = planck, Vec2 = pl.Vec2;

class Game {
  constructor(world, levelData) {
    this.m_marble = new Marble(world, levelData.level.marbleStart);
    //terrain
    this.m_terrainBody = world.createBody({userData: "ground"});
    this.m_terrainTiles = createTerrain(this.m_terrainBody, levelData);

    this.m_objectiveBody = world.createBody();
    this.m_objectives = createObjectives(this.m_objectiveBody, levelData);
    
    this.m_remainingCoins = 0;
    this.m_objectives.forEach((o) => {if (o.m_kind === "coin" && o.m_isVisible) this.m_remainingCoins++;});

    this.m_doomedObjectiveIDs = [] 
    this.m_victory = false;
  }

  collectCoin(objID) {
    this.m_doomedObjectiveIDs.push(objID);
  }

  reachedFinish() {
    if (this.m_remainingCoins === 0)
      this.m_victory = true;
  }

  update() {
    //clear body
    //update remaining coins
    var objID = -1;
    var destroyedCoins = 0;
    while((objID = this.m_doomedObjectiveIDs.pop()) != null){ 
      this.m_objectives.forEach((obj) => {
        if (obj.m_isVisible && obj.m_objectiveID === objID) {
          if (obj.m_kind === "coin") destroyedCoins++;
          obj.m_isVisible = false;
          this.m_objectiveBody.destroyFixture(obj.m_objectiveFixture);
        }
      });
    }
    this.m_remainingCoins -= destroyedCoins;
  }
}

