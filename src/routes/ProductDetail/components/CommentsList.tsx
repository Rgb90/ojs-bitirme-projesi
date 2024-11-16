import { useState } from "react";
import Stars from "../../../components/Stars/Stars";
import commentData from "../types/comments";
import Pagination from "./Pagination";

const CommentsList = () => {
  const [currentPage, setCurrentPage] = useState(1); // yorumların olduğu ilk sayfa
  const commentsPerPage = 5;  // her sayfada gösterilecek yorum sayısı

  // Sayfa sayısını hesaplamak için:
  const totalPages = Math.ceil(commentData.length / commentsPerPage); // toplam yorum sayısı / gösterilecek y. sayısı = sayfa sayısı

  // Görüntülenecek yorumları hesaplamak için:
  const indexOfLastComment = currentPage * commentsPerPage; // mesela "2 * 5 = 10" 2. sf'daki son yorum 10. indekste, bu işlem son yorumu bulmamızı sağlar.

  const indexOfFirstComment = indexOfLastComment - commentsPerPage; // ilk yorumun indeksini bulmak için indexOfLastComment değerinden sayfadaki yorum sayısını çıkarır. "10 - 5" yani ikinci sayfadaki ilk yorum 5inci indekste

  const currentComments = commentData.slice(indexOfFirstComment, indexOfLastComment); 
  /* MESELA indexOfLastComment = currentPage * commentsPerPage = 2 * 5 = 10
  indexOfFirstComment = indexOfLastComment - commentsPerPage = 10 - 5 = 5
  Bu durumda, commentData.slice(5, 10) ifadesi, commentData dizisinin 5. indeksten başlayıp 9. indekse kadar (10. indeks hariç) olan yorumlarını alır. Bu yorumlar 2. sayfadaki yorumlar olarak gösterilir. */

  // Sayfa değiştirme fonksiyonu
  const handlePageChange = (page: number) => setCurrentPage(page); // sayfaya tıklayınca değiştirmek için

  return (
    <div className="container mx-auto mt-6">
      {currentComments.map((comment) => (
        <div key={comment.id} className="p-4 mb-6 bg-gray-100 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Stars />
              <span className="ml-2 text-base font-semibold text-black">{comment.name}</span>
            </div>
            <span className="text-sm font-semibold text-black">{comment.date}</span>
          </div>
          <h3 className="text-lg font-semibold text-black mb-2">{comment.title}</h3>
          <p className="text-sm text-black">{comment.comment}</p>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CommentsList;
