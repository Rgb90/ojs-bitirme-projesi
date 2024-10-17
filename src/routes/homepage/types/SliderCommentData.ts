export interface Comment {
    id: number;
    date: string;
    title: string;
    comment: string;
  }
  
  const sliderCommentData: Comment[] = [
    {
      id: 1,
      date: "12/08/24",
      title: "Harika Ürün",
      comment:
        "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
    },
    {
      id: 2,
      date: "05/08/24",
      title: "Çok Memnun Kaldım",
      comment:
        "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
    },
    {
      id: 3,
      date: "22/06/24",
      title: "Mükemmel Kalite",
      comment:
        "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
    },
    {
      id: 4,
      date: "03/07/24",
      title: "Fiyat/Performans",
      comment:
        "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
    },
  ];
  
  export default sliderCommentData;