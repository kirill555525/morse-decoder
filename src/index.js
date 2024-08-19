const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const len = expr.length;
    let decode_str = '';
    let s = '';
    for (let i = 0; i < len; i += 10) {
        s = expr.slice(i, i + 10);

        if (s === '*'.repeat(10)) {
            decode_str += ' ';
            continue;
        }

        let dotDash = '';

        for (let j = 0; j < 10; j += 2) {
            if (s[j] + s[j+1] === '10') dotDash += '.';
            else if ((s[j] + s[j+1] === '11')) dotDash += '-';
        }

        decode_str += MORSE_TABLE[dotDash];
    }

    return decode_str;
}

module.exports = {
    decode
}