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
    newArr.push(-1*arr[i])
  }
  }
  return newArr
}

function yelledGreetings(arr) {
  const newArr = []
  for (i=0;i<arr.length;i++) {
    newArr.push(arr[i]+'!')
  }
  return newArr
}

function changeToInitials(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++){
    let component = arr[i];
    let newStr = '';
    for (let i = 0; i < component.length; i++){
    if (i===0 || component[i-1] === ' '){
      newStr = newStr + component[i];
    }
  }newArr.push(newStr)
  }return newArr
}


function doubleOdd(arr) {
  const newArr = []
  for (let i=0;i<arr.length;i++) {
    if (arr[i] % 2 === 1 || arr[i] % 2 === -1){
    newArr.push(arr[i] * 2)
  } else {
    newArr.push(arr[i])
  }
}
return newArr
}


function upperCaseFirstLetters(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++){
    let component = arr[i];
    let newStr = '';
    for (let i = 0; i < component.length; i++){
    if (i===0){
      newStr = newStr + component[i].toUpperCase();
    } else {
      newStr = newStr + component[i].toLowerCase();
    }
  }newArr.push(newStr)
  }return newArr
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