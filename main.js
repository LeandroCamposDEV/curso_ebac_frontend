const form = document.getElementById('form-numeros');
const valorA = document.getElementById('Valor-A');
const valorB = document.getElementById('Valor-B');
const errorMessage = document.querySelector('.error-message');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const valorAInt = valorA.value;
    const valorBInt = valorB.value;

    if (valorBInt > valorAInt) {
        errorMessage.style.display = 'none';
        successMessage.textContent = 'Os números são válidos! B é maior que A.'; 
        successMessage.style.display = 'block'; 
    } else {
        successMessage.style.display = 'none'; 
        errorMessage.style.display = 'block';
    }
});

