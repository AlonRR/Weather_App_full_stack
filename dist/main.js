const renderer = new Renderer
const tempManager = new TempManager
const loadPage = async function () {
    await tempManager.getDataFromDB()
    console.log(tempManager.cityData)
    renderer.renderData(tempManager.cityData)
}
const handleSearch = async function () {
    let city = $(`#city-input`).val()
    $(`#city-input`).val(``)
    await tempManager.getCityData(city)
    renderer.renderData(tempManager.cityData)
}
$(`body`).on(`click`, `#city-search`, handleSearch)
$(`body`).on(`click`, `div > #save`, function () {
    tempManager.saveCity($(this).siblings(`.name`).text())
})
$(`body`).on(`click`, `div > #remove`, async function () {
    await tempManager.removeCity($(this).siblings(`.name`).text())
    // $(this).parent().remove()
    renderer.renderData(tempManager.cityData)
})
$(`body`).on(`click`, `div > #refresh`, async function () {
    await tempManager.updateCity($(this).siblings(`.name`).text())
    await renderer.renderData(tempManager.cityData)
})
loadPage()