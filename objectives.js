var pl = planck, Vec2 = pl.Vec2;

class Objective {
  constructor(objectiveDef) {
    this.m_kind = objectiveDef.kind;
    this.m_topLeft = objectiveDef.topLeft;
    this.m_isVisible = true;
  }

  getPolygon() {
    return pl.Box(.25, .25, this.m_topLeft, 0);
  }

  getColor() {
    switch (this.m_kind) {
      case "coin": return '#FF9900';
      case "finish": return '#00FF00';
      default: return "#000000";
    }
  }
}

function createObjectives(world, levelData) {
  var objectiveBody = world.createBody();

  var objectiveList = []
  levelData.level.objectives.forEach(function(objectiveDef) {
    var objective = new Objective(objectiveDef);
    objectiveBody.createFixture(objective.getPolygon(), {userData: objectiveDef.kind});
    objectiveList.push(objective);
  });
  return objectiveList;
}