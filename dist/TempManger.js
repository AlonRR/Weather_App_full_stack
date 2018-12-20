class TempManager {
    constructor() {
        this.cityData = []
    }
    async getDataFromDB() {
        await $.get(`/cities`, async (res) => {
            console.log(res)
            // console.log(err)
            // console.log(body)

            this.cityData = res
        })
    }
    async getCityData(cityName) {
        await $.get(`/city/${cityName}`, async (res) => {
            this.cityData.push(res)
        })
    }
    saveCity(cityName) {
        $.post(`/city`, this.cityData.find(city => city.name === cityName), function (res, err) {
            console.log(res)
            console.log(err)
        })
    }
    removeCity(cityName) {
        $.ajax({
            url: `/city/${cityName}`,
            method: `delete`,
            success: (res) => {
                console.log(res)
                this.cityData.splice(this.cityData.findIndex(city => city.name === cityName), 1)
            }
        })
    }
    async updateCity(cityName) {
       await $.ajax({
            url: `/city/${cityName}`,
            method: `put`,
            success: (res) => {
                console.log(res)
                let i = this.cityData.findIndex(city => city.name === cityName)
                this.cityData[i] = res
            }
        })
    }
}