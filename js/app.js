// Constructor function to create product objects
function Product(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.timesShown = 0;
  this.timesClicked = 0;
}

// Define an array of product data
const productData = [
  { name: 'Product1', imagePath: 'img/duck1' },
  { name: 'Product2', imagePath: 'img/duck2' },
  { name: 'Product3', imagePath: 'img/duck3' },
  { name: 'Product4', imagePath: 'img/assets/bag.jpg' },
  { name: 'Product5', imagePath: 'img/assets/banana.jpg' },
  { name: 'Product6', imagePath: 'img/assets/boots.jpg' },
  { name: 'Product7', imagePath: 'img/assets/breakfast.jpg' },
  { name: 'Product8', imagePath: 'img/assets/bubblegum.jpg' },
  { name: 'Product9', imagePath: 'img/assets/chair.jpg' },
  { name: 'Product10', imagePath: 'img/assets/bathroom.jpg' },
  { name: 'Product11', imagePath: 'img/assets/cthulhu.jpg' },
  { name: 'Product12', imagePath: 'img/assets/dog-duck.jpg' },
  { name: 'Product13', imagePath: 'img/assets/unicorn.jpg' },
  { name: 'Product14', imagePath: 'img/assets/pen.jpg' },
  { name: 'Product15', imagePath: 'img/assets/pet-sweep.jpg' },
  { name: 'Product16', imagePath: 'img/assets/scissors.jpg' },
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
  
  // Check if the user has voted 35 rounds, and if so, reset the round counter and allow voting again
  if (currentRound === 35) {
    currentRound = 0;
    products.forEach(product => {
      product.timesClicked = 0;
    });
  }
  
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
    document.getElementById(`vote${i + 1}`).disabled = false; // Enable vote buttons
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

