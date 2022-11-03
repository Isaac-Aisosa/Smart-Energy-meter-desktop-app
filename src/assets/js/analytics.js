//button

let  dailybnt =document.getElementById("daily");
let weeklybnt =document.getElementById("weekly");
let monthlybnt =document.getElementById("monthly");
let yearlybnt =document.getElementById("yearly");


//stack view
let  RTLoggerLocal =document.getElementById("RTLoggerLocal");
let  RTLoggerWeb =document.getElementById("RTLoggerWeb");
let  RTChartLocal =document.getElementById("RTChartLocal");
let  RTChartWeb =document.getElementById("RTChartWeb");



dailybnt.addEventListener("click", () => {
  //main.src = "../page/RTLoggerWeb.html";
  dailyAnalytics.style.display = "block";
  weeklyAnalytics.style.display = "none";
  monthlyAnalytics.style.display = "none";
  yearlyAnalytics.style.display = "none";

  //Active color 
  
  dailybnt.style.color = "rgb(223, 60, 1)";
  weeklybnt.style.color = "black";
  monthlybnt.style.color = "black";
  yearlybnt.style.color = "black";

  //active border
  dailybnt.classList.add("active");
  weeklybnt.classList.remove("active");
  monthlybnt.classList.remove("active");
  yearlybnt.classList.remove("active");
});

weeklybnt.addEventListener("click", () => {
  //main.src = "../page/RTChartWeb.html";
  dailyAnalytics.style.display = "none";
  weeklyAnalytics.style.display = "block";
  monthlyAnalytics.style.display = "none";
  yearlyAnalytics.style.display = "none";

  //Active color
  dailybnt.style.color = "black";
  weeklybnt.style.color = "rgb(223, 60, 1)";
  monthlybnt.style.color = "black";
  yearlybnt.style.color = "black";

  //active border
  dailybnt.classList.remove("active");
  weeklybnt.classList.add("active");
  monthlybnt.classList.remove("active");
  yearlybnt.classList.remove("active");
});

monthlybnt.addEventListener("click", () => {
  //main.src = "../page/Analytics.html";
  dailyAnalytics.style.display = "none";
  weeklyAnalytics.style.display = "none";
  monthlyAnalytics.style.display = "block";
  yearlyAnalytics.style.display = "none";

  //Active color
  dailybnt.style.color = "black";
  weeklybnt.style.color = "black";
  monthlybnt.style.color = "rgb(223, 60, 1)";
  yearlybnt.style.color = "black";

  //active border
  dailybnt.classList.remove("active");
  weeklybnt.classList.remove("active");
  monthlybnt.classList.add("active");
  yearlybnt.classList.remove("active");
});


yearlybnt.addEventListener("click", () => {
  //main.src = "../page/history.html";
  dailyAnalytics.style.display = "none";
  weeklyAnalytics.style.display = "none";
  monthlyAnalytics.style.display = "none";
  yearlyAnalytics.style.display = "block";

  //Active color
  dailybnt.style.color = "black";
  weeklybnt.style.color = "black";
  monthlybnt.style.color = "black";
  yearlybnt.style.color = "rgb(223, 60, 1)";

  //active border
  dailybnt.classList.remove("active");
  weeklybnt.classList.remove("active");
  monthlybnt.classList.remove("active");
  yearlybnt.classList.add("active");
});



