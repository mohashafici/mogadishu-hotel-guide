import { Link } from "react-router-dom";
import { MapPin, Wifi, Car, UtensilsCrossed, Waves, Wind, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Hotel } from "@/data/hotels";

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi size={14} />,
  parking: <Car size={14} />,
  restaurant: <UtensilsCrossed size={14} />,
  pool: <Waves size={14} />,
  ac: <Wind size={14} />,
  gym: <Dumbbell size={14} />,
};

const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={hotel.images[0]}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-card-foreground">{hotel.name}</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
            <MapPin size={13} /> {hotel.district}
          </p>
        </div>

        <p className="text-sm font-medium text-accent">{hotel.priceRange} / night</p>

        <div className="flex gap-2 flex-wrap">
          {hotel.amenities.slice(0, 4).map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded"
            >
              {amenityIcons[a]} {a}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-1">
          <Button asChild size="sm" variant="outline" className="flex-1">
            <Link to={`/hotel/${hotel.id}`}>View Details</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a
              href={`https://wa.me/${hotel.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
