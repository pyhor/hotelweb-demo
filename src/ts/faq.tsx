// FAQ TypeScript implementation
document.addEventListener('DOMContentLoaded', () => {
  const accordions: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("question") as HTMLCollectionOf<HTMLElement>;

  for (let i = 0; i < accordions.length; i++) {
    const accordion = accordions[i];
    accordion.addEventListener("click", function(this: HTMLElement) {
      this.classList.toggle("active");
      const panel = this.nextElementSibling as HTMLElement;
      
      if (panel) {
        panel.style.display = panel.style.display === "block" ? "none" : "block";
      }
    });
  }
});
