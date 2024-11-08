export interface Boyut {
    label: string;
    servisSayisi: string;
    discount: string | boolean | null;  // İndirim varsa string, yoksa false veya null
  }
  
  export const sizes: Boyut[] = [
    { 
        label: "400G", 
        servisSayisi: "16 servis",
        discount: null
    },
    { 
        label: "1.6KG", 
        servisSayisi: "64 servis",
        discount: null 
    },
    { 
        label: "1.6KG x 2 ADET", 
        servisSayisi: "128 servis",
        discount: "%6 İNDİRİM" 
    },
  ];