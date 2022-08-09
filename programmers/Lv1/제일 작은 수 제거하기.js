const arr = [4,3,2,1]

function solution(arr) {
  if (arr.length === 1) return [-1];
  const arr2 = [...arr];
  arr2.sort((a,b) => a-b);
  const min = arr2[0];
  const answer = arr.filter(data => data !== min);
  
  return answer;
}

solution(arr);