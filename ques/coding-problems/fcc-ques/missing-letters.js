// Find the missing letter in the passed letter range and return it.

function fearNotLetter(str) {

  for(let i=0; i<str.length-1; i++){
    
    let nextCharInStr =  str.charCodeAt(i+1);
    let nextCharInA2Z =  str.charCodeAt(i) + 1;

    if( nextCharInStr != nextCharInA2Z ) 
      return String.fromCharCode(nextCharInA2Z)
  }
  
  return undefined;
}

fearNotLetter("abce");
