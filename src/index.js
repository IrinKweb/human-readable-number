module.exports = function toReadable (number) {
    let string = number.toString();
    let result = '';

    const hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    const dozens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const integer = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  if (string.length == 1) {
    return units[number];
  }
  else if (string.length == 2) {
    if (string[0] == 1) {
      result = integer[parseInt(string[1])]
    } else {
      result = dozens[parseInt(string[0]) - 1] + ((string[1] != '0') ? (' ' + units[parseInt(string[1])]) : '');
    }
  }
  else if (string.length == 3) {
    if (string[1] == 1) {
      result = hundreds[parseInt(string[0]) - 1] + ((string[1] != '0') ? (' ' + (integer[parseInt(string[2])])) : '');
    } else {
      result = hundreds[parseInt(string[0]) - 1] + ((string[1] != '0') ? (' ' + (dozens[parseInt(string[1]) - 1])) : '') + ((string[2] != '0') ? (' ' + units[parseInt(string[2])]) : '');
    }
  }

  return result
}
