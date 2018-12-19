const express = require(`express`)
const router = express.Router()
const logic = require(`./apiLogic`)
const request = require(`request`)

router.get(`/sanity`, function (req, res) {
    res.send(`AHAHAHAHAHAHA... im here`)
})
router.get(`/city/:city`, async function (req, res) {
    // res.send(logic.getCityWeather(req.params.city))
    request(`https://api.apixu.com/v1/current.json?key=094b3ee387d042b1b12123435181912&q=${req.params.city}`, function (err, ress, weatherData) {
        //extract relavent info
        weatherData = JSON.parse(weatherData)
        weatherData = {
            name: `${weatherData.location.name}`,
            updatedAt: `${weatherData.current.last_updated}`,
            temperature: `${weatherData.current.temp_c}`,
            condition: `${weatherData.current.condition.text}`,
            conditionPic: `${weatherData.current.condition.icon}`
        }
        res.send(weatherData)
    })
})
router.get(`/cities`, async function (req, res) {
    let x= await logic.getCities()
    console.log(x)
    res.send(x)
})
router.post(`/city`, function (req, res) {
    logic.saveCity(req)
    res.end()
})
router.delete(`/city/:city`, function (req, res) {
    logic.deleteCity(req.params.city)
})

module.exports = router