import star from "../../assets/star.png"

const Stars = () => {
    return (
        <div className="flex mb-1">
          {Array.from({ length: 5 }, (_, i) => (
            <img key={i} src={star} alt="star" className="w-6 h-6" />
          ))}
        </div>
    );
  };
  
  export default Stars;