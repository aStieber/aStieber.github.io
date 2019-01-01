var pl = planck, Vec2 = pl.Vec2;

var GLOBAL_DYNAMICS_COUNT = 0;
function createDynamics(world, terrainBody, levelData) {
    if (levelData.dynamics === undefined) return;
    var dynamicsOutput = [];
    levelData.dynamics.forEach((dynamic) => {
        if (dynamic.kind === "seesaw") {
            var seesawBody = world.createDynamicBody(dynamic.fulcrum);
            var fixture = seesawBody.createFixture(pl.Box(dynamic.length, dynamic.height), {density: 0.5, userData: {type: "dynamic", kind: "seesaw", id: GLOBAL_DYNAMICS_COUNT++}});
            world.createJoint(pl.RevoluteJoint({
                lowerAngle : -dynamic.maxAngle * Math.PI / 180.0,
                upperAngle : dynamic.maxAngle * Math.PI / 180.0,
                enableLimit : true
            }, terrainBody, seesawBody, seesawBody.getPosition()));
            seesawBody.applyAngularImpulse(dynamic.initImpulse, true);
            dynamicsOutput.push(fixture);
        }
    });
    return dynamicsOutput;
}