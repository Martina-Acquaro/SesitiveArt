document.addEventListener('DOMContentLoaded', function() {
    // Script per il funzionamento del menu a tendina
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.getElementById('menu');
    
    burgerMenu.addEventListener('click', function() {
        menu.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });
    
    // Chiudi il menu quando si clicca su un link
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            burgerMenu.classList.remove('active');
        });
    });
    
    // Inizializza lo swiper con configurazione responsiva
    const swiperEl = document.querySelector('swiper-container');
    if (swiperEl) {
        Object.assign(swiperEl, {
            pagination: {
                clickable: true,
            },
            navigation: true,
            autoHeight: true,
            updateOnImagesReady: true
        });
        
        // Aggiorna lo swiper quando una slide cambia o quando la finestra cambia dimensione
        swiperEl.addEventListener('imagesReady', function() {
            swiperEl.swiper.update();
        });
        
        window.addEventListener('resize', function() {
            if (swiperEl.swiper) {
                swiperEl.swiper.update();
            }
        });
    }
    <script>
    document.addEventListener("DOMContentLoaded", function() {
        const titleElement = document.querySelector('.mainTitle');
        const fullText = titleElement.textContent;
        titleElement.textContent = ''; // svuota il titolo

        let index = 0;

        function typeWriter() {
            if (index < fullText.length) {
                titleElement.textContent += fullText.charAt(index);
                index++;
                setTimeout(typeWriter, 70); // velocità scrittura
            }
        }

        typeWriter();
    });
</script>
    
});
