function myReplace(str, before, after) {
  
    // find first character of before word
    let firstChar = before.substring(0,1);

    // Check first letter is uppercase or lowercase
    if( firstChar === firstChar.toUpperCase())
        after = after.charAt(0).toUpperCase() + after.slice(1);  
    else 
        after = after.charAt(0).toLowerCase() + after.slice(1);  

    return str.replace(before, after);
}

// Driver Call
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
