const inputStart = document.querySelector('#start')
const inputEnd = document.querySelector('#end')
const button = document.querySelector('button')
const span = document.querySelector('h2 > span')

function calculateDateDiff () {
    let start = inputStart.value
    let end = inputEnd.value

    start = new Date(start)
    end = new Date(end)

    let diffInTime = Math.abs(end - start)
    let timeInOneDay = 1000 * 60 * 60 * 24
    let diffInDays = Math.ceil(diffInTime / timeInOneDay)

    //let timeInOneMonth = 1000 * 60 * 60 * 24 * 30
    let timeInOneMonth = 1000 * 60 * 60 * 24 * 30 

    let diffInMonths = Math.ceil(diffInTime / timeInOneMonth)


    return diffInDays
    //return  timeInOneMonth

}

button.addEventListener('click', () => {
    const diffInDays = calculateDateDiff()
    span.innerHTML = diffInDays
    //span.innerHTML = diffInMonths
})