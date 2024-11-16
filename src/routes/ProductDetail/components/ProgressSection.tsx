import smallStar from "../assets/smallStar.png";

const ProgressSection = () => {
 const progressData = [
        { stars: 5, percentage: "75%", count: 9284 },
        { stars: 4, percentage: "15%", count: 1450 },
        { stars: 3, percentage: "5%", count: 500 },
        { stars: 2, percentage: "3%", count: 150 },
        { stars: 1, percentage: "2%", count: 85 },
      ];
  return (
    <div className="flex flex-col phone:mt-6">
      {progressData.map((data, index) => (
        <div key={index} className="flex items-center justify-end mb-2">
          {/* Yıldız Sayısı */}
          <div className="flex items-center gap-1 w-24">
            {Array.from({ length: data.stars }, (_, i) => (
              <img key={i} src={smallStar} alt="small-star" className="w-4 h-4" />
            ))}
          </div>

          {/* İlerleme Çubuğu */}
          <div className="w-72 bg-gray-200 h-2.5 dark:bg-gray-700 relative ml-2">
            <div className="bg-blue-600 h-2.5" style={{ width: data.percentage }}></div>
          </div>

          {/* Yorum Sayısı */}
          <span className="w-12 text-sm text-blue-900 text-right">({data.count})</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressSection;
