$(document).ready( () => {

    const urlParmas = new URLSearchParams(window.location.search)
    console.log(urlParmas)
    const articleID = urlParmas.get('id')
    console.log(articleID)
    $.ajax({
        url:`http://localhost:8000/api/article/get/${articleID}`,
        type:'GET',
        success: (response) => {
            let articleElements = '';
            let monArticle = $('#article');
            
            articleElements = `
                <div class="article-item">
                        <p>Nom : ${response.name}<br> Marque :${response.brand} <br>Prix : ${response.price} <br> Stock: ${response.stock}<br> </p>
                        <img src="${response.picture[0].img}" width="200px" alt="Article Image">
                    </a>
                </div>
            `;
            
            monArticle.html(articleElements);
            $('#updateArticle').on('click',()=>{
                window.location.href = `../update/updateArticle.html?id=${response._id}`
            })
        },
        
       
        error: (xhr,status,error) =>{
            console.error(`Erreur Ajax${error}`);
        }
    })
$('#deleteArticle').on('click',()=>{
    
    $.ajax({
       url:`http://localhost:8000/api/article/delete/${articleID}`,
       type:'DELETE',
    
       success:(response )=> {
        console.log('je clique')
        $(`#article-${articleID}`).remove(); 
    },
    
   
    error: (xhr,status,error) =>{
        console.error(`Erreur Ajax${error}`);
    }
    })
})


})