const CommentSection = () => {
  const rating = 4.8;
  const totalComments = 10869;

  // Yıldız derecelendirme yüzdeleri
  const ratings: { [key: number]: number } = {
    5: 75, // 5 yıldız %75
    4: 15, // 4 yıldız %15
    3: 7,  // 3 yıldız %7
    2: 2,  // 2 yıldız %2
    1: 1   // 1 yıldız %1
  };

  return (
    <div className="flex items-center justify-between">
      {/* Puan Değeri ve Yıldızlar */}
      <div className="flex flex-col items-center gap-1 font-bold text-blue-gray-500">
        {/* Puan Değeri */}
        <div className="text-xl text-blue-gray-700">{rating}</div>

        {/* Yıldızlar */}
        <div className="flex mb-1">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-6 h-6 ${i < rating ? 'text-yellow-700' : 'text-gray-300'} cursor-pointer`}
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>

        {/* Toplam Yorum Sayısı */}
        <div className="text-sm font-medium text-blue-gray-600">{totalComments} Yorum</div>
      </div>

      {/* Derecelendirme Yüzdeleri */}
      <div className="mt-4 flex flex-col">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center mt-2">
            <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
              {star} yıldız
            </a>
            <div className="w-full h-5 mx-4 bg-gray-200 dark:bg-gray-700"> {/* Genişliği artırdık */}
              <div
                className="h-5 bg-yellow-300"
                style={{ width: `${ratings[star]}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{ratings[star]}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
