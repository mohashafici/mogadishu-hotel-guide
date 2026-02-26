import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Hotel } from "@/data/hotels";

// Fix leaflet default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const MapSection = ({ hotels }: { hotels: Hotel[] }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="map" className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-8">Explore on Map</h2>
        <div className="grid lg:grid-cols-[340px_1fr] gap-6 rounded-lg overflow-hidden border border-border bg-card">
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

          {/* Map */}
          <div className="h-[500px]">
            <MapContainer
              center={[2.0469, 45.3182]}
              zoom={13}
              className="w-full h-full"
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {hotels.map((h) => (
                <Marker key={h.id} position={[h.lat, h.lng]}>
                  <Popup>
                    <div className="text-sm">
                      <p className="font-semibold">{h.name}</p>
                      <p className="text-muted-foreground">{h.district}</p>
                      <Link
                        to={`/hotel/${h.id}`}
                        className="text-accent underline text-xs mt-1 block"
                      >
                        View Details →
                      </Link>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
