const h1 = document.querySelector('.container h1');
const data = new Date();

function getDayWeekText (diaSemana) {
    let diaSemanaTexto;

        switch (diaSemana) {
        case 0:   //caso o dia da semana for 0 ...
            diaSemanaTexto = 'domingo';  // Fala a condição, se for 0 : domingo
            return diaSemanaTexto;  // para por aqui caso seja 0
        case 1:  
            diaSemanaTexto = 'segunda-feira'; 
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta-feira';
            return diaSemanaTexto;
        case 4: 
            diaSemanaTexto = 'quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'sexta-feira';
            return diaSemanaTexto;
        case 6: 
            diaSemanaTexto = 'sábado';
            return diaSemanaTexto;
        default:  // É utilizado como o "ELSE" 
            diaSemanaTexto = '';
            return diaSemanaTexto;
        }
    }

function getNameMonth (numberMonth) {
    let nomeMes;

        switch (numberMonth) {
        case 0:  
            nomeMes = 'janeiro';  
            return nomeMes;
        case 1:  
            nomeMes = 'fevereiro';  
            return nomeMes;
        case 2:  
            nomeMes = 'março';  
            return nomeMes;
        case 3:  
            nomeMes = 'abril';  
            return nomeMes;
        case 4:  
            nomeMes = 'maio';  
            return nomeMes;
        case 5:  
            nomeMes = 'junho';  
            return nomeMes;
        case 6:  
            nomeMes = 'julho';  
            return nomeMes;
        case 7:  
            nomeMes = 'agosto';  
            return nomeMes;
        case 8:   
            nomeMes = 'setembro';  
            return nomeMes;
        case 9:  
            nomeMes = 'outubro';  
            return nomeMes;
        case 10:  
            nomeMes = 'novembro';  
            return nomeMes;
        case 11:  
            nomeMes = 'dezembro';  
            return nomeMes;
        }
    }

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    let diaSemana = data.getDay();
    let numberMonth = data.getMonth();

    let nameDay = getDayWeekText(diaSemana);
    let nameMonth = getNameMonth(numberMonth);

    return (
        `${nameDay}, ${data.getDate()} de ${nameMonth}` + 
        `de ${data.getFullYear()} ${data.getHours()}: ${data.getMinutes()}`
    );
}

h1.innerHTML = criaData(data);