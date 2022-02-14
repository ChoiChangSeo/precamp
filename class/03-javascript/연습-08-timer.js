setTimeout(function(){
    console.log("펑")},3000)
1
VM235:2 펑
setInterval(function(){
    console.log("1초가 지났습니다.")
},1000)
2
45VM419:2 1초가 지났습니다.

let time=10
undefined
setInterval(function(){
    if(time>=0){
        console.log(time)
        time = time -1
    }
},1000)

let time = 180
undefined
setInterval(function(){
    if(time>=0){
        const min = String(Math.floor(time/60)).padStart(2,"0")
        const sec = String(time % 60).padStart(2,"0")
        console.log(min + ":" + sec)
        time = time -1
    }
},1000)