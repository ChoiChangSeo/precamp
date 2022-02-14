

let pressedBtn =()=>{
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("auth").innerText = token;
    document.getElementById("auth").style.color = "#" + token;
}

'#'+(Math.random()*0xFFFFFF<<0).toString(16);