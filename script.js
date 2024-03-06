// Get canvas element by id
const canvas = document.getElementById('game-canvas');

// Get 2D rendering context
const ctx = canvas.getContext('2d');

// Image variables 
const backgroundImage = new Image();
backgroundImage.src = './images/background.jpg';
const dogImage = new Image();
dogImage.src = './images/dog.png';

// Dog positioning
let backgroundX = 0;
let dogX = 50;
const dogY = canvas.height - 100;
const dogSpeed = 5; // Adjust the dog's movement speed
const sectionWidth = 200; // Adjust the width of each resume section

// Resume sections
const nameSectionX = 100;
const educationSectionX = 400;
const workExperienceSectionX = 800;
const contactInfoSectionX = 1200;

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

function updateTextSheets() {
    // Check if the dog is within each resume section
    if (dogX >= nameSectionX && dogX < educationSectionX) {
        document.getElementById('name-section').style.display = 'block';
    } else {
        document.getElementById('name-section').style.display = 'none';
    }

    if (dogX >= educationSectionX && dogX < workExperienceSectionX) {
        document.getElementById('education-section').style.display = 'block';
    } else {
        document.getElementById('education-section').style.display = 'none';
    }

    if (dogX >= workExperienceSectionX && dogX < contactInfoSectionX) {
        document.getElementById('work-experience-section').style.display = 'block';
    } else {
        document.getElementById('work-experience-section').style.display = 'none';
    }

    if (dogX >= contactInfoSectionX) {
        document.getElementById('contact-info-section').style.display = 'block';
    } else {
        document.getElementById('contact-info-section').style.display = 'none';
    }
}

// Main game loop
function walk() {
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
walk();
