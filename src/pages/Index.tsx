import { useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import HotelGrid from "@/components/HotelGrid";
import MapSection from "@/components/MapSection";
import SiteFooter from "@/components/SiteFooter";
import { hotels } from "@/data/hotels";

const Index = () => {
  const [search, setSearch] = useState({ query: "", price: "all" });

  const filtered = useMemo(() => {
    return hotels.filter((h) => {
      const matchesQuery =
        !search.query ||
        h.name.toLowerCase().includes(search.query.toLowerCase()) ||
        h.district.toLowerCase().includes(search.query.toLowerCase());

      let matchesPrice = true;
      if (search.price === "budget") matchesPrice = h.priceMin < 50;
      else if (search.price === "mid") matchesPrice = h.priceMin >= 50 && h.priceMin <= 100;
      else if (search.price === "premium") matchesPrice = h.priceMin > 100;

      return matchesQuery && matchesPrice;
    });
  }, [search]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <HeroSection onSearch={(query, price) => setSearch({ query, price })} />

      {/* Hotel Listings */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Hotels</h2>
          <HotelGrid hotels={filtered} />
        </div>
      </section>

      <MapSection hotels={hotels} />

      {/* About */}
      <section id="about" className="py-16">
        <div className="container max-w-2xl text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">About This Directory</h2>
          <p className="text-muted-foreground leading-relaxed">
            Mogadishu Hotel Directory is a free resource helping travelers find verified
            accommodations in Mogadishu. We list hotels with transparent pricing, real photos,
            and direct contact information — no middlemen, no hidden fees.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
