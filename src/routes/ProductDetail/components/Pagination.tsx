interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1); // sayfa numaralarını oluşturmak için
  
    const handlePrevious = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1); // Bir önceki sayfaya git
      }
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1); // Bir sonraki sayfaya git
      }
    };
  
    return (
      <div className="flex justify-center items-center mt-4 space-x-2 mb-12">
        {/* Sol ok */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1} // İlk sayfadaysa devre dışı bırak
          className={`px-3 py-1 text-sm ${
            currentPage === 1 ? "text-blue-900" : "text-blue-400"
          }`}
        >
          &lt;
        </button>
  
        {/* Sayfa numaraları */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 text-sm ${
              page === currentPage ? "text-blue-900" : "text-blue-400"
            }`}
          >
            {page}
          </button>
        ))}
  
        {/* Sağ ok */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages} // Son sayfadaysa devre dışı bırak
          className={`px-3 py-1 text-sm ${
            currentPage === totalPages ? "text-blue-900" : "text-blue-400"
          }`}
        >
          &gt;
        </button>
      </div>
    );
  };
  
  export default Pagination;
  