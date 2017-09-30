let button = document.createElement('button');
button.innerHTML = "help";
document.body.appendChild(button);
button.setAttribute('id', 'button');
button.onclick = function (){
  alert('to get the temperature write your city name');
}

///////////////


//get data

function httpGet(theUrl){


    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
/////////////////

//make city name from input

let api = 'https://api.openweathermap.org/data/2.5/weather?q=';
let apiKey = '&APPID=2220d743f07c7359c58dcb3860306e1d';
let measure = '&units=metric';
let theUrl = " ";


function myFunc(){
let city = searchTxt.value;
let theUrl = api+city+apiKey+measure;
let json_obj = JSON.parse(httpGet(theUrl));

 header.innerHTML = city+ ' temperature is '+json_obj.main.temp+ ' degree'; 
         
}
let header = document.createElement ('p');
document.body.appendChild(header);
header.setAttribute('id', 'results');
