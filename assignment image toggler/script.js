const images = ['image1.jpeg', 'image2.jpeg', 'image3.jpg']; 
let currentIndex = 0;

const imageElement = document.getElementById('image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update the image source
function updateImage() {
  imageElement.style.opacity = 0; // Start fade out
  setTimeout(() => {
    imageElement.src = images[currentIndex];
    imageElement.style.opacity = 1; // Fade in new image
  }, 300); // Wait for fade out to complete
}

// Next button event
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length; // Loop through images
  updateImage();
});

// Previous button event
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});
