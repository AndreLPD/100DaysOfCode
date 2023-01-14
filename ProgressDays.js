const days = [6, 5, 4, 3, 2, 9]
function progressDays(days){
    let countDays = 0
    return days.reduce((previousValue, currentValue) => (previousValue<currentValue) ? countDays++ : 0
    )
}

console.log(progressDays(days));