const form = document.querySelector("form");
const inputSuhu = document.querySelector("#suhu");
const selectSatuan = document.querySelector("#satuan");
const hasilKonversi = document.querySelector("#hasil-konversi");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const suhu = parseFloat(inputSuhu.value);
  const satuan = selectSatuan.value;

  let hasil;

  if (satuan === "celcius") {
    hasil = konversiCelciusKeFahrenheit(suhu);
    hasilKonversi.innerHTML = `${suhu}°C sama dengan ${hasil}°F`;
  } else {
    hasil = konversiFahrenheitKeCelcius(suhu);
    hasilKonversi.innerHTML = `${suhu}°F sama dengan ${hasil}°C`;
  }
});

function konversiCelciusKeFahrenheit(suhu) {
  return (suhu * 9) / 5 + 32;
}

function konversiFahrenheitKeCelcius(suhu) {
  return ((suhu - 32) * 5) / 9;
}
