function footerComponent(el){
    const componentElFooter = document.createElement("div");

    componentElFooter.innerHTML = `
    <div class="footer__component__container">

    <div class="footer__component-logo-container">
        <img  class="footer__component-logo" src="./images/logo.png" alt="">
    </div>

    <div class="footer__component__div-redes__container">
    <div class="footer__component__div-redes">
        <a class="footer__component__div-redes-text" href="https://apx.school/">Instagram</a>
        <img class="footer__component__div-redes-img" src="./images/instagram.svg" alt="">
    </div>
    <div class="footer__component__div-redes">
        <a class="footer__component__div-redes-text" href="https://www.linkedin.com/in/ramiro-donino-4521ba98/">Linkedin</a>
        <img class="footer__component__div-redes-img" src="./images/linkedin.svg" alt="">
    </div>
    <div class="footer__component__div-redes">
        <a class="footer__component__div-redes-text" href="https://github.com/ramirodoninodev">Github</a>
        <img class="footer__component__div-redes-img" src="./images/github.svg" alt="">
    </div>
</div>

</div>
    `;
    el.appendChild(componentElFooter)
}