let boxes=document.querySelectorAll(".boxes");
let reset=document.querySelector(".reset");

let newGame = document.querySelector("#b");
let messageCon = document.querySelector(".msg");
let msg =  document.querySelector("#message");



let turn0=true;
const winpaterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{console.log("clicked");
    if(turn0){
        box.innerText="o";
        turn0= false;}
        else{
            box.innerText="x"; 
            turn0=true;
        }
        box.disabled =true;
      checkwin();
    
    });
});


const showwinner=(winner)=>{
      msg.innerText=`winner is ${winner}`;
      messageCon.classList.remove("hide");
}

const checkwin=()=>{

    for(let pattern of winpaterns){
       let pos1Value=boxes[pattern[0]].innerText;
         let pos2Value=boxes[pattern[1]].innerText;
            let pos3Value=boxes[pattern[2]].innerText;
            if(pos1Value!="" && (pos1Value===pos2Value) && (pos2Value===pos3Value)){
                if(pos1Value=== pos2Value && pos2Value===pos3Value){
              console.log("winner is",pos1Value);
              showwinner(pos3Value);
                }
        
             }


            

            



}

}

 reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        msg.innerText="";
        messageCon.classList.add("hide");
    });
});
    newGame.addEventListener("click",()=>{   

        boxes.forEach((box)=>{
            box.innerText="";
            box.disabled=false;
        });
        messageCon.classList.add("hide");
    }); 