function solution(n, m, section) {
    var count = 0;
    while(section.length>0){
      var reach = section[0] + m-1; 
      for(i=0; i<section.length; i++){
        console.log(i);
        console.log('i번째 수', section[i])
        var newSection;
        if(section[i]<= reach){
            section.splice(i,1)
            console.log('잘라진 값',section)
        }
      }
      console.log('한 번 순회')
      count++;
    }
    return count;
  }
  // 다 못품
  var n = 4;
  var m = 2;
  var section = [1, 2, 3, 4];
  console.log(solution(n, m, section));