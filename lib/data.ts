import { Hotel, RecommendationItem, StatItem } from "@/types";

export const statsData: StatItem[] = [
  {
    value: 1.2,
    type: "Hotels",
    unit: "k",
  },
  {
    value: 4.8,
    type: "Rooms",
    unit: "k",
  },
  {
    value: 186,
    type: "Countries",
    unit: null,
  },
];

export const recommendationData: RecommendationItem[] = [
  {
    id: "1",
    name: "Shanghai Hotel",
    image: "/recommendation/hotel-1.jpg",
    location: "Shanghai, China",
    description:
      "Experience modern comfort in the heart of Shanghai. Shanghai Hotel offers elegant rooms, skyline views, and world-class service for both business and leisure travellers.",
    price: 40,
    testimonial: {
      message:
        "A wonderful stay with exceptional hospitality. The staff went above and beyond to make my visit smooth and enjoyable. Highly recommended for anyone visiting Shanghai.",
      personName: "Charlotte Davies",
    },
  },
  {
    id: "2",
    name: "Peaks Lodge",
    image: "/recommendation/hotel-2.jpg",
    location: "Aspen, USA",
    description:
      "Nestled in the mountains of Aspen, Peaks Lodge combines rustic charm with luxury amenities. Perfect for ski lovers and nature seekers looking for relaxation and comfort.",
    price: 90,
    testimonial: {
      message:
        "The view from our room was breathtaking! Cozy interiors, great food, and easy access to the slopes. A truly memorable mountain getaway.",
      personName: "Oliver Thompson",
    },
  },
  {
    id: "3",
    name: "Tropical Oasis Resort",
    image: "/recommendation/hotel-3.jpg",
    location: "Bali, Indonesia",
    description:
      "Relax and unwind in paradise at Tropical Oasis Resort. Enjoy beachfront villas, tropical gardens, and a peaceful atmosphere designed for pure indulgence.",
    price: 140,
    testimonial: {
      message:
        "Everything was perfect — from the friendly staff to the tranquil surroundings. It felt like a private sanctuary by the sea. I can’t wait to return!",
      personName: "Sophie Bennett",
    },
  },
];

export const hotels: Hotel[] = [
  {
    id: "1",
    image: "/find/hotel-1.jpg",
    name: "Hotel de Luna",
    description:
      "A stylish urban retreat in the heart of Singapore, offering elegant rooms and panoramic city views for modern travellers.",
    location: "Singapore",
  },
  {
    id: "2",
    image: "/find/hotel-2.jpg",
    name: "Ina Tretes Hotel",
    description:
      "Surrounded by lush nature in Indonesia, this hotel blends comfort with local charm for a relaxing getaway.",
    location: "Indonesia",
  },
  {
    id: "3",
    image: "/find/hotel-3.jpg",
    name: "Delight Hotel",
    description:
      "A cozy stay in Indonesia with modern amenities, friendly service, and easy access to local attractions.",
    location: "Indonesia",
  },
  {
    id: "4",
    image: "/find/hotel-4.jpg",
    name: "Mercusuar Hotel",
    description:
      "A charming seaside escape in Albania featuring spacious rooms, ocean views, and a calm, welcoming atmosphere.",
    location: "Albania",
  },
];
