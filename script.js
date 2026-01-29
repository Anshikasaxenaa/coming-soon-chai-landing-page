// ======================
// Email signup (simple)
// ======================
const form = document.getElementById("signupForm");
const emailInput = document.getElementById("emailInput");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!email) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thanks for signing up for the royal brew!");
  form.reset();
});

// ======================
// Countdown timer
// ======================

// Set launch date & time (year, monthIndex, day, hour, minute, second)
// monthIndex is 0-based: 2 = March
const launchDate = new Date(2026, 2, 1, 10, 0, 0).getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance <= 0) {
    clearInterval(countdownInterval);
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";

    const label = document.querySelector(".countdown-label");
    if (label) {
      label.textContent = "The royal brew has arrived";
    }

    // Optional: show a popup or redirect
    // alert("The royal chai is now live!");
    // window.location.href = "https://your-live-site.com";

    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

// Run once immediately, then every second
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

