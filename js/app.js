function Product(name, imagePath) {
    this.name = name;
    this.imagePath = imagePath;
    this.timesShown = 0;
    this.timesClicked = 0;
}

const productData = [
    { name: 'Product1', imagePath: 'img/assets/duck1.jpg' },
    { name: 'Product2', imagePath: 'img/assets/duck2.jpg' },
    { name: 'Product3', imagePath: 'img/assets/duck3.jpg' },
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
    { name: 'Product16', imagePath: 'img/assets/shark.jpg' },
    { name: 'Product17', imagePath: 'img/assets/unicorn.jpg' },
    { name: 'Product18', imagePath: 'img/assets/tauntaun.jpg' },
];

const numImages = productData.length;
const products = productData.map(data => new Product(data.name, data.imagePath));

const rounds = 25;
let currentRound = 0;
const showResultsButton = document.getElementById('show-results');
const resultsList = document.getElementById('results-list');
const productImages = document.querySelector('.upper-right');

function displayProducts() {
    productImages.innerHTML = ''; // Clear existing product images

    shuffleArray(products); // Shuffle the products array

    for (let i = 0; i < 3; i++) {
        const product = products[i];
        productImages.innerHTML += `
            <img src="${product.imagePath}" alt="${product.name}">
        `;
        product.timesShown++; // Increment the timesShown for the displayed products
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function handleVoteClick(index) {
    if (currentRound < rounds) {
        const product = products[index];
        product.timesClicked++;
        currentRound++;

        if (currentRound < rounds) {
            displayProducts();
        } else {
            showResultsButton.style.display = 'block';
        }
    }
}

productImages.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const index = Array.from(productImages.children).indexOf(event.target);
        handleVoteClick(index);
    }
});

showResultsButton.addEventListener('click', () => {
    displayViewResults();
});

function displayViewResults() {
    resultsList.innerHTML = '';

    for (const product of products) {
        const resultElement = document.createElement('li');
        resultElement.textContent = `${product.name} had ${product.timesClicked} votes and was seen ${product.timesShown} times.`;
        resultsList.appendChild(resultElement);
    }

    showResultsButton.style.display = 'none';
}

displayProducts();
