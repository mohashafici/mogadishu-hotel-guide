import hotel1 from "@/assets/hotel-1.jpg";
import hotel2 from "@/assets/hotel-2.jpg";
import hotel3 from "@/assets/hotel-3.jpg";
import hotel4 from "@/assets/hotel-4.jpg";
import hotel5 from "@/assets/hotel-5.jpg";
import hotel6 from "@/assets/hotel-6.jpg";

export interface Hotel {
  id: string;
  name: string;
  district: string;
  priceRange: string;
  priceMin: number;
  description: string;
  images: string[];
  amenities: string[];
  roomTypes: { name: string; price: string }[];
  phone: string;
  whatsapp: string;
  lat: number;
  lng: number;
}

export const hotels: Hotel[] = [
  {
    id: "peace-hotel",
    name: "Peace Hotel Mogadishu",
    district: "Hamar Weyne",
    priceRange: "$45 – $120",
    priceMin: 45,
    description:
      "A modern oceanfront hotel in the heart of old Mogadishu. Peace Hotel offers stunning views of the Indian Ocean, spacious rooms, and warm Somali hospitality. Ideal for business and leisure travelers alike.",
    images: [hotel1, hotel5],
    amenities: ["wifi", "parking", "restaurant", "ac", "laundry"],
    roomTypes: [
      { name: "Standard Room", price: "$45/night" },
      { name: "Deluxe Room", price: "$75/night" },
      { name: "Ocean Suite", price: "$120/night" },
    ],
    phone: "+252612345678",
    whatsapp: "252612345678",
    lat: 2.0469,
    lng: 45.3182,
  },
  {
    id: "jazeera-palace",
    name: "Jazeera Palace Hotel",
    district: "Jazeera",
    priceRange: "$80 – $200",
    priceMin: 80,
    description:
      "Luxury beachfront resort with world-class amenities on Jazeera Beach. Features a swimming pool, international restaurant, and conference facilities. The premier choice for distinguished guests.",
    images: [hotel3, hotel5],
    amenities: ["wifi", "parking", "restaurant", "pool", "ac", "gym"],
    roomTypes: [
      { name: "Superior Room", price: "$80/night" },
      { name: "Executive Suite", price: "$150/night" },
      { name: "Presidential Suite", price: "$200/night" },
    ],
    phone: "+252615678901",
    whatsapp: "252615678901",
    lat: 2.0225,
    lng: 45.3015,
  },
  {
    id: "mogadishu-hotel",
    name: "The Mogadishu Hotel",
    district: "Bondhere",
    priceRange: "$35 – $85",
    priceMin: 35,
    description:
      "A charming boutique hotel blending traditional Somali architecture with modern comfort. Located in the vibrant Bondhere district, close to markets and cultural landmarks.",
    images: [hotel2, hotel5],
    amenities: ["wifi", "restaurant", "ac", "laundry"],
    roomTypes: [
      { name: "Classic Room", price: "$35/night" },
      { name: "Heritage Room", price: "$55/night" },
      { name: "Courtyard Suite", price: "$85/night" },
    ],
    phone: "+252619876543",
    whatsapp: "252619876543",
    lat: 2.0382,
    lng: 45.3425,
  },
  {
    id: "city-star",
    name: "City Star Hotel",
    district: "Warta Nabada",
    priceRange: "$60 – $140",
    priceMin: 60,
    description:
      "A modern business hotel in the commercial heart of Mogadishu. City Star offers excellent conference facilities, fast internet, and comfortable rooms for the modern traveler.",
    images: [hotel4, hotel5],
    amenities: ["wifi", "parking", "restaurant", "ac", "gym", "conference"],
    roomTypes: [
      { name: "Business Room", price: "$60/night" },
      { name: "Executive Room", price: "$100/night" },
      { name: "Business Suite", price: "$140/night" },
    ],
    phone: "+252613456789",
    whatsapp: "252613456789",
    lat: 2.0534,
    lng: 45.3347,
  },
  {
    id: "sahafi-hotel",
    name: "Sahafi Hotel",
    district: "Hodan",
    priceRange: "$50 – $110",
    priceMin: 50,
    description:
      "Well-established hotel known for its excellent service and central location in Hodan district. Popular with journalists, NGO workers, and frequent visitors to Mogadishu.",
    images: [hotel6, hotel5],
    amenities: ["wifi", "parking", "restaurant", "ac", "laundry"],
    roomTypes: [
      { name: "Standard Room", price: "$50/night" },
      { name: "Premium Room", price: "$80/night" },
      { name: "VIP Suite", price: "$110/night" },
    ],
    phone: "+252617654321",
    whatsapp: "252617654321",
    lat: 2.0401,
    lng: 45.3501,
  },
  {
    id: "banadir-hotel",
    name: "Banadir Hotel",
    district: "Shangaani",
    priceRange: "$30 – $70",
    priceMin: 30,
    description:
      "Budget-friendly hotel in the historic Shangaani district. Clean, comfortable rooms with friendly staff. Perfect for travelers looking for value without compromising on quality.",
    images: [hotel6, hotel2],
    amenities: ["wifi", "restaurant", "ac"],
    roomTypes: [
      { name: "Economy Room", price: "$30/night" },
      { name: "Standard Room", price: "$50/night" },
      { name: "Family Room", price: "$70/night" },
    ],
    phone: "+252618765432",
    whatsapp: "252618765432",
    lat: 2.0445,
    lng: 45.3265,
  },
];

export const amenityLabels: Record<string, string> = {
  wifi: "Wi-Fi",
  parking: "Parking",
  restaurant: "Restaurant",
  pool: "Pool",
  ac: "Air Conditioning",
  gym: "Gym",
  laundry: "Laundry",
  conference: "Conference",
};
