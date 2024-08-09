
export interface SmallCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  comment: number;
  price: number;
}

function SmallCard({ src, alt, title, description, comment, price }: SmallCardProps) {
  return (
    <div className="flex flex-col items-center p-4 m-2">
    <img src={src} alt={alt} className="object-cover mb-0.5 sm:w-[147px] sm:h-[147px] md:w-[210px] md:h-[210px] lg:w-[168px] lg:h-[168px]" />
    <h3 className="text-sm font-semibold font-inter text-center">{title}</h3>
    <p className="text-xs font-light text-gray-500 mb-1 text-center">{description}</p>
    <div className="flex mb-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-700 cursor-pointer">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
        </svg>
      ))}
    </div>
    <div className="flex-grow mt-auto w-full flex flex-col items-center justify-end">
        <p className="text-xs mb-0">{comment} Yorum</p>
        <h3 className="text-lg mb-0">{price} TL</h3>
      </div>
  </div>
  );
}

export default SmallCard;
