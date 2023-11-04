const mainCont = document.querySelector('.cards-cont')
const colors = ['orange', 'green', 'blue', 'white']
let userCards = []

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const cardBox = document.createElement('button')
        const cardFg = document.createElement('div')
        cardFg.className = 'card-fg'
        cardBox.className = 'card'
        cardBox.addEventListener('click', function () {
            this.classList.add('disappearance')
            let color = colors[Math.floor(Math.random() * 4)]
            setTimeout(function () {
                cardFg.style.display = 'none'
                cardBox.style.background = color
                userCards.push(color)
            }, 1050)
            cardBox.disabled = true
        })
        mainCont.appendChild(cardBox)
        cardBox.appendChild(cardFg)
    }
}

setInterval(function () {
    if (userCards.length === 3) {
        if (userCards[0] === userCards[1] && userCards[1] === userCards[2]) {
            alert('Вы выиграли!')
            userCards = []
            window.location.reload()
        } else {
            alert('Вы проиграли!')
            userCards = []
            window.location.reload()
        }
    }
}, 500)