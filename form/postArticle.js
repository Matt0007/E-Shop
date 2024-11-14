$('#postForm').on ('submit', (event)=> {
event.preventDefault()//empeche le rechargement de l'inspecteur de la page

console.log($('#name').val())
// récuperation des valeurs du formulaire
const articleDataForm = {
    name:$('#name').val(),
    category:$('#categorie').val(),
    brand:$('#brand').val(),
    price:parseFloat($('#price').val()),
    content:$('#content').val(),
    stock:parseInt($('#stock').val()),
    online:$('#online').val(),
    picture:[{
        img:$('#img').val(),
    }],
}
console.log (articleDataFor



})
