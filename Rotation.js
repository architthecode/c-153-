//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    this.data.speedOfRotation += 0.07;
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});



AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscent: {type:"number", default: 0}    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      this.data.speedOfRotation = this.el.getAttribute("rotation");
      var diver_rotation = this.data.speedOfRotation;

      this.data.speedOfAscent = this.el.getAttribute("position");
      var diver_position = this.data.speedOfAscent;

      if (e.key === "ArrowRight") {
        if (diver_rotation.y < 360) {
          diver_rotation.y += 0.5;
          this.el.setAttribute("rotation", diver_rotation)
        }

        if (diver_position.x < 8) {
          diver_position.x += 0.01;
          this.el.setAttribute("position", diver_position)
        }
      }

      if (e.key === "ArrowLeft") {
        if (diver_rotation.y > -360) {
          diver_rotation.y -= 0.5;
          this.el.setAttribute("rotation", diver_rotation)

          if (diver_position.x > -8) {
            diver_position.x -= 0.01;
            this.el.setAttribute("position", diver_position)
          }
        }
      }
      
      if (e.key === "ArrowUp") {
        if (diver_rotation.z < 5) {
          diver_rotation.z += 0.5;
          this.el.setAttribute("rotation", diver_rotation)
        }
        if (diver_position.y < -1.75) {
          diver_position.y += 0.01;
          this.el.setAttribute("position", diver_position)
        }
        if (diver_position.z < 1) {
          diver_position.z -= 0.02;
          this.el.setAttribute("position", diver_position)
        }

      }

      if (e.key === "ArrowDown") {
        if (diver_rotation.z > -10) {
          diver_rotation.z -= 0.5;
          this.el.setAttribute("rotation", diver_rotation)
        }
        if (diver_position.y > -5.25) {
          diver_position.y -= 0.01;
          diver_position.z += 0.01;
          this.el.setAttribute("position", diver_position)
        }
      }

    });
  },
  tick: function () {
    var diverRotation = this.el.getAttribute("rotation");

    diverRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: diverRotation.x,
      y: diverRotation.y,
      z: diverRotation.z
    });
  }
});






