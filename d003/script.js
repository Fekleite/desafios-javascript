function beforeAfter() {
  let number = prompt("Digite um número inteiro qualquer");
  let before = number - 1;
  let after = Number(number) + 1;

  alert(`
    Antes de ${number}, temos o número ${before}.
    Depois de ${number}, temos o número ${after}.
  `);
}