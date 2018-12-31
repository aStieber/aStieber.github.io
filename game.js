var pl = planck, Vec2 = pl.Vec2;

class Game {
  constructor(levelData) {
    //world
    this.m_world = new pl.World({
      gravity : Vec2(0, -10)
    });
    this.addWorldListeners();
    //marble
    this.m_marble = new Marble(this.m_world, levelData.marbleStart);
    //terrain
    this.m_terrainBody = this.m_world.createBody({userData: "ground"});
    this.m_terrainTiles = createTerrain(this.m_terrainBody, levelData);
    //objectives
    this.m_objectiveBody = this.m_world.createBody();
    this.m_objectives = createObjectives(this.m_objectiveBody, levelData);
    this.m_remainingCoins = 0;
    this.m_objectives.forEach((o) => {if (o.m_kind === "coin" && o.m_isVisible) this.m_remainingCoins++;});
    this.m_doomedObjectiveIDs = [];

    //dynamics
    //each dynamic needs its own body
    this.m_dynamics = createDynamics(this.m_world, this.m_terrainBody, levelData);
    //history
    this.m_frameHistory = new History();
    //misc
    this.m_levelData = levelData;
    this.m_victory = false;
    this.m_alive = true;
    this.m_remainingReverts = levelData.revertCount;
  }

  onCollectCoin(objID) {
    this.m_doomedObjectiveIDs.push(objID);
  }

  onReachedFinish() {
    if (this.m_remainingCoins === 0)
      this.m_victory = true;
  }

  onRevertToFrame() {
    if (this.m_remainingReverts > 0) {
      this.m_marble.setPosition(this.m_frameHistory.getOldFrame(2., true))
      this.m_remainingReverts--;
    }
  }

  update() {
    //clear doomed fixtures
    var objID = -1;
    var destroyedCoins = 0;
    while((objID = this.m_doomedObjectiveIDs.pop()) != null){ 
      this.m_objectives.forEach((obj) => {
        if (obj.m_isVisible && obj.m_objectiveID === objID) {
          if (obj.m_kind === "coin") destroyedCoins++;
          obj.m_isVisible = false;
          this.m_objectiveBody.destroyFixture(obj.m_objectiveFixture);
        }
      });2
    }
    //physics step
    this.m_world.step(1/60);
    //save frame to history
    this.m_frameHistory.storeFrame(this.m_marble.getPosition());
    //update remaining coins
    this.m_remainingCoins -= destroyedCoins;
  }



  addWorldListeners() {
    this.m_world.on('begin-contact', (contact) => {
      var userData = contact.getFixtureA().getUserData();
      if (userData.type === "objective") { //if objective
        console.log("hit objective");
        if (userData.kind === "coin")
        this.onCollectCoin(userData.objID);
        else if (userData.kind === "finish")
          this.onReachedFinish();
      }
      else if (userData.type === "terrain") { //if terrain
        console.log("hit terrain");
        if (userData.kind === TK.LAVA)
          this.m_alive = false;
        if (contact.getManifold().localNormal.y > 0.45) {
          this.m_marble.m_contactCount++;
        }
      }
      else if (userData.type === "dynamic") {
        console.log("hit dynamic");
      }
    });
    this.m_world.on('end-contact', (contact) => {
      var userData = contact.getFixtureA().getUserData();
      if (userData.type === "terrain") {
        if (this.m_marble.m_contactCount > 0)
          this.m_marble.m_contactCount--;
      }
    });
  }
}

