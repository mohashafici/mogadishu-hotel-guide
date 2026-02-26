import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroIllustration from "@/assets/hero-illustration.png";

interface HeroSectionProps {
  onSearch: (query: string, priceRange: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, price);
  };

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="container grid md:grid-cols-2 gap-8 items-center py-16 md:py-24">
        {/* Left */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight text-balance">
            Find Trusted Hotels in&nbsp;Mogadishu
          </h1>
          <p className="text-primary-foreground/75 text-lg max-w-md">
            Browse verified hotels, view locations, and contact directly.
          </p>

          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row gap-3 bg-card/10 backdrop-blur-sm p-3 rounded-lg"
          >
            <Input
              placeholder="Hotel name or area…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-card text-card-foreground border-0 placeholder:text-muted-foreground"
            />
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="h-10 rounded-md px-3 bg-card text-card-foreground text-sm"
            >
              <option value="all">Any Price</option>
              <option value="budget">Under $50</option>
              <option value="mid">$50 – $100</option>
              <option value="premium">$100+</option>
            </select>
            <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
              <Search size={16} />
              Search
            </Button>
          </form>
        </div>

        {/* Right — illustration */}
        <div className="hidden md:block animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <img
            src={heroIllustration}
            alt="Mogadishu skyline illustration"
            className="w-full max-w-lg mx-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
