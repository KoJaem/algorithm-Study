const dartResult = "1S*2D*3T*";


// 1
// 8 + 1
// 8 54 (이전에 1 더해진건 또 안해야함)


// Single(S) : n의 1제곱
// Double(D) : n의 2제곱
// Triple(T) : n의 3제곱

// ↓해당 점수와 바로 전에 얻은 점수를 각각 2배로 만듬 (중첩가능)
// 스타상(*) : 2배
// 아차상(#) : 음수로 만듬

const checkOption = data => {
  switch (data) {
    case "*":
    case "#":
      return true;
  }
  return false;
};
const checkBonus = data => {
  switch (data) {
    case "S":
    case "D":
    case "T":
      return true;
  }
  return false;
};

const calcOption = data => {
  switch (data) {
    case "*":
      return 2;
    case "#":
      return -1;
  }
};

const calcBonus = data => {
  switch (data) {
    case "S":
      return 1;
    case "D":
      return 2;
    case "T":
      return 3;
  }
};

const calcAll = (num, bonus, option) => {
  let result = 0;
  if (option !== undefined)
    result += Math.pow(num, calcBonus(bonus)) * calcOption(option);
  else result += Math.pow(num, calcBonus(bonus));


  return result;
};

function solution(dartResult) {
  let answer = 0;
  let pre = 0;
  let num;
  let bonus;
  let option;
  for (let i = 0; i < dartResult.length; ) {
    if (!isNaN(dartResult[i])) {
      num = dartResult[i];
      if (dartResult[i + 1] === '0') {
        num = 10;
        i++;
      }
    }

    if (checkBonus(dartResult[i + 1])) {
      bonus = dartResult[i + 1];
    }
    if (checkOption(dartResult[i + 2])) {
      option = dartResult[i + 2];
      i += 3;
      if(option === "*") {
        answer += pre;
      }
      answer += calcAll(num, bonus, option);
      pre = calcAll(num, bonus, option);

      continue;
    }
    answer += calcAll(num, bonus);
    pre = calcAll(num, bonus);
    i += 2;


  }
  return answer;
}

solution(dartResult);
