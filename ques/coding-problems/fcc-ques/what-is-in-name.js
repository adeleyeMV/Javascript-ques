function whatIsInAName(collection, source) {

  // extracting keys from source object
  let sourceKeys = Object.keys(source);

  // 1. check source keys are property of collection object
  // 2. check values collection and source keys object are same 
  return collection.filter(object=> 
        sourceKeys.every(key=> 
        object.hasOwnProperty(key) && object[key]==source[key] ));
}

// driver function
whatIsInAName(
  [{ first: "Romeo", last: "Montague" }, 
   { first: "Mercutio", last: null }, 
   { first: "Tybalt", last: "Capulet" }], 
   { last: "Capulet" });
