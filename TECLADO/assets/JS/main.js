const keyStatus = {
  /*First Octave*/
  q: false,
  2: false,
  w: false,
  3: false,
  e: false,
  r: false,
  5: false,
  t: false,
  6: false,
  y: false,
  7: false,
  u: false,
  /*End First Octave*/
  /*Second Octave*/
  b: false,
  h: false,
  n: false,
  j: false,
  m: false,
  l: false,
  ç: false,
  "]": false,
  ",": false,
  ".": false,
  ";": false,
  "/": false,
  /*End Second Octave*/
};

const audioStatus = {};

const soundMap = {
  "]": "colchete",
  ",": "virgula",
  ".": "ponto",
  ";": "pontoevirgula",
  "/": "barra",
};


function playSound(key) {
  const soundName = soundMap[key] || key;
  if (keyStatus[key]) {
    if (!audioStatus[key]) {
      audioStatus[key] = new Audio(`assets/audio/${soundName}.mp3`); 
    }
    audioStatus[key].play();
  } else if (!keyStatus[key] && audioStatus[key]) {
    if (!audioStatus[key].paused) {
      audioStatus[key].pause();
      audioStatus[key].currentTime = 0;
    }
  }
}

document.addEventListener('keydown', (event) => {
  if (keyStatus.hasOwnProperty(event.key)) {
    keyStatus[event.key] = true;
    const key = event.key.toLowerCase();
    const keyElement = document.querySelector(`.white[data-key="${key}"]`);
    if (keyElement) {
      keyElement.classList.add('key-pressed');
  }
    const keyElementsus = document.querySelector(`.black[data-key="${key}"]`);
    if (keyElementsus) {
      keyElementsus.classList.add('key-pressedsus');
    }
    playSound(event.key);
  }
});

document.addEventListener('keyup', (event) => {
  if (keyStatus.hasOwnProperty(event.key)) {
    keyStatus[event.key] = false;
    const key = event.key.toLowerCase();
    const keyElement = document.querySelector(`.white[data-key="${key}"]`);
    if (keyElement) {
      keyElement.classList.remove('key-pressed');
    }
    const keyElementsus = document.querySelector(`.black[data-key="${key}"]`);
    if (keyElementsus) {
      keyElementsus.classList.remove('key-pressedsus');
    }
    playSound(event.key);
  }
});

