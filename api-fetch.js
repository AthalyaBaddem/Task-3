// Add click listener to button
document.getElementById('getJoke').addEventListener('click', async () => {
    // Fetch random joke from API
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    // Display the joke on the page
    document.getElementById('jokeDisplay').textContent = `${data.setup} - ${data.punchline}`;
});
