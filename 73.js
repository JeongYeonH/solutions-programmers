function solution(park, routes) {
  var location = [];
  var obstacles = [];
  var mapVrt = park.length;
  var mapHrt = park[0].length;

//   console.log(`가로는 ${mapHrt}, 세로는 ${mapVrt}입니다`);
  for (v = 0; v < park.length; v++) {
    for (h = 0; h < park[v].length; h++) {
      if (park[v][h] === "S") {
        location.push(v);
        location.push(h);
      }
      if (park[v][h] === "X") {
        obstacles.push([v, h]);
      }
    }
  }
//   console.log(`원점은 ${location}입니다`)
  for (i = 0; i < routes.length; i++) {
    var before = JSON.parse(JSON.stringify(location));
    if (routes[i][0] == "E") {
      for (g = 0; g < routes[i].slice(2); g++) {
        location[1]++;
        let found = obstacles.find(
          (itm) => itm[0] === location[0] && itm[1] === location[1]
        );
        if (found || location[1] >= mapHrt) {
        //   console.log(`찾음, 초기화되어 위치는 ${before}입니다`);
          location = before;
          break;
        }
      }
    }
    if(routes[i][0]== "S"){
        for(g=0; g< routes[i].slice(2); g++){
            location[0]++;
            let found = obstacles.find(itm => itm[0]=== location[0] && itm[1] === location[1]);
            if(found || location[0] >= mapVrt){
                // console.log(`찾음, 초기화되어 위치는 ${before}입니다`);
                location = before;
                break;
            }
        }
    }
    if(routes[i][0]== "W"){
        for(g=0; g< routes[i].slice(2); g++){
            location[1]--;
            let found = obstacles.find(itm => itm[0]=== location[0] && itm[1] === location[1]);
            if(found || location[1] < 0){
                // console.log(`찾음, 초기화되어 위치는 ${before}입니다`);
                location = before;
                break;
            }
        }
    }
    if(routes[i][0]== "N"){
        for(g=0; g< routes[i].slice(2); g++){
            location[0]--;
            let found = obstacles.find(itm => itm[0]=== location[0] && itm[1] === location[1]);
            if(found || location[0] < 0){
                // console.log(`찾음, 초기화되어 위치는 ${before}입니다`);
                location = before;
                break;
            }
        }
    }
    before = JSON.parse(JSON.stringify(location));
    // console.log(`위치 확정. before는 ${before}로 변경`);
  }
  return location;
}

var park = ["OSO","OOO","OXO","OOO"];
var routes = ["E 2","S 3","W 1"];

console.log(solution(park, routes));
