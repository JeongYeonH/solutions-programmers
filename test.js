function solution(t, p) {
    var count = 0;
    var num = 0;
    for(i=0; i<=t.length-p.length; i++){
        for(j=i; j<i+p.length; j++){
            num +=t[j];
        }
        if(+num<= +p){
            console.log(num);
            count++;
        }
        num = 0;

    }
    return count;
}
var t = "10203";
var p = "15";
console.log(solution(t, p));

