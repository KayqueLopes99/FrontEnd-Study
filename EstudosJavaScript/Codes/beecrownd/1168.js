var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let n = Number(lines[0]);

const leds = {
  '0': 6, '1': 2, '2': 5, '3': 5, '4': 4,
  '5': 5, '6': 6, '7': 3, '8': 7, '9': 6
};

for (let i = 1; i <= n; i++) {
  let numero = lines[i];
  let total = 0;

  for (let j = 0; j < numero.length; j++) {
    total += leds[numero[j]];
  }

  console.log(`${total} leds`);
}