const express = require(`express`)
const request = require(`request`)
const db = require(`../model/dbLogic`)
// const bodyParser = require(`body-parser`)
// const getCityWeather = function (city) {}

const getCities =async function () {
    const x = await db.getCities()
    console.log(x)
    return x
}
const saveCity = function (Data) {
    //find the city data from in `Data`
    let cityInfo = Data.body
    db.saveCity(cityInfo)
}
const deleteCity = function (city) {
    db.deleteCity(city)
}








let apiLogic = {
    // getCityWeather,
    getCities,
    saveCity,
    deleteCity
}

module.exports = apiLogic