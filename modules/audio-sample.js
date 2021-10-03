const btnContainer = document.createElement('div');
btnContainer.className = 'music-container'
const trackDisplay = document.createElement('div');
trackDisplay.className = 'track-display'
const trackContainer = document.createElement('div')
trackContainer.className = 'track-container'
const track1Button = document.createElement('button');
track1Button.dataset.num = '1'
const track2Button = document.createElement('button');
track2Button.dataset.num = '2'
track1Button.textContent = 'New wave kit sample';
track2Button.textContent = 'Synth Organ sample';
const playPauseButton = document.createElement('button');
playPauseButton.textContent = 'Play/Pause';

trackContainer.appendChild(track1Button);
trackContainer.appendChild(track2Button);
btnContainer.appendChild(trackDisplay);
btnContainer.appendChild(trackContainer);
btnContainer.appendChild(playPauseButton);

let ctx, audio1, audio2, audioSelect;

const loadTrack = (e) => {
  ctx = new AudioContext();
  const trackNum = e.target.dataset.num;
  let fileName, audioExists;
  if (trackNum === '1') {
    fileName = './sounds/new-wave-kit.ogg';
    audioExists = audio1;
  } else {
    fileName = './sounds/synth-organ.ogg';
    audioExists = audio2;
  }
  // fetch track from localfile if not fetched yet
  if (!audioExists) {
    fetch(fileName)
      .then(data => data.arrayBuffer())
      .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
      .then(decodedAudio => {
        if (trackNum === '1') {
          audio1 = decodedAudio;
          audioSelect  = audio1;
        } else {
          audio2 = decodedAudio;
          audioSelect = audio2;
        }
        console.log('fetched audio', trackNum)
      })
      .catch(err => console.log(err));
  } else {
    if (trackNum === '1') {
      audioSelect = audio1;
    } else {
      audioSelect = audio2;
    }
    console.log('loaded audio', trackNum)
  }
  if (trackNum === '1') {
    trackDisplay.textContent = 'Selected: Track 1 - new-wave-kit'
  } else {
    trackDisplay.textContent = 'Selected: Track 2 - synth-organ'
  }
}

const playMusic = () => {
  const playSound = ctx.createBufferSource();
  playSound.buffer = audioSelect;
  playSound.connect(ctx.destination);
  playSound.start(ctx.currentTime);
}

track1Button.addEventListener('click', loadTrack);
track2Button.addEventListener('click', loadTrack);
playPauseButton.addEventListener('click', playMusic);


export default btnContainer;