const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  ' ': ' ',
};

function decode(expr) {
  let result = '';
  for (let startIndex = 0; startIndex + 10 <= expr.length; startIndex += 10) {
    let code = expr.slice(startIndex, startIndex + 10);
    code = code.replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '').replace(/\*\*\*\*\*\*\*\*\*\*/, ' ');
    result+= MORSE_TABLE[code];
  }
  return result;
}

module.exports = {
  decode
};