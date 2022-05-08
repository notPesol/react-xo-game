function Board({ squares, handleClick }) {
    return (
        <div className="board">
            {squares.map((value, index) => {
                return (
                    <div
                        key={index}
                        className="square"
                        onClick={() => handleClick(index)}
                    >
                        {value}
                    </div>
                )
            })}
        </div>
    );
}

export default Board;