const busca = document.querySelector('.cabecalho__busca');

busca.oninput = function () {
    const digitado = busca.value.toLowerCase();

    const cartoes = document.querySelectorAll('.cartao');

    cartoes.forEach(function(cartao) {
        const textoCartao = cartao.textContent.toLowerCase();
    
        if (textoCartao.includes(digitado)) {
            cartao.style.display = 'block';
        } else {
            cartao.style.display = 'none';
        }
    });
    
    
}

