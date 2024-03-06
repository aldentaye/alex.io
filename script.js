// Game variables
let backgroundX = 0;
let dogX = 50;
const dogY = 150;
const dogSpeed = 5; // Adjust the dog's movement speed
const sectionWidth = 200; // Adjust the width of each resume section

// Update the position of resume sections
function updateResumePosition() {
    // Determine the current section based on the dog's position
    const currentSection = Math.floor(dogX / sectionWidth);

    // Hide all resume sections
    document.querySelectorAll('#resume > div').forEach(section => {
        section.style.display = 'none';
    });

    // Show the current section
    document.getElementById(`section-${currentSection}`).style.display = 'block';
}

// Main game loop
function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    ctx.drawImage(backgroundImage, backgroundX, 0, canvas.width, canvas.height);

    // Draw dog
    ctx.drawImage(dogImage, dogX, dogY);

    // Move background
    backgroundX -= 2; // Adjust the speed as needed

    // Move dog based on user input
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight' && dogX < canvas.width - 200) {
            dogX += dogSpeed;
        } else if (event.key === 'ArrowLeft' && dogX > 0) {
            dogX -= dogSpeed;
        }
        updateResumePosition();
    });

    // Reset background position
    if (backgroundX <= -canvas.width) {
        backgroundX = 0;
    }

    // Repeat drawing
    requestAnimationFrame(draw);
}

// Start the game loop
draw();
