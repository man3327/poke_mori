const cardArray = [
    {
        name: 'togepi',
        img: 'togepi.jpg',
    },
    {
        name: 'pikachu',
        img: 'pikachu.jpg',
    },
    {
        name: 'mimikyu',
        img: 'mimikyu.jpg',
    },
    {
        name: 'ditto',
        img: 'ditto.jpg',
    },
    {
        name: 'togepi',
        img: 'togepi.jpg',
    },
    {
        name: 'pikachu',
        img: 'pikachu.jpg',
    },
    {
        name: 'mimikyu',
        img: 'mimikyu.jpg',
    },
    {
        name: 'ditto',
        img: 'ditto.jpg',
    },
    {
        name: 'mime',
        img: 'mime.jpg',
    },
    {
        name: 'mime',
        img: 'mime.jpg',
    },
    {
        name: 'amaura',
        img: 'amaura.jpg',
    },
    {
        name: 'amaura',
        img: 'amaura.jpg',
    }
]
cardArray.sort(() => 0.5 - Math.random())  
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardsChosenIds = []
const cardsWon = []
function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','pokeball.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
        
    }
}
createBoard()
function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if(optionOneId == optionTwoId) {
        alert('you have clicked the same image')
        cards[optionOneId].setAttribute('src','pokeball.jpg')
        cards[optionTwoId].setAttribute('src','pokeball.jpg')
    }
    else if(cardChosen[0] == cardChosen[1]) {
        cards[cardsChosenIds[0]].setAttribute('src','open.jpg')
        cards[cardsChosenIds[1]].setAttribute('src','open.jpg')
        cards[cardsChosenIds[0]].removeEventListener('click',flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click',flipCard)
        cardsWon.push(cardChosen)
    }else{
        cards[optionOneId].setAttribute('src','pokeball.jpg')
        cards[optionTwoId].setAttribute('src','pokeball.jpg')
    }
    resultDisplay.innerHTML = cardsWon.length
    cardsChosenIds = []
    cardChosen = []
    
    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'Congratulations🙌✨'
    }
}
function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch ,500)
    }
}