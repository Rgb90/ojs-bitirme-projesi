import Stars from "../../../components/Stars/Stars";
import CommentsList from "./CommentsList";
import ProgressSection from "./ProgressSection";



const CommentSection = () => {
  const rating = 4.8;
  const totalComments = 10869;


  return (
    <>
      <div className="flex justify-between items-center phone:flex-col">
        {/* Sol Kısım: Rating ve Yorum Sayısı */}
        <div className="flex flex-col items-center gap-1 font-bold text-blue-gray-500">
          <div className="text-xl text-blue-gray-700">{rating}</div>
          <Stars />
          <div className="text-sm font-medium text-blue-gray-600">{totalComments} Yorum</div>
        </div>

        {/* Sağ Kısım: İlerleme Çubukları */}
        <ProgressSection />
      </div>

      {/* Yorumlar */}
      <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full
       text-sm px-5 py-2.5 text-center me-2 mt-4 phone:mt-6">YORUM (10869)</button>
      <CommentsList />
    </>
  );
};

export default CommentSection;
