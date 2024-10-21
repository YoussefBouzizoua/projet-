import { useState } from "react";

function Square({ value, onSquersClick }) {
  return <button onClick={onSquersClick} className="square">{value}</button>;
}

export default function Board() {
  const [xNext, setxNext] = useState(true);
  const [squares, setSqueres] = useState(Array(9).fill(null));
  const NameWenner = Wenner(squares);
  let status ;
  if(NameWenner){
    status = "Winner  " + NameWenner ;
  }else{
    status = "Next player : " + (xNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || Wenner(squares)) {
      return;
    }
    let nextSqueres = squares.slice(); // Fixed parentheses

    if (xNext) {
      nextSqueres[i] = 'X';
    } else {
      nextSqueres[i] = 'O';
    }
    setSqueres(nextSqueres);
    setxNext(!xNext);
  }

  return (
    <>
    <div className="status">{status}</div>
      <div className="board-row">
        <Square onSquersClick={() => handleClick(0)} value={squares[0]} />
        <Square onSquersClick={() => handleClick(1)} value={squares[1]} />
        <Square onSquersClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square onSquersClick={() => handleClick(3)} value={squares[3]} />
        <Square onSquersClick={() => handleClick(4)} value={squares[4]} />
        <Square onSquersClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square onSquersClick={() => handleClick(6)} value={squares[6]} />
        <Square onSquersClick={() => handleClick(7)} value={squares[7]} />
        <Square onSquersClick={() => handleClick(8)} value={squares[8]} />
      </div>
    </>
  );
}

function Wenner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for (let i = 0; i <lines.length; i++) {
    const [a,b,c]=lines[i];
    if( squares[a]&& squares[a] === squares[b]&& squares[b] === squares[c]) {
      return [a];
    }
  }
  return null;
}