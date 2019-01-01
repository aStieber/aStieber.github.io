var pl = planck, Vec2 = pl.Vec2;

var GLOBAL_OBJECTIVE_COUNT = 2048;
class Objective {
  constructor(objectiveDef) {
    this.m_kind = objectiveDef.kind;
    this.m_topLeft = objectiveDef.topLeft;
    this.m_isVisible = true;
    this.m_objectiveFixture = null;
    this.m_objectiveID = GLOBAL_OBJECTIVE_COUNT;
    GLOBAL_OBJECTIVE_COUNT++;
  }

  getPolygon() {
    return pl.Box(.5, .5, Vec2(this.m_topLeft.x + .25, this.m_topLeft.y - .25), 0);
  }

  getFixtureDef() {
    var userData = {type: "objective", kind: this.m_kind, id: this.m_objectiveID};
    if (this.m_kind === "coin")
      return {userData, isSensor: true}
    return {userData};
  }
}

function createObjectives(objectiveBody, levelData) {
  var objectiveList = []
  levelData.objectives.forEach(function(objectiveDef) {
    var objective = new Objective(objectiveDef);
    objective.m_objectiveFixture = objectiveBody.createFixture(objective.getPolygon(), objective.getFixtureDef());
    objectiveList.push(objective);
  });

  return objectiveList;
}