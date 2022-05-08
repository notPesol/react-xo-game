import { useState } from "react";
import Board from "./components/Board";

function App() {

  const [history, setHistory] = useState(Array(1).fill(Array(9).fill(null)));

  const [xIsNext, setXIsNext] = useState(true);

  const currentSquares = history[history.length - 1];

  let status = "Next player is " + (xIsNext ? "X" : "O");
  const winner = calculateWinner(currentSquares);
  if (winner) {
    status = "Winner is " + winner;
  }

  const handleClick = (i) => {
    const squares = [...currentSquares];

    if (squares[i] || winner) {
      return;
    }

    squares[i] = (xIsNext ? 'X' : 'O');
    setXIsNext(!xIsNext);
    setHistory([...history, squares]);
  }

  const jumpTo = (i) => {
    const newHistory = history.slice(0, i + 1);
    setHistory(newHistory);
    setXIsNext(i % 2 === 0);
  }

  return (
    <div className="App">
      <p className="status">{status}</p>
      <Board squares={currentSquares} handleClick={handleClick} />
      <ul className="list">
        {history.map((_sq, index) => {
          const text = index ? `Jump to move #${index}` : "Restart";
          return (
            <li
              key={index}
            >
              <button onClick={() => jumpTo(index)}>{text}</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;

const calculateWinner = (squares) => {
  const rows = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
  ];
  for (let i = 0; i < rows.length; i++) {
    const [a, b, c] = rows[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}