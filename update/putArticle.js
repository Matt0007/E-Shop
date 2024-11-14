$(document).ready(() => {

    const urlParmas = new URLSearchParams(window.location.search)
    console.log(urlParmas)
    const articleID = urlParmas.get('id')
    console.log(articleID)
    $.ajax({
        url: `http://localhost:8000/api/article/get/${articleID}`,
        type: 'GET',
        success: (response) => {

            let articleElements = {
                name: $('#name').val(response.name),
                category: $('#category').val(response.category),
                brand: $('#brand').val(response.brand),
                price: parseFloat($('#price').val(response.price)),
                content: $('#content').val(response.content),
                stock: parseInt($('#stock').val(response.stock)),
                $online: $('#online').prop('checked', response.online),
                picture: [{
                    img: $('#img').val(response.picture[0].img),
                }],
            }


           

            $('#updateArticle').on('click', () => {
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
                $.ajax({
                    url: `http://localhost:8000/api/article/update/${articleID}`,
                    type: 'PUT',
                    contentType: 'application/json',
                    data: JSON.stringify(articleDataForm),
                })
            })
        },


        error: (xhr, status, error) => {
            console.error(`Erreur Ajax${error}`);
        }
    })

})