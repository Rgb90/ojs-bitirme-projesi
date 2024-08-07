import React from 'react';

const CardPage: React.FC = () => {
  const imageUrls = [
    "https://source.unsplash.com/collection/1346951/150x150?sig=1",
    "https://source.unsplash.com/collection/1346951/150x150?sig=2",
    "https://source.unsplash.com/collection/1346951/150x150?sig=3",
    "https://source.unsplash.com/collection/1346951/150x150?sig=4",
    "https://source.unsplash.com/collection/1346951/150x150?sig=5",
    "https://source.unsplash.com/collection/1346951/150x150?sig=6",
  ];

  return (
    
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 max-w-[400px] md:max-w-[600px] place-items-center">
      {imageUrls.map((url, index) => (
        <img key={index} className="hover:opacity-75" src={url} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default CardPage;
