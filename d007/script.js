const quote = prompt("Antes de mais nada. Quanto está a cotação do dólar agora");


function toConvert() {
  let money = prompt("Quantos R$ você tem na carteira?");

  const cash = Number(money);

  let convertsDollar = (cash / quote).toFixed(2);

  const p = document.querySelector("p#paragraph");
  const div = document.querySelector("div#response");

  p.innerHTML = `<strong>Com R$${money} você conseguirá comprar:</strong>`;

  div.innerHTML = `
    <p>US$${convertsDollar}</p>
  `;
}