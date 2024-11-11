/*
Date: 11-11-2024

Link: https://www.codewars.com/kata/5721a78c283129e416000999

*/


function pickIt(arr){
    let odd = [], even =[];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            even.push(arr[i]);
        }else{
            odd.push(arr[i]);
        }
    }

    return [odd,even]

}

// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// pickIt(x)