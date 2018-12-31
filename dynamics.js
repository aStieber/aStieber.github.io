var pl = planck, Vec2 = pl.Vec2;

function createDynamics(world, terrainBody, levelData) {
    if (levelData.dynamics === undefined) return;
    var dynamicsOutput = [];
    levelData.dynamics.forEach((dynamic) => {
        if (dynamic.kind === "seesaw") {
            var seesawBody = world.createDynamicBody(dynamic.fulcrum);
            seesawBody.setSleepingAllowed(false);
            var fixture = seesawBody.createFixture(pl.Box(5., 0.1), {userData: {type: "dynamic", kind: "seesaw"}});
            world.createJoint(pl.RevoluteJoint({
                lowerAngle : -8.0 * Math.PI / 180.0,
                upperAngle : 8.0 * Math.PI / 180.0,
                enableLimit : true
              }, terrainBody, seesawBody, seesawBody.getPosition()));
            dynamicsOutput.push(fixture);
        }
    });
    return dynamicsOutput;
}