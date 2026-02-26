import { useParams, Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  ArrowLeft,
  MapPin,
  Phone,
  MessageCircle,
  Wifi,
  Car,
  UtensilsCrossed,
  Waves,
  Wind,
  Dumbbell,
  Shirt,
  Presentation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { hotels, amenityLabels } from "@/data/hotels";
import { useState } from "react";

// Fix leaflet icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi size={18} />,
  parking: <Car size={18} />,
  restaurant: <UtensilsCrossed size={18} />,
  pool: <Waves size={18} />,
  ac: <Wind size={18} />,
  gym: <Dumbbell size={18} />,
  laundry: <Shirt size={18} />,
  conference: <Presentation size={18} />,
};

const HotelDetails = () => {
  const { id } = useParams<{ id: string }>();
  const hotel = hotels.find((h) => h.id === id);
  const [activeImg, setActiveImg] = useState(0);

  if (!hotel) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <p className="text-xl text-foreground font-semibold">Hotel not found</p>
            <Button asChild variant="outline">
              <Link to="/">← Back to Hotels</Link>
            </Button>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container py-8 space-y-8">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} /> Back to Hotels
          </Link>

          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden bg-muted">
              <img
                src={hotel.images[activeImg]}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </div>
            {hotel.images.length > 1 && (
              <div className="flex gap-2">
                {hotel.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-20 h-14 rounded overflow-hidden border-2 transition-colors ${
                      activeImg === i ? "border-accent" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-8">
            {/* Left content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">{hotel.name}</h1>
                <p className="text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin size={15} /> {hotel.district}, Mogadishu
                </p>
                <p className="text-lg font-semibold text-accent mt-2">{hotel.priceRange} / night</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">About</h2>
                <p className="text-muted-foreground leading-relaxed">{hotel.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {hotel.amenities.map((a) => (
                    <div
                      key={a}
                      className="flex items-center gap-2 text-sm text-card-foreground bg-secondary px-3 py-2 rounded-md"
                    >
                      <span className="text-accent">{amenityIcons[a]}</span>
                      {amenityLabels[a] || a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Room types */}
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">Room Types</h2>
                <div className="space-y-2">
                  {hotel.roomTypes.map((r) => (
                    <div
                      key={r.name}
                      className="flex justify-between items-center bg-secondary px-4 py-3 rounded-md"
                    >
                      <span className="text-sm text-card-foreground">{r.name}</span>
                      <span className="text-sm font-semibold text-accent">{r.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">Location</h2>
                <div className="h-[300px] rounded-lg overflow-hidden border border-border">
                  <MapContainer
                    center={[hotel.lat, hotel.lng]}
                    zoom={15}
                    className="w-full h-full"
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[hotel.lat, hotel.lng]}>
                      <Popup>{hotel.name}</Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>

            {/* Right sidebar — contact */}
            <div className="space-y-4 lg:sticky lg:top-24 self-start">
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-foreground">Contact This Hotel</h3>
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
                >
                  <a
                    href={`https://wa.me/${hotel.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full gap-2">
                  <a href={`tel:${hotel.phone}`}>
                    <Phone size={18} />
                    Call Hotel
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default HotelDetails;
