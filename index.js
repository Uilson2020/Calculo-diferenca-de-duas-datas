const inputStart = document.querySelector('#start')
const inputEnd = document.querySelector('#end')
const consultar = document.getElementById('consultar')
const limpar = document.getElementById('limpar')
const diferenca = document.getElementById('diferenca')

// function diferencaEntreDias(dataIni, dataFim){//recebe a data no formato MM/dd/yyyy
//     var ONE_DAY = 1000 * 60 * 60 * 24;//Variável que representa um dia em milissegundos
//     var date_ini_ms = new Date(dataIni).getTime();//variável que representa a data incial em ms
//     var date_fim_ms = new Date(dataFim).getTime();//variável que representa a data final em ms
//     var diferenca = date_fim_ms - date_ini_ms;//diferenca, em ms, entre as datas
//     return Math.round(diferenca/ONE_DAY);//diferenca, em dias, entre as datas
// }


function calculateDateDiff () {
    let start = inputStart.value;
    let end = inputEnd.value;

    start = new Date(start);
    end = new Date(end);

    let diffInTime = Math.abs(end - start);
    let timeInOneDay = 1000 * 60 * 60 * 24
    let diffInDays = Math.ceil(diffInTime / timeInOneDay);

    let diffInMonths = 0;
    let diffInYears = 0;

    while(diffInDays >= 365) {
        diffInYears = diffInYears + 1;
        diffInDays = diffInDays - 365;
    }

    while(diffInDays >= 30) {
        diffInMonths = diffInMonths + 1;
        diffInDays = diffInDays - 30;
    }

    retorno = "Total em anos: " + diffInYears + ". Total em meses: " + diffInMonths + ". Total em dias: " + diffInDays + ".";

    return retorno

}



consultar.addEventListener('click', () => {
    let retorno = calculateDateDiff();

    diferenca.innerHTML = retorno;
})

limpar.addEventListener('click', () => {
    inputStart.value = "";
    inputEnd.value = "";
})