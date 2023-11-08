function Product(name, imagePath) {
    this.name = name;
    this.imagePath = imagePath;
    this.timesShown = 0;
    this.timesClicked = 0;
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


const products = productData.map(data => new Product(data.name, data.imagePath));

const rounds = 25;
let currentRound = 0;
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
            <img src="${product.imagePath}" alt="${product.name}">
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

localStorage.setItem('productsData', JSON.stringify(products));

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
        products = storedProducts;
    } else {
        // Initialize products array as you were doing before
        // For example: products = productData.map(data => new Product(data.name, data.imagePath));
    }
}

function start() {
    initializeProducts();
}

