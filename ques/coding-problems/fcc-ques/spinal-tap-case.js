// Convert a string to spinal case (all-lowercase-words-joined-by-dashes)

function spinalCase(str) {
  return str
    // split the string on space, underscore or followed by capital letter
    .split(/\W|_|(?=[A-Z])/)
    // join the separated string with '-'
    .join("-")
    // convert into lowercase
    .toLowerCase();
}

spinalCase("thisIsSpinalTap");
