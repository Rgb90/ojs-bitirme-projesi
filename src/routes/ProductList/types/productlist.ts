import picture12 from "../assets/picture12.png";

export interface List {
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

const productListData: List[] = [
  {
    id: 1,
    src: picture12,
    alt: "wyprn",
    title: "WHEY PROTEİN",
    description: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    comment: 10869,
    price: 549,
  },
  {
    id: 2,
    src: picture12,
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
    src: picture12,
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
    src: picture12,
    alt: "preworkout",
    title: "PRE-WORKOUT SUPREME",
    description: "ANTRENMAN ÖNCESİ TAKVİYESİ",
    comment: 6738,
    price: 399,
  },
  {
    id: 5,
    src: picture12,
    alt: "creaamofrice",
    title: "CREAM OF RICE",
    description: "EN LEZZETLİ PİRİNÇ KREMASI",
    comment: 5216,
    price: 239,
  },
  {
    id: 6,
    src: picture12,
    alt: "creatine",
    title: "CREATİNE",
    description: "EN POPÜLER SPORCU TAKVİYESİ",
    comment: 8558,
    price: 239,
  },
  {
    id: 7,
    src: picture12,
    alt: "wyprn",
    title: "WHEY PROTEİN",
    description: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    comment: 10869,
    price: 549,
  },
  {
    id: 8,
    src: picture12,
    alt: "fitnesspaketi",
    sale: "%29 İNDİRİM",
    title: "FITNESS PAKETİ",
    description: "EN POPÜLER ÜRÜNLER BİR ARADA",
    comment: 7650,
    price: 799,
    oldPrice: "1126 TL",
  },
  {
    id: 9,
    src: picture12,
    alt: "gnlkvitmn",
    sale: "%23 İNDİRİM",
    title: "GÜNLÜK VİTAMİN PAKETİ",
    description: "EN SIK TÜKETİLEN TAKVİYELER",
    comment: 5013,
    price: 549,
    oldPrice: "717 TL",
  },
  {
    id: 10,
    src: picture12,
    alt: "preworkout",
    title: "PRE-WORKOUT SUPREME",
    description: "ANTRENMAN ÖNCESİ TAKVİYESİ",
    comment: 6738,
    price: 399,
  },
  {
    id: 11,
    src: picture12,
    alt: "creaamofrice",
    title: "CREAM OF RICE",
    description: "EN LEZZETLİ PİRİNÇ KREMASI",
    comment: 5216,
    price: 239,
  },
  {
    id: 12,
    src: picture12,
    alt: "creatine",
    title: "CREATİNE",
    description: "EN POPÜLER SPORCU TAKVİYESİ",
    comment: 8558,
    price: 239,
  },
];

export default productListData;