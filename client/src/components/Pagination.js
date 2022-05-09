import React from 'react';
import { Link } from 'react-router-dom';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Pagination = ({ pages, page }) => {
  return (
    pages > 1 && (
      <div className="w-full border-1 border-neutral-900 py-1 bg-white">
        <nav
          className=" flex justify-center font-spratRegular items-center space-x-2"
          aria-label="Pagination"
        >
          <Link to={`/blog/page/${page - 1}`}>
            <span className="sr-only">Previous</span>
            <BsArrowLeft />
          </Link>

          <div>
            Page {page} of {pages}
          </div>
          <Link to={`/blog/page/${page + 1}`}>
            <span className="sr-only">Next</span>
            <BsArrowRight />
          </Link>
        </nav>
      </div>
    )
  );
};

export default Pagination;
