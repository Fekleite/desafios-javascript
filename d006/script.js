function toConvert() {
  let temperature = prompt("Digite uma temperatura em °C (Celsius)");

  const celsius = Number(temperature);

  let convertsKelvin = celsius + 273;
  let convertsFahrenheit = (1.8 * celsius) + 32

  const p = document.querySelector("p#paragraph");
  const div = document.querySelector("div#response");

  p.innerHTML = `<strong>A temperatura de ${celsius}°C, corresponde a:</strong>`;

  div.innerHTML = `
    <p>${convertsKelvin}°K (Kelvin)</p>
    <p>${convertsFahrenheit}°F (Fahrenheit)</p>
  `;
}