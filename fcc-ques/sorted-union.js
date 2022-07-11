// Write a function that takes two or more arrays and 
// returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(arr) {
    
    let finalArr = [...arguments];
    let result = [];

    for(let i=0; i<finalArr.length; i++){
        
        for(let j=0; j<finalArr[i].length; j++){
    
            let elem = finalArr[i][j];

            if(!result.includes(elem))
                result.push(elem);
        }
    }
    return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
