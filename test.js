function solution(n, m, section) {
  var count = 0;

    var restart = 0;
    var reach = section[restart] + m-1;
    while(reach < section[section.length-1]){
      for(i=restart; i<section.length; i++){
        console.log('인덱스는', i)
        console.log('재시작은',restart)
        console.log('도달 범위는',reach)
        if(section[i]>reach){
          console.log('도달하였습니다.')
          restart = i;
          reach = section[restart] + m-1;
          count++;
          break;
        }
      } 
    }
 
  return count+1;
}

var n = 4;
var m = 2;
var section = [1, 2, 3, 4,5,6,7];
console.log(solution(n, m, section));
