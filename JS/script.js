const titulo = document.querySelector('h1');
const paragrafo2 = document.querySelector('#paragrafo')
const paragrafos = document.querySelectorAll('.paragrafo')
const botaoClique = document.querySelector('#bt-clique')
const inputNome = document.querySelector('#input-nome')

function hello(){
    const nome = inputNome.value
    alert(`Olá ${nome}!`)
}

function helloEnter(evento){
    if (evento.key == 'Enter'){
        const nome = inputNome.value
        alert(`Olá ${nome}!`)
    } else if (evento.key == 'Alt'){
        alert('Encontrou a função secreta!!!')
    }
}

botaoClique.addEventListener('click', hello)
inputNome.addEventListener('keyup', helloEnter)

// botaoClique.onclick = () => {
//     titulo.innerText = "Acabou a aula!"
    
//     for (elemento of paragrafos){
//         elemento.style.color = 'purple'
//     }
    
//     if (document.querySelector('#gatinho') == null) {
//         const gatinho = document.createElement('img')
//         gatinho.id = 'gatinho'
//         gatinho.src = 'https://img.freepik.com/fotos-premium/gatinho-bonito-dos-desenhos-animados-sentado-no-fundo-branco_893012-113909.jpg'
//         gatinho.style.width = '50px'
//         document.body.appendChild(gatinho)
//     }
// }
