(function () {
  const canvas = document.getElementById("trend-chart");
  if (!(canvas instanceof HTMLCanvasElement)) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  const ratio = window.devicePixelRatio || 1;
  const cssWidth = canvas.clientWidth || 240;
  const cssHeight = canvas.clientHeight || 122;
  canvas.width = Math.round(cssWidth * ratio);
  canvas.height = Math.round(cssHeight * ratio);
  context.scale(ratio, ratio);

  const series = [
    { color: "#38a9c8", values: [80, 74, 77, 68, 65, 61, 58, 55, 51] },
    { color: "#ef7865", values: [64, 60, 56, 54, 49, 47, 45, 43, 40] }
  ];

  context.strokeStyle = "#e5edef";
  context.lineWidth = 1;
  for (let row = 1; row <= 3; row += 1) {
    const y = (cssHeight / 4) * row;
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(cssWidth, y);
    context.stroke();
  }

  for (const item of series) {
    context.strokeStyle = item.color;
    context.fillStyle = item.color;
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.beginPath();
    item.values.forEach((value, index) => {
      const x = 4 + (index / (item.values.length - 1)) * (cssWidth - 8);
      const y = cssHeight - 10 - (value / 100) * (cssHeight - 22);
      if (index === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
    context.stroke();
    item.values.forEach((value, index) => {
      const x = 4 + (index / (item.values.length - 1)) * (cssWidth - 8);
      const y = cssHeight - 10 - (value / 100) * (cssHeight - 22);
      context.beginPath();
      context.arc(x, y, 3, 0, Math.PI * 2);
      context.fill();
    });
  }
})();
