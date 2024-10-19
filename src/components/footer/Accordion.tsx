import { useState } from "react";

export interface FooterMobilProps {
    title: string;
    items: string[];
}

export const ojsNutrition: FooterMobilProps = {
    title: "OJS NUTRITION",
    items: [
        "İletişim",
        "Hakkımızda",
        "Sıkça Sorulan Sorular",
        "KVKK",
        "Çalışma İlkelerimiz",
        "Satış Sözleşmesi",
        "Garanti ve İade Koşulları",
        "Gerçek Müşteri Yorumları",
        "Blog",
    ],
};

export const kategoriler: FooterMobilProps = {
    title: "KATEGORILER",
    items: [
        "Protein",
        "Spor Gıdaları",
        "Sağlık",
        "Gıda",
        "Vitamin",
        "Aksesuar",
        "Tüm Ürünler",
        "Paketler",
        "Lansmana Özel Fırsatlar",
    ],
};

export const populerUrunler: FooterMobilProps = {
    title: "POPULER URUNLER",
    items: [
        "Whey Protein",
        "Cream of Rice",
        "Creatine",
        "BCAA+",
        "Pre-Workout",
        "Fitness Paketi",
        "Collagen",
        "Günlük Vitamin Paketi",
        "ZMA",
    ],
};


const Accordion = ({ title, items }: FooterMobilProps) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-2 mb-7">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-start w-full items-center"
            >
                <svg
                    className="fill-current text-white shrink-0"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                </svg>

                <span className="text-sm text-white ml-3" style={{ alignSelf: 'center' }}>{title}</span>
            </button>

            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <ul className="text-sm text-gray-500">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Accordion;

