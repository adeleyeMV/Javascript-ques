function translatePigLatin(str) {
  
  let consonants = str.match(/^[^aeiou]+/);

  return consonants != null 
       ? str.replace(consonants, "") // if consonants starter
            .concat(consonants)
            .concat('ay') 
       : str.concat('way'); // if vowel starter
}

translatePigLatin("glove");
