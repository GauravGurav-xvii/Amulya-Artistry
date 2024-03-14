const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

let currentPage = 1;

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < 2) {  // Assuming there are two pages.
    currentPage++;
    showPage(currentPage);
  }
});

function showPage(pageNumber) {
  if (pageNumber === 1) {
    page1.style.display = 'block';
    page2.style.display = 'none';
    prevButton.disabled = true;
    nextButton.disabled = false;
  } else if (pageNumber === 2) {
    page1.style.display = 'none';
    page2.style.display = 'block';
    prevButton.disabled = false;
    nextButton.disabled = true;
  }
}


          