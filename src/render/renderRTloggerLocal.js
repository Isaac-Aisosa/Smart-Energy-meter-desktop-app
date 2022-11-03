let solarRad =document.getElementById("solarRad");
let humidity =document.getElementById("humidity");
let temp =document.getElementById("temp");
let pressure =document.getElementById("pressure");
let light =document.getElementById("light");
let power =document.getElementById("power");
let voltage =document.getElementById("voltage");
let current =document.getElementById("current");


function update(){
fetch('http://192.168.4.1/Data')
.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
solarRad.innerHTML= data.solarRad;
humidity.innerHTML= data.humidity;
temp.innerHTML= data.temp;
pressure.innerHTML = data.pressure;
light.innerHTML= data.light;
power.innerHTML=data.PV_power;
voltage.innerHTML=data.PV_voltage;
current.innerHTML=data.PV_current;
})
.catch(error => console.error(error))
}

console.log("Real Time monitor waiting");

update(); 

setInterval(function ( ) {
            
  update();
  console.log("updated")

}, 20000 ) ;
