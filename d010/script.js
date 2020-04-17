function toResolve() {
  let a = prompt("Qual é o valor de a?");
  let b = prompt("Qual é o valor de b?");
  let c = prompt("Qual é o valor de c?");

  const variables = {
    a: Number(a),
    b: Number(b),
    c: Number(c),
  }

  let delta = ((variables.b * variables.b) - (4 * variables.a * variables.c));


  const p = document.querySelector("p#paragraph");
  const div = document.querySelector("div#response");

  p.innerHTML = `<strong>Resolvendo Bhaskara</strong>`;

  div.innerHTML = `
    <p>A equação atual é ${variables.a}x² + ${variables.b}x + ${variables.c} .</p>
    <p>O cálculo realizado será Δ = ${variables.a}² - 4 * ${variables.b}  * ${variables.c}</p>
    <p>O valor calculado foi Δ = ${delta}.</p>
  `;
}