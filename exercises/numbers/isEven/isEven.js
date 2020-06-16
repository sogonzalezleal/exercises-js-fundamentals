
let num = {}

function isEven(num) {
  if (num % 2 === 0)
    return true;
  else
    return false
}

if (require.main) {
  let evenNumbers = [2, 20, 100, 768];

  console.log('Running sanity checks for isEven');

  for (let num of evenNumbers) {
  console.log(isEven(num));
  }

  for (let num of evenNumbers) {
  console.log(isEven(num + 1));
  }
  }
