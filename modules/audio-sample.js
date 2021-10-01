const btnContainer = document.createElement('div');
btnContainer.className = 'music-container'
const track1Button = document.createElement('button');
const track2Button = document.createElement('button');
track1Button.textContent = 'New wave kit sample';
track2Button.textContent = 'Synth Organ sample';

btnContainer.appendChild(track1Button)
btnContainer.appendChild(track2Button)

const ctx1 = new AudioContext();
const ctx2 = new AudioContext();
let audio1, audio2;

fetch('./sounds/new-wave-kit.ogg')
  .then(data => data.arrayBuffer())
  .then(arrayBuffer => ctx1.decodeAudioData(arrayBuffer))
  .then(decodedAudio => {
    audio1 = decodedAudio
  });

fetch('./sounds/synth-organ.ogg')
  .then(data => data.arrayBuffer())
  .then(arrayBuffer => ctx2.decodeAudioData(arrayBuffer))
  .then(decodedAudio => {
    audio2 = decodedAudio
  });

let fileToPlay;

const playback1 = () => {
  const playSound = ctx1.createBufferSource();
  playSound.buffer = audio1;
  playSound.connect(ctx1.destination);
  playSound.start(ctx1.currentTime);
}

const playback2 = () => {
  const playSound = ctx2.createBufferSource();
  playSound.buffer = audio2;
  playSound.connect(ctx2.destination);
  playSound.start(ctx2.currentTime);
}

track1Button.addEventListener('click', playback1);
track2Button.addEventListener('click', playback2);


export default btnContainer;