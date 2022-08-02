// DNA Pairing

function pairElement(str) {
    let pairedArr= [];

    for(let i=0; i<str.length; i++){
        switch(str.charAt(i)){ // checking the base pairs
          case "A": pairedArr.push(["A", "T"]); break;
          case "T": pairedArr.push(["T", "A"]); break;
          case "C": pairedArr.push(["C", "G"]); break;
          case "G": pairedArr.push(["G", "C"]); break;
        }
    }
    return pairedArr;
}

pairElement("ATCGA");
