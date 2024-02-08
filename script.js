const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const valentineImg = document.getElementById('valentineImg');

const originalImgSrc = "valentinecats.gif"; // Put the original image URL here
const hoverImgSrc = "crying-cat.gif"; // Put the hover image URL here

yesBtn.addEventListener('click', function() {
    document.querySelector('.content').style.display = 'none'; // Hide the initial content
    document.getElementById('loveMessage').className = 'show'; // Show the love message
});

// Play sound on "Yes" click
document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('yesSound').play();
});

noBtn.addEventListener('mouseover', function() {
    valentineImg.src = hoverImgSrc; // Change to the hover image
    setTimeout(() => {
        valentineImg.src = originalImgSrc; // Change back to the original image after 1 second
    }, 1000); // 1000 milliseconds = 1 second
    
    const noHoverSound = document.getElementById('noHoverSound');
    noHoverSound.currentTime = 0; // Reset the audio to the start
    noHoverSound.play(); // Start playing the sound

    setTimeout(() => {
        noHoverSound.pause(); // Pause the playback after 1 second
        noHoverSound.currentTime = 0; // Optionally reset the time to start for next hover
    }, 1000); // 1000 milliseconds = 1 second
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
    this.style.display = 'none'; // Hides the welcome screen
});

