function calculeMoney() {
  let product = prompt("Que produto você está comprando?");
  let price = prompt(`Quanto custa ${product} que você está comprando?`);
  let pay = prompt(`Qual foi o valor que você deu para pagar ${product}?`);

  let cashback = pay - price;

  alert(`
    Você comprou ${product} que custou R$ ${price},00.
    Deu R$ ${pay},00 em dinheiro e vai receber R$ ${cashback},00 de troco.
    Volte Sempre!
  `);
}