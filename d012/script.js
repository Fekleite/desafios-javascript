function priceCheck() {
  let currentPrice = prompt("Qual era o preço anterior do produto?");
  let newPrice = prompt("Qual é o preço atual do produto?");

  const nCurrentPrice = Number(currentPrice);
  const nNewPrice = Number(newPrice);

  const p = document.querySelector("p#paragraph");
  const div = document.querySelector("div#response");

  p.innerHTML = `<strong>Analisando os valores informados</strong>`;
  div.innerHTML = `<p>O produto custava R$ ${nCurrentPrice.toFixed(2)} e agora custa R$ ${nNewPrice.toFixed(2)}.</p>`;

  if (nNewPrice > nCurrentPrice) {
    div.innerHTML += `<p>Hoje o produto está mais caro.</p>`;
    var diference = nNewPrice - nCurrentPrice;
    var percent = (100 * diference) / nCurrentPrice;
    div.innerHTML += `<p>O preço subiu R$ ${diference.toFixed(2)} em relação ao preço anterior.</p>`;
    div.innerHTML += `<p>Uma variação de ${percent.toFixed(2)}% para cima.</p>`;
  }
  else {
    div.innerHTML += `<p>Hoje o produto está mais barato.</p>`;
    diference = nCurrentPrice - nNewPrice;
    percent = (100 * diference) / nNewPrice;
    div.innerHTML += `<p>O preço baixou R$ ${diference.toFixed(2)} em relação ao preço anterior.</p>`;
    div.innerHTML += `<p>Uma variação de ${percent.toFixed(2)}% para baixo.</p>`;
  }
}