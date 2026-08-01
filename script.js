import track1 from './tracks/track1.js';
import track2 from './tracks/track2.js';
import track3 from './tracks/track3.js';
import track4 from './tracks/track4.js';

initStrudel();

const tracks = [
    track1,
    track2,
    track3,
    track4
];

const trackSelect = document.getElementById('trackSelect');
trackSelect.innerHTML = tracks.map((track, index) => 
    `<option value="${index}">${track.name}</option>`
).join('');

const savedTrack = localStorage.getItem('currentTrack');
if (savedTrack !== null && savedTrack < tracks.length) {
    trackSelect.value = savedTrack;
}

trackSelect.addEventListener('change', () => {
    localStorage.setItem('currentTrack', trackSelect.value);
});

document.getElementById('play').addEventListener('click', () => {
    const selectedIndex = parseInt(trackSelect.value);
    tracks[selectedIndex].pattern().play();
});

document.getElementById('stop').addEventListener('click', () => hush());
