$(document).ready( () => {

    const urlParmas = new URLSearchParams(window.location.search)
    console.log(urlParmas)
    const articleID = urlParmas.get('id')
    console.log(articleID)

})