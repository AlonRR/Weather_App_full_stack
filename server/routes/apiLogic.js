const express = require(`express`)
const request = require(`request`)
const rp = require(`request-promise`)
const db = require(`../model/dbLogic`)
// const bodyParser = require(`body-parser`)
const getCityWeather = async function (city) {
    let weatherData = await rp(`https://api.apixu.com/v1/current.json?key=094b3ee387d042b1b12123435181912&q=${city}`)
    //extract relavent info
    weatherData = JSON.parse(weatherData)
    return weatherData = {
        name: `${weatherData.location.name}`,
        updatedAt: `${weatherData.current.last_updated}`,
        temperature: `${weatherData.current.temp_c}`,
        condition: `${weatherData.current.condition.text}`,
        conditionPic: `${weatherData.current.condition.icon}`
    }
}
const getCities = async function () {
    return await db.getCities()
}
const saveCity = function (Data) {
    //find the city data from in `Data`
    let cityInfo = Data.body
    db.saveCity(cityInfo)
}
const deleteCity = function (city) {
    db.deleteCity(city)
}
const updateCity = async function(cityName){
    let data = await getCityWeather(cityName)
    let x = await db.getCities()
    console.log(x)
    if( await x.find(city=>city.name===cityName)){
        db.deleteCity(cityName)
        db.saveCity(data)
    }
    return data
}







let apiLogic = {
    getCityWeather,
    getCities,
    saveCity,
    deleteCity,
    updateCity
}

module.exports = apiLogic