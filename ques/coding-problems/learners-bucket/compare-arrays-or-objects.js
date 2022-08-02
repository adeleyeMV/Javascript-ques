// COMPARE TWO ARRAY OR OBJECTS WITH JS


// #1 Basic approach- convert the whole into string then compare

let arr1 = [1, 2, 3, 4, 5]; 
let arr2 = [1, 2, 3, 4, 5];
console.log( JSON.stringify(arr1) === JSON.stringify(arr2) );  // true

// but this approach fails when we change order of the elements
arr1 = [1, 2, 3, 4, 5];
arr2 = [1, 2, 4, 3, 5];
console.log( JSON.stringify(arr1) === JSON.stringify(arr2) );  // false

// same issues occured for Objects
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {b: 2, a: 1, c: 3};
console.log( JSON.stringify(obj1) === JSON.stringify(obj2) );  // false



// #2 Comparing only arrays (single and multi dimensional)

let compareArr = (arr1, arr2) =>{ 
  // check inputs are array or not
  if(!arr1 || !arr2) return false;
  
  // check length of inputs
  if( arr1.length !== arr2.length ) return false;
  
  let result;
  for(let i=0; i<arr1.length; i++){
    // if current element is array (for multi-D array input)
    if( Array.isArray(arr1[i]) && Array.isArray(arr2[i]) ) result = compareArr( arr1[i], arr2[i] );
  
    // compare both elements
    else if( arr1[i] === arr2[i] ) result = true;  
    else result = false;
    
    if(!result) break;
  }

  return result;
}
console.log(compareArr( [1,2,3],  [1,2,3] ));  // true
console.log(compareArr( [1,2],  [1,2,3] ));    // false
console.log(compareArr( [[1,2],[3, 4]],  [[1, 2],[3, 4, 6]] ));  // false
console.log(compareArr( [[1,2],[3, 4]],  [[1,2],[3,4]] ));    // true
console.log(compareArr( [1,2,[3,4,5]],  [1,2,[3,4,5]] ));     // true
console.log(compareArr( [],  [1,2,[3,4,5]] ));  // false  




// #3 Function to Compare array or object

compare = (inpt1, inpt2) => {
  let inpt1Type = Object.prototype.toString.call(inpt1);
  let inpt2Type = Object.prototype.toString.call(inpt2);
  
  // check if inputs are either array or object
  if( [ '[object Array]', '[object Object]' ].indexOf(inpt1Type)<0 || 
      [ '[object Array]', '[object Object]' ].indexOf(inpt2Type)<0 ) return false;
    
  // check if both inputs are of same type
  if(inpt1Type !== inpt2Type) return false;
  
  // check if both inputs are of equal size
  let inpt1Len = inpt1Type === '[object Array]' ? inpt1.length : Object.keys(inpt1).length;
  let inpt2Len = inpt2Type === '[object Array]' ? inpt2.length : Object.keys(inpt2).length;
  if(inpt1Len !== inpt2Len) return false;

  // helper function to check equality
  let equal = (elem1, elem2) => {
    let elemType = Object.prototype.toString.call(elem1);
    
    // if array or object then compare recursively
    if( [ '[object Array]', '[object Object]'].indexOf(elemType) >=0 ){
      if( !compare(elem1, elem2) ) return false;
    }else{ 
      // if elements are not the same type
      if( elemType != Object.prototype.toString.call(elem2) ) return false;
      
      // if elem is function, then convert to string and compare
      if( elemType === '[object Function]' ){
        if( elem1.toString() !== elem2.toString() ) return false;
      } else{ // just compare
        if(elem1 !== elem2) return false;
      }
    }
  };

  // Comparing elements
  if( inpt1Type === '[object Array]' ){
    for( let i=0; i<inpt1Len; i++){
      if( equal(inpt1[i], inpt2[i]) === false ) return false; 
    }
  } else{
    for(let key in inpt1){
      if(inpt1.hasOwnProperty(key)){
        if( equal(inpt1[key], inpt2[key]) === false ) return false;
      }
    }
  }

  return true;  // when all tests are passed
}

arr1 = [1, 2, 3, 4, 5];
arr2 = [1, 3, 2, 4, 5];
console.log(compare(arr1, arr2));  // false

let arrObj1 = [1, 2, { a: 1, b: 2, c: 3, d: function(){ console.log("abcd"); } }, 4, 5];
let arrObj2 = [1, 2, { c: 3, b: 2, a: 1, d: function(){ console.log("abcd"); } }, 4, 5];
console.log(compare(arrObj1, arrObj2)); // true

let arr4 = [ [1, 2], [3, 4, 5] ];
let arr3 = [ [1, 2], [3, 4, 5] ];
console.log(compare(arr4, arr3)); // true
