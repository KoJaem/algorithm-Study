const numbers = [4, 1, 2, 1];
const target = 4;

function solution(numbers, target) {
  let answer = 0;

  const dfs = (count, sum) => {
    if (count === numbers.length) {
      if (target === sum) {
        answer++;
      }
      return;
    }
    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  };
  dfs(0, 0);

  return answer;
}

solution(numbers, target);
