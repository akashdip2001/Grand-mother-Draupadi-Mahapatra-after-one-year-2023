// Add JavaScript for image click and download button
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.gallery-image');

  images.forEach(image => {
    image.addEventListener('click', function () {
      const enlargedImage = document.createElement('div');
      enlargedImage.classList.add('enlarged');
      enlargedImage.innerHTML = `<img src="${this.src}" alt="${this.alt}">
        <div class="back-button">back</div>`;

      document.body.appendChild(enlargedImage);

      const closeButton = enlargedImage.querySelector('.back-button');
      closeButton.addEventListener('click', function () {
        document.body.removeChild(enlargedImage);
      });
    });
  });
});
