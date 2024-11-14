console.log('sss')
$.ajax({
    url:'http://localhost:8000/api/article/get',
    type:'GET',
    success:(response )=> {
        let articleElements = '';
        let monArticle =$('#article');
        response.forEach(element => {
            articleElements+= `<p>
            Nom :${element.name}
            prix:${element.price}
            </p>
            <img src='${element.picture[0].img} 'width='200px'>
            `

            

        });
        monArticle.html(articleElements)
    },
    
   
    error: (xhr,status,error) =>{
        console.error(`Erreur Ajax${error}`);
    }
})