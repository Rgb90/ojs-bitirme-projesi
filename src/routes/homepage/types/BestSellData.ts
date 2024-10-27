import Img1 from '../../../assets/whey-protein.png';
import Img2 from "../../../assets/fitnespaketi.png";
import Img3 from "../../../assets/günlükvitamin.png";
import Img4 from "../../../assets/pre-workout.png";
import Img5 from "../../../assets/cream.png";
import Img6 from "../../../assets/creatine.png";

export interface BestSell {
  id: number;
  src: string;
  alt: string;
  sale?: string;
  title: string;
  description: string;
  comment: number;
  price: number;
  oldPrice?: string;
}

const bestSellData: BestSell[] = [
  {
    id: 1,
    src: Img1,
    alt: "wyprn",
    title: "WHEY PROTEİN",
    description: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    comment: 10869,
    price: 549,
  },
  {
    id: 2,
    src: Img2,
    alt: "fitnesspaketi",
    sale: "%29 İNDİRİM",
    title: "FITNESS PAKETİ",
    description: "EN POPÜLER ÜRÜNLER BİR ARADA",
    comment: 7650,
    price: 799,
    oldPrice: "1126 TL",
  },
  {
    id: 3,
    src: Img3,
    alt: "gnlkvitmn",
    sale: "%23 İNDİRİM",
    title: "GÜNLÜK VİTAMİN PAKETİ",
    description: "EN SIK TÜKETİLEN TAKVİYELER",
    comment: 5013,
    price: 549,
    oldPrice: "717 TL",
  },
  {
    id: 4,
    src: Img4,
    alt: "preworkout",
    title: "PRE-WORKOUT SUPREME",
    description: "ANTRENMAN ÖNCESİ TAKVİYESİ",
    comment: 6738,
    price: 399,
  },
  {
    id: 5,
    src: Img5,
    alt: "creaamofrice",
    title: "CREAM OF RICE",
    description: "EN LEZZETLİ PİRİNÇ KREMASI",
    comment: 5216,
    price: 239,
  },
  {
    id: 6,
    src: Img6,
    alt: "creatine",
    title: "CREATİNE",
    description: "EN POPÜLER SPORCU TAKVİYESİ",
    comment: 8558,
    price: 239,
  },
];

export default bestSellData;