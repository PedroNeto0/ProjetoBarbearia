document.getElementById('agende').addEventListener('submit', function (event) {
    var local = document.getElementById('local').value;
    var hora = document.getElementById('hora').value;
    var dataInput = document.getElementById('data');
    var dataSelecionada = new Date(dataInput.value);
    var hoje = new Date();

    if (dataSelecionada < hoje) {
        console.log('Data inválida');
        document.getElementById('mensagem').textContent = 'A data selecionada não é válida. Por favor, escolha uma data futura.';
        document.getElementById('mensagem').style.display = 'block';
        event.preventDefault();
    }

    var dia = dataSelecionada.getDay(); 

    var horarios = {
        sao_paulo: {
            semana: { inicio: '10:00', fim: '22:00' },
            domingo_feriado: { inicio: '14:00', fim: '20:00' }
        },
        rio_de_janeiro: {
            semana: { inicio: '10:00', fim: '20:00' },
            domingo_feriado: { inicio: '10:00', fim: '18:00' }
        }
    };

    if (local === 'sao_paulo') {
        if ((dia >= 1 && dia <= 6 && (hora < horarios.sao_paulo.semana.inicio || hora > horarios.sao_paulo.semana.fim)) ||
            (dia === 0 && (hora < horarios.sao_paulo.domingo_feriado.inicio || hora > horarios.sao_paulo.domingo_feriado.fim))) {
            console.log('Horário inválido para São Paulo');
            document.getElementById('mensagem').textContent = 'Não é possível agendar neste horário, a barbearia estará fechada.';
            document.getElementById('mensagem').style.display = 'block'; 
            event.preventDefault(); 

            console.log('A barbearia está fechada neste horário.');
        }
    } else if (local === 'rio_de_janeiro') {
        if ((dia >= 1 && dia <= 6 && (hora < horarios.rio_de_janeiro.semana.inicio || hora > horarios.rio_de_janeiro.semana.fim)) ||
            (dia === 0 && (hora < horarios.rio_de_janeiro.domingo_feriado.inicio || hora > horarios.rio_de_janeiro.domingo_feriado.fim))) {
            console.log('Horário inválido para Rio de Janeiro');
            document.getElementById('mensagem').textContent = 'Não é possível agendar neste horário, a barbearia estará fechada.';
            document.getElementById('mensagem').style.display = 'block';
            event.preventDefault();

            console.log('A barbearia está fechada neste horário.');
        }
    }
});