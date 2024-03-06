function solution(players, callings) {
    
    let map = new Map();
    let subIdx = null;
    for(i=0; i< callings.length; i++){
        let index = players.indexOf(callings[i]);

        if(map.has(callings[i])){
            subIdx--;
            map.set(callings[i], subIdx);
        }else{
            subIdx = index;
            subIdx--;
            map.set(callings[i], subIdx);
        }
    }
    // players[index] = players[index-1]
    // players[index -1] = callings[i];
    return map;
}

var players = ["mumu", "soe", "poe", "kai", "mine"];
var callings = ["kai", "kai", "soe"];
console.log(solution(players, callings));