
'use strict';

const productData = [
    { name: 'Product1', imagePath: 'img/duck1.jpg' },
    { name: 'Product2', imagePath: 'img/duck2.jpg' },
    { name: 'Product3', imagePath: 'img/duck3.jpg' },
    { name: 'Product4', imagePath: 'img/assets/bag.jpg' },
    { name: 'Product5', imagePath: 'img/assets/banana.jpg' },
    { name: 'Product6', imagePath: 'img/assets/bathroom.jpg' },
    { name: 'Product7', imagePath: 'img/assets/boots.jpg' },
    { name: 'Product8', imagePath: 'img/assets/breakfast.jpg' },
    { name: 'Product9', imagePath: 'img/assets/bubblegum.jpg' },
    { name: 'Product10', imagePath: 'img/assets/chair.jpg' },
    { name: 'Product11', imagePath: 'img/assets/water-can.jpg' },
    { name: 'Product12', imagePath: 'img/assets/dog-duck.jpg' },
    { name: 'Product13', imagePath: 'img/assets/dragon.jpg' },
    { name: 'Product14', imagePath: 'img/assets/pen.jpg' },
    { name: 'Product15', imagePath: 'img/assets/pet-sweep.jpg' },
    { name: 'Product16', imagePath: 'img/assets/scissors.jpg' },
    { name: 'Product17', imagePath: 'img/assets/shark.jpg' },
    { name: 'Product18', imagePath: 'img/assets/unicorn.jpg' },
    { name: 'Product19', imagePath: 'img/assets/tauntaun.jpg' },
];

const numImages = productData.length;
const products = productData.map(data => new Product(data.name, data.imagePath));

const rounds = 25;
let currentRound = 0;
const viewResultsButton = document.getElementById('view-results');

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
        const productCard = document.getElementById(`product${i + 1}`);
        productCard.innerHTML = `
            <div class="result-section">
                <h3>Results</h3>
                <span class="votes">${product.timesClicked} votes</span>
            </div>
            <img src="${product.imagePath}" alt="${product.name}" width="200" height="150">
            <button class="vote-button">Vote</button>
        `;
    }

    const voteButtons = document.querySelectorAll('.vote-button');
    voteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            handleVoteClick(index);
        });
    });
}

function handleVoteClick(index) {
    if (currentRound < rounds) {
        const product = products[index];
        product.timesClicked++;
        const productCard = document.getElementById(`product${index + 1}`);
        productCard.querySelector('.votes').textContent = `${product.timesClicked} votes`;
        currentRound++;
        if (currentRound < rounds) {
            displayProducts();
        } else {
            viewResultsButton.style.display = 'block';
        }
    }
}

viewResultsButton.addEventListener('click', displayViewResults);

function displayViewResults() {
    const resultsContainer = document.createElement('div');
    resultsContainer.classList.add('results-container');

    for (const product of products) {
        const resultElement = document.createElement('p');
        resultElement.textContent = `${product.name} had ${product.timesClicked} votes and was seen ${product.timesShown} times.`;
        resultsContainer.appendChild(resultElement);
    }

    document.body.appendChild(resultsContainer);
    viewResultsButton.style.display = 'none';
}

displayProducts();


'use strict';

let workingProducts = [];
const allProducts = [];
const maxClicks = 25;
const viewResults = document.querySelector('button');
const ulElem = document.querySelector('ul');

function Products(name, src, views, clicks) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

let bag = new Products ('Bag', './img/assets/bag.jpg');
let banana = new Products ('Banana', './img/assets/banana.jpg');
let bathroom = new Products ('Bathroom', './img/assets/bathroom.jpg');
let boots = new Products ('Boots', './img/assets/boots.jpg');
let breakfast = new Products ('Breakfast', './img/assets/breakfast.jpg');
let bubblegum= new Products ('Bubblegum', './img/assets/bubblegum.jpg');
let chair = new Products ('Chair', './img/assets/chair.jpg');
let cthulhu = new Products ('Cthulhu', './img/assets/cthulhu.jpg');
let dogDuck = new Products ('Dog Duck', './img/assets/dog-duck.jpg');
let dragon = new Products ('Dragon', './img/assets/dragon.jpg');
let pen = new Products ('Pen', './img/assets/pen.jpg');
let petSweep = new Products ('Pet Sweep', './img/assets/pet-sweep.jpg');
let scissors = new Products ('Scissors', './img/assets/scissors.jpg');
let shark = new Products ('Shark', './img/assets/shark.jpg');
let sweep = new Products ('Sweep', './img/sweepassets/.png');
let tauntaun = new Products ('Taun Taun', './img/assets/tauntaun.jpg');
let unicorn = new Products ('Unicorn', './img/assets/unicorn.jpg');
let waterCan = new Products ('Water Can', './img/assets/water-can.jpg');
let wineGlass = new Products ('Wine Glass', './img/assets/wine-glass.jpg');

allProducts.push(bag);
allProducts.push(banana);
allProducts.push(bathroom);
// ... push all your products here ...

function renderProducts() {
  if (workingProducts.length <= 1) {
    workingProducts = allProducts.slice();
    shuffleArray(workingProducts);
  }

  leftProductInstance = workingProducts.pop();
  leftProductImage.setAttribute('src', leftProductInstance.src);

  rightProductInstance = workingProducts.pop();
  rightProductImage.setAttribute('src', rightProductInstance.src);

  centerProductInstance = workingProducts.pop();
  centerProductImage.setAttribute('src', centerProductInstance.src);

  leftProductInstance.views += 1;
  rightProductInstance.views += 1;
  centerProductInstance.views += 1;
}

// ... your existing code for shuffling, click handlers, etc ...

// Add event listener to your "View Results" button
viewResults.addEventListener('click', handleViewResultsClick);

// ...

function handleViewResultsClick() {
  renderResults();
}

function renderResults() {
  for (let i = 0; i < allProducts.length; i++) {
    const currentProduct = allProducts[i];
    const result = `${currentProduct.name} had ${currentProduct.views} views and was clicked ${currentProduct.clicks} times.`;
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = result;
  }
}

// Call renderProducts to start displaying images
renderProducts();
