import track1 from './tracks/track1.js';
import track2 from './tracks/track2.js';
import track3 from './tracks/track3.js';

initStrudel();

// Define all tracks here - just add new entries to expand your library
const tracks = [
    track1,
    track2,
    track3
    // Add more tracks here...
];

// Populate dropdown with tracks
const trackSelect = document.getElementById('trackSelect');
trackSelect.innerHTML = tracks.map((track, index) => 
    `<option value="${index}">${track.name}</option>`
).join('');

// Load saved track from localStorage
const savedTrack = localStorage.getItem('currentTrack');
if (savedTrack !== null && savedTrack < tracks.length) {
    trackSelect.value = savedTrack;
}

// Save track selection to localStorage when changed
trackSelect.addEventListener('change', () => {
    localStorage.setItem('currentTrack', trackSelect.value);
});

// Play selected track
document.getElementById('play').addEventListener('click', () => {
    const selectedIndex = parseInt(trackSelect.value);
    tracks[selectedIndex].pattern().play();
});

document.getElementById('stop').addEventListener('click', () => hush());
