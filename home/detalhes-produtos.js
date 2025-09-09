let Produto = document.getElementById("produto-1")
Produto.addEventListener('click', () => {
    console.log(Produto);
    window.location.href = `detalhes-produtos.html?id=${Produto.id}`;
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    fetch('produtos.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
        })
});