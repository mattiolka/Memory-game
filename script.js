function flipCard() {
    let flippedCards = document.querySelectorAll('.flipped');

    if (flippedCards.length < 2) {
        this.classList.add('flipped');
        flippedCards = document.querySelectorAll('.flipped');
    }

    if (flippedCards.length == 2) {
        if (timeoutId) {
            console.log('жди', timeoutId);
            return;
        }

        timeoutId = setTimeout(() => {
            if (flippedCards[0].dataset.back == flippedCards[1].dataset.back) {
                result.displayScore();

                flippedCards[0].remove();
                flippedCards[1].remove();
            } else {
                flippedCards.forEach(c => {
                    c.classList.remove('flipped');
                })
            }
            
            timeoutId = null;
        }, 1500);

    }
}

function shuffleCards(container) {
    for (let i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
    }
}

function creatgCard(number) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.addEventListener('click', flipCard)
    card.dataset.back = number;

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    card.appendChild(cardInner);

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);

    const rubashka = document.createElement('img');
    rubashka.src = './img/rubashka.jpg';
    const picture = document.createElement('img');
    picture.src = `./img/${number}.jpg`;

    cardFront.appendChild(rubashka);
    cardBack.appendChild(picture);

    return card;
}

const gridContainer = document.querySelector('.grid-container');
let numberOfCards = prompt("Скільки пар карток від 1 до 6?", '');
let timeoutId;

const couple = document.querySelector('#couple');
couple.innerHTML = numberOfCards;



const result = {
    correctCount: 0,
    resultS: document.querySelector('#result'),
    displayScore: function () {
        this.correctCount++;
        this.resultS.innerHTML = this.correctCount;
    }
}

for (let i = 1; i <= +numberOfCards; i++) {
    for (let t = 0; t < 2; t++) {
        gridContainer.appendChild(creatgCard(i));
    }
}

shuffleCards(gridContainer);

