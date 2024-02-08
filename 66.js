function solution(keymap, targets) {
    var count = 0;
    var anwser = [];
    for(n=0; n< targets.length; n++){
        anwser.push(bestRoute(n));
        count = 0;
    }
    
    function bestRoute(n){
        for(i=0; i< targets[n].length; i++){
            var tempArr = []
            for(j=0; j<keymap.length; j++){
            var find = targets[n][i];
                var index = keymap[j].indexOf(find);
                console.log(`${j}번째 keymap으로 찾을 문자는${find}이고, 위치순서는 ${index}입니다`);
                tempArr.push(index);
            }
            console.log(`!!${find}문자의 각 가능한 순서는 ${tempArr}입니다.`)
    
            const firstValue = Math.min(...tempArr);
            const filtered = tempArr.filter(num => num !== firstValue);
            const secValue = Math.min(...filtered);
            const minValue = firstValue !== -1 ? firstValue : secValue;
            console.log(`가장 작은 가능한 값은 ${minValue}입니다`)
            console.log('-------------------')
            const order = minValue === Infinity ? -1 : minValue +1;
            if(order === -1){
                count = order;
                return count;
            }else{
                count +=order;
            }
        }
        console.log(`------------한 회차가 끝났습니다----------`)
        return count;
    }
    return anwser;
}


var keymap = ["BC"];
var targets = ["AC","BC"];

console.log(solution(keymap, targets))