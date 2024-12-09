import PropTypes from "prop-types";
import "./Cell.css";

const CELL_STATUS = {
    HIT: "hit",
    MISS: "miss",
    EMPTY: "empty"
  };

const Cell = ({status, onClick}) => {
    const cellType = status.isHit ? CELL_STATUS.HIT : status.isMiss? CELL_STATUS.MISS: CELL_STATUS.EMPTY
    return (
        <div className={`cell ${cellType}`} onClick={onClick}>
        </div>
    )
}
Cell.propTypes = {
    status: PropTypes.shape({
      isHit: PropTypes.bool,
      isMiss: PropTypes.bool,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default Cell