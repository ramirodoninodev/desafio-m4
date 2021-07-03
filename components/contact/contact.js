function contactComponent(el){
    const componentElFooter = document.createElement("div");

    componentElFooter.innerHTML = `
    <div class="contact__component-container">
    <h2 class="contact__component-title">Contacto</h2>
    
    <div class="contact__component-form-container">
    <form class="contact__component-form">
        <label>
           <h3 class="contact__component-text">Nombre</h3> 
           <input class="contact__component-input" type="text">
        </label>
        <label>
            <h3 class="contact__component-text">Email</h3> 
            <input class="contact__component-input" type="email">
         </label>
         <label>
            <h3 class="contact__component-text">Mensaje</h3> 
            <textarea class="contact__component-input" name="mensaje"></textarea>
         </label>
         <div class="contact__component__subtmit-cont">
             <button class="contact__component__subtmit-btn">Enviar</button>
         </div>
    </form>
    </div>
</div>
    `;
    el.appendChild(componentElFooter);

    const miFormEl = document.querySelector('.contact__component-form')
    miFormEl.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(miFormEl)
        const mensaje = formData.get("mensaje")
        let url = 'https://apx-api.vercel.app/api/utils/dwf';
        var data = {
            "to": "ramirodoninodt@gmail.com",
            "message": mensaje
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    })
}