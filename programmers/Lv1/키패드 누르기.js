const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];	
const hand = "right";

const positionCalc = num => {
  switch (num) {
    // [좌우, 층수]
    case 1:
      return [1, 4];
    case 2:
      return [2, 4];
    case 3:
      return [3, 4];
    case 4:
      return [1, 3];
    case 5:
      return [2, 3];
    case 6:
      return [3, 3];
    case 7:
      return [1, 2];
    case 8:
      return [2, 2];
    case 9:
      return [3, 2];
    case 0:
      return [2, 1];
    // #, * 은 처리 X
  }
};


function solution(numbers, hand) {
  let answer = "";
  let left = [1, 1];
  let right = [3, 1];
  let dataPosition;
  let leftCount;
  let rightCount;
  numbers.forEach(data => {
    dataPosition = positionCalc(data);
    if (data === 1 || data === 4 || data === 7) { // 1, 4, 7 일때
      answer += 'L';
      left = dataPosition;
    }
    else if (data === 3 || data === 6 || data === 9) { // 3, 6, 9 일때
      answer += 'R';
      right = dataPosition;
    }
    else { // 가운데 숫자일때
      leftCount = Math.abs(left[0] - dataPosition[0]) + Math.abs(left[1] - dataPosition[1]);
      rightCount = Math.abs(right[0] - dataPosition[0]) + Math.abs(right[1] - dataPosition[1]);
      if(leftCount < rightCount) {
        answer += 'L';
        left = dataPosition;
      }
      else if (leftCount > rightCount) {
        answer += 'R';
        right = dataPosition;
      }
      else { // 같을때
        if(hand === 'left') {
          answer += "L";
          left = dataPosition;
        }
        else {
          answer += "R";
          right = dataPosition;
        }
      }
    }
  });
  return answer;
}

solution(numbers, hand);
