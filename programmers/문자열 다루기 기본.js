const s = "1";

function solution(s) {
  if(!(s.length === 4 || s.length === 6)) return false;

  const checkNum = [...s].map(data => {
    if(isNaN(data)) return false;
  })
  if(checkNum.includes(false)) return false;

  return true;
}

console.log(solution(s));