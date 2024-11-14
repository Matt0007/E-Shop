console.log('sss')
$.ajax({
    url:'http://localhost:8000/api/article/get',
    type:'GET',
    success:(response )=> {
        let articleElements = '';
        let monArticle =$('#article');
        response.forEach(element => {
            articleElements+= 
            `
            <div class="article-item">
                <a href="detail/detailsArticle.html">
                    <p>Nom : ${element.name}<br>Prix : ${element.price}</p>
                    <img src="${element.picture[0].img}" width="200px" alt="Article Image">
                </a>
            </div>
            `

            

        });
        monArticle.html(articleElements)
    },
    
   
    error: (xhr,status,error) =>{
        console.error(`Erreur Ajax${error}`);
    }
})