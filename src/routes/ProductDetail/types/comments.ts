export interface Comments {
    id: number;
    name: string;
    date: string;
    title: string;
    comment: string;
}

const commentData: Comments[] = [
    {
        id: 1,
        name: "EREN U.",
        date: "12/08/24",
        title: "Harika Ürün",
        comment:
            "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
    },
    {
        id: 2,
        name: "Bahadır K.",
        date: "05/08/24",
        title: "Çok Memnun Kaldım",
        comment:
            "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
    },
    {
        id: 3,
        name: "Berke Ç.",
        date: "22/06/24",
        title: "Mükemmel Kalite",
        comment:
            "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
    },
    {
        id: 4,
        name: "Esat S.",
        date: "03/07/24",
        title: "Fiyat/Performans",
        comment:
            "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
    },
    {
        id: 5,
        name: "Burak B.",
        date: "03/07/24",
        title: "Tadı harika, kesinlikle tavsiye ederim",
        comment:
            "Tadı harika, kesinlikle tavsiye ederim",
    },
    {
        id: 6,
        name: "Fatih Kaya",
        date: "03/07/24",
        title: "Çokonatlısı ve raspberry cheesecake lisi aşırı iyi",
        comment:
            "Çokonatlısı ve raspberry cheesecake lisi aşırı iyi tiramisu aromalısı gelirmi Seri üretime girerse aşırı iyi olur",
    },
    {
        id: 7,
        name: "Berk Y.",
        date: "03/07/24",
        title: "Gayet beğendim ve sürekli olarak kullanıyorum.",
        comment:
            "Gayet beğendim ve sürekli olarak kullanıyorum.",
    },
];

export default commentData;