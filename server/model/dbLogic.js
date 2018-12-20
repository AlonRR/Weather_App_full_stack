const mongoose = require(`mongoose`)
const City = require(`./city`)
mongoose.connect(`mongodb://localhost/weatherDB`, { useNewUrlParser: true })

const getCities =async function () {
    let cities = await City.find({})
    return cities
}
const saveCity = function (cityInfo) {
    city = new City(cityInfo)
    city.save()
}
const deleteCity = function (city) {
    City.findOneAndDelete({name: city}).exec()
    // City.findOne({name: city}, function (err ,city) {
    //     city.remove()
    // })
}

let dbLogic = {
    getCities,
    saveCity,
    deleteCity
}

module.exports = dbLogic