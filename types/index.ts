export type StatItem = {
  value: number;
  type: string;
  unit: string | null;
};

export type RecommendationItem = {
  id: string;
  name: string;
  image: string;
  location: string;
  description: string;
  price: number;
  testimonial: {
    message: string;
    personName: string;
  };
};

export type Hotel = {
  id: string;
  image: string;
  name: string;
  description: string;
  location: string;
};
