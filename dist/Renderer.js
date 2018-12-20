class Renderer {
    constructor() { }
    renderData(allCityData) {
        $(`#weather-main`).empty()
        let source = $(`#weather-template`).html()
        let template = Handlebars.compile(source)
        let newHTML = template({allCityData})
        $(`#weather-main`).append(newHTML)
    }
}