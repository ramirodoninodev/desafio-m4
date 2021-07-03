function headerComponent(el){
    const componentElHeader = document.createElement("div");

    componentElHeader.innerHTML = `<div class="header__nav">
    <img class="header__nav-icon" src="./images/logo.png" alt="">

    <div class="header__nav__hamburger-icon">
        <img class="header__nav__hamburger-icon-hamburguer" src="./images/menu-hamburguer.jpg" alt="">
    </div>

    <div class="header__nav__hamburguer">
        <button class="header__nav__hamburguer-button">X</button>
        <a class="header__nav__hamburguer-link" href="./portfolio.html">Portfolio</a>
        <a class="header__nav__hamburguer-link" href="./services.html">Servicios</a>
        <a class="header__nav__hamburguer-link" href="./contact.html">Contacto</a>
    </div>

    <div class="header__nav-full-screen">
        <a class="header__nav__link" href="./portfolio.html">Portfolio</a>
        <a class="header__nav__link" href="./services.html">Servicios</a>
        <a class="header__nav__link" href="./contact.html">Contacto</a>                
    </div>
</div>`;

    el.appendChild(componentElHeader);

    const botonIcono = document.querySelector('.header__nav-icon')

    const botonParaAbrir = document.querySelector('.header__nav__hamburger-icon-hamburguer');
    const botonCerrar = document.querySelector('.header__nav__hamburguer-button');
    const menuMobile = document.querySelector('.header__nav__hamburguer');

    botonIcono.addEventListener('click', ()=>{
        window.location.href='index.html' 
    })

    botonParaAbrir.addEventListener('click', ()=>{
        menuMobile.style.display = "flex"
    })

    botonCerrar.addEventListener('click',()=>{
        menuMobile.style.display = ""
    })
}