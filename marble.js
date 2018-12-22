var pl = planck, Vec2 = pl.Vec2;

var Marble = {
  m_contactCount: 0,
  m_marbleBody: null,
  m_maxLinearVelocity: 1.5,
  m_maxAngularVelocity: 40.,

  isTouchingGround: function() {
    return this.m_contactCount > 0;
  },
  applyLinearForce: function(vector) {
    this.m_marbleBody.applyForce(vector, this.m_marbleBody.getPosition());
    if (Math.abs(this.m_marbleBody.getLinearVelocity()) > this.m_maxLinearVelocity) {
      this.m_marbleBody.setLinearSpeed(this.m_maxLinearVelocity);
    }
  },

  applyAngularForce: function(force) {
    if (Math.abs(this.m_marbleBody.getAngularVelocity()) < this.m_maxAngularVelocity) {
      this.m_marbleBody.applyTorque(force);
    }
  },

  jump: function() {
    var test = Vec2(0, 1.5 + 3 * ( Math.abs(this.m_marbleBody.getAngularVelocity()) / this.m_maxAngularVelocity));
    this.m_marbleBody.applyLinearImpulse(test, this.m_marbleBody.getPosition());
  }

}