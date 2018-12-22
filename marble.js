var pl = planck, Vec2 = pl.Vec2;

var Marble = {
  m_contactCount: 0,
  m_marbleBody: null,
  m_maxLinearVelocity: 1.5,
  m_maxAngularVelocity: 25.,

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
    this.m_marbleBody.applyTorque(force);

    if (Math.abs(this.m_marbleBody.getAngularVelocity()) > this.m_maxAngularVelocity) {
      this.m_marbleBody.setAngularVelocity(this.m_maxAngularVelocity);
    }
  },

  jump: function() {
    var test = Vec2(0, 2* ( + Math.abs(this.m_marbleBody.getAngularVelocity()) / this.m_maxAngularVelocity));
    this.m_marbleBody.applyLinearImpulse(test, this.m_marbleBody.getPosition());
  }

}