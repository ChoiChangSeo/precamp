let isStarted = false;


function pressbutton(){
    

    if(isStarted===false){

        isStarted = true;

        let randomNum = document.getElementById("randomNum")
        randomNum.textContent=String(Math.floor(Math.random()*100000)).padStart(6,"0")
    
        let time = 10
        let timer = null

        timer = setInterval(function(){  
            if(time>=0){
                document.getElementById("countdown").innerText = time;
                time = time-1   
            } else{
                document.getElementById("pressbutt").disabled = true;
                isStarted = false;
                clearInterval(timer)
            }
    
        },1000)
    }else{
        alert("타이머가 이미 동작중입니다.")
    }

}

