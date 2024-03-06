
// Get canvas element by id
const canvas = document.getElementById('game-canvas');

// Get 2D rendering context
const ctx = canvas.getContext('2d');

// Images 
const backgroundImage = new Image();
backgroundImage.src = './images/background_new.jpg';
const dogImage = new Image();
dogImage.src = './images/dog.png';

// Dog size
const dogWidth = 50;
const dogHeight = 50; 

// Dog positioning
let backgroundX = 0;
let dogX = 50;
const dogY = canvas.height - 50;
const dogSpeed = 5;

// Resume levels
// const sectionWidth = 200; 
const nameSectionX = 50;
const educationSectionX = 100;
const workExperienceSectionX = 150;
const contactInfoSectionX = 200;

function moveLeft() {
    if (dogX > 50) {
        dogX -= dogSpeed;
        backgroundX += dogSpeed;
    }
}

function moveRight() {
    if (dogX < canvas.width - dogWidth) {
        dogX += dogSpeed;
        backgroundX -= dogSpeed;
    }
}

// Move dog based on user input
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        moveRight()
    } else if (event.key === 'ArrowLeft') {
        moveLeft()
    }
});

// Main game loop
function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate the position to draw the background image
    const bgX = backgroundX % canvas.width;

    // Draw the background image
    ctx.drawImage(backgroundImage, bgX, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, bgX + canvas.width, 0, canvas.width, canvas.height);

 
    // Draw the dog
    ctx.drawImage(dogImage, dogX, dogY, dogWidth, dogHeight);

    requestAnimationFrame(draw);
    updateTextSheets()
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



draw();


// Update the position of resume sections
// function updateResumePosition() {
//     // Determine the current section based on the dog's position
//     const currentSection = Math.floor(dogX / sectionWidth);

//     // Hide all resume sections
//     document.querySelectorAll('#resume > div').forEach(section => {
//         section.style.display = 'none';
//     });

//     // Show the current section
//     document.getElementById(`section-${currentSection}`).style.display = 'block';
// }




