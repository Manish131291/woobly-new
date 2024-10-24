import { useEffect, useState } from "react";

import "./Pagination.style.scss";
import { Icon } from "../../atoms/icon/Icon.component";

interface PaginationProps {
  onHandlePagination?: (currentPage: number, pageSize: number) => void;
  currentPage?: number;
  noOfPages: number;
}

export const Pagination = ({
  currentPage = 0,
  noOfPages,
  onHandlePagination,
  ...props
}: PaginationProps) => {
  const [page, setPage] = useState<number>(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const onClickNext = () => {
    if (page < noOfPages - 1) {
      setPage((prev) => {
        onHandlePagination?.(prev + 1, 10);
        return prev + 1;
      });
    }
  };

  const onClickPrev = () => {
    if (page > 0) {
      setPage((prev) => {
        onHandlePagination?.(prev - 1, 10);
        return prev - 1;
      });
    }
  };

  return (
    <div className="au-pagination" {...props}>
      <div className="page-show-label">
        <span className="m-text-sm-medium mr-3">
          {`Showing ${page + 1} of ${noOfPages}`}
        </span>
      </div>
      <nav
        className="pages isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <button
          className="prev-btn"
          data-testid="PAGE-PREV"
          onClick={() => onClickPrev()}
          disabled={currentPage === 0}
        >
          <Icon
            className="text-gray-700"
            icon="left-arrow-outlined"
            width={16}
            height={16}
          />
        </button>
        <span
          data-testid={`PAGE-${page}`}
          className="m-text-md-medium page page-selected"
        >
          {page + 1}
        </span>
        <button
          className="next-btn"
          data-testid={`PAGE-NEXT`}
          onClick={() => onClickNext()}
          disabled={noOfPages - 1 === currentPage}
        >
          <Icon
            className="text-gray-700"
            icon="right-arrow-outlined"
            width={16}
            height={16}
          />
        </button>
      </nav>
    </div>
  );
};
