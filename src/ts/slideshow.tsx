// Make this file a module
export {};

// Slideshow TypeScript implementation
let slideIndex: number = 1;

// Initialize slideshow when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  showSlides(slideIndex);
});

function plusSlides(n: number): void {
  showSlides(slideIndex += n);
}

function currentSlide(n: number): void {
  showSlides(slideIndex = n);
}

function showSlides(n: number): void {
  const slides: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("mySlides-fade") as HTMLCollectionOf<HTMLElement>;
  const dots: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
  
  // Handle slide index bounds
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  
  // Show current slide and activate corresponding dot
  if (slides[slideIndex - 1] && dots[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  }
}

// Export functions to make them available globally
declare global {
  interface Window {
    plusSlides: (n: number) => void;
    currentSlide: (n: number) => void;
  }
}

// Attach functions to window object for HTML event handlers
window.plusSlides = plusSlides;
window.currentSlide = currentSlide;
