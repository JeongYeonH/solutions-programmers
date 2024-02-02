function solution(n, lost, reserve) {
    var count =0;
    lost = lost.sort((a, b)=> a-b);
    reserve = reserve.sort((a,b)=> a-b)
    repeat();
    function repeat(){
        for(i=0; i< lost.length; i++){
            let index = reserve.indexOf(lost[i]);
            if(index !==-1){
                reserve.splice(index, 1);
                lost.splice(i, 1);
                repeat();
                // console.log(lost)
            }
        }
    }

    for(i=0; i< lost.length; i++){
        var arr = [lost[i]-1, lost[i], lost[i]+1]
        for(j=0; j< arr.length; j++){
            let index = reserve.indexOf(arr[j]);
            if(index !==-1){
                // console.log(`${lost[i]}는 ${arr[j]}으로 대체되었습니다`)
                reserve.splice(index, 1)
                count++;
                break;
            }
        }
    }

    return n - lost.length + count;
}

var n = 5;
var lost = [1, 2, 3];
var reserve =  [2, 3, 4];

console.log(solution(n, lost, reserve));