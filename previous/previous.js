function Product(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.timesShown = 0;
  this.timesClicked = 0;
}

const products = [
  new Product('Product1', 'https://th.bing.com/th/id/OIP.Dwx96HrXj8dVo9vhqEYHqQHaHa?pid=ImgDet&rs=1'),
  new Product('Product2', 'https://th.bing.com/th/id/OIP.lc1zaUPt_NCt6G7zxVAVcwHaHA?pid=ImgDet&rs=1'),
  new Product('Product3', 'https://th.bing.com/th/id/OIP.D7E_BC3HvAld39mCpCyGoQHaFU?pid=ImgDet&w=680&h=489&rs=1'),
  // Add more products if needed
];

const rounds = 25; // Number of voting rounds

let currentRound = 0;
const productContainer = document.getElementById('product-container');
const viewResultsButton = document.getElementById('view-results');
const voteButtons = [document.getElementById('vote1'), document.getElementById('vote2'), document.getElementById('vote3')];

let canVote = true; // Flag to track whether the user can vote

// Function to display three unique products
function displayProducts() {
  const productIndices = [];
  while (productIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * products.length);
      if (!productIndices.includes(randomIndex)) {
          productIndices.push(randomIndex);
          products[randomIndex].timesShown++;
      }
  }

  for (let i = 0; i < 3; i++) {
      const product = products[productIndices[i]];
      const productElement = document.getElementById(`product${i + 1}`);
      productElement.src = product.imagePath;
      productElement.alt = product.name;
      voteButtons[i].disabled = false; // Enable vote buttons
  }
  canVote = true; // Allow the user to vote for a new round
}

// Function to handle user clicks on vote buttons
function handleVoteClick(event) {
  if (canVote) {
      const clickedButton = event.target;
      const index = voteButtons.indexOf(clickedButton);

      if (index !== -1) {
          const product = products[index];
          product.timesClicked++;
          voteButtons[index].disabled = true; // Disable the button after voting
          canVote = false; // Prevent the user from voting again in the same round

          currentRound++;
          if (currentRound < rounds) {
              displayProducts();
          } else {
              viewResultsButton.style.display = 'block';
              voteButtons.forEach((button) => (button.style.display = 'none'));
          }
      }
  }
}

// Event listener to start the voting
voteButtons.forEach((button) => button.addEventListener('click', handleVoteClick));

// Event listener to view results
viewResultsButton.addEventListener('click', () => {
  for (const product of products) {
      console.log(`${product.name} had ${product.timesClicked} votes and was seen ${product.timesShown} times.`);
  }
});

displayProducts();


