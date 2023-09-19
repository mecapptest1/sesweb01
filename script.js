document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video");
    const sesAcDugme = document.getElementById("sesAcDugme");
    const videoBaslatDugme = document.getElementById("videoBaslatDugme");

    // Sayfa yüklendikten sonra 1 saniye sonra "Ses Aç" düğmesine tıklama işlemini gerçekleştir
    setTimeout(function() {
        simuleTiklama(sesAcDugme);
    }, 1000);

    // "Ses Aç" düğmesine tıklandığında sesi açan fonksiyon
    sesAcDugme.addEventListener("click", function() {
        video.muted = false; // Videoyu sessizden çıkar
    });

    // Sayfa yüklendikten sonra 2 saniye sonra "Videoyu Başlat" düğmesine tıklama işlemini gerçekleştir
    setTimeout(function() {
        simuleTiklama(videoBaslatDugme);
    }, 2000);

    // "Videoyu Başlat" düğmesine tıklandığında videoyu başlatan fonksiyon
    videoBaslatDugme.addEventListener("click", function() {
        video.play(); // Videoyu başlat
    });

    // Belirli bir elemente tıklama simüle etme fonksiyonu
    function simuleTiklama(element) {
        const olay = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
        });
        element.dispatchEvent(olay);
    }
});
