/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let board= [] ;
let turn=true;
let winner
let tie;



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const massageEl = document.querySelector('#message');


const updateBord =(event)=>{
    
        if(event.target.innerText===''){
            
    if(turn===true){
      event.target.innerText='X'
      turn=false
      
    massageEl.innerText='Turn O'
    }  else if(turn===false){
        event.target.innerText='O'
        massageEl.innerText='Turn X'
        turn=true
      
    }
   
     
    
}
    }
console.log(board)
/*----------------------------- Event Listeners -----------------------------*/

 squareEls.forEach((elm,index)=>{
   
    if(board[0]==='X'&& board[1]==='X'&&board[1]==='X')
massageEl.innerText='player X wins'
        elm.addEventListener('click',updateBord) 
    
})



