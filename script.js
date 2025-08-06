let currentTimezone = moment.tz.guess();

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

setInterval(() => {
  if (currentTimezone) {
    const time = document.querySelector(".time");
    if (time) {
      time.innerHTML = updateTime(currentTimezone);
    }
  }
}, 1000);

let selectCity = document.querySelector("#select-city");
selectCity.addEventListener("change", updateCity);
