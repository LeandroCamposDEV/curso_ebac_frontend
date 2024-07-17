document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const button = document.createElement('button');
    button.textContent = 'Clique aqui!';
    header.appendChild(button);

    button.addEventListener('click', function() {
        alert('Botão clicado!');
        header.style.backgroundColor = '#4d926f';
        header.style.color = '#fff';
    });
});