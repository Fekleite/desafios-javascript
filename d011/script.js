function leapYearCheck() {
  let year = prompt("Qual é o ano que você quer verificar?");

  const nYear = Number(year);

  const p = document.querySelector("p#paragraph");
  const div = document.querySelector("div#response");

  p.innerHTML = `<strong>Analisando o ano de ${nYear}...</strong>`;

  if (nYear % 4 === 0) {
    if (nYear % 100 === 0) {
      if (nYear % 400) {
        div.innerHTML = `<p>O ano de ${nYear} É BISSEXTO.</p>`;
      } else {
        div.innerHTML = `<p>O ano de ${nYear} NÃO É BISSEXTO.</p>`;
      }
    } else {
      div.innerHTML = `<p>O ano de ${nYear} É BISSEXTO.</p>`;
    }
  } else {
    div.innerHTML = `<p>O ano de ${nYear} NÃO É BISSEXTO.</p>`;
  }
}