const X = "100";
const Y = "203045";

function solution(X, Y) {
  let answer = "";
  const common = new Array(10);
  for (let i = 0; i < 10; ++i) {
    const a = X.split(i).length - 1;
    const b = Y.split(i).length - 1;
    common[i] = Math.min(a, b);
  }

  for (let i = 9; i >= 0; --i) {
    if (common[i] === 0) continue;
    for (let j = 0; j < common[i]; ++j) {
      answer += i;
    }
  }

  if(answer === '') return "-1";


  if((answer.replace(/0/g, "")) === '') {
    return "0";
  }

  return answer;
}

solution(X,Y)



// 공부한 내용
// 문자열에서 특정 문자갯수 구하는법
// str.split(문자).length - 1;

// // 예시)
// const str = "문자열,특정문자,갯수"
// const count = str.split(',').length - 1;
// str.split(',') => ['문자열', '특정문자', '갯수'];