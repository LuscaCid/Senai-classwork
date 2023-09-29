export function JSfunctions({
    cheers,
    day,
    month,
    year,
    displayHours,
    displayMinutes,
    displaySeconds,
    actualHour,
    present,

}){
    function updateCheers(){
        if(present.getDay < 10)day.textContent = `0${present.getDay()}/`
        else day.textContent = day.textContent = `${present.getDate()}/`
        
        if(present.getMonth() < 10)month.textContent = `0${present.getMonth()}/`
        else month.textContent = `${present.getMonth()}/`
        
        year.textContent = present.getFullYear();
        
        if(actualHour > 5 && actualHour < 12){
            cheers.textContent = `Bom dia!`;
        }
        
        else if(actualHour > 12 && actualHour < 18){
            cheers.textContent = `Boa tarde!`;
        }
        
        else if(actualHour > 18 ){
            cheers.textContent = `Boa noite`;
        }

    }
    function updateDisplays(){
        setInterval(()=>{
            let uptade = new Date()
        
            displayHours.innerText = uptade.getHours()
            displayMinutes.innerText= uptade.getMinutes()
            displaySeconds.innerText = uptade.getSeconds()
            
            console.log
        }, 1000)
    }

    return{
        updateCheers,
        updateDisplays,
    }
}