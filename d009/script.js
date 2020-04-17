function readjustSalary() {
  let name = prompt("Qual é o nome do funcionário?");
  let salary = prompt(`Qual é o salário de ${name}?`);
  let percent = prompt(`O salário de ${name} vai ser reajustado em qual porcentagem?`);

  const nSalary = Number(salary);

  let readjust = nSalary * (percent / 100);
  let newSalary = nSalary + readjust;

  const p = document.querySelector("p#paragraph");
  const div = document.querySelector("div#response");

  p.innerHTML = `<strong>${name} recebeu um aumento salarial!</strong>`;

  div.innerHTML = `
    <p>O salário atual era R$ ${nSalary.toFixed(2)}.</p>
    <p>Com um aumento de ${percent}%, o salário vai aumentar R$ ${readjust.toFixed(2)}, no próximo mês.</p>
    <p>E a partir daí, ${name} vai passar a ganhar R$ ${newSalary.toFixed(2)}.</p>
  `;
}