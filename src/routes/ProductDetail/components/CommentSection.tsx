import Stars from "../../../components/stars/Stars";
import commentData from "../types/comments";
import smallStar from "../assets/smallStar.png";

const CommentSection = () => {
  const rating = 4.8;
  const totalComments = 10869;
  const progressData = [
    { stars: 5, percentage: "75%", count: 9284 },
    { stars: 4, percentage: "15%", count: 1450 },
    { stars: 3, percentage: "5%", count: 500 },
    { stars: 2, percentage: "3%", count: 150 },
    { stars: 1, percentage: "2%", count: 85 },
  ];

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
        <div className="flex flex-col phone:mt-6">
          {progressData.map((data, index) => (
            <div key={index} className="flex items-center justify-end">
              {/* Yıldız Sayısı */}
              <div className="flex items-center gap-1 w-24">
                {Array.from({ length: data.stars }, (_, i) => (
                  <img key={i} src={smallStar} alt="small-star" className="w-4 h-4" />
                ))}
              </div> {/* Array.from({ length: data.stars }) ifadesi, data.stars değeri kadar uzunlukta bir dizi oluşturur. Array.from({ length: 8 }) olsa 8 elemanlı bir dizi oluşturur. */}

              {/* İlerleme Çubuğu */}
              <div className="w-72 bg-gray-200 h-2.5 dark:bg-gray-700 relative ml-2">
                <div className="bg-blue-600 h-2.5" style={{ width: data.percentage }}></div>
              </div>
              <span className="w-12 text-sm text-blue-900 text-right">({data.count})</span>

            </div>
          ))}
        </div>
      </div>

      {/* Yorumlar */}
      <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full
       text-sm px-5 py-2.5 text-center me-2 mt-4 phone:mt-6">YORUM (10869)</button>
      <div className="container mx-auto mt-6">
        {commentData.map((comment) => (
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
      </div>
    </>
  );
};

export default CommentSection;
