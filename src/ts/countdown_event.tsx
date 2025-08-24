// Countdown Timer TypeScript implementation

// Set the date we're counting down to (December 18, 2021 10:00:00)
const countDownDate: number = new Date("Dec 18, 2021 10:00:00").getTime();

// Update the countdown every second
const countdownInterval: number = window.setInterval(updateCountdown, 1000);

function updateCountdown(): void {
    // Get current date and time
    const now: number = new Date().getTime();

    // Calculate time remaining
    const distance: number = countDownDate - now;

    // If countdown is finished, clear interval and update UI
    if (distance < 0) {
        clearInterval(countdownInterval);
        const countdownElement = document.getElementById("event_countdown");
        if (countdownElement) {
            countdownElement.textContent = "EVENT IN PROGRESS";
        }
        return;
    }

    // Calculate time units
    const days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes: number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds: number = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown display
    const countdownElement = document.getElementById("event_countdown");
    if (countdownElement) {
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

// Initialize the countdown when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown(); // Initial call to avoid delay
});
