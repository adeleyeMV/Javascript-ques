// Everything Be True

function truthCheck(collection, pre) {
  // return true if every predicate is truthy
  return collection.every(elem=> elem[pre])
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false},   
            {name: "Naomi", role: "", isBot: false},   
            {name: "Camperbot", role: "Bot", isBot: true}], 
           "isBot"
          );
