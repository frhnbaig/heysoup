const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const valentineImg = document.getElementById('valentineImg');

const originalImgSrc = "valentinecats.gif"; 
const hoverImgSrc = "crying-cat.gif"; 

yesBtn.addEventListener('click', function() {
    document.querySelector('.content').style.display = 'none'; 
    document.getElementById('loveMessage').className = 'show'; 
});

document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('yesSound').play();
});

noBtn.addEventListener('mouseover', function() {
    valentineImg.src = hoverImgSrc; 
    setTimeout(() => {
        valentineImg.src = originalImgSrc; 
    }, 1000); 
    
    const noHoverSound = document.getElementById('noHoverSound');
    noHoverSound.currentTime = 0; 
    noHoverSound.play(); 

    setTimeout(() => {
        noHoverSound.pause(); 
        noHoverSound.currentTime = 0; 
    }, 1000); 
});

noBtn.addEventListener('mouseover', function(event) {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

document.getElementById('welcomeScreen').addEventListener('click', function() {
    this.style.display = 'none'; 
});

