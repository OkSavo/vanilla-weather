function displayTemp(response) {
  console.log(response.data.main.temp);
}

let apiKey = "a60b931947ef27861e5c5ca7e5bbaf05";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemp);
