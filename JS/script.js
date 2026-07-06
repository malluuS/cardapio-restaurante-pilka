// Obtém o dia atual e identifica o cardápio correspondente a ser exibido
const hoje = new Date();
const diaSemana = hoje.getDay();

// Vetores utilizados para identificar o dia atual e formatar a data
const dias = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
const nomesDias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

const diaHoje = dias[diaSemana];
const cardapioDia = document.getElementById(diaHoje);

// Exibe apenas o cardápio correspondente ao dia da semana
if (cardapioDia) {
    cardapioDia.style.display = 'block';
}

const diaNumero = hoje.getDate();
const mes = meses[hoje.getMonth()];

document.getElementById('data-completa').textContent = `${nomesDias[diaSemana]}, ${diaNumero} de ${mes}`;

// Define se o restaurante está aberto ou fechado de acordo com o dia e horário

const HORARIO_ABERTURA = 11;
const HORARIO_FECHAMENTO = 14;
const hora = hoje.getHours();
const status = document.getElementById('status');
if (diaSemana === 0) {
    status.textContent = 'Fechado';
    status.className = 'fechado';
} else if (hora >= HORARIO_ABERTURA && hora < HORARIO_FECHAMENTO) {
    status.textContent = 'Aberto';
    status.className = 'aberto';
} else {
    status.textContent = 'Fechado';
    status.className = 'fechado';
}

if (diaSemana === 0) {
    const idsParaOcultar = ['cardapio', 'botoes-pedido', 'frase-pedido', 'avisos', 'divisor'];
    idsParaOcultar.forEach(id => document.getElementById(id)?.classList.add('oculto'));

    document.getElementById('aviso-domingo')?.classList.remove('oculto');
}

// Aplica uma animação periódica ao ícone de pedidos para chamar a atenção do usuário
const sino = document.querySelector('#frase-pedido i');

if (sino) {
    sino.style.animation = 'balancar 0.3s ease 6';

    setInterval(() => {
        sino.style.animation = 'none';

        setTimeout(() => {
            sino.style.animation = 'balancar 0.3s ease 6';
        }, 10);

    }, 5000);
}