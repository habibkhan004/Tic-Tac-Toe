console.log("Welcome to Javascript")

let turnAudio=new Audio("ting.mp3");
let gameover= new Audio("gameover.mp3");
let music=new Audio("music.mp3");
let turn="X";
let reset=document.querySelector("#reset")
let isgameover=false;
// music.play()
const changeTurn=()=>{
    return turn === "X" ? "0" :"X";
}

const checkWin=()=>{
    let boxtext=document.querySelectorAll(".boxtext")
    let boxes=Array.from(document.querySelectorAll('.box'))
    let win=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !=="")){
            document.querySelector(".info").innerText=boxtext[e[0]].innerText+" Won";
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width= "200px";
            document.querySelector(".line").style.transform= `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width= "20vw";
            gameover.play();
    
    
        }
    })
}
let box=Array.from(document.getElementsByClassName("box"))
box.forEach((element)=>{
    element.addEventListener('click',()=>{
            let boxtext=element.querySelector(".boxtext");
            if(boxtext.innerText=== '' && isgameover==false){
            turnAudio.play();
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin()
            let info=document.querySelector(".info");
            if(!isgameover){
                info.innerText="Turn For " + turn;

            }
            if(isgameover){
               
                boxtext.disabled=true;
            }
           
            }
    })
})
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(e=>{
        e.innerText="";
        turn="X"
        let info=document.querySelector(".info");
        info.innerText="Turn For " + turn;
        isgameover=false
        document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width= "0px";
        document.querySelector(".line").style.width= "0vw";
        gameover.pause();
    })
})