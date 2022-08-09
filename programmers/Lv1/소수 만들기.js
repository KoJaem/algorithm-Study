// Math.sqrt(n) : n 에 대한 제곱근을 반환해줌

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length - 2; ++i) {
    for (let j = i + 1; j < nums.length - 1; ++j) {
      for (let z = j + 1; z < nums.length; ++z) {
        if (checkPrime(nums[i] + nums[j] + nums[z])) {
          answer++;
        }
      }
    }
  }

  return answer;
}

const checkPrime = num => {
  for (let i = 2; i <= Math.sqrt(num); ++i) {
    if (num % i === 0) return false;
  }
  return true;
};

solution([1, 2, 3, 4]);
