//Variáveis
const clickOnCookie = document.querySelector('#closedCookie');
const btnTry = document.querySelector('#btnTry');
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const phrases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
]

//Eventos
let randomPhrase = document.querySelector('#randomPhrase')
let generateRandomPhrase

clickOnCookie.addEventListener('click', generatePhrase)
document.addEventListener('keydown', pressEnterkey)

function generatePhrase() {
    toggleScreen()

    generateRandomPhrase = Math.floor(Math.random()*(phrases.length))

    randomPhrase.innerText = phrases[generateRandomPhrase]
}

function buttonTry(event) {
    event.prevenDefault()
    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function pressEnterKey(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        toggleScreen()
    }
}