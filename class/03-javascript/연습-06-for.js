const fruits = [
    { number: 1, title: "레드향"},
    { number: 2, title: "샤인머스켓"},
    { number: 3, title: "산청딸기"},
    { number: 4, title: "한라봉"},
    { number: 5, title: "사과"},
    { number: 6, title: "애플망고"},
    { number: 7, title: "딸기"},
    { number: 8, title: "천혜향"},
    { number: 9, title: "과일선물세트"},
    { number: 10, title: "귤"},
    ]
undefined
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i].number +" "+ fruits[i].title + "입니다.")
}
VM3237:2 1 레드향입니다.
VM3237:2 2 샤인머스켓입니다.
VM3237:2 3 산청딸기입니다.
VM3237:2 4 한라봉입니다.
VM3237:2 5 사과입니다.
VM3237:2 6 애플망고입니다.
VM3237:2 7 딸기입니다.
VM3237:2 8 천혜향입니다.
VM3237:2 9 과일선물세트입니다.
VM3237:2 10 귤입니다.
undefined

const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")

console.log(token)
103183