function flipCard() {
    const flippedCards = document.querySelectorAll('.flipped');
    if(flippedCards.length == 2 ) {
        if(flippedCards[0].dataset.back == flippedCards[1].dataset.back){
            result.innerHTML = `${checkNumber += 1}`;
            gridContainer.removeChild(document.querySelector(`[data-back="${flippedCards[0].dataset.back}"]`));
            gridContainer.removeChild(document.querySelector(`[data-back="${flippedCards[1].dataset.back}"]`));
            //flippedCards[0].remove();

            shuffleDiv(gridContainer)
        }

        setTimeout(() => {
            flippedCards.forEach(c => {
                c.classList.remove('flipped');
            })
        }, 500)

        return;
    }
    
    this.classList.add('flipped'); 
    
}

function shuffleDiv(container) {
    for (let i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
    }
}
        
function creatingCards(number){
    const card = document.createElement('div');
    card.classList.add('card');
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
    rubashka.src = 'rubashka.jpg';
    const picture = document.createElement('img');
    picture.src = `${number}.jpg`;

    cardFront.appendChild(rubashka);
    cardBack.appendChild(picture);

    return card;  
}

const numberOfCards = prompt("Скільки пар карток від 1 до 6?", '');
const couple = document.querySelector('#couple');
couple.innerHTML = numberOfCards;

const gridContainer = document.querySelector('.grid-container');

const result = document.querySelector('#check');
let checkNumber = 0;
result.innerHTML = checkNumber;

for(let i = 1; i <= +numberOfCards; i++){
    for(let t = 0; t < 2; t++){
        gridContainer.appendChild(creatingCards(i));
    }
}

shuffleDiv(gridContainer);

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', flipCard)       
})

