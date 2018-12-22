var pl = planck, Vec2 = pl.Vec2;

class History {
  constructor() {
    this.frameBuffer = []
    this.frameIndex = 0;

    this.storeFrame = function(pos) {
      this.frameBuffer[this.frameIndex] = Object.assign({}, pos);
      this.frameIndex++;
    }

    this.getOldFrame = function(seconds, revertToFrame=false) {
      var oldIndex = this.frameIndex - (seconds * 60);
      if (oldIndex < 0) oldIndex = 0;
      if (revertToFrame)
        this.frameIndex = oldIndex;
      return this.frameBuffer[oldIndex]
    }
  }

}