$(document).ready(function() {
    $('#btnCadastrar').click(function (){
        var nomeTarefa = $('#inputTarefa').val();
        if (nomeTarefa) {
           $('#tarefas').append('<li>' + nomeTarefa + '</li>');
           $('#inputTarefa').val(''); 
        }
    });

    $('#tarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});