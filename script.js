const music = document.getElementById('bgMusic');
let musicStarted = false;

// Функция для плавного включения
function startMusic() {
    if (!musicStarted) {
        music.volume = 0; // Начинаем с полной тишины
        music.play().then(() => {
            // Плавное нарастание (Fade-in)
            let fadeIn = setInterval(() => {
                if (music.volume < 0.3) { // 0.3 — это финальная громкость (30%)
                    music.volume = Math.min(music.volume + 0.02, 0.3);
                } else {
                    clearInterval(fadeIn);
                }
            }, 150); // Скорость нарастания (каждые 150мс)
        }).catch(error => {
            console.log("Браузер ждет действия пользователя для включения звука");
        });
        musicStarted = true;
    }
}

// Слушаем любое действие пользователя на сайте
window.addEventListener('click', startMusic); // Клик по любой части экрана
window.addEventListener('touchstart', startMusic); // Касание на телефоне
window.addEventListener('scroll', startMusic, { once: true }); // Первый скролл