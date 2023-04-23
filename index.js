// Get the "Read More" and "Read Less" buttons and content pages
const readMoreButton = document.getElementById('read-more-button');
const readLessButton = document.getElementById('read-less-button');
const contentPages = document.querySelectorAll('.content-page');

// Set up a counter variable to keep track of the current page
let currentPage = 0;

// Hide all content pages except for the first one
contentPages.forEach((page, index) => {
  if (index !== currentPage) {
    page.style.display = 'none';
  }
});

// Add a click event listener to the "Read More" button
readMoreButton.addEventListener('click', () => {
  // Hide the current page
  contentPages[currentPage].style.display = 'none';
  
  // Increment the page counter and display the next page
  currentPage++;
  contentPages[currentPage].style.display = 'block';
  
  // Hide the "Read More" button and show the "Read Less" button if we've reached the last page
  if (currentPage === contentPages.length - 1) {
    readMoreButton.style.display = 'none';
    readLessButton.style.display = 'block';
  }
});

// Add a click event listener to the "Read Less" button
readLessButton.addEventListener('click', () => {
  // Hide the current page
  contentPages[currentPage].style.display = 'none';
  contentPages[currentPage].style.marginTop = '1px';
  contentPages[currentPage].style.height = '73vh';
  // Decrement the page counter and display the previous page
  currentPage--;
  contentPages[currentPage].style.display = 'block';
  
  // Hide the "Read Less" button and show the "Read More" button if we've reached the first page
  if (currentPage === 0) {
    readLessButton.style.display = 'none';
    readMoreButton.style.display = 'block';
  }
});

// Hide the "Read Less" button initially
readLessButton.style.display = 'none';
