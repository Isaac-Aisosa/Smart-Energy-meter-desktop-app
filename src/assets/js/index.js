//button
let navExpand = document.querySelector(".nav__expand");
let nav = document.querySelector(".nav");
let navListItem = document.querySelectorAll(".nav__listitem");
let  main =document.getElementById("main");

let DashboardBnt =document.getElementById("DashboardBnt");
// let SellBnt =document.getElementById("SellBnt");
let history =document.getElementById("History");
let setting =document.getElementById("Setting");
let about =document.getElementById("About");

//stack view iframe
let  Dashboard =document.getElementById("Dashboard");
// let  Sell =document.getElementById("Sell");
let  Abouts =document.getElementById("Abouts");
let  Settings =document.getElementById("Settings");
let  DBhistory =document.getElementById("DBhistory");


DashboardBnt.addEventListener("click", () => {
  //main.src = "../page/RTLoggerWeb.html";
  Dashboard.style.display = "block";
  // Sell.style.display = "none";
  Abouts.style.display = "none";
  Settings.style.display = "none";
  DBhistory.style.display = "none";
});

// SellBnt.addEventListener("click", () => {
//   //main.src = "../page/RTLoggerWeb.html";
//   Dashboard.style.display = "none";
//   Sell.style.display = "block";
//   Abouts.style.display = "none";
//   Settings.style.display = "none";
//   DBhistory.style.display = "none";
// });


history.addEventListener("click", () => {
const windowProxy = window.open('https://console.firebase.google.com/u/2/project/smart-energy-meter-1207a/database', null, 'minimizable=false')
windowProxy.postMessage('hi', '*')
});

setting.addEventListener("click", () => {
  //main.src = "../page/Settings.html";
  Dashboard.style.display = "none";
  // Sell.style.display = "none";
  Abouts.style.display = "none";
  Settings.style.display = "block";
  DBhistory.style.display = "none";
});

about.addEventListener("click", () => {
  //main.src = "../page/About.html";
  Dashboard.style.display = "none";
  // Sell.style.display = "none";
  Abouts.style.display = "block";
  Settings.style.display = "none";
  DBhistory.style.display = "none";
});


navExpand.addEventListener("click", () => {
  nav.classList.toggle("nav-closed");
});

navListItem.forEach((link) => link.addEventListener("click", listActive));

function listActive() {
  navListItem.forEach((link) => link.classList.remove("nav__listitem-active"));
  this.classList.add("nav__listitem-active");
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

