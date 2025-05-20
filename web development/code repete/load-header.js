// Function to load the header content
document.addEventListener('DOMContentLoaded', function() {
    // Target the container where we want to insert the header
    const headerContainer = document.getElementById('header-container');
    
    // Use the fetch API to get the header.html content
    fetch('header.html')
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Insert the header HTML into the container
            headerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the header:', error);
            headerContainer.innerHTML = '<div class="header">Error loading header</div>';
        });
});