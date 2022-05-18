function Clock (clockNode) {
    this.clockNode = clockNode;
    this.formatFull = true;
    clockNode.addEventListener('click', () => {
        this.formatFull = !this.formatFull;
    });
}
Clock.prototype.render = function() {
    const date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
        
    if (!this.formatFull) {
        this.clockNode.innerHTML = hours + ':' + minutes;
    } else {
        this.clockNode.innerHTML = hours + ':' + minutes + ':' + seconds;
    }
    console.log (this.formatFull)
}
Clock.prototype.start = function() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
}

Clock.prototype.setFormat = function (format = 'full') {
    if (format === 'short') {
        this.formatFull = false;
    } else {
        this.formatFull = true;
    }
}

const clock1 = new Clock(document.querySelector('#clock1'));
const clock2 = new Clock(document.querySelector('#clock2'));
const clock3 = new Clock(document.querySelector('#clock3'));

clock1.start();
clock2.start();
clock3.start();
