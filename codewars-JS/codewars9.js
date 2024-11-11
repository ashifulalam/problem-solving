/*
Date: 11-11-2024

Link:

*/

function padIt(str,n){
    let word = str;
     for(let i=1; i <=n; i++){
        if( i % 2 == 0){
            word = word + "*"
        }else{
            word = '*' + word;
        }
     }

     return word;
     //console.log(word);
}


// padIt('BD', 3)

