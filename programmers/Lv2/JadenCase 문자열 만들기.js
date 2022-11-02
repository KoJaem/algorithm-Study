const s = "a aa ";

function solution(s) {
  const arr = s.split(' ');
  for(let i = 0; i < arr.length; ++i) {
    if(!arr[i]) continue; // split 해서 나온 문자열이 빈 문자열일 경우
    arr[i] = arr[i].toLowerCase();
    if(/[a-zA-Z]/.test(arr[i][0])) {
      arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
    }
  }
  return arr.join(" ");
}

solution(s);