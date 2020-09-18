const inputStart = document.querySelector('#start')
const inputEnd = document.querySelector('#end')
const consultar = document.getElementById('consultar')
const limpar = document.getElementById('limpar')
const diferenca = document.getElementById('diferenca')

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

    retorno = "Anos: " + diffInYears + ". Meses: " + diffInMonths + ". Dias: " + diffInDays + ".";

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