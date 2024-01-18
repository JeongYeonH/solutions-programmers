function solution(nums) {
  nums = nums.sort((a, b) => a - b);
  var arr = []
  var count = 0;
  for(i=0; i<nums.length; i++){
    //console.log('첫 번째 뽑기', nums[i]);
    var arr1 = nums.slice(i+1);
    // console.log( '잘라진 첫 번째 배열',arr1);
    for(j=0; j<arr1.length; j++){
      //console.log('두 번째 뽑기', arr1[j]);
      var arr2 = arr1.slice(j+1);
      //console.log('두 번째 잘라진 배열', arr2);
      for(n=0; n<arr2.length; n++){
        //console.log('세 번째 뽑기', arr2[n])
        var dedNum = nums[i]+arr1[j]+arr2[n];
        arr.push(isPrime(dedNum));
        //console.log(arr);
      }
    }
  }

  function isPrime(num){
    if(num===1){return null;}
    if(num===2){count++; return num; }
    for(let i =2; i<num; i++){
      if(num%i===0){
        return null;
      }
    }
    count++;
    return num;
  }
  return count;
}

var nums = [1,2,7,6,4];
console.log(solution(nums));
