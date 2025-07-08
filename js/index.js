
document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  
window.addEventListener('load', () => {
    gsap.to("#holoDevice", {
      delay: 1,
      duration: 1.5,
      scale: 1,
      y: 0,
      opacity: 1,
      ease: "power3.out"
    });
  });

 const caText = document.getElementById("caText");
  const caValue = document.getElementById("caValue");
  const popup = document.getElementById("copyPopup");

  caText.addEventListener("click", async () => {
    const text = caValue.innerText.trim();

    try {

      await navigator.clipboard.writeText(text);
    } catch (err) {

      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }


    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 1500);
  });

  const backgroundMusic = document.getElementById("backgroundMusic");
  const audioPopup = document.getElementById("audioPrompt");
  const enableAudioBtn = document.getElementById("enableAudioBtn");

  let isPlaying = false;

  const toggleAudio = () => {
    if (!backgroundMusic) return;

    if (!isPlaying) {

      backgroundMusic.volume = 1;
      backgroundMusic.loop = true;
      backgroundMusic.play().then(() => {
        enableAudioBtn.innerText = "🔇 Turn Off Audio";
        isPlaying = true;
      }).catch((err) => {
        console.warn("❌ Error:", err);
      });
    } else {
    
      backgroundMusic.pause();
      enableAudioBtn.innerText = "🔊 Turn On Audio";
      isPlaying = false;
    }
  };

  enableAudioBtn.addEventListener("click", toggleAudio);

function changeAlienSkin(newSrc) {
  const alien = document.getElementById("alienPoppyHero");
  const faceWrapper = document.querySelector(".alien-face-wrapper");

 
  faceWrapper.style.transition = "opacity 0.2s ease";
  faceWrapper.style.opacity = "0";

  setTimeout(() => {
    alien.src = newSrc;

    
    faceWrapper.style.opacity = "1";
    faceWrapper.classList.add("alien-change");

    setTimeout(() => {
      faceWrapper.classList.remove("alien-change");
    }, 400);
  }, 200);
}


let alienClicks = 0;

 const alienHero = document.getElementById("alienPoppyHero"); 
const alienFaceWrapper = document.querySelector(".alien-face-wrapper");

alienHero.addEventListener("click", () => {
  alienClicks++;
  CreditAmount.innerText = `${alienClicks}`;

  alienFaceWrapper.classList.add("alien-pop");
  setTimeout(() => {
    alienFaceWrapper.classList.remove("alien-pop");
  }, 300);
});

const CreditAmount = document.querySelector(".credits-amount");

CreditAmount.innerText = `${alienClicks}`;


const updateCredits = () => {
  CreditAmount.innerText = `${alienClicks}`;
};

const buyCowboy = document.querySelector(".BuyCowboy");
const buyNarko = document.querySelector(".BuyNarko");
const BuyVegetable = document.querySelector(".BuyVegetable");
const buyRich = document.querySelector(".BuyRich");


buyCowboy.addEventListener("click", () => {
  const cost = 100;
  if (alienClicks >= cost) {
    alienClicks -= cost;
    changeAlienSkin("./assets/Alien-Poppy-Hero-Cowboy.png");
    updateCredits();
  }
});

buyNarko.addEventListener("click", () => {
  const cost = 200;
  if (alienClicks >= cost) {
    alienClicks -= cost;
    changeAlienSkin("./assets/Alien-Poppy-Hero-MLG.png");
    updateCredits();
  }
});

BuyVegetable.addEventListener("click", () => {
  const cost = 350;
  if (alienClicks >= cost) {
    alienClicks -= cost;
    changeAlienSkin("./assets/Alien-Poppy-Hero-Vegetable.png");
    updateCredits();
  }
});

buyRich.addEventListener("click", () => {
  const cost = 1000;
  if (alienClicks >= cost) {
    alienClicks -= cost;
    changeAlienSkin("./assets/Alien-Poppy-Hero-crown.png");
    updateCredits();
  }
});

const dexChart = document.getElementById("dexChartHolo");

gsap.to(dexChart, {
  delay: 2.5,
  duration: 1.5,
  scale: 1,
  y: 0,
  opacity: 1,
  ease: "power3.out"
});

  gsap.to(dexChart, {
  delay: 2.5,
  duration: 1.5,
  scale: 1,
  y: 0,
  opacity: 1,
  ease: "power3.out",
  onComplete: () => {
    dexChart.classList.add("show-chart");
  }
});
});


const canvas = document.getElementById("neonCursor");
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let mouse = { x: width / 2, y: height / 2 };
const trail = [];
const maxTrail = 40;

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

function animate() {
  ctx.clearRect(0, 0, width, height);
  trail.unshift({ x: mouse.x, y: mouse.y });

  if (trail.length > maxTrail) trail.pop();

  for (let i = 0; i < trail.length; i++) {
    const point = trail[i];
    const alpha = 1 - i / maxTrail;

    ctx.beginPath();
    ctx.fillStyle = `rgba(57, 255, 20, ${alpha})`;
    ctx.shadowColor = "#39FF14";
    ctx.shadowBlur = 20;
    ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

animate();

const eyes = document.querySelectorAll(".eye");

document.addEventListener("mousemove", (e) => {
  eyes.forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    const angle = Math.atan2(dy, dx);
let radius = 20;
if (window.innerWidth <= 1920) {
  radius = 16; 
}
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    eye.style.transform = `translate(${x}px, ${y}px)`;
  });
});


tsParticles.load("neonCursor", {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  particles: {
    number: { value: 80 },
    color: { value: "#39FF14" },
    shape: { type: "circle" },
    size: { value: 1.5 },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      outModes: "out"
    },
    opacity: { value: 0.7 }
  }
});
