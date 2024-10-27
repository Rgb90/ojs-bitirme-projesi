import "blaze-slider/dist/blaze.css";
import { useBlazeSlider } from "../hooks/useBlazeSlider";
import sliderCommentData from "../types/SliderCommentData";
/* import "./SliderComments.css" */

const SliderComments = () => {
/*      const { sliderElRef } = useBlazeSlider({
        all: {
            slidesToShow: 4, // Büyük ekranlar için 4 yorum gösteriliyor
            enableAutoplay: true,
            autoplayInterval: 2000,
            transitionDuration: 300,
        },
        "(max-width: 1300px)": {  
            slidesToShow: 3,
        },
        "(max-width: 900px)": {
            slidesToShow: 2,
        },
        "(max-width: 500px)": {
            slidesToShow: 1,
        },
    });  */
    
    const { sliderElRef } = useBlazeSlider({
        all: {
            slidesToShow: 3,
            enableAutoplay: true,
            autoplayInterval: 2000,
            transitionDuration: 300,
        },
        "(max-width: 900px)": {
            slidesToShow: 2,
        },
        "(max-width: 500px)": {
            slidesToShow: 1,
        },
    }); 
    
    return (
        <div className="container mx-auto w-full px-4 lg-tablet:px-24 mb-10">
            <div className="px-2 mt-6">
                <div className="flex justify-between items-center">
                    <h4 className="text-sm font-semibold text-gray-700 ml-5">
                        GERÇEK MÜŞTERİ YORUMLARI
                    </h4>
                    <div className="flex items-center gap-2">
                        <div className="flex mb-1">
                            {Array.from({ length: 5 }, (_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-yellow-700 cursor-pointer"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="block text-sm antialiased font-medium leading-relaxed text-blue-gray-500 underline">
                                198453 Yorum
                            </p>
                            <div className="flex items-center">
                                <button
                                    type="button"
                                    className="px-4 cursor-pointer focus:outline-none mr-0">
                                    <svg
                                        className="w-6 h-6 text-gray-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    className="px-4 cursor-pointer focus:outline-none">
                                    <svg
                                        className="w-6 h-6 text-gray-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-2 border-gray-400" />
            </div>
            <div className="overflow-hidden w-full" ref={sliderElRef}>
                <div className="blaze-container">
                    <div className="blaze-track-container">
                        <div className="blaze-track">
                            {sliderCommentData.map((comment) => (
                                <div key={comment.id} className="flex flex-col mb-10 p-4 h-full">
                                    <p className="text-xs text-gray-700 italic">{comment.date}</p>
                                    <h5 className="text-sm font-semibold">{comment.title}</h5>
                                    <p className="text-xs text-gray-700 italic">{comment.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SliderComments;
