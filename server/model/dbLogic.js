const mongoose = require(`mongoose`)
const City = require(`./city`)
mongoose.connect(`mongodb://localhost/weatherDB`, { useNewUrlParser: true })

const getCities =async function () {
    let thing
    await City.find({},async function(err,cities){
        console.log(cities)
        thing = cities
    })
    return thing
    // let x=JSON.parse(y)
    
}
const saveCity = function (cityInfo) {
    city = new City(cityInfo)
    city.save()
}
const deleteCity = function (city) {
    City.find(city, function (city) {
        city.remove()
    })
}

let dbLogic = {
    getCities,
    saveCity,
    deleteCity
}

module.exports = dbLogic