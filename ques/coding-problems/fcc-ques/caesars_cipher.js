// Caesars Cipher

function rot13(str) {
  let newStr = '';
  
  for(let i=0; i<str.length; i++){
    let char = str[i];
    let asciiValue = str.charCodeAt(i);
    
    if( char>='A' && char<='Z' ){
      // when asciivalue goes beyond alphabetic range
      if(asciiValue-13 < 65)
        newStr += String.fromCharCode(91-(65-(asciiValue-13)));

      else
        newStr += String.fromCharCode(asciiValue-13);
    }

    // for non-alphabetic character    
    else newStr += char;
  }

  console.log(newStr)
  return newStr;
}

rot13("SERR YBIR?");
