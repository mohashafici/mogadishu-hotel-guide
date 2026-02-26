import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import type { Hotel } from "@/data/hotels";

const MapSection = ({ hotels }: { hotels: Hotel[] }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedHotel = hotels.find((h) => h.id === selected);
  const center = selectedHotel
    ? `${selectedHotel.lat},${selectedHotel.lng}`
    : "2.0469,45.3182";
  const zoom = selectedHotel ? 16 : 13;

  return (
    <section id="map" className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-8">Explore on Map</h2>
        <div className="grid lg:grid-cols-[340px_1fr] gap-0 rounded-lg overflow-hidden border border-border bg-card">
          {/* Sidebar list */}
          <div className="max-h-[500px] overflow-y-auto divide-y divide-border">
            {hotels.map((h) => (
              <button
                key={h.id}
                onClick={() => setSelected(h.id)}
                className={`w-full text-left p-4 hover:bg-secondary/50 transition-colors ${
                  selected === h.id ? "bg-accent/10 border-l-2 border-accent" : ""
                }`}
              >
                <p className="font-medium text-card-foreground text-sm">{h.name}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                  <MapPin size={11} /> {h.district}
                </p>
                <p className="text-xs text-accent mt-1">{h.priceRange}</p>
              </button>
            ))}
          </div>

          {/* Map — OpenStreetMap iframe */}
          <div className="h-[500px]">
            <iframe
              title="Hotel Map"
              className="w-full h-full border-0"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=45.25,1.98,45.42,2.10&layer=mapnik&marker=${center}`}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
