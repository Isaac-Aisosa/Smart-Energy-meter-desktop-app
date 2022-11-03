let solarRad =document.getElementById("solarRad");
let humidity =document.getElementById("humidity");
let temp =document.getElementById("temp");
let pressure =document.getElementById("pressure");
let light =document.getElementById("light");
let power =document.getElementById("power");
let voltage =document.getElementById("voltage");
let current =document.getElementById("current");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIoP-iEOo-6UXQw8pKsLWVCWE_Du_gopc",
    authDomain: "solar-logger-1a8b7.firebaseapp.com",
    databaseURL: "https://solar-logger-1a8b7-default-rtdb.firebaseio.com",
    projectId: "solar-logger-1a8b7",
    storageBucket: "solar-logger-1a8b7.appspot.com",
    messagingSenderId: "418381979032",
    appId: "1:418381979032:web:7484462d08c082aa915fed",
    measurementId: "G-2EMQM7PQE1"
  };

 
      // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
  
    var ref = firebase.database().ref().child('RTData/solarRad');
          
          ref.on('value', function(snap) { 
            const data = snap.val();
            console.log('SolarRad:' );
            console.log(data);
            solarRad.innerHTML = data
          });
  
          var ref = firebase.database().ref().child('RTData/light');
          
          ref.on('value', function(snap) { 
            const data = snap.val();
            console.log('Light:' );
            console.log(data);
            light.innerHTML = data
          });      
  
          var ref = firebase.database().ref().child('RTData/temp');
          
          ref.on('value', function(snap) { 
            const data = snap.val();
            console.log('Temp:' );
            console.log(data);
            temp.innerHTML = data
          });

          var ref = firebase.database().ref().child('RTData/humidity');
          
          ref.on('value', function(snap) { 
            const data = snap.val();
            console.log('humidity:' );
            console.log(data);
            humidity.innerHTML = data
          });


          var ref = firebase.database().ref().child('RTData/pressure');
          
          ref.on('value', function(snap) { 
            const data = snap.val();
            console.log('Pressure:' );
            console.log(data);
            pressure.innerHTML = data
          });


          var ref = firebase.database().ref().child('RTData/PV_voltage');
          
          ref.on('value', function(snap) { 
            const data = snap.val();
            console.log('PV_voltage:' );
            console.log(data);
            voltage.innerHTML = data
          });



          var ref = firebase.database().ref().child('RTData/PV_current');
          
          ref.on('value', function(snap) { 
            const data = snap.val();
            console.log('Current:' );
            console.log(data);
            current.innerHTML = data
          });


          var ref = firebase.database().ref().child('RTData/PV_power');
          
          ref.on('value', function(snap) { 
            const data = snap.val();
            console.log('Power:' );
            console.log(data);
            power.innerHTML = data
          });



