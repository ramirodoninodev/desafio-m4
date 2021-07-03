
function servicesComponent(el){
    const componentElServices = document.createElement("div");

    componentElServices.innerHTML = `
    <div class="services__container">
    <h2 class="servicees__container-title">Mis Servicios</h2>
    </div>

    <div class="serviceces__container-cards">

    </div>


    <template id="services__card-template">     
        <div class="card">
        <img src="./images/work.jpg" alt="" class="card-image">
        <div class="container__content-card">
            <h4 class="container__content-card-title">Un trabajo que hice</h4>
            <p class="container__content-card-p"> Algo interesante sobre mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui quam, sollicitudin at enim id, sodales vehicula.</p>
            <a class="container__content-card-link" href="https://apx.school/">Ver más</a>
        </div>
        </div>
    </template>`
    ;
    el.appendChild(componentElServices)


    function addWorkCard(params = {}){
        const template = document.querySelector("#services__card-template");
        const cardContainer = document.querySelector(".serviceces__container-cards");
    
        template.content.querySelector(".container__content-card-title").textContent = params.title;
        template.content.querySelector(".container__content-card-p").textContent = params.description;
        template.content.querySelector(".container__content-card-link").textContent = params.url;
        
        template.content.querySelector(".card-image").src = params.image;
    
        const clone = document.importNode(template.content, true);
        cardContainer.appendChild(clone)
    }
    
    

    function getContenfulDataServices(){
        return fetch("https://cdn.contentful.com/spaces/o5ooq96wpqi6/environments/master/entries?access_token=-W8hWhoeqxU0KKhvaCQ81Go-f44JDkczecUaWbligJk&content_type=work")
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            const fieldCollections = data.items.map((item)=>{
                const obj = {
                    title: item.fields.titulo,
                    description: item.fields.descripcion,
                    url: item.fields.url,
                    imageID: item.fields.imagen.sys.id,
                    includes: data.includes.Asset,
    
                }
                return obj
            })
            fieldCollections.forEach((x)=>{
                let idEncontrado = buscarAsset(x.imageID, x.includes);
                x.image = "https:" + idEncontrado.fields.file.url;
            })
            return fieldCollections
        })
    }
    
    function buscarAsset(assetId, includes){
        const assetEncontrado = includes.find((obj)=>{
            return obj.sys.id == assetId;
        })
        return assetEncontrado
    }
    
    
    getContenfulDataServices().then((workServices)=>{
        for(const w of workServices){
            addWorkCard(w);
        }
    })
    
}


