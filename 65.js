function solution(s) {
    var value = 0;
    console.log(s.length)
    var same = 0;
    var notsame = 0;
    var k = 0;
    for(i=0; i< s.length; i++){
        if(s[i]===s[k]){
            console.log(`${s[i]}가 ${s[k]}과 일치합니다`)
            // console.log(`k는 ${k}입니다`)
            same++;
            afterEqual(i);
        }else{
            console.log(`${s[i]}가 ${s[k]}과 일치하지 않습니다`)
            notsame++;
            afterEqual(i);
        }
        console.log(`k값은 ${k}입니다.`)
        console.log('-------------')
    }

    if(s.length > k){
        console.log('!!값 일치를 하나 더 추가합니다')
        value +=1;
    }

    function afterEqual(i){
        if(same===notsame){
            console.log('!!값이 일치합니다.')
            same=0;
            notsame=0;
            k=i+1;
            value++;
        }
    }

    return value;
}

var s = "abaabab";
//r s = "ab.ra.ca.da.br.a";
//r s = "123456789.10.11";
console.log(solution(s));