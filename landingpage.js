document.addEventListener('DOMContentLoaded', function() {
    // Find the button element by its class
    var spotifyButton = document.querySelector('.spotify-button');

    // Attach a click event handler to the button
    spotifyButton.addEventListener('click', function() {
        // Launch the landing page functionality here
        console.log('Button clicked! Landing page functionality launched.');
        
        // For example, you can redirect the user to the landing page:
        window.location.href = 'spotifylogin.html';
    });
});