// Get the inputs from the CMD
let alarmsArray = process.argv.slice(2).sort((a, b) => a - b);
// Transforms the array of string in an array of numbers
let alarmsArrayNumber = alarmsArray.map(e => Number(e));
// Filter the array to keep only numbers > 0
let alarmsArrayFiltered = alarmsArrayNumber.filter(e => Number.isInteger(e) && e > 0);

let alarm = (arrayOfAlarms) => {
  if (arrayOfAlarms) {
    for (let i = 0; i <= Math.max(...arrayOfAlarms); i ++) {
      setTimeout(() => {
        if (arrayOfAlarms.includes(i)) {
          //Make sound
          process.stdout.write('\x07');
        }
      }, i*1000);
    }
  }
};

alarm(alarmsArrayFiltered);
