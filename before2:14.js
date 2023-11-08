// 'use strict';

// // Product constructor
// class Product {
//   constructor(name, imagePath) {
//     this.name = name;
//     this.imagePath = imagePath;
//     this.timesShown = 0;
//     this.timesClicked = 0;
//   }

//   getImageURL() {
//     return this.imagePath;
//   }
// }

//   const productData = [
//     { name: 'duck1', imagePath: 'img/assets/duck1.jpg' },
//     { name: 'duck2', imagePath: 'img/assets/duck2.jpg' },
//     { name: 'duck3', imagePath: 'img/assets/duck3.jpg' },
//     { name: 'bag', imagePath: 'img/assets/bag.jpg' },
//     { name: 'banana', imagePath: 'img/assets/banana.jpg' },
//     { name: 'bathroom', imagePath: 'img/assets/bathroom.jpg' },
//     { name: 'boots', imagePath: 'img/assets/boots.jpg' },
//     { name: 'breakfast', imagePath: 'img/assets/breakfast.jpg' },
//     { name: 'bubblegum', imagePath: 'img/assets/bubblegum.jpg' },
//     { name: 'chair', imagePath: 'img/assets/chair.jpg' },
//     { name: 'water-can', imagePath: 'img/assets/water-can.jpg' },
//     { name: 'dog-duck', imagePath: 'img/assets/dog-duck.jpg' },
//     { name: 'dragon', imagePath: 'img/assets/dragon.jpg' },
//     { name: 'pen', imagePath: 'img/assets/pen.jpg' },
//     { name: 'pet-sweep', imagePath: 'img/assets/pet-sweep.jpg' },
//     { name: 'scissors', imagePath: 'img/assets/scissors.jpg' },
//     { name: 'shark', imagePath: 'img/assets/shark.jpg' },
//     { name: 'unicorn', imagePath: 'img/assets/unicorn.jpg' },
//     { name: 'tauntaun', imagePath: 'img/assets/tauntaun.jpg' },
//   ];
  

// // Initialize products array with data from local storage or the default product data
// let products = initializeProducts();

// // Number of rounds and other variables
// const rounds = 25;
// let currentRound = 0;

// // Get HTML elements
// const showResultsButton = document.getElementById('show-results');
// const resultsList = document.getElementById('results-list');
// const productImages = document.querySelector('.upper-right');
// const chartCanvas = document.getElementById('vote-chart').getContext('2d');

// // Functions for local storage
// function updateProductsData() {
//   localStorage.setItem('productsData', JSON.stringify(products));
// }

// function getProductsData() {
//   const storedData = localStorage.getItem('productsData');
//   if (storedData) {
//     const parsedData = JSON.parse(storedData);
//     return parsedData;
//   }
//   return null;
// }

// // Initialize products function (Modified to check local storage)
// function initializeProducts() {
//   const storedProducts = getProductsData();

//   if (storedProducts) {
//     return storedProducts;
//   } else {
//     return productData.map((data) => new Product(data.name, data.imagePath));
//   }
// }

// // Missing variables and functions
// const mode = document.querySelectorAll('.mode');
// const details = document.querySelectorAll('.details');
// const commentBox = document.getElementById('comment-box');
// let openDetail = null; // Initialize openDetail variable

// // Functions related to dark/light mode
// function enterDarkMode() {
//   // Implement dark mode behavior
// }

// function enterLightMode() {
//   // Implement light mode behavior
// }

// // Load and save settings
// let settings = {
//   open: null,
//   comment: '',
// };

// function saveSettings() {
//   localStorage.setItem('settings', JSON.stringify(settings));
// }

// function pageLoad() {
//   // Your pageLoad logic here
// }

// function start() {
//   // Call the initialization function
//   initializeProducts();
//   // Your existing start function
// }

// // Load settings and apply dark/light mode
// loadSettings();
// pageLoad();

// // Add event listeners to the dark/light mode buttons and details
// for (let i = 0; i < mode.length; i++) {
//   mode[i].addEventListener('click', function () {
//     if (this.value === 'dark') {
//       enterDarkMode();
//     }
//     if (this.value === 'light') {
//       enterLightMode();
//     }
//   });
// }

// for (let i = 0; i < details.length; i++) {
//   details[i].addEventListener('click', function () {
//     if (settings.open === i) {
//       settings.open = null;
//       saveSettings();
//       return;
//     }
//     openDetail = i;
//     settings.open = i;
//     saveSettings();
//     for (let j = 0; j < details.length; j++) {
//       if (j !== openDetail) {
//         details[j].removeAttribute('open');
//       }
//     }
//   });
// }

// commentBox.addEventListener('input', function () {
//   settings.comment = commentBox.value;
//   saveSettings();
// }

// start();


'use strict';

// Product constructor
class Product {
  constructor(name, imagePath) {
    this.name = name;
    this.imagePath = imagePath;
    this.timesShown = 0;
    this.timesClicked = 0;
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

  // Number of rounds and other variables
  const rounds = 25;
  let currentRound = 0;
  
  // Get HTML elements
  const showResultsButton = document.getElementById('show-results');
  const resultsList = document.getElementById('results-list');
  const productImages = document.querySelector('.upper-right');
  const chartCanvas = document.getElementById('vote-chart').getContext('2d');
  
  function displayProducts() {
    productImages.innerHTML = '';
  
    shuffleArray(products);
  
    for (let i = 0; i < 3; i++) {
      const product = products[i];
      productImages.innerHTML += `
        <img src="${product.getImageURL()}" alt="${product.name}">
      `;
      product.timesShown++;
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
      // Update local storage with the current products data
      updateProductsData();
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
  
    renderChart();
    showResultsButton.style.display = 'none';
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
  
  displayProducts();
  
  function updateProductsData() {
    localStorage.setItem('productsData', JSON.stringify(products));
  }
  
  function getProductsData() {
    const storedData = localStorage.getItem('productsData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const productsArray = parsedData.map(data => new Product(data.name, data.imagePath));
      return productsArray;
    }
    return null;
  }
  
  function initializeProducts() {
    const storedProducts = getProductsData();
  
    if (storedProducts) {
      return storedProducts;
    } else {
      return productData.map(data => new Product(data.name, data.imagePath));
    }
  }
  function start() {
    // Call the initialization function
    initializeProducts();
    // Your existing start function
  }
  
  // Load settings and apply dark/light mode
  loadSettings();
  pageLoad();
  
  // Add event listeners to the dark/light mode buttons and details
  for (let i = 0; i < mode.length; i++) {
    mode[i].addEventListener('click', function () {
      if (this.value === 'dark') {
        enterDarkMode();
      }
      if (this.value === 'light') {
        enterLightMode();
      }
    });
  }
  
  for (let i = 0; i < details.length; i++) {
    details[i].addEventListener('click', function () {
      if (settings.open === i) {
        settings.open = null;
        saveSettings();
        return;
      }
      openDetail = i;
      settings.open = i;
      saveSettings();
      for (let j = 0; j < details.length; j++) {
        if (j !== openDetail) {
          details[j].removeAttribute('open');
        }
      }
    });
  }
  
  commentBox.addEventListener('input', function () {
    settings.comment = commentBox.value;
    saveSettings();
  });

  start();
