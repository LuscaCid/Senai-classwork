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
        
            if(uptade.getHours() < 10)displayHours.innerText = `0${uptade.getHours()}`     
            else displayHours.innerText = uptade.getHours()
            
            if(uptade.getMinutes() < 10)displayMinutes.innerText = `0${uptade.getMinutes()}`
            else displayMinutes.innerText= uptade.getMinutes()
            
            if(uptade.getSeconds() < 10) displaySeconds.innerText = `0${uptade.getSeconds()}`
            else displaySeconds.innerText = uptade.getSeconds()
            
            console.log
        }, 1000)
    }

    return{
        updateCheers,
        updateDisplays,
    }
}