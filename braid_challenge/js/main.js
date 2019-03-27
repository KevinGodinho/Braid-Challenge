/*jslint browser:true */
'use strict';

// FOR STATION KCHO

var KCHO;

var station = document.getElementById('station');

var kcho = new XMLHttpRequest();

// bypass CORS error with cors-anywhere proxy
kcho.open('GET', 'https://cors-anywhere.herokuapp.com/https://wx.wearebraid.com/stations/KCHO', true);

kcho.responseType = 'text';

kcho.setRequestHeader('TRN-Api-Key', '39fc53212f51072b449cdfad1b7276b3');

//populate weather data from Braid API for KCHO
kcho.onload = function(){
    KCHO = JSON.parse(kcho.responseText);
    if(kcho.status == 200){
        console.log(KCHO)
        
        // populate initial information prior to searching for specific station
        document.getElementById('name').innerHTML = 'Station: KCHO';
        document.getElementById('windSpeed').innerHTML = 'Wind Speed:' + ' ' + KCHO['Wind-Speed'] + KCHO.Units['Wind-Speed'];
        document.getElementById('windDirection').innerHTML = 'Wind Direction:' + ' ' + KCHO['Wind-Direction'];
        document.getElementById('visibility').innerHTML = 'Visibility:' + ' ' + KCHO['Visibility'] + KCHO.Units['Visibility'];
        document.getElementById('temperature').innerHTML = 'Temperature:' + ' ' + KCHO['Temperature'] + '&deg' + KCHO.Units['Temperature'];
        
        // populate info for all stations on the right 
        document.getElementById('r1c1').innerHTML = 'KCHO';
        document.getElementById('r1c2').innerHTML = 'WS:' + ' ' + KCHO['Wind-Speed'] + KCHO.Units['Wind-Speed'];
        document.getElementById('r1c3').innerHTML = 'WD:' + ' ' + KCHO['Wind-Direction'];
        document.getElementById('r1c4').innerHTML = 'V:' + ' ' + KCHO['Visibility'] + KCHO.Units['Visibility'];
        document.getElementById('r1c5').innerHTML = 'T:' + ' ' + KCHO['Temperature'] + '&deg' + KCHO.Units['Temperature'];
        
    }    
}

function loadWeather(){
    if (station.value == 'KCHO'){
        
        document.getElementById('name').innerHTML = 'Station:' + ' ' + station.value;
        document.getElementById('windSpeed').innerHTML = 'Wind Speed:' + ' ' + KCHO['Wind-Speed'] + KCHO.Units['Wind-Speed'];
        document.getElementById('windDirection').innerHTML = 'Wind Direction:' + ' ' + KCHO['Wind-Direction'];
        document.getElementById('visibility').innerHTML = 'Visibility:' + ' ' + KCHO['Visibility'] + KCHO.Units['Visibility'];
        document.getElementById('temperature').innerHTML = 'Temperature:' + ' ' + KCHO['Temperature'] + '&deg' + KCHO.Units['Temperature'];
    } 
}

kcho.send();


// FOR STATION KVBW

var KVBW;

var kvbw = new XMLHttpRequest();

var station = document.getElementById('station');

// bypass CORS error with cors-anywhere proxy
kvbw.open('GET', 'https://cors-anywhere.herokuapp.com/https://wx.wearebraid.com/stations/KVBW', true);

kvbw.responseType = 'text';

kvbw.setRequestHeader('TRN-Api-Key', '39fc53212f51072b449cdfad1b7276b3');

//populate weather data from Braid API 
kvbw.onload = function(){
    KVBW = JSON.parse(kvbw.responseText);
    if(kvbw.status == 200){
        console.log(KVBW)
        
        // populate info for all stations on the right 
        document.getElementById('r2c1').innerHTML = 'KVBW';
        document.getElementById('r2c2').innerHTML = 'WS:' + ' ' + KVBW['Wind-Speed'] + KVBW.Units['Wind-Speed'];
        document.getElementById('r2c3').innerHTML = 'WD:' + ' ' + KVBW['Wind-Direction'];
        document.getElementById('r2c4').innerHTML = 'V:' + ' ' + KVBW['Visibility'] + KVBW.Units['Visibility'];
        document.getElementById('r2c5').innerHTML = 'T:' + ' ' + KVBW['Temperature'] + '&deg' + KVBW.Units['Temperature'];
    }    
}
        
function loadWeather2(){
    if (station.value == 'KVBW'){
        
        document.getElementById('name').innerHTML = 'Station:' + ' ' + station.value;
        document.getElementById('windSpeed').innerHTML = 'Wind Speed:' + ' ' + KVBW['Wind-Speed'] + KVBW.Units['Wind-Speed'];
        document.getElementById('windDirection').innerHTML = 'Wind Direction:' + ' ' + KVBW['Wind-Direction'];
        document.getElementById('visibility').innerHTML = 'Visibility:' + ' ' + KVBW['Visibility'] + KVBW.Units['Visibility'];
        document.getElementById('temperature').innerHTML = 'Temperature:' + ' ' + KVBW['Temperature'] + '&deg' + KVBW.Units['Temperature'];
    }
}

kvbw.send();



// FOR STATION KSHD

var KSHD;

var kshd = new XMLHttpRequest();

var station = document.getElementById('station');

// bypass CORS error with cors-anywhere proxy
kshd.open('GET', 'https://cors-anywhere.herokuapp.com/https://wx.wearebraid.com/stations/KSHD', true);

kshd.responseType = 'text';

kshd.setRequestHeader('TRN-Api-Key', '39fc53212f51072b449cdfad1b7276b3');

//populate weather data from Braid API 
kshd.onload = function(){
    KSHD = JSON.parse(kshd.responseText);
    if(kshd.status == 200){
        console.log(KSHD)
        
        // populate info for all stations on the right 
        document.getElementById('r3c1').innerHTML = 'KSHD';
        document.getElementById('r3c2').innerHTML = 'WS:' + ' ' + KSHD['Wind-Speed'] + KSHD.Units['Wind-Speed'];
        document.getElementById('r3c3').innerHTML = 'WD:' + ' ' + KSHD['Wind-Direction'];
        document.getElementById('r3c4').innerHTML = 'V:' + ' ' + KSHD['Visibility'] + KSHD.Units['Visibility'];
        document.getElementById('r3c5').innerHTML = 'T:' + ' ' + KSHD['Temperature'] + '&deg' + KSHD.Units['Temperature'];
    }    
}
        
function loadWeather3(){
    if (station.value == 'KSHD'){
        
        document.getElementById('name').innerHTML = 'Station:' + ' ' + station.value;
        document.getElementById('windSpeed').innerHTML = 'Wind Speed:' + ' ' + KSHD['Wind-Speed'] + KSHD.Units['Wind-Speed'];
        document.getElementById('windDirection').innerHTML = 'Wind Direction:' + ' ' + KSHD['Wind-Direction'];
        document.getElementById('visibility').innerHTML = 'Visibility:' + ' ' + KSHD['Visibility'] + KSHD.Units['Visibility'];
        document.getElementById('temperature').innerHTML = 'Temperature:' + ' ' + KSHD['Temperature'] + '&deg' + KSHD.Units['Temperature'];
    }
}

kshd.send();



// FOR STATION KGVE

var KGVE;

var kgve = new XMLHttpRequest();

var station = document.getElementById('station');

// bypass CORS error with cors-anywhere proxy
kgve.open('GET', 'https://cors-anywhere.herokuapp.com/https://wx.wearebraid.com/stations/KGVE', true);

kgve.responseType = 'text';

kgve.setRequestHeader('TRN-Api-Key', '39fc53212f51072b449cdfad1b7276b3');

//populate weather data from Braid API 
kgve.onload = function(){
    KGVE = JSON.parse(kgve.responseText);
    if(kgve.status == 200){
        console.log(KGVE)
        
        // populate info for all stations on the right 
        document.getElementById('r4c1').innerHTML = 'KGVE';
        document.getElementById('r4c2').innerHTML = 'WS:' + ' ' + KGVE['Wind-Speed'] + KGVE.Units['Wind-Speed'];
        document.getElementById('r4c3').innerHTML = 'WD:' + ' ' + KGVE['Wind-Direction'];
        document.getElementById('r4c4').innerHTML = 'V:' + ' ' + KGVE['Visibility'] + KGVE.Units['Visibility'];
        document.getElementById('r4c5').innerHTML = 'T:' + ' ' + KGVE['Temperature'] + '&deg' + KGVE.Units['Temperature'];
    }    
}
        
function loadWeather4(){
    if (station.value == 'KGVE'){
        
        document.getElementById('name').innerHTML = 'Station:' + ' ' + station.value;
        document.getElementById('windSpeed').innerHTML = 'Wind Speed:' + ' ' + KGVE['Wind-Speed'] + KGVE.Units['Wind-Speed'];
        document.getElementById('windDirection').innerHTML = 'Wind Direction:' + ' ' + KGVE['Wind-Direction'];
        document.getElementById('visibility').innerHTML = 'Visibility:' + ' ' + KGVE['Visibility'] + KGVE.Units['Visibility'];
        document.getElementById('temperature').innerHTML = 'Temperature:' + ' ' + KGVE['Temperature'] + '&deg' + KGVE.Units['Temperature'];
    }
}

kgve.send();




// FOR STATION KW13

var KW13;

var kw13 = new XMLHttpRequest();

var station = document.getElementById('station');

// bypass CORS error with cors-anywhere proxy
kw13.open('GET', 'https://cors-anywhere.herokuapp.com/https://wx.wearebraid.com/stations/KW13', true);

kw13.responseType = 'text';

kw13.setRequestHeader('TRN-Api-Key', '39fc53212f51072b449cdfad1b7276b3');

//populate weather data from Braid API 
kw13.onload = function(){
    KW13 = JSON.parse(kw13.responseText);
    if(kw13.status == 200){
        console.log(KW13)
        
        // populate info for all stations on the right 
        document.getElementById('r5c1').innerHTML = 'KW13';
        document.getElementById('r5c2').innerHTML = 'WS:' + ' ' + KW13['Wind-Speed'] + KW13.Units['Wind-Speed'];
        document.getElementById('r5c3').innerHTML = 'WD:' + ' ' + KW13['Wind-Direction'];
        document.getElementById('r5c4').innerHTML = 'V:' + ' ' + KW13['Visibility'] + KW13.Units['Visibility'];
        document.getElementById('r5c5').innerHTML = 'T:' + ' ' + KW13['Temperature'] + '&deg' + KW13.Units['Temperature'];
    }    
}
        
function loadWeather5(){
    if (station.value == 'KW13'){
        
        document.getElementById('name').innerHTML = 'Station:' + ' ' + station.value;
        document.getElementById('windSpeed').innerHTML = 'Wind Speed:' + ' ' + KW13['Wind-Speed'] + KW13.Units['Wind-Speed'];
        document.getElementById('windDirection').innerHTML = 'Wind Direction:' + ' ' + KW13['Wind-Direction'];
        document.getElementById('visibility').innerHTML = 'Visibility:' + ' ' + KW13['Visibility'] + KW13.Units['Visibility'];
        document.getElementById('temperature').innerHTML = 'Temperature:' + ' ' + KW13['Temperature'] + '&deg' + KW13.Units['Temperature'];
    }
}

kw13.send();



// FOR STATION K1AD

var KIAD;

var kiad = new XMLHttpRequest();

var station = document.getElementById('station');

// bypass CORS error with cors-anywhere proxy
kiad.open('GET', 'https://cors-anywhere.herokuapp.com/https://wx.wearebraid.com/stations/KIAD', true);

kiad.responseType = 'text';

kiad.setRequestHeader('TRN-Api-Key', '39fc53212f51072b449cdfad1b7276b3');

//populate weather data from Braid API 
kiad.onload = function(){
    KIAD = JSON.parse(kiad.responseText);
    if(kiad.status == 200){
        console.log(KIAD)
        
        // populate info for all stations on the right 
        document.getElementById('r6c1').innerHTML = 'KIAD';
        document.getElementById('r6c2').innerHTML = 'WS:' + ' ' + KIAD['Wind-Speed'] + KIAD.Units['Wind-Speed'];
        document.getElementById('r6c3').innerHTML = 'WD:' + ' ' + KIAD['Wind-Direction'];
        document.getElementById('r6c4').innerHTML = 'V:' + ' ' + KIAD['Visibility'] + KIAD.Units['Visibility'];
        document.getElementById('r6c5').innerHTML = 'T:' + ' ' + KIAD['Temperature'] + '&deg' + KIAD.Units['Temperature'];
    }    
}
        
function loadWeather6(){
    if (station.value == 'KIAD'){
        
        document.getElementById('name').innerHTML = 'Station:' + ' ' + station.value;
        document.getElementById('windSpeed').innerHTML = 'Wind Speed:' + ' ' + KIAD['Wind-Speed'] + KIAD.Units['Wind-Speed'];
        document.getElementById('windDirection').innerHTML = 'Wind Direction:' + ' ' + KIAD['Wind-Direction'];
        document.getElementById('visibility').innerHTML = 'Visibility:' + ' ' + KIAD['Visibility'] + KIAD.Units['Visibility'];
        document.getElementById('temperature').innerHTML = 'Temperature:' + ' ' + KIAD['Temperature'] + '&deg' + KIAD.Units['Temperature'];
    }
}

kiad.send();














