let currentTimezone = moment.tz.guess();

function updateCityTime() {
  let sydneyEl = document.querySelector("#sydney");
  if (sydneyEl) {
    let sydneyDateEl = sydneyEl.querySelector(".date");
    let sydneyTimeElement = sydneyEl.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateEl.innerHTML = sydneyTime.format("MMMM	Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateDate(timezone) {
  return moment().tz(timezone).format("ddd, MMMM Mo");
}

function updateTime(timezone) {
  let now = moment().tz(timezone);
  let time = now.format("h:mm:ss");
  let ampm = now.format("[<small>]A[</small>]");
  return `${time} ${ampm}`;
}

function updateCity(event) {
  let cityEl = document.querySelector("#city");
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  cityEl.innerHTML = `
  
  <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${updateDate(cityTimeZone)}</div>
    </div>
    <div class="time">${updateTime(cityTimeZone)}</div>
  </div>
  `;
}

updateCityTime();
setInterval(updateCityTime, 1000);

let selectCity = document.querySelector("#select-city");
selectCity.addEventListener("change", updateCity);
