module.exports = function check(str, bracketsConfig) {
  let sumArr = new Array(bracketsConfig.length);
  sumArr.fill(0);
  
  for (let i = 0; i<str.length; i++){
      
    let index = findIndex(str[i], bracketsConfig);

    if (index < 0){
      continue;
    }

    if (bracketsConfig[index][0] == bracketsConfig[index][1]){
      sumArr[index] >= 0 ? sumArr[index]++ : sumArr[index]--;
    }

    let value = checkSymbol(str[i], bracketsConfig[index]);

    sumArr[index] += value;
  
    if (sumArr[index] < 0){
      return false;
    }
      
  }

  let sum = 0;
  for (let i = 0; i<sumArr.length; i++){
    sum += sumArr[i];
  }
  // let sum = sumArr.reduce(function(sum, current){
  //   sum + current
  // }, 0);

  if (sum == 0){
    return true;
  }

  return false;
}

function findIndex(symb, bracketsConfig){
  for (let i = 0; i<bracketsConfig.length; i++){
    if (bracketsConfig[i][0] == symb || bracketsConfig[i][1] == symb){
      return i;
    }
  }
  return -100000;
}


function checkSymbol (symb, bracketConfig){
  if (bracketConfig[0] == symb){
    return 1;
  }
  if (bracketConfig[1] == symb){
    return -1;
  }
  return 0;
}

module.exports('[(])', [['(', ')'], ['[', ']']])
//module.exports('((()))()', [['(', ')']]) 
