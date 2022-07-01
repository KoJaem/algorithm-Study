const numbers = [2, 1, 3, 4, 1];
function solution(numbers) {
  let answer = [];
  for(let i = 0; i < numbers.length-1; ++i) {
    for(let j = i+1; j < numbers.length; ++j) {
      answer.push(numbers[i]+numbers[j]);
    }
  }
  answer = answer.filter((num, index) => (
    answer.indexOf(num) === index
  ))
  answer.sort((a,b) => a-b);
  return answer;
}

solution(numbers);