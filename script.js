let losAngelesEl = document.querySelector("#los-angeles");
let losAngelesDateEl = losAngelesEl.querySelector(".date");
let losAngelesTimeEl = losAngelesEl.querySelector(".time");
let losAngelesTZ = "America/Los_Angeles";

let londonEl = document.querySelector("#london");
let londonDateEl = londonEl.querySelector(".date");
let londonTimeEl = londonEl.querySelector(".time");
let londonTZ = "Europe/London";

let sydneyEl = document.querySelector("#sydney");
let sydneyDateEl = sydneyEl.querySelector(".date");
let sydneyTimeEl = sydneyEl.querySelector(".time");
let sydneyTZ = "Australia/Sydney";

let tokyoEl = document.querySelector("#tokyo");
let tokyoDateEl = tokyoEl.querySelector(".date");
let tokyoTimeEl = tokyoEl.querySelector(".time");
let tokyoTZ = "Asia/Tokyo";

function updateTime(countryDate, countryTime, countryTZ) {
  let now = moment();
  countryDate.innerHTML = now.format("ddd, MMMM Mo, YYYY");
  countryTime.innerHTML = now
    .tz(countryTZ)
    .format("h:mm:ss [<small>]A[</small>]");
}

function init() {
  updateTime(losAngelesDateEl, losAngelesTimeEl, losAngelesTZ);
  updateTime(londonDateEl, londonTimeEl, londonTZ);
  updateTime(sydneyDateEl, sydneyTimeEl, sydneyTZ);
  updateTime(tokyoDateEl, tokyoTimeEl, tokyoTZ);
}

init();
setInterval(init, 1000);
