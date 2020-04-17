function calculateDiscount() {
  let product = prompt("Qual é o produto que você está comprando?");
  let price = prompt(`Qual é o preço de ${product}?`);

  const money = Number(price);

  let rebate = money * 0.10;

  let pay = money - rebate;

  const p = document.querySelector("p#paragraph");
  const div = document.querySelector("div#response");

  p.innerHTML = `<strong>Calculando desconto de 10% para ${product}...</strong>`;

  div.innerHTML = `
    <p>O preço original era R$ ${money.toFixed(2)}.</p>
    <p>Você acaba de ganhar R$ ${rebate.toFixed(2)} de desconto.</p>
    <p>No fim, você vai pagar R$ ${pay.toFixed(2)} no produto ${product}</p>
  `;
}