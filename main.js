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

function yelledGreetings(arr) {
  const newArr = []
  for (i=0;i<arr.length;i++) {
    newArr.push(arr[i]+'!')
  }
  return newArr
}

function changeToInitials(arr) {
  const newArr = []
  
  for (i=0;i<arr.length;i++) {
    if(i === 0){
      newArr.push(arr[i][0])
    } else if (arr[i-1] === ' ') {
      newArr.push(arr[i][0])
    }
    
  }
  return newArr
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
  const newArr = []
  
  for (i=0;i<arr.length;i++) {
    if(i === 0){
      newArr.push(arr[i][0].toUpperCase())
    } else {
      newArr.push(arr[i][i])
    }
    
  }
  return newArr
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