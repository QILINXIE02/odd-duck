 function Product(name, imagePath) {
            this.name = name;
            this.imagePath = imagePath;
            this.timesShown = 0;
            this.timesClicked = 0;
        }

        const productData = [
            { name: 'Product1', imagePath: 'img/duck1.jpg' },
            { name: 'Product2', imagePath: 'img/duck2.jpg' },
            { name: 'Product3', imagePath: 'img/duck3.jpg' },
            // more products...
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