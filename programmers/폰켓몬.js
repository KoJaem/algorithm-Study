const nums = [3, 1, 2, 3];

function solution(nums) {
  let answer = 0;
  let types = [];

  const answerTypes = nums.filter(data => {
    if (!types.includes(data)) {
      types.push(data);
      return data;
    }
  });
  answer = answerTypes.length > nums.length / 2 ? nums.length / 2 : answerTypes.length;
  return answer;
}

solution(nums);
