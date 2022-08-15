// Map the Debris

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  for(let i=0; i<arr.length; i++){
    
    // adding orbitalPeriod property
    arr[i].orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(
        Math.pow(earthRadius + arr[i]['avgAlt'],3) / GM) 
      )

    // deleting avgAlt property
    delete arr[i].avgAlt;
  }

  return arr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, 
               {name: "hubble", avgAlt: 556.7}, 
               {name: "moon", avgAlt: 378632.553}
              ]);
