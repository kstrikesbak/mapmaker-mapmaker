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


// let arr = ['Jim Smith','Mark Jones']
// following function outputs [ 'J', 'S', 'M', 'J' ] 
// and not sure how to join them 

// function changeToInitials(arr) {
//   const newArr = []
//   for (i=0;i<arr.length;i++) {
//     for(j=0;j<arr[i].length;j++){
//     if( j === 0){
//       //console.log(arr[i].length)
//       newArr.push(arr[i][j])
//     } else if (arr[i][j] === ' ') {
//       newArr.push(arr[i][j+1])
//     }
//   }
//   }
//   return newArr
//  }
//  changeToInitials(arr)

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

function add1ToLeft(arr) {
  const newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
    newArr.push(Number(`1${arr[i] * -1}` * -1))
  } else if (arr[i] >= 0) {
    newArr.push(Number(`1${arr[i]}`))
    }
  }
  return newArr;
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