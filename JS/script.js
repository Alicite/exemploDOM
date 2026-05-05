const btEnviar = document.querySelector('#bt-enviar')
const container = document.querySelector('#container')

btEnviar.addEventListener('click', () => {
    const nome = document.querySelector('#input-nome').value;
    const jogo = document.querySelector('#input-jogo').value;
    const nascimento = document.querySelector('#input-nascimento').value;

    const novaDiv = document.createElement('div');
    novaDiv.innerHTML = `<h3>${nome}</h3><p>${jogo}</p><p>${nascimento}</p>`;
    novaDiv.classList.add('card');
    container.appendChild(novaDiv);
})