module.exports = function check(str, bracketsConfig) {
  let sum = 0;
  
  for (let i = 0; i<str.length; i++){
    let value = brack(str[i], bracketsConfig);
    sum += value;
    
    if (sum < 0){
      return false;
    }
  }

  if (sum == 0){
    return true;
  }

  return false;
}

function brack (symb, bracketsConfig){
  for (let i = 0; i<bracketsConfig.length; i++){
    let arr2 = bracketsConfig[i];
    if (arr2[0] == symb){
      return 1;
    }
    if (arr2[1] == symb){
      return -1;
    }
  }
  return 0;
}

