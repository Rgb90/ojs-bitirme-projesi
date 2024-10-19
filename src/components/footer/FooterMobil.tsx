import Accordion from "./Accordion";
import logobeyaz from "../../assets/logo-beyaz.png";
import { ojsNutrition, kategoriler, populerUrunler } from "./Accordion"; // Verileri import ediyoruz

function FooterMobil() {
    return (
        <>
            <div className="p-4 bg-black">
                <div className="mb-5">
                    <img src={logobeyaz} alt="Logo" width="132" height="30" />
                </div>
                <Accordion title={ojsNutrition.title} items={ojsNutrition.items} />
                <Accordion title={kategoriler.title} items={kategoriler.items} />
                <Accordion title={populerUrunler.title} items={populerUrunler.items} />
                <div className="mt-24">
                    <p className="text-xs text-gray-500">
                        Copyright © - Tüm Hakları Saklıdır.
                    </p>
                </div>
            </div>
        </>
    );
}

export default FooterMobil;
