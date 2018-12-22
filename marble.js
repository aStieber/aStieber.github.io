var pl = planck, Vec2 = pl.Vec2;

class Marble {
  constructor() {
    this.m_contactCount = 0;
    this.m_marbleBody = null;
    this.m_maxLinearVelocity = 1.5;
    this.m_maxAngularVelocity = 40.;
  }

  isTouchingGround() {
    return this.m_contactCount > 0;
  }
  applyLinearForce(vector) {
    this.m_marbleBody.applyForce(vector, this.getPosition(), true);
    if (Math.abs(this.m_marbleBody.getLinearVelocity()) > this.m_maxLinearVelocity) {
      this.m_marbleBody.setLinearSpeed(this.m_maxLinearVelocity);
    }
  }

  applyAngularForce(force) {
    if (Math.abs(this.m_marbleBody.getAngularVelocity()) < this.m_maxAngularVelocity) {
      this.m_marbleBody.applyTorque(force, true);
    }
  }

  jump() {
    var test = Vec2(0, 1.5 + 3 * ( Math.abs(this.m_marbleBody.getAngularVelocity()) / this.m_maxAngularVelocity));
    this.m_marbleBody.applyLinearImpulse(test, this.getPosition(), true);
  }

  getPosition() {
    return this.m_marbleBody.getPosition();
  }

  setPosition(pos) {
    this.m_marbleBody.setPosition(pos);
  }

}