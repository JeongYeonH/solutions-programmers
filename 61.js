function solution(lottos, win_nums) {
  var min = 0;
  var unKnown = 0;
  var pair = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6
  } 


  for (i = 0; i < win_nums.length; i++) {
    if (lottos.includes(win_nums[i])) {
      min++;
    }
    if (lottos[i] === 0) {
      unKnown++;
    }
  }
  return [pair[min+unKnown], pair[min]];
}

var lottos = [0, 0, 0, 0, 0, 0];
var win_nums = [31, 10, 45, 1, 6, 19];
console.log(solution(lottos, win_nums));
