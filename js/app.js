
'use strict';

class Product {
  constructor(name, imagePath,shown=0,click=0) {
    this.name = name;
    this.imagePath = imagePath;
    this.timesShown = shown;
    this.timesClicked = click;
  }

  getImageURL() {
    return this.imagePath;
  }
}

const productData = [
    { name: 'duck1', imagePath: 'img/assets/duck1.jpg' },
    { name: 'duck2', imagePath: 'img/assets/duck2.jpg' },
    { name: 'duck3', imagePath: 'img/assets/duck3.jpg' },
    { name: 'bag', imagePath: 'img/assets/bag.jpg' },
    { name: 'banana', imagePath: 'img/assets/banana.jpg' },
    { name: 'bathroom', imagePath: 'img/assets/bathroom.jpg' },
    { name: 'boots', imagePath: 'img/assets/boots.jpg' },
    { name: 'breakfast', imagePath: 'img/assets/breakfast.jpg' },
    { name: 'bubblegum', imagePath: 'img/assets/bubblegum.jpg' },
    { name: 'chair', imagePath: 'img/assets/chair.jpg' },
    { name: 'water-can', imagePath: 'img/assets/water-can.jpg' },
    { name: 'dog-duck', imagePath: 'img/assets/dog-duck.jpg' },
    { name: 'dragon', imagePath: 'img/assets/dragon.jpg' },
    { name: 'pen', imagePath: 'img/assets/pen.jpg' },
    { name: 'pet-sweep', imagePath: 'img/assets/pet-sweep.jpg' },
    { name: 'scissors', imagePath: 'img/assets/scissors.jpg' },
    { name: 'shark', imagePath: 'img/assets/shark.jpg' },
    { name: 'unicorn', imagePath: 'img/assets/unicorn.jpg' },
    { name: 'tauntaun', imagePath: 'img/assets/tauntaun.jpg' },
  ];

let products = initializeProducts();
const maxRounds = 25;
let currentRound = 0;

const showResultsButton = document.getElementById('show-results');
const resultsList = document.getElementById('results-list');
const productImages = document.querySelector('.upper-right');
const chartCanvas = document.getElementById('vote-chart').getContext('2d');
const imgElements = [document.getElementById('leftRandImg'), document.getElementById('midRandImg'), document.getElementById('rightRandImg')];

function initializeProducts() {
  const storedProducts = getProductsData();
  return storedProducts || productData.map(data => new Product(data.name, data.imagePath));
}

function getProductsData() {
  const storedData = localStorage.getItem('productsData');
  if (storedData) {
    return JSON.parse(storedData).map(data => new Product(data.name, data.imagePath,data.timesShown, data.timesClicked));
  }
  return null;
}

function updateProductsData() {
  localStorage.setItem('productsData', JSON.stringify(products));
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function handleVoteClick(index) {
  if (currentRound < maxRounds) {
    const product = products[index];
    product.timesClicked++;
    currentRound++;

    if (currentRound < maxRounds) {
      displayProducts();
    } else {
      showResultsButton.style.display = 'block';
    }
    updateProductsData();
  }
}

function displayProducts() {
  productImages.innerHTML = '';
  shuffleArray(products);

  for (let i = 0; i < imgElements.length; i++) {
    const product = products[i];
    productImages.appendChild(imgElements[i]);
    imgElements[i].src = product.getImageURL();
    imgElements[i].alt = product.name;
    product.timesShown++;
  }
}

function displayViewResults() {
  resultsList.innerHTML = '';
  for (const product of products) {
    const resultElement = document.createElement('li');
    resultElement.textContent = `${product.name} had ${product.timesClicked} votes and was seen ${product.timesShown} times.`;
    resultsList.appendChild(resultElement);
  }
}

function renderChart() {
  const productNames = products.map(product => product.name);
  const voteCounts = products.map(product => product.timesClicked);
  const viewCounts = products.map(product => product.timesShown);

  new Chart(chartCanvas, {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [
        {
          label: 'Votes',
          data: voteCounts,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'Views',
          data: viewCounts,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function start() {
  for (const imgElement of imgElements) {
    imgElement.addEventListener('click', () => {
      if (currentRound < maxRounds) {
        const index = imgElements.indexOf(imgElement);
        handleVoteClick(index);
      }
    });
  }

  showResultsButton.addEventListener('click', () => {
    displayViewResults();
    renderChart();
    showResultsButton.style.display = 'none';
  });

  displayProducts();
}

start();
