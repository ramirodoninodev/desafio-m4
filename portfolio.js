
function portfolioComponent(el){
    const componentElPortfolio = document.createElement("div");

    componentElPortfolio.innerHTML = `
    <div class="portfolio__container">
    <h2 class="portfolio__container-title">Mi Portfolio</h2>
    </div>

    <div class="portfolio__container-cards">

    </div>


    <template id="portfolio__card-template">     
        <div class="portfolio__card">
        <img src="./images/work.jpg" alt="" class="portfolio__card-image">
        <div class="container__content-card">
            <h4 class="portfolio__container__content-card-title">Un trabajo que hice</h4>
            <p class="portfolio__container__content-card-p"> Algo interesante sobre mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui quam, sollicitudin at enim id, sodales vehicula.</p>
        </div>
        </div>
    </template>`;
    
    el.appendChild(componentElPortfolio);

    function addWorkPortfolioCard(params = {}){
        const template = document.querySelector("#portfolio__card-template");
        const cardContainer = document.querySelector(".portfolio__container-cards");
    
        template.content.querySelector(".portfolio__container__content-card-title").textContent = params.title;
        template.content.querySelector(".portfolio__container__content-card-p").textContent = params.description;

        
        template.content.querySelector(".portfolio__card-image").src = params.image;
    
        const clone = document.importNode(template.content, true);
        cardContainer.appendChild(clone)
    }

    function getContenfulDataPortfolio(){
        return fetch("https://cdn.contentful.com/spaces/o5ooq96wpqi6/environments/master/entries?access_token=-W8hWhoeqxU0KKhvaCQ81Go-f44JDkczecUaWbligJk&content_type=worPortfolio")
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            const fieldCollections = data.items.map((item)=>{
                const obj = {
                    title: item.fields.titulo,
                    description: item.fields.descripcion,
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
    
    
    getContenfulDataPortfolio().then((workServices)=>{
        for(const w of workServices){
            addWorkPortfolioCard(w);
        }
    })
}