document.getElementById('car').addEventListener('animationend', function() {
    const frontTire = this.querySelector('.front-tire');
    const backTire = this.querySelector('.back-tire');
    frontTire.classList.add('pause-animation');
    backTire.classList.add('pause-animation');
    this.style.left = 'calc(30vw - 250px)';
});

document.getElementById('car2').addEventListener('animationend', function() {
    const frontTire2 = this.querySelector('.front-tire2');
    const backTire2 = this.querySelector('.back-tire2');
    frontTire2.classList.add('pause-animation');
    backTire2.classList.add('pause-animation');
    this.style.left = 'calc(70vw - 250px)';
});
