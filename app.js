window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d")
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  context.strokeStyle = "black";
  const pinkBtn = document.getElementById("pink-btn")
  const blueBtn = document.getElementById("blue-btn")
  const redBtn = document.getElementById("red-btn")
  const purpleBtn = document.getElementById("purple-btn")
  const greenBtn = document.getElementById("green-btn")
  const orangeBtn = document.getElementById("orange-btn")
  const blackBtn = document.getElementById("black-btn")
  const yellowBtn = document.getElementById("yellow-btn")
  const greyBtn = document.getElementById("grey-btn")
  const brownBtn = document.getElementById("brown-btn")
  let drawing = false;

  startPosition = (e) => {
    drawing = true;
    draw(e);
  }
  finishedPosition = () => {
    drawing = false;
    context.beginPath()
  }
  draw = (e) => {
    if (!drawing) return;
    context.lineWidth = 10;
    context.lineCap = "round";
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY)
  }

  //event listeners//

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
  pinkBtn.addEventListener("click", () => {
    context.strokeStyle = "pink";
  })
  blueBtn.addEventListener("click", () => {
    context.strokeStyle = "blue"
  })
  redBtn.addEventListener("click", () => {
    context.strokeStyle = "red"
  })
  purpleBtn.addEventListener("click", () => {
    context.strokeStyle = "purple"
  })
  orangeBtn.addEventListener("click", () => {
    context.strokeStyle = "orange"
  })
  greenBtn.addEventListener("click", () => {
    context.strokeStyle = "green"
  })
  blackBtn.addEventListener("click", () => {
    context.strokeStyle = "black"
  })
  yellowBtn.addEventListener("click", () => {
    context.strokeStyle = "yellow"
  })
  greyBtn.addEventListener("click", () => {
    context.strokeStyle = "grey";
  })
  brownBtn.addEventListener("click", () => {
    context.strokeStyle = "brown"
  })

});

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
