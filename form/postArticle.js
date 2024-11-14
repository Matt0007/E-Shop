$('#postForm').on ('submit', (event)=> {
event.preventDefault()//empeche le rechargement de l'inspecteur de la page

console.log($('#name').val())
// récuperation des valeurs du formulaire
const articleDataForm = {
    name:$('#name').val(),
    category:$('#category').val(),
    brand:$('#brand').val(),
    price:parseFloat($('#price').val()),
    content:$('#content').val(),
    stock:parseInt($('#stock').val()),
    online:$('#online').is(':checked'),
    picture:[{
        img:$('#img').val(),
    }],
}
console.log (articleDataForm)
// envoi des données via une requete Ajax
$.ajax({
    url: 'http://localhost:8000/api/article/add',
    type:'POST',
    contentType:'application/json',
    data:JSON.stringify(articleDataForm),
    success:(response)=> {
        console.log(`L'article ajouté avec succès: ${response}`);

    },
    error :(xhr, status,error) => {
        console.error(`Erreur lors de l'ajout de l'article ${error}`);
    },

})

})
