10:16am:


// function Product(name, imagePath) {
//             this.name = name;
//             this.imagePath = imagePath;
//             this.timesShown = 0;
//             this.timesClicked = 0;
//         }

//         const productData = [
//             { name: 'Product1', imagePath: 'img/duck1.jpg' },
//             { name: 'Product2', imagePath: 'img/duck2.jpg' },
//             { name: 'Product3', imagePath: 'img/duck3.jpg' },
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
            
//         ];

//         const numImages = productData.length;
//         const products = productData.map(data => new Product(data.name, data.imagePath));

//         const rounds = 25;
//         let currentRound = 0;
//         const viewResultsButton = document.getElementById('view-results');

//         function displayProducts() {
//             const productIndices = [];

//             while (productIndices.length < numImages) {
//                 const randomIndex = Math.floor(Math.random() * products.length);
//                 if (!productIndices.includes(randomIndex)) {
//                     productIndices.push(randomIndex);
//                     products[randomIndex].timesShown++;
//                 }
//             }

//             for (let i = 0; i < numImages; i++) {
//                 const product = products[productIndices[i]];
//                 const productCard = document.getElementById(`product${i + 1}`);
//                 productCard.innerHTML = `
//                     <div class="result-section">
//                         <h3>Results</h3>
//                         <span class="votes">${product.timesClicked} votes</span>
//                     </div>
//                     <img src="${product.imagePath}" alt="${product.name}" width="200" height="150">
//                     <button class="vote-button">Vote</button>
//                 `;
//             }

//             const voteButtons = document.querySelectorAll('.vote-button');
//             voteButtons.forEach((button, index) => {
//                 button.addEventListener('click', () => {
//                     handleVoteClick(index);
//                 });
//             });
//         }

//         function handleVoteClick(index) {
//             if (currentRound < rounds) {
//                 const product = products[index];
//                 product.timesClicked++;
//                 const productCard = document.getElementById(`product${index + 1}`);
//                 productCard.querySelector('.votes').textContent = `${product.timesClicked} votes`;
//                 currentRound++;
//                 if (currentRound < rounds) {
//                     displayProducts();
//                 } else {
//                     viewResultsButton.style.display = 'block';
//                 }
//             }
//         }

//         viewResultsButton.addEventListener('click', displayViewResults);

//         function displayViewResults() {
//             const resultsContainer = document.createElement('div');
//             resultsContainer.classList.add('results-container');

//             for (const product of products) {
//                 const resultElement = document.createElement('p');
//                 resultElement.textContent = `${product.name} had ${product.timesClicked} votes and was seen ${product.timesShown} times.`;
//                 resultsContainer.appendChild(resultElement);
//             }

//             document.body.appendChild(resultsContainer);
//             viewResultsButton.style.display = 'none';
//         }

//         displayProducts();

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






// function Product(name, imagePath) {
//   this.name = name;
//   this.imagePath = imagePath;
//   this.timesShown = 0;
//   this.timesClicked = 0;
// }

// const products = [
//   new Product('Product1', 'https://th.bing.com/th/id/OIP.Dwx96HrXj8dVo9vhqEYHqQHaHa?pid=ImgDet&rs=1'),
//   new Product('Product2', 'https://th.bing.com/th/id/OIP.lc1zaUPt_NCt6G7zxVAVcwHaHA?pid=ImgDet&rs=1'),
//   new Product('Product3', 'https://th.bing.com/th/id/OIP.D7E_BC3HvAld39mCpCyGoQHaFU?pid=ImgDet&w=680&h=489&rs=1'),
//   // Add more products if needed
// ];

// const rounds = 25; // Number of voting rounds

// let currentRound = 0;
// const productContainer = document.getElementById('product-container');
// const viewResultsButton = document.getElementById('view-results');
// const voteButtons = [document.getElementById('vote1'), document.getElementById('vote2'), document.getElementById('vote3')];

// let canVote = true; // Flag to track whether the user can vote

// // Function to display three unique products
// function displayProducts() {
//   const productIndices = [];
//   while (productIndices.length < 3) {
//       const randomIndex = Math.floor(Math.random() * products.length);
//       if (!productIndices.includes(randomIndex)) {
//           productIndices.push(randomIndex);
//           products[randomIndex].timesShown++;
//       }
//   }

//   for (let i = 0; i < 3; i++) {
//       const product = products[productIndices[i]];
//       const productElement = document.getElementById(`product${i + 1}`);
//       productElement.src = product.imagePath;
//       productElement.alt = product.name;
//       voteButtons[i].disabled = false; // Enable vote buttons
//   }
//   canVote = true; // Allow the user to vote for a new round
// }

// // Function to handle user clicks on vote buttons
// function handleVoteClick(event) {
//   if (canVote) {
//       const clickedButton = event.target;
//       const index = voteButtons.indexOf(clickedButton);

//       if (index !== -1) {
//           const product = products[index];
//           product.timesClicked++;
//           voteButtons[index].disabled = true; // Disable the button after voting
//           canVote = false; // Prevent the user from voting again in the same round

//           currentRound++;
//           if (currentRound < rounds) {
//               displayProducts();
//           } else {
//               viewResultsButton.style.display = 'block';
//               voteButtons.forEach((button) => (button.style.display = 'none'));
//           }
//       }
//   }
// }

// // Event listener to start the voting
// voteButtons.forEach((button) => button.addEventListener('click', handleVoteClick));

// // Event listener to view results
// viewResultsButton.addEventListener('click', () => {
//   for (const product of products) {
//       console.log(`${product.name} had ${product.timesClicked} votes and was seen ${product.timesShown} times.`);
//   }
// });

// displayProducts();


