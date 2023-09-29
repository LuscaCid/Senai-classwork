import {Elements} from './elements.js'
import { JSfunctions} from './functions.js';
const {
    cheers,
    day,
    month,
    year,
    displayHours,
    displayMinutes,
    displaySeconds,
} = Elements();

const present = new Date();
const actualHour = present.getHours();
console.log(actualHour);
const appFunctions = JSfunctions({
    cheers,
    day,
    month,
    year,
    displayHours,
    displayMinutes,
    displaySeconds,
    actualHour,
    present,
})

appFunctions.updateCheers()
appFunctions.updateDisplays()

