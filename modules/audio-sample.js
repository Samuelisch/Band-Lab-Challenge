//creates a container for all button functionalities of audio page
const btnContainer = document.createElement('div');
btnContainer.className = 'music-container';
// display for track selected
const trackDisplay = document.createElement('div');
trackDisplay.className = 'track-display';
trackDisplay.textContent = 'Select track and press play';
// container for track selection
const trackContainer = document.createElement('div');
trackContainer.className = 'track-container';
const track1Button = document.createElement('button');
track1Button.className = 'track-btn';
track1Button.dataset.num = '1';
const track2Button = document.createElement('button');
track2Button.className = 'track-btn';
track2Button.dataset.num = '2';
track1Button.textContent = 'New wave kit sample';
track2Button.textContent = 'Synth organ sample';
//container for play and pause buttons
const controlContainer = document.createElement('div');
controlContainer.className = 'control-container';
const playButton = document.createElement('button');
playButton.className = 'control-btn';
playButton.textContent = 'Play';
const pauseButton = document.createElement('button');
pauseButton.className = 'control-btn';
pauseButton.textContent = 'Pause';
// audio elements
const audio1Track = document.createElement('audio');
audio1Track.className = 'audio-track';
audio1Track.dataset.playing = 'false';
const audio2Track = document.createElement('audio');
audio2Track.dataset.playing = 'false';
audio2Track.className = 'audio-track';

trackContainer.appendChild(track1Button);
trackContainer.appendChild(track2Button);
trackContainer.appendChild(audio1Track);
trackContainer.appendChild(audio2Track);
controlContainer.appendChild(playButton);
controlContainer.appendChild(pauseButton);
btnContainer.appendChild(trackDisplay);
btnContainer.appendChild(trackContainer);
btnContainer.appendChild(controlContainer);

let trackSelected;
const ctx = new AudioContext();

const track1 = ctx.createMediaElementSource(audio1Track);
audio1Track.src = './sounds/new-wave-kit.ogg';
const track2 = ctx.createMediaElementSource(audio2Track);
audio2Track.src = './sounds/synth-organ.ogg';

const selectTrack = (e) => {
  const trackNum = e.target.dataset.num;
  if (trackNum === '1') {
    track1.connect(ctx.destination);
    trackSelected = audio1Track;
    trackDisplay.textContent = 'Track Selected: New Wave Kit Sample';
  } else {
    track2.connect(ctx.destination);
    trackSelected = audio2Track;
    trackDisplay.textContent = 'Track Selected: Synth Organ Sample';
  }
  // refreshes selected track to beginning
  trackSelected.load();
}

const disableBtns = () => {
  const trackBtns = document.querySelectorAll('.track-btn');
  trackBtns.forEach(btn => btn.disabled = true);
}

const enableBtns = () => {
  const trackBtns = document.querySelectorAll('.track-btn');
  trackBtns.forEach(btn => btn.disabled = false);
}

const playMusic = () => {
  if (!trackSelected) {
    return;
  }
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
  disableBtns();
  trackSelected.dataset.playing = 'true';
  trackSelected.play();

}

const pauseMusic = () => {
  enableBtns();
  trackSelected.pause()
  trackSelected.dataset.playing = 'false';
}

const stopTrack = () => {
  enableBtns();
  trackSelected.dataset.playing = 'false';
}

track1Button.addEventListener('click', selectTrack);
track2Button.addEventListener('click', selectTrack);
playButton.addEventListener('click', playMusic);
pauseButton.addEventListener('click', pauseMusic);
audio1Track.addEventListener('ended', stopTrack);
audio2Track.addEventListener('ended', stopTrack);


export default btnContainer;