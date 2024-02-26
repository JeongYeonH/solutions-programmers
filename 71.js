function solution(today, terms, privacies) {
    deleteNum = [];
    for(i=0; i< privacies.length; i++){
        var dedicatedTerm = privacies[i][11];
        //console.log('지정된 계약은 다음:',dedicatedTerm);
        var selected = terms.find(term => term[0] === dedicatedTerm);
        console.log(selected);
        var changedDate = null;
        var year = parseInt(privacies[i].substr(0,4));
        var month = parseInt(privacies[i].substr(5,2));
        var date = parseInt(privacies[i].substr(8,2));
        if(privacies[i].substr(8, 2)=== "01"){
            // console.log(`날짜는 ${date}입니다`)
            console.log(`추가되는 달 수는 ${selected.substring(2)}입니다`)
            month = month + parseInt(selected.substring(2)) -1;
            date = 28;
            
        }else{
            // console.log(`날짜는 ${date}입니다`)
            console.log(`추가되는 달 수는 ${selected.substring(2)}입니다`)
            month = month + parseInt(selected.substring(2));
            date = date -1;
        }

        console.log(month)
        if(month > 12){
            year = year + Math.floor((month - 1)/12);
            month = month - Math.floor((month - 1)/12)*12;
        }
        if(month < 10){
            month = "0" + month+""
        }
        
        if(date < 10){
            date = "0" + date+""
        }

        var endDate = year +"."+ month +"."+ date;
        console.log(`기한 날짜는 ${endDate}입니다`);
        if(today> endDate){
            console.log(`파기해야할 정보입니다`)
            deleteNum.push(i+1);
        }else{
            console.log(`기한이 지나지 않았습니다`)
        }
        console.log(`-------------------`)
    }

    return deleteNum;
}

var today = "2020.12.17";
var terms = ["A 12"];
var privacies = ["2010.01.01 A", "2019.12.17 A"];
console.log(solution(today, terms, privacies));