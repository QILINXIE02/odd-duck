// Constructor function to create product objects
function Product(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.timesShown = 0;
  this.timesClicked = 0;
}

// Define an array of product data
const productData = [
  { name: 'Product1', imagePath: 'https://th.bing.com/th/id/OIP.Dwx96HrXj8dVo9vhqEYHqQHaHa?pid=ImgDet&rs=1' },
  { name: 'Product2', imagePath: 'https://th.bing.com/th/id/OIP.lc1zaUPt_NCt6G7zxVAVcwHaHA?pid=ImgDet&rs=1' },
  { name: 'Product3', imagePath: 'https://th.bing.com/th/id/OIP.D7E_BC3HvAld39mCpCyGoQHaFU?pid=ImgDet&w=680&h=489&rs=1' },
];

// Define the number of images to display
const numImages = productData.length;

// Create an array of product objects
const products = productData.map(data => new Product(data.name, data.imagePath));

const rounds = 25; // Number of voting rounds

let currentRound = 0;
const viewResultsButton = document.getElementById('view-results');

// Function to display three unique products
function displayProducts() {
  const productIndices = [];
  while (productIndices.length < numImages) {
    const randomIndex = Math.floor(Math.random() * products.length);
    if (!productIndices.includes(randomIndex)) {
      productIndices.push(randomIndex);
      products[randomIndex].timesShown++;
    }
  }

  for (let i = 0; i < numImages; i++) {
    const product = products[productIndices[i]];
    const productElement = document.getElementById(`product${i + 1}`);
    productElement.src = product.imagePath;
    productElement.alt = product.name;
    document.getElementById(`result${i + 1}`).textContent = `${product.timesClicked} votes`;
    document.getElementById(`vote${i + 1}`).disabled = false; // vote buttons enabled
  }
}

// handle user clicks on vote buttons
function handleVoteClick(event) {
  if (currentRound < rounds) {
    const clickedButton = event.target;
    const index = clickedButton.id.charAt(clickedButton.id.length - 1) - 1;
    const product = products[index];

    product.timesClicked++;
    document.getElementById(`result${index + 1}`).textContent = `${product.timesClicked} votes`;

    document.getElementById(`vote${index + 1}`).disabled = true; //button after voting disabled
    currentRound++;
  }

  if (currentRound === rounds) {
    viewResultsButton.style.display = 'block';
    removeEventListeners(); // Remove event listeners after all rounds
  }
}

//remove event listeners from vote buttons
function removeEventListeners() {
  for (let i = 0; i < numImages; i++) {
    const voteButton = document.getElementById(`vote${i + 1}`);
    voteButton.removeEventListener('click', handleVoteClick);
  }
}

// Function to display view results
function displayViewResults() {
  const resultsContainer = document.createElement('div');
  resultsContainer.classList.add('results-container');

  for (const product of products) {
    const resultElement = document.createElement('p');
    resultElement.textContent = `${product.name} had ${product.timesClicked} votes and was seen ${product.timesShown} times.`;
    resultsContainer.appendChild(resultElement);
  }

  document.body.appendChild(resultsContainer);
  viewResultsButton.style.display = 'none'; // Hide view-results button after displaying results
}

// Event delegation to handle vote button clicks
document.querySelector('.main-section').addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    handleVoteClick(event);
  }
});

viewResultsButton.addEventListener('click', displayViewResults);

displayProducts();
