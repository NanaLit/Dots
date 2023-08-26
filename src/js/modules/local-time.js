function localtime () {
    var today = new Date();
    var now = today.toLocaleTimeString('ru-RU');
    const time = document.querySelector('.time');
    time.innerHTML = now;
}

module.exports = localtime;