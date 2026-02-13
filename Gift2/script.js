function nextPage(pageId) {
    // Hide all containers
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => container.style.display = 'none');
    
    // Show selected container
    document.getElementById(pageId).style.display = 'block';

    // Trigger hearts if they say Yes
    if (pageId === 'page2') {
        startHearts();
    }
}

function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    const correctPassword = "srikarbangaram"; // 🔐 your password

    if (input === correctPassword) {
        document.getElementById("passwordPage").style.display = "none";
        document.getElementById("page1").style.display = "block";

        playMusic(); // ✅ start music properly
    } else {
        document.getElementById("errorMsg").style.display = "block";
    }
}


function moveButton() {
    const btn = document.getElementById('noButton');
    // Move button randomly within the window
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function startHearts() {
    for (let i = 0; i < 1000; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }, i * 200);
    }
}

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// 🎯 SET YOUR MUSIC RANGE (seconds)
const startTime = 87; // music starts here
const endTime = 115;   // music ends here

let isPlaying = false;

function playMusic() {
    music.currentTime = startTime;
    music.play();
    isPlaying = true;
    musicBtn.textContent = "🔊";
}

function pauseMusic() {
    music.pause();
    isPlaying = false;
    musicBtn.textContent = "🔇";
}

// 🎵 Toggle button
function toggleMusic() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

// 🔁 LOOP ONLY SELECTED PART
music.addEventListener("timeupdate", () => {
    if (music.currentTime >= endTime) {
        music.currentTime = startTime;
        music.play();
    }
});
