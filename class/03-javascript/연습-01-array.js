const classmates=["최창서","이우정","강성은"]
// undefined
classmates
// (3) ['최창서', '이우정', '강성은']
classmates[1]
// '이우정'
classmates.includes("고기")
// false
classmates.push("고기")
// 4
classmates
// (4) ['최창서', '이우정', '강성은', '고기']
classmates.includes("고기")
// true
classmates.pop()
// '고기'
classmates
// (3) ['최창서', '이우정', '강성은']
classmates.length
// 3

const developer=["열정","끈기","노력","공부","성장"]
//undefined
developer[3]
//'공부'
let dream=["커리어점프","성공","할수있다"]
//undefined
developer.concat(dream)
//['열정', '끈기', '노력', '공부', '성장', '커리어점프', '성공', '할수있다']