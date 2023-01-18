function dicision() {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;

  const d = b * b - 4 * (a * c);
  let resultText;

  if (d < 0) {
    resultText = "Нет корней.";
  } else if (d === 0) {
    const x = -b / (2 * a);
    resultText = `x = ${x}`;
  } else if (d > 0) {
    const square = Math.sqrt(d);
    const x1 = (-b - square) / (2 * a);
    const x2 = (-b + square) / (2 * a);
    resultText = `x1 = ${x1},\n  x2 = ${x2}.`;
  }

  let div = document.createElement("div");
  div.innerHTML = resultText;
  document.body.append(div);
  setTimeout(() => div.remove(), 10000);
}
