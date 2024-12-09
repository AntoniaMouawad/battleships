import Cell from "./Cell";
import PropTypes from "prop-types";
const Board = ({ boardData }) => {
  return (
    <div className="board">
      <h1>My board</h1>
      <div className="grid">
        {boardData.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              status={cell}
              onClick={() => {}} // Handle the cell click event
            />
          ))
        )}
      </div>
    </div>
  );
};
// PropTypes for the Board component
Board.propTypes = {
  boardData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired, // 2D array of strings (e.g., 'empty')
  onCellClick: PropTypes.func.isRequired, // Function that takes row and col as arguments
};

export default Board;
