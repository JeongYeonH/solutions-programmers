function solution(s, skip, index) {
    var skipNum = [];
    for(j=0; j<skip.length; j++){
        skipNum.push(skip[j].charCodeAt());
    }
    skipNum = skipNum.sort((a,b)=> a-b)
    console.log(`스킵해야 할 번호는 ${skipNum}입니다`)
    var numberList = [];
    for(i=0; i< s.length; i++){
        numberList.push(s[i].charCodeAt());
    }

    var character = '';
    for(n=0; n<numberList.length; n++){
        var count = 0;
        while(count < index){
            numberList[n] = numberList[n] + 1;
            if(numberList[n]>122){
                numberList[n] = 97;
            }
            if(skipNum.indexOf(numberList[n]) === -1){
                count++;
            }
        }
        character += String.fromCharCode(numberList[n]);
    }
    console.log(`다시 변환된 알파벳은 ${character}입니다`)
    return character;
}

var s = "yyyyy";
var skip ="za";
var index = 2;
console.log(solution(s, skip, index));