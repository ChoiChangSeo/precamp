


function changeFocus(){
    let phone1 = document.getElementById("phone1").value
    if(phone1.length === 3){
        document.getElementById("phone2").focus()
    }
}

function changeFocus2(){
    let phone2 = document.getElementById("phone2").value
    if(phone2.length === 4){
        document.getElementById("phone3").focus()
    }
}

function changeFocus3(){
    const phone1 = document.getElementById("phone1").value
    const phone2 = document.getElementById("phone2").value
    const phone3 = document.getElementById("phone3").value

    if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
        document.getElementById("submit").disabled=false;
    }else{
        document.getElementById("submit").disabled=true;
    }
}


function pressbutton(){
    let randomNum = document.getElementById("randomNum")
    let submit2 = document.getElementById("submit2")
    submit2.disabled=false;
    randomNum.textContent=String(Math.floor(Math.random()*100000)).padStart(6,"0")
    getTokenTimer()
}
    
    
    let time=180
    let timer
function getTokenTimer(){
        timer = setInterval(() =>{
        if(time>=0){
            const min = String(Math.floor(time/60)).padStart(2,"0")
            const sec = String(time % 60).padStart(2,"0")
            document.getElementById("countdown").innerText=min+":"+sec;
            time=time-1
        } else{
            document.getElementById("submit2").disabled=true;
            document.getElementById("randomNum").innerText="000000"
            document.getElementById("countdown").innerText="3:00"
            clearInterval(timer)
        }
    },1000)
}


function pressbutton2(){
    clearInterval(timer)
    let submit2 = document.getElementById("submit2")
    document.getElementById("randomNum").innerText="000000"
    submit2.innerText="인증완료"
    submit2.disabled=true
    document.getElementById("countdown").innerText="03:00"
    document.getElementById("signup").disabled=false
    alert("인증이 완료되었습니다.")
}

function join(){
    const inputbox1 = document.getElementById("inputbox1").value
    const inputbox2 = document.getElementById("inputbox2").value
    const inputbox3 = document.getElementById("inputbox3").value
    const inputbox4 = document.getElementById("inputbox4").value
    const location = document.getElementById("location").value
    const woman = document.getElementById("gender__woman").checked
    const man = document.getElementById("gender__man").checked

    let prove = true
    
    if(inputbox1.includes("@") === false){
        document.getElementById("error__email").innerText="이메일이 올바르지 않습니다."
        prove = false
    } else{
        document.getElementById("error__email").innerText=""
    }

    if(inputbox2 === ""){
        document.getElementById("error__name").innerText="이름이 올바르지 않습니다."
        prove = false
    } else{
        document.getElementById("error__name").innerText=""
    } 

    if(inputbox3 === ""){
        document.getElementById("error__password1").innerText="비밀번호를 입력해주세요."
        prove = false
    } else{
        document.getElementById("error__password1").innerText=""
    }

    if(inputbox4 === ""){
        document.getElementById("error__password2").innerText="비밀번호를 입력해주세요."
        prove = false
    } else{
        document.getElementById("error__password2").innerText=""
    }

    
    if(inputbox3 !== inputbox4){
        document.getElementById("error__password1").innerText="비밀번호가 일치하지 않습니다."
        document.getElementById("error__password2").innerText="비밀번호가 일치하지 않습니다."
        prove = false
    }

     if(woman === false && man === false){
         document.getElementById("error__gender").innerText ="성별을 선택해주세요"
         prove = false
    } else {
         document.getElementById("error__gender").innerText =""
    }

    if(location !== "서울" && location !== "경기" && location !== "인천"){
        document.getElementById("error__location").innerText="지역을 선택해주세요"
        prove = false
    } else {
         document.getElementById("error__location").innerText=""
    }
 
    if(prove === true){ 
        alert("회원가입을 축하합니다.")
    }
}