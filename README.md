<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Xylophone</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      .key {
        width: 60px;
        height: 200px;
        display: inline-block;
        margin: 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.2s;
      }
      .key:active {
        transform: translateY(4px);
        background-color: rgba(255, 255, 255, 0.5);
      }
    </style>
  </head>
  <body class="flex justify-center items-center h-screen bg-gray-100">
    <div id="xylophone" class="flex">
      <div class="key bg-red-500" data-frequency="261.63"></div>
      <div class="key bg-orange-500" data-frequency="293.66"></div>
      <div class="key bg-yellow-500" data-frequency="329.63"></div>
      <div class="key bg-green-500" data-frequency="349.23"></div>
      <div class="key bg-blue-500" data-frequency="392.00"></div>
      <div class="key bg-indigo-500" data-frequency="440.00"></div>
      <div class="key bg-violet-500" data-frequency="493.88"></div>
    </div>
    <script>
      const keys = document.querySelectorAll(".key");
      keys.forEach((key) => {
        key.addEventListener("click", () => {
          const frequency = key.getAttribute("data-frequency");
          playSound(frequency);
        });
      });
      function playSound(frequency) {
        const audioContext = new (window.AudioContext ||
          window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(
          frequency,
          audioContext.currentTime
        );
        oscillator.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);
      }
    </script>
    <div class="text-center mt-4">
      <h1 class="text-2xl font-bold">Xylophone</h1>
      <p class="text-gray-700">Click on the colorful keys to play sounds!</p>
    </div>
  </body>
</html>
