const board =Array(9).fill('');
let currentPlayer='O';

function renderBoard(){
    const boardDiv =document.getElementById('board');
    boardDiv.innerHTML='';
    board.forEach((cell,i)=>{
        const btn =document.createElement('button');
        btn.textContent=cell;
        btn.style.width='60px';
        btn.style.height='60px';
        btn.onclick=()=>makeMove(i);
        boardDiv.appendChild(btn);
        if(i%3===2){
            boardDiv.appendChild(document.createElement('br'));
        }
    });
}

function makeMove(index){
    if(board[index]!=='')return;
    board[index]=currentPlayer;
    currentPlayer=currentPlayer==='O'?'X':'O';
    renderBoard();
    checkWinner();
}

function checkWinner(){
    const wins=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] 
    ];

        for (const [a,b,c] of wins){
            if(board[a] &&board[a]===board[b]&&board[a]===board[c]){
                alert(`${board[a]}の勝ち！`);
                board.fill('');
                renderBoard();
                break;
            }
        }
}
renderBoard();
