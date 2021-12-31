document.addEventListener('DOMContentLoaded', () => {

//opções das cartas
    const cartaArray = [
        {
            nome: 'bad-humor',
            img: 'images/bad-humor.png'
        },
        {
            nome: 'bad-humor',
            img: 'images/bad-humor.png'
        },
        {
            nome: 'cool',
            img: 'images/cool.png'
        },
        {
            nome: 'cool',
            img: 'images/cool.png'
        },
        {
            nome: 'crying',
            img: 'images/crying.png'
        },
        {
            nome: 'crying',
            img: 'images/crying.png'
        },
        {
            nome: 'halo',
            img: 'images/halo.png'
        },
        {
            nome: 'halo',
            img: 'images/halo.png'
        },
        {
            nome: 'heart-eyes',
            img: 'images/heart-eyes.png'
        },
        {
            nome: 'heart-eyes',
            img: 'images/heart-eyes.png'
        },
        {
            nome: 'heart',
            img: 'images/heart.png'
        },
        {
            nome: 'heart',
            img: 'images/heart.png'
        },
        {
            nome: 'kiss',
            img: 'images/kiss.png'
        },
        {
            nome: 'kiss',
            img: 'images/kiss.png'
        },
        {
            nome: 'laughing',
            img: 'images/laughing.png'
        },
        {
            nome: 'laughing',
            img: 'images/laughing.png'
        },
        {
            nome: 'like',
            img: 'images/like.png'
        },
        {
            nome: 'like',
            img: 'images/like.png'
        },
        {
            nome: 'smile',
            img: 'images/smile.png'
        },
        {
            nome: 'smile',
            img: 'images/smile.png'
        },
        {
            nome: 'smiling',
            img: 'images/smiling.png'
        },
        {
            nome: 'smiling',
            img: 'images/smiling.png'
        },
        {
            nome: 'tongue-face',
            img: 'images/tongue-face.png'
        },
        {
            nome: 'tongue-face',
            img: 'images/tongue-face.png'
        },
        {
            nome: 'ugly-face',
            img: 'images/ugly-face.png'
        },
        {
            nome: 'ugly-face',
            img: 'images/ugly-face.png'
        },
        {
            nome: 'worried',
            img: 'images/worried.png'
        },
        {
            nome: 'worried',
            img: 'images/worried.png'
        }
        
    ]

    cartaArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const mostrarResultado = document.querySelector('#result')
    var cartasEscolhidas = []
    var cartasEscolhidasId = []
    var cartasVencidas = []


    //criando seu tabuleiro
    function criarTabuleiro() {
        for (let i = 0; i < cartaArray.length; i++) {
            var carta = document.createElement('img')
            carta.setAttribute('src', 'images/blank.png')
            carta.setAttribute('data-id',  i)
            // carta.addEventListener('click', virarcarta);
            grid.appendChild(carta);
        }
    }
    
    //checar cartas
    function confere(){
        var cartas = document.querySelectorAll('img')
        const opcaoUmId = cartasEscolhidasId[0]
        const opcaoDoisId = cartasEscolhidasId[1]
        if (cartasEscolhidas[0] === cartasEscolhidas[1]){
            alert('Você encontrou o par ! :D')
            cartas[opcaoUmId].setAttribute('src', 'images/white.png')
            cartas[opcaoDoisId].setAttribute('src', 'images/white.png')
            cartasVencidas.push(cartasEscolhidas)
        } else {
            cartas[opcaoUmId].setAttribute('src', 'images/blank.png')
            cartas[opcaoDoisId].setAttribute('src', 'images/blank.png')
            alert("Errou, tente de novo !")
        }
        cartasEscolhidas = []
        cartasEscolhidasId = []
        mostrarResultado.textContent = cartasVencidas.length
        if (cartasVencidas.length === cartaArray.length/2){
            mostrarResultado.textContent = 'Parabéns ! Você encontrou todos !'
        }
    }

    //vire sua carta
    function virarcarta() {
        var cartaId = this.getAttribute('data-id')
        cartasEscolhidas.push(cartaArray[cartaId].nome)
        cartasEscolhidasId.push(cartaId)
        this.setAttribute('src', cartaArray[cartaId].img)
        if (cartasEscolhidas.length === 2) {
            setTimeout(confere, 500)
        }
    }

    criarTabuleiro()
    confere()
    virarcarta()
  

})


