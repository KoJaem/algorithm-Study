const price = 3;
const money = 20;
const count = 4;

function solution(price, money, count) {
  let answer = -1;
  
  for(let i = 1; i <= count; ++i) {
    money -= price * i;
  }

  money < 0 ? answer = Math.abs(money) : answer = 0;

  return answer;
}


solution(price, money, count);