import React, {memo} from 'react';

const Pagination = memo(({ 
  currentPage, 
  totalPages, 
  onPrevPage, 
  onNextPage,
  className = ""
}) => {
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between mt-4 gap-4 ${className}`}>
      <div className="text-sm text-gray-700">
        Page <span className="font-medium">{currentPage}</span> of{' '}
        <span className="font-medium">{totalPages}</span>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={onPrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            currentPage === 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          } transition-colors`}
        >
          Previous
        </button>
        
        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            currentPage === totalPages
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          } transition-colors`}
        >
          Next
        </button>
      </div>
    </div>
  );
});

export default Pagination;