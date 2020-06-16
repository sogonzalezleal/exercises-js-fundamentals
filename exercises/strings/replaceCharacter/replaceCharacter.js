
let string = 'Sofia Gonzalez Leal'
let target = 'a'
let replaceWith = '7'

function replaceCharacter(string, target, replaceWith) {
  return newString = string.replace(target, replaceWith)
}

if (require.main) {
  let newString = string.replace(target, replaceWith)
  console.log(newString);
}


module.exports = replaceCharacter;
