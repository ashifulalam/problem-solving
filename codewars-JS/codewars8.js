/*
Date: 11-11-2024

Link: https://www.codewars.com/kata/572059afc2f4612825000d8a

*/

function howManyDays(month){
    switch(month){
        case 2:
            return(28);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            return(30);
            break;
        default:
            return(31);
            break;     
    }
}


console.log(howManyDays(1));
