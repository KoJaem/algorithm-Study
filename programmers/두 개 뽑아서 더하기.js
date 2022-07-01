const numbers = [2, 1, 3, 4, 1];
function solution(numbers) {
  const answer = [];
  for(let i = 0; i < numbers.length-1; ++i) {
    for(let j = i+1; j < numbers.length; ++j) {
      const data = numbers[i] + numbers[j];
      if (!answer.includes(data)) {
        answer.push(data);
      }
    }
  }
  answer.sort((a,b) => a-b);
  return answer;
}

solution(numbers);