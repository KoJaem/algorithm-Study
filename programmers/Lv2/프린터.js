// 숫자가 높을수록 우선순위가 높음
const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;
function solution(priorities, location) {
  const target = priorities[location];

  const arr = [...priorities];
  arr[location] = -1;

  if (Math.max(...priorities) === target)
    return arr.filter(e => e === target || e === -1).indexOf(-1) + 1;

  let reverseCheck = false;

  let count = 0;

  while (true) {
    const max = Math.max(...arr);
    const cur = reverseCheck ? arr[arr.length - 1] : arr[0];
    if (cur === -1) {
      if (max === target) return ++count;
    }
    if (cur !== max) {
      if (reverseCheck) {
        arr.pop();
        arr.reverse();
        reverseCheck = !reverseCheck;
        arr.push(cur);
        continue;
      } else {
        arr.shift();
        arr.push(cur);
      }
    } else {
      if (reverseCheck) {
        arr.pop();
        count++;
        continue;
      } else {
        arr.reverse();
        reverseCheck = !reverseCheck;
        arr.pop();
        count++;
      }
    }
  }
}

// solution(priorities, location);
console.log(solution(priorities, location));

// // 숫자가 높을수록 우선순위가 높음
// const priorities = [1, 1, 9, 1, 1, 1];
// const location = 0;
// function solution(priorities, location) {
//   const target = priorities[location];

//   const arr = [...priorities];
//   arr[location] = -1;
//   console.log(priorities);

//   if(Math.max(...priorities) === target) return arr.filter(e=> e === target || e === -1).indexOf(-1) + 1;

//   let count = 0;
//   while(true) {
//     console.log(arr)
//     const max = Math.max(...arr);
//     const cur = arr[0];
//     if(cur === -1) {
//       if(max === target) return ++count;
//     }
//     if(cur !== max) {
//       arr.shift();
//       arr.push(cur);
//     }
//     else {
//       arr.shift();
//       count++;
//     }
//   }
// }

// // solution(priorities, location);
// console.log(solution(priorities, location));

/////////////////////////////////

// // 숫자가 높을수록 우선순위가 높음
// const priorities = [1, 1, 7, 1, 9, 1, 1];
// const location = 1;
// function solution(priorities, location) {
//   const target = priorities[location];
//   let count = 0;
//   priorities[location] = -1;

//   while (true) {
//     const max = Math.max(...priorities, target);
//     let cur = priorities[0];
//     if(max === target) {
//       if(cur === -1) return ++count;
//       else if(cur === max) {
//         const test = priorities.slice(0, priorities.indexOf(-1) + 1).length;
//         return count + test;
//       }
//     }
//     if (cur === max) {
//       count++;
//       priorities.shift();
//       continue;
//     }
//     priorities.shift();
//     priorities.push(cur);
//   }
// }

// // solution(priorities, location);
// console.log(solution(priorities, location));

//       // if (cur === target) {
//       //   return count + priorities.indexOf(-1);
//       // }
