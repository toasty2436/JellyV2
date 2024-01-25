function hasVisitedToday() {
    const lastVisit = localStorage.getItem('lastVisit');
    const today = new Date().toDateString();

    return lastVisit === today;
}

// Show the popup if it's the first visit of the day
function showPopup() {
    const popup = document.getElementById('popup');

    if (!hasVisitedToday()) {
        popup.style.display = 'block';
        localStorage.setItem('lastVisit', new Date().toDateString());
    }
}

// Trigger the popup function when the page loads
document.addEventListener('DOMContentLoaded', showPopup);