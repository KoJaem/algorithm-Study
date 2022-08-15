const s = "baabaa";
function solution(s) {
  let arr = [s[0]];
  for (let i = 1; i < s.length; ++i) {
    if(arr[arr.length-1] !== s[i]) {
      arr.push(s[i])
    }
    else {
      arr.pop();
    }
  }
  
  return arr.length === 0 ? 1 : 0;
}

solution(s);

////////////////////////////////////////////////////////////////////

// // 시간초과 (테스트 케이스는 성공)

// const s = "baabaa";
// function solution(s) {

//   for (let i = 0; i < s.length - 1; ++i) {
//     if (s[i] === s[i + 1]) {
//       // s = s.slice(0, i) + s.slice(i + 2, s.length);
//       s = s.slice(0,i).concat(s.slice(i+2, s.length));
//       // s = s.replace(s[i]+s[i], "");
//       i -= 2;
//     }
//   }
//   console.log(s)

//   return s.length === 0 ? 1 : 0;

// }

// solution(s);
