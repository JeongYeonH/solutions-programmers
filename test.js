function solution(s) {
    count = 0;
    var string = ''
    while(s.length > 0){
        for(num in numbers){
            var position = s.indexOf(num);
            if(position!=-1 && position == 0){                           
                s = s.slice(position+num.length);
                string +=numbers[num];
            }else if(/^\d+$/.test(s[0])){
                string +=s[0];
                s = s.slice(1);
            }
        }       
    }
    return +string;
}

var numbers = {
    "zero" : "0",
    "one" : "1",
    "two" : "2",
    "three" : "3",
    "four" : "4",
    "five" : "5",
    "six" : "6",
    "seven" : "7",
    "eight" : "8",
    "nine" : "9",
}

function method(s){
    console.log(s.slice(0,3));
}

var s = "zeronine3fivezerozero3";
console.log(solution(s));

