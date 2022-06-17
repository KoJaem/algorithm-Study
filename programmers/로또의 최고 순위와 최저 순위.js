const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

function solution(lottos, win_nums) {
  const answer = [];

  const checkMax = () => {
    let count = 0;
    lottos.forEach(data => {
      if (data === 0) count++;
      else win_nums.includes(data) && count++;
    });
    return count;
  };

  const checkMin = () => {
    let count = 0;
    lottos.forEach(data => {
      win_nums.includes(data) && count++;
    });
    return count;
  };

  const result = count => {
    switch (count) {
      case 6:
        return 1;
      case 5:
        return 2;
      case 4:
        return 3;
      case 3:
        return 4;
      case 2:
        return 5;
      default:
        return 6;
    }
  };

  answer.push(result(checkMax()), result(checkMin()));

  return answer;
}
solution(lottos,win_nums);