import Img1 from '../../assets/whey-protein.png';
import Img2 from "../../assets/fitnespaketi.png";
import Img3 from "../../assets/günlükvitamin.png";
import Img4 from "../../assets/pre-workout.png";
import Img5 from "../../assets/cream.png";
import Img6 from "../../assets/creatine.png";

export interface BestSell {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  comment: number;
  price: number;
}

const bestSellData: BestSell[] = [
  {
    id: 1,
    src: Img1,
    alt: "wyprn",
    title: "WHEY PROTEİN",
    description: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    comment: 10869,
    price: 555,
  },
  {
    id: 2,
    src: Img2,
    alt: "fitnesspaketi",
    title: "FITNESS PAKETİ",
    description: "EN POPÜLER ÜRÜNLER BİR ARADA",
    comment: 7650,
    price: 555,
  },
  {
    id: 3,
    src: Img3,
    alt: "gnlkvitmn",
    title: "GÜNLÜK VİTAMİN PAKETİ",
    description: "EN SIK TÜKETİLEN TAKVİYELER",
    comment: 5013,
    price: 555,
  },
  {
    id: 4,
    src: Img4,
    alt: "preworkout",
    title: "PRE-WORKOUT SUPREME",
    description: "ANTRENMAN ÖNCESİ TAKVİYESİ",
    comment: 6738,
    price: 555,
  },
  {
    id: 5,
    src: Img5,
    alt: "creaamofrice",
    title: "CREAM OF RICE",
    description: "EN LEZZETLİ PİRİNÇ KREMASI",
    comment: 5216,
    price: 555,
  },
  {
    id: 6,
    src: Img6,
    alt: "creatine",
    title: "CREATİNE",
    description: "EN POPÜLER SPORCU TAKVİYESİ",
    comment: 8558,
    price: 555,
  },
];

export default bestSellData;