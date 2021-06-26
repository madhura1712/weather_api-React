const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=b1abb65f4c2cc20feba9a3c9424f8966"
    
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            res.send("the temprature is"+temp)
        })
    })

   
})

app.listen(3000, function(){
    console.log("server is running")
});