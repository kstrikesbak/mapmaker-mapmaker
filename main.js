function doubleAll(arr) {
  const newArr = []
  for (i=0;i<arr.length;i++) {
    newArr.push(arr[i] * 2)
  }
  return newArr
}

function absoluteValues(arr) {
  const newArr = []
  for (i=0;i<arr.length;i++) {
    if (arr[i]>0 || arr[i]===0) {
    newArr.push(arr[i])
  } else {
    newArr.push(arr[i]-2*arr[i])
  }
  }
  return newArr
}

function yelledGreetings() {
}

function changeToInitials() {
}

function doubleOdd() {
}

function upperCaseFirstLetters() {
}

function add1ToLeft() {
}


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}