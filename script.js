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
// Funzione per impostare un cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
}

// Funzione per leggere un cookie
function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

// Funzione per controllare il consenso ai cookie
function checkCookieConsent() {
    let consent = getCookie("cookieConsent");
    if (!consent) {
        document.getElementById("cookie-popup").style.display = "block"; // Mostra il popup se il cookie non esiste
    }
}

// Funzione per accettare i cookie
function acceptCookies() {
    setCookie("cookieConsent", "accepted", 365); // Imposta il cookie per un anno
    document.getElementById("cookie-popup").style.display = "none"; // Nascondi il popup
}

// Aggiungi l'evento per il pulsante "Accetta"
document.getElementById("accept-cookies").addEventListener("click", acceptCookies);

// Controlla il consenso al caricamento della pagina
document.addEventListener("DOMContentLoaded", checkCookieConsent);
</script>
    
});
