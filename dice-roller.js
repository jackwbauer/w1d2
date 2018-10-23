var myArg = process.argv[2];

function diceRoller(num) {
  var results = [];
  for (var i = 0; i < num; i++) {
    results.push(Math.floor(Math.random() * Math.floor(6)) + 1);
  }
  return 'Rolled ' + num + ' dice: ' + results.join(', ');
}

console.log(diceRoller(myArg));
