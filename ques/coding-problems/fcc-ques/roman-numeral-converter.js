function convertToRoman(num) {
  let result = '';

  let numerals = [
    {'numeric': 1000, 'roman': 'M'}, 
    {'numeric': 900, 'roman': 'CM'}, 
    {'numeric': 500, 'roman': 'D'}, 
    {'numeric': 400, 'roman': 'CD'},
    {'numeric': 100, 'roman': 'C'}, 
    {'numeric': 90, 'roman': 'XC'}, 
    {'numeric': 50, 'roman': 'L'}, 
    {'numeric': 40, 'roman': 'XL'},
    {'numeric': 10, 'roman': 'X'}, 
    {'numeric': 9, 'roman': 'IX'}, 
    {'numeric': 5, 'roman': 'V'}, 
    {'numeric': 4, 'roman': 'IV'}, 
    {'numeric': 1, 'roman': 'I'}
  ]

  for(let i=0; i<numerals.length; i++){
    while(num >= numerals[i]['numeric'] ){
      result += numerals[i]['roman']; 
      num -= numerals[i]['numeric'];
    }
  }

  return result;
}

convertToRoman(83);
