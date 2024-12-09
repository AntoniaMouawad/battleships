import PropTypes from "prop-types";
import "./Cell.css";

const CELL_STATUS = {
    HIT: "hit",
    MISS: "miss",
    EMPTY: "empty"
  };

const Cell = ({status, onClick}) => {
    const cellType = status
    return (
        <div className={`cell ${cellType}`} onClick={onClick}>
        </div>
    )
}
Cell.propTypes = {
    status: PropTypes.oneOf(Object.values(CELL_STATUS)).isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default Cell