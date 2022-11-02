const s = "-1 2 -3 -4";

function solution(s) {
  const arr = s.split(' ');
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}

solution(s);
