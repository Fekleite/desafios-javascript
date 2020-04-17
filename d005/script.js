function toConvert() {
  let measure = prompt("Digite uma distância em metros (m)");

  let converts = {
    Km: (measure / 1000),
    Hm: (measure / 100),
    Dam: (measure / 10),
    dm: (measure * 10),
    cm: (measure * 100),
    mm: (measure * 1000)
  };

  const p = document.querySelector("p#paragraph");
  const div = document.querySelector("div#response");

  p.innerHTML = `<strong>A distância de ${measure} metros, corresponde a:</strong>`;

  div.innerHTML = `
    <p>${converts.Km} quilômetros (Km)</p>
    <p>${converts.Hm} hectômetros (Hm)</p>
    <p>${converts.Dam} decâmetros (Dam)</p>
    <p>${converts.dm} decímetros (dm)</p>
    <p>${converts.cm} centímetros (cm)</p>
    <p>${converts.mm} milímetros (mm)</p>
  `;
}