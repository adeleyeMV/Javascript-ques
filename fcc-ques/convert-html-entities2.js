// Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
// in a string to their corresponding HTML entities.

function convertHTML(str) {

    // Object Lookup to declare HTML entities 
    const htmlEntities = {
       '&': '&amp;',
       '<': '&lt;',
       '>': '&gt;',
       '"': '&quot;',
       "'": '&apos;'
    }

    return str
      .split("")
      // returns the converted entity or the original one if no conversion.
      .map(elem=> htmlEntities[elem] || elem)
      .join("");
}

convertHTML('Stuff in "quotation marks"');
