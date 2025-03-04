document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded!");

  // Matrix background effect
  const canvas = document.querySelector(".matrix-background");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const letters = "01";
  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = new Array(columns).fill(1);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";
    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  setInterval(drawMatrix, 50);

  // Hacker Challenge logic
  const codeInput = document.getElementById("codeInput");
  const submitButton = document.getElementById("submit");
  const message = document.getElementById("message");
  const correctCode = "JAKE DONFORT"; // Correct code (in uppercase)

  submitButton.addEventListener("click", function () {
    let enteredCode = codeInput.value.trim().toUpperCase();
    if (enteredCode === correctCode) {
      message.textContent = "Access Granted! Redirecting...";
      // Redirect after a short delay
      setTimeout(function () {
        // Replace YOUR_IMAGE_ID with the actual ID from your Google Drive image link
        window.location.href = "https://drive.google.com/file/d/1m71cVoC-eMyDHqNbcqfXIBQeFIanYq1d/view?usp=drive_link";
      }, 1500);
    } else {
      message.textContent = "Access Denied! Try again.";
    }
  });
});
