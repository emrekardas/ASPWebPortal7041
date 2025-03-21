'use client';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  // Generate array of page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages <= maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always include first page
      pages.push(1);
      
      // Find start and end of pages to show
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust to show maxPagesToShow - 2 pages (excluding first and last)
      const pagesToShow = maxPagesToShow - 2;
      if (end - start + 1 < pagesToShow) {
        if (start === 2) {
          end = Math.min(totalPages - 1, start + pagesToShow - 1);
        } else if (end === totalPages - 1) {
          start = Math.max(2, end - pagesToShow + 1);
        }
      }
      
      // Add ellipsis after first page if needed
      if (start > 2) {
        pages.push('...');
      }
      
      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pages.push('...');
      }
      
      // Always include last page
      pages.push(totalPages);
    }
    
    return pages;
  };
  
  const pageNumbers = getPageNumbers();
  
  return (
    <div className="join flex justify-center">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="join-item btn btn-sm"
        aria-label="Previous page"
      >
        «
      </button>
      
      {pageNumbers.map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          className={`join-item btn btn-sm ${
            currentPage === page
              ? 'btn-primary'
              : page === '...'
              ? 'btn-disabled'
              : ''
          }`}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="join-item btn btn-sm"
        aria-label="Next page"
      >
        »
      </button>
    </div>
  );
}
