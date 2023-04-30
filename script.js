'use strict';

const soundsRoot = 'assets/sounds/';
const drumSounds = [
  { key: 'q', sound: 'clap.wav' },
  { key: 'w', sound: 'crash.wav' },
  { key: 'e', sound: 'hihat.wav' },
  { key: 'a', sound: 'kick.wav' },
  { key: 's', sound: 'openhat.wav' },
  { key: 'd', sound: 'ride.wav' },
  { key: 'z', sound: 'shaker.wav' },
  { key: 'x', sound: 'snare.wav' },
  { key: 'c', sound: 'tom.wav' },
];

const $keysContainer = document.querySelector('.keys');
const $keys = Array.from(document.querySelectorAll('.key'));

const getAudioDOM = (index) => {
  const audioDOM = document.createElement('audio');
  audioDOM.src = soundsRoot + drumSounds[index].sound;
  audioDOM.dataset.key = drumSounds[index].key;
  return audioDOM;
};

const playSound = (key) => {
  const $audio = document.querySelector(`audio[data-key="${key}"]`);
  const $keyDOM = document.querySelector(`div[data-key="${key}"]`);

  if (!$audio && !$keyDOM) return;
  $keyDOM.classList.add('playing');
  $audio.currentTime = 0;
  $audio.play();
};

const onKeyDown = (event) => {
  const key = event.key;
  const setKeys = drumSounds.filter((drum) => drum.key === event.key);
  if (setKeys.length === 0) return;
  playSound(key);
};

const onTransitionEnd = (event) => {
  if (event.propertyName === 'transform') {
    event.target.classList.remove('playing');
  }
};

const init = () => {
  window.addEventListener('keydown', onKeyDown);

  $keys.forEach((key, index) => {
    const audio = getAudioDOM(index);
    key.appendChild(audio);
    key.dataset.key = drumSounds[index].key;
    key.addEventListener('transitionend', onTransitionEnd);
  });
};

$keysContainer.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.matches('.key')) return;
  const key = target.dataset.key;
  playSound(key);
});

init();
