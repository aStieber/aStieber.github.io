var pl = planck, Vec2 = pl.Vec2;

function createDynamics(world, terrainBody, levelData) {
    if (levelData.dynamics === undefined) return;
    var dynamicsOutput = [];
    levelData.dynamics.forEach((dynamic) => {
        if (dynamic.kind === "seesaw") {
            var seesawBody = world.createDynamicBody(dynamic.fulcrum);
            var fixture = seesawBody.createFixture(pl.Box(dynamic.length, dynamic.height), {density: 0.5, userData: {type: "dynamic", kind: "seesaw"}});
            world.createJoint(pl.RevoluteJoint({
                lowerAngle : -dynamic.maxAngle * Math.PI / 180.0,
                upperAngle : dynamic.maxAngle * Math.PI / 180.0,
                enableLimit : true
            }, terrainBody, seesawBody, seesawBody.getPosition()));
            seesawBody.applyAngularImpulse(100.0, true);
            dynamicsOutput.push(fixture);
        }
    });
    return dynamicsOutput;
}