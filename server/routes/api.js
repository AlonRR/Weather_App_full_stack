const express = require(`express`)
const router = express.Router()
const logic = require(`./apiLogic`)

router.get(`/sanity`, function (req, res) {
    res.send(`AHAHAHAHAHAHA... im here`)
})
router.get(`/city/:city`, async function (req, res) {
    res.send(await logic.getCityWeather(req.params.city))
})
router.get(`/cities`, async function (req, res) {
    res.send(await logic.getCities())
})
router.post(`/city`, function (req, res) {
    logic.saveCity(req)
    res.end()
})
router.put(`/city/:city`, async function (req, res) {   
    res.send(await logic.updateCity(req.params.city))
})
router.delete(`/city/:city`, function (req, res) {
    logic.deleteCity(req.params.city)
    res.end()
})

module.exports = router