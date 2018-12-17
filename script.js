var alphabet = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
};

var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


if (process.argv[2][0] == "." || process.argv[2][0] == "-") {

    console.log(morseDecode(process.argv));
} else {
    console.log(caesarEncode(process.argv[2],process.argv[3]));
}


function morseDecode(input) {
    var result = [];
    for (let i = 2; i<input.length; i++) {
        result.push(Object.keys(alphabet).find(key => alphabet[key] === process.argv[i]))
    };
    return result.join("");
}

function caesarEncode(input, shift) {
    var result = [];
    var shift = parseInt(shift);

    for (let i = 0; i<input.length; i++) {
        if (shift < 0) {
            if (input[i] === " ") {result.push(" ")}
            result.push(abc[(abc.indexOf(input[i]) - 26 + shift) % 26 + 26]);
        } else {
            if (input[i] === " ") {result.push(" ")}
            result.push(abc[(abc.indexOf(input[i]) + shift) % 26]);
        }
    }
    return result.join("");
}

// uncomment the relevant line
// run node script.js ARG_ONE ARG_TWO to test your functions
// morseDecode(process.argv[2])
// caesarEncode(process.argv[2], process.argv[3])