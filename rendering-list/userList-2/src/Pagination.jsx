import React from "react";

// не решенное задание 
const Pagination = ({goPrev, goNext, currentPage, totalItems, itemsPerPage,}) => {

const isPrevPageAvailable = () => {
    if (currentPage === 1) {
     
      goPrev ? disabled : '←';
    }
}
const isNextPageAvailable = () => {
  if(currentPage === totalItems) {
    goNext ? disabled : '→';
  }
}
;


    return (
      <>
        <button className="btn" onClick={isPrevPageAvailable}>
          {<goPrev /> || '←'}
        </button>
        <span className="pagination__page" onClick={itemsPerPage}>
          {currentPage}
        </span>
        <button className="btn" onClick={isNextPageAvailable}>
          {<goNext /> || '→'}
        </button>
      </>
    );
}
export default Pagination;