export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // minutes
  priceStudio: number;
  priceHome: number;
  category: "homme" | "enfant" | "combo";
  icon: string;
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: "coupe-classique",
    name: "Coupe Classique",
    description: "Coupe homme soignee, shampoing inclus",
    duration: 30,
    priceStudio: 25,
    priceHome: 35,
    category: "homme",
    icon: "scissors",
  },
  {
    id: "fade-degrade",
    name: "Fade / Degrade",
    description: "Degrade precis, finitions nettes au rasoir",
    duration: 40,
    priceStudio: 30,
    priceHome: 40,
    category: "homme",
    icon: "sparkles",
    popular: true,
  },
  {
    id: "barbe-sculpte",
    name: "Barbe Sculptee",
    description: "Taille, sculpture et soin barbe",
    duration: 20,
    priceStudio: 15,
    priceHome: 20,
    category: "homme",
    icon: "brush",
  },
  {
    id: "combo-coupe-barbe",
    name: "Combo Coupe + Barbe",
    description: "L'experience complete : coupe + barbe sculptee",
    duration: 50,
    priceStudio: 40,
    priceHome: 50,
    category: "combo",
    icon: "crown",
    popular: true,
  },
  {
    id: "coupe-enfant",
    name: "Coupe Enfant",
    description: "Coupe enfant (< 12 ans), ambiance detendue",
    duration: 20,
    priceStudio: 18,
    priceHome: 25,
    category: "enfant",
    icon: "smile",
  },
  {
    id: "combo-parent-enfant",
    name: "Duo Parent + Enfant",
    description: "Une coupe pour toi, une pour ton enfant",
    duration: 50,
    priceStudio: 40,
    priceHome: 52,
    category: "combo",
    icon: "users",
  },
];

export const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

export const deliveryZones = {
  free: { label: "Ostende centre (< 5 km)", supplement: 0 },
  paid: { label: "Ostende elargi (5-15 km)", supplement: 5 },
};
