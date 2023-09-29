export function Elements(){
    const cheers = document.getElementById('saudacaoDiaria')
    const day = document.getElementById('dia')
    const month = document.getElementById('mes')
    const year = document.getElementById('ano')
    const displayHours = document.getElementById('hours')
    const displayMinutes = document.getElementById('minutes')
    const displaySeconds = document.getElementById('seconds')
    
    return{
        cheers,
        day,
        month,
        year,
        displayHours,
        displayMinutes,
        displaySeconds,
    }
}