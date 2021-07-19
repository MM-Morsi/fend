/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log("New Date:", newDate)

// API Url to get the weather data using fetch
const key = '306f34f6f645e03e6d803023522e7bed';
const generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", async ()=>{ // await works inside async functions
    let zip = document.querySelector("#zip").value;
    console.log(zip)
    if (!zip){
        console.log("zip code empty")
        return
    }
    // async function >> await for the api response
    const tempReq = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}&units=metric`);
    const tempReqJSObj = await tempReq.json();
    console.log("response as a Json object:\n", tempReq);
    console.log("response as a javascript object:\n", tempReqJSObj);
    console.log("temperature is: ", tempReqJSObj.main.temp);
    const temperature = tempReqJSObj.main.temp;
})