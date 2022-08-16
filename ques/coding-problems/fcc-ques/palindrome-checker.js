// Palindrome Checker

function palindrome(str) {
  
  // Ignoring punctuation, case, and spacing
  let s1 = str.toLowerCase().match(/[a-z0-9]/g).join('');

  // checking string is palindrome
  for(let i=0, j=s1.length-1; i<s1.length; i++, j--){
    if(s1[i] != s1[j]) return false;
  }

  return true;
}

palindrome("1 eye for of 1 eye.");
