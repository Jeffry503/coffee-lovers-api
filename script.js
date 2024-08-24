document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const apiBaseUrl = 'https://api.sampleapis.com/coffee'; // Base URL for the coffee API

    // Function to fetch data from a specific endpoint
    function fetchData(endpoint) {
        fetch(`${apiBaseUrl}/${endpoint}`)
            .then(response => response.json())
            .then(data => displayData(data))
            .catch(error => console.error('Error fetching data:', error));
    }

    // Function to render data on the page
    function displayData(data) {
        let html = '';

        if (window.location.pathname.includes('index.html')) {
            // Display hot coffee varieties
            html = '<h2>Hot Coffee Varieties</h2><ul>';
            data.forEach(item => {
                html += `<li><strong>${item.title}</strong>: ${item.description}</li>`;
            });
            html += '</ul>';
        } else if (window.location.pathname.includes('cold.html')) {
            // Display iced coffee varieties
            html = '<h2>Cold Coffee Varieties</h2><ul>';
            data.forEach(item => {
                html += `<li><strong>${item.title}</strong>: ${item.description}</li>`;
            });
            html += '</ul>';
        }

        content.innerHTML = html;
    }

    // Determine which endpoint to fetch data from based on the current page
    if (window.location.pathname.includes('index.html')) {
        fetchData('hot'); // Fetch hot coffee varieties
    } else if (window.location.pathname.includes('cold.html')) {
        fetchData('iced'); // Fetch iced coffee varieties
    }
});
