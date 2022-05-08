import Square from "./Square";

function Board({ squares, handleClick }) {
    return (
        <div className="board">
            {squares.map((value, index) => {
                return (
                    <Square key={index} value={value} onClick={() => handleClick(index)} />
                )
            })}
        </div>
    );
}

export default Board;