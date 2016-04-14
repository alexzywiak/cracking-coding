export const threeSteps = (n, memo = {}) => {
  if(n === 0){
    return 1;
  }
  if(n < 0){
    return 0;
  }
  if(memo[n]){
    return memo[n];
  }
  memo[n] = threeSteps(n - 1, memo) + threeSteps(n - 2, memo) + threeSteps(n - 3, memo);
  return memo[n];
};