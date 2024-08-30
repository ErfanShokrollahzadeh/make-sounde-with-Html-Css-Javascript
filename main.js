const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const frequency = key.getAttribute("data-frequency");
    playSound(frequency);
  });
});

function playSound(frequency) {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  oscillator.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.5);
}
