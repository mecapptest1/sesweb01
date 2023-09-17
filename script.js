document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("cat.mp4");

    // Sayfa yüklendiğinde videoya otomatik olarak tıklama işlemi
    function videoyaOtomatikTikla() {
        video.play();
    }

    // Sayfa yüklendiğinde videoyu otomatik olarak tıkla
    videoyaOtomatikTikla();
});