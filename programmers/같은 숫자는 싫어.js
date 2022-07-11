//////////////////////////
// 효율성 테스트 2 실패
const arr = [1, 1, 3, 3, 0, 1, 1];

function solution(arr) {
  let pre = null;
  const answer = arr.map((data) => {
    if(data !== pre) {
      pre = data;
      return data;
    }
  }).filter(data => data !== undefined)

  return answer;
}

solution(arr);
