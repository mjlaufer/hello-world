const app = document.getElementById('app');
const greetingElement = app.querySelector('.greeting');

async function fetchGreeting() {
    try {
        const response = await fetch('http://localhost:8000/api/greeting');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        greetingElement.textContent = data.greeting;
    } catch (error) {
        console.error('Failed to fetch greeting:', error);
        greetingElement.textContent = 'Failed to load greeting. Please try again later.';
    }
}

fetchGreeting();
