function solution(id_list, report, k) {
    var whohaded = {}

    for(i=0; i< report.length; i++){
        let fst= report[i].match(/^([^ ]+)/)[0]
        let sec = report[i].match(/\s(.+)/)[1];
        // console.log(first);
        if(whohaded[sec] = [fst]){
            console.log('동일한 값이')
        }
        if(!whohaded[sec]){
            whohaded[sec] = [fst];
        }else{
            whohaded[sec].push(fst);
        }
    }
    return whohaded;
}

var id_list=["muzi", "frodo", "apeach", "neo"];
var report =["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
var k = 2;
console.log(solution(id_list, report, k));