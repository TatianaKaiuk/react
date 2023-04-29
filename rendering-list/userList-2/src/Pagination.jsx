import React from "react";

const Pagination = ({goPrev, goNext, currentPage, totalItems, itemsPerPage,}) => {

const isPrevPageAvailable = goPrev;
const isNextPageAvailable = goNext;

    return (
      <>
        <button class="btn">←</button>
        <span class="pagination__page">{currentPage}</span>
        <button class="btn">→</button>
      </>
    );
}
export default Pagination;