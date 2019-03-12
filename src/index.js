module.exports = function check(str, bracketsConfig) {
  // your solution

  //config check
  for (let i = 0; i < str.length; ++i) {
    let match = false;
    for (pattern of bracketsConfig) {
      if (pattern.indexOf(str[i]) >= 0) {
        match = true;
        break;
      }
    }
    if (!match) return false;
  }

  let map = {};
  for (let pattern of bracketsConfig) {
    map[pattern[0]] = pattern[1];
  }

  //check pair brackets
  let stack = [];
  for (let i = 0; i < str.length; ++i) {
    let match = false;
    let sameValue = false;
    for (let property in map) {
      if (str[i] == property) {
        match = true;
        if (property == map[property]) {
          sameValue = true;
        }
        break;
      }
    }

    if (match) {
      if (str[i] == stack[stack.length - 1] && sameValue) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else {
      let lastBracket = stack.pop();
      if (str[i] !== map[lastBracket]) return false;
    }
  }

  if (stack.length !== 0) return false;

  return true;
};
