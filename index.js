const apiKey="0d79e805eac05223d8ad5bb65d28733e"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")

const weatherIcon=document.querySelector(".weather-image")



async function checkWeather(city){
    const response= await fetch(apiUrl+city +`&appid=${apiKey}`)
    var data=await response.json()
   
    console.log(data)



    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C" ;

    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind-speed").innerHTML=data.wind.speed+"km/h"
    if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";
    }
    else if(data.weather[0].main=="Cloud"){
        weatherIcon.src="/clear.png";
    }
    else if(data.weather[0].main=="Cloud"){
        weatherIcon.src="/clouds.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="/mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="/rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="/snow.png";
    }
    




    searchBox.value="";

}



function handleEnterkey(event){
    if(event.key=="Enter"){
        searchBtn.click();
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", handleEnterkey);
