export type Category = "fade" | "waves" | "beard" | "linework" | "kids" | "combo";

export interface Service {
  id: string;
  name: string;
  signature: string;
  description: string;
  duration: number; // minutes
  priceStudio: number;
  priceHome: number;
  category: "homme" | "enfant" | "combo";
  icon: string;
  heroImage: string;
  tags: Category[];
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: "fade-degrade",
    name: "Fade / Degrade",
    signature: "The Ostend Fade",
    description: "Degrade precis, finitions nettes au rasoir",
    duration: 40,
    priceStudio: 30,
    priceHome: 40,
    category: "homme",
    icon: "sparkles",
    heroImage: "/gallery/coup20.jpeg",
    tags: ["fade", "linework"],
    popular: true,
  },
  {
    id: "waves-360",
    name: "Waves 360",
    signature: "The 360 Wave",
    description: "Brossage, moisture, sculpt premium waves",
    duration: 30,
    priceStudio: 22,
    priceHome: 30,
    category: "homme",
    icon: "waves",
    heroImage: "/gallery/coup10.jpeg",
    tags: ["waves"],
    popular: true,
  },
  {
    id: "barbe-sculpte",
    name: "Barbe Sculptee",
    signature: "The Sculpt",
    description: "Taille, sculpture et soin barbe",
    duration: 20,
    priceStudio: 15,
    priceHome: 20,
    category: "homme",
    icon: "brush",
    heroImage: "/gallery/coup30.jpeg",
    tags: ["beard", "linework"],
  },
  {
    id: "combo-coupe-barbe",
    name: "Combo Coupe + Barbe",
    signature: "The Full Imperial",
    description: "L'experience complete : coupe + barbe sculptee",
    duration: 50,
    priceStudio: 40,
    priceHome: 50,
    category: "combo",
    icon: "crown",
    heroImage: "/gallery/coup25.jpeg",
    tags: ["fade", "beard"],
    popular: true,
  },
  {
    id: "coupe-classique",
    name: "Coupe Classique",
    signature: "The Classic",
    description: "Coupe homme soignee, shampoing inclus",
    duration: 30,
    priceStudio: 25,
    priceHome: 35,
    category: "homme",
    icon: "scissors",
    heroImage: "/gallery/coupe1.jpeg",
    tags: ["fade"],
  },
  {
    id: "coupe-enfant",
    name: "Coupe Enfant",
    signature: "Little Imperial",
    description: "Coupe enfant (< 12 ans), ambiance detendue",
    duration: 20,
    priceStudio: 18,
    priceHome: 25,
    category: "enfant",
    icon: "smile",
    heroImage: "/gallery/coup15.jpeg",
    tags: ["kids"],
  },
  {
    id: "combo-parent-enfant",
    name: "Duo Parent + Enfant",
    signature: "The Family",
    description: "Une coupe pour toi, une pour ton enfant",
    duration: 50,
    priceStudio: 40,
    priceHome: 52,
    category: "combo",
    icon: "users",
    heroImage: "/gallery/coup8.jpeg",
    tags: ["fade", "kids"],
  },
];

export interface LookBookImage {
  id: string;
  src: string;
  alt: string;
  tags: Category[];
  // Optionnal link to a service — le bouton "Book this look" pre-selectionne ce service
  suggestedServiceId?: string;
  aspect?: "square" | "portrait" | "landscape";
}

// Curated selection - 24 photos repartties en 6 categories
// Categorisation indicative : ajustable selon le vrai contenu de chaque photo
export const lookBook: LookBookImage[] = [
  // Waves (specialty)
  { id: "w1", src: "/gallery/coup10.jpeg", alt: "360 waves signature", tags: ["waves"], suggestedServiceId: "waves-360", aspect: "square" },
  { id: "w2", src: "/gallery/coup20.jpeg", alt: "Waves & lineup", tags: ["waves", "linework"], suggestedServiceId: "waves-360", aspect: "portrait" },
  { id: "w3", src: "/gallery/coup11.jpeg", alt: "Waves frais", tags: ["waves"], suggestedServiceId: "waves-360", aspect: "square" },
  { id: "w4", src: "/gallery/coup22.jpeg", alt: "Waves & fade bas", tags: ["waves", "fade"], suggestedServiceId: "waves-360", aspect: "square" },

  // Fade
  { id: "f1", src: "/gallery/coupe1.jpeg", alt: "Fade signature", tags: ["fade"], suggestedServiceId: "fade-degrade", aspect: "portrait" },
  { id: "f2", src: "/gallery/coup2.jpeg", alt: "Mid fade propre", tags: ["fade"], suggestedServiceId: "fade-degrade", aspect: "square" },
  { id: "f3", src: "/gallery/coup3.jpeg", alt: "Low fade sculpte", tags: ["fade", "linework"], suggestedServiceId: "fade-degrade", aspect: "square" },
  { id: "f4", src: "/gallery/coup4.jpeg", alt: "High fade", tags: ["fade"], suggestedServiceId: "fade-degrade", aspect: "portrait" },
  { id: "f5", src: "/gallery/coup5.jpeg", alt: "Skin fade", tags: ["fade"], suggestedServiceId: "fade-degrade", aspect: "square" },
  { id: "f6", src: "/gallery/coup6.jpeg", alt: "Taper fade", tags: ["fade"], suggestedServiceId: "fade-degrade", aspect: "square" },

  // Beard
  { id: "b1", src: "/gallery/coup30.jpeg", alt: "Barbe sculpte", tags: ["beard", "linework"], suggestedServiceId: "barbe-sculpte", aspect: "portrait" },
  { id: "b2", src: "/gallery/coup31.jpeg", alt: "Beard design", tags: ["beard"], suggestedServiceId: "barbe-sculpte", aspect: "square" },
  { id: "b3", src: "/gallery/coup32.jpeg", alt: "Full beard shape", tags: ["beard"], suggestedServiceId: "barbe-sculpte", aspect: "square" },
  { id: "b4", src: "/gallery/coup33.jpeg", alt: "Beard fade", tags: ["beard", "fade"], suggestedServiceId: "barbe-sculpte", aspect: "portrait" },

  // Linework (precision designs)
  { id: "l1", src: "/gallery/coup18.jpeg", alt: "Design au rasoir", tags: ["linework"], suggestedServiceId: "fade-degrade", aspect: "square" },
  { id: "l2", src: "/gallery/coup19.jpeg", alt: "Hairline sculpte", tags: ["linework"], suggestedServiceId: "fade-degrade", aspect: "square" },
  { id: "l3", src: "/gallery/coup23.jpeg", alt: "Part line + fade", tags: ["linework", "fade"], suggestedServiceId: "fade-degrade", aspect: "portrait" },

  // Combo (full transformations)
  { id: "c1", src: "/gallery/coup25.jpeg", alt: "Combo coupe + barbe", tags: ["fade", "beard"], suggestedServiceId: "combo-coupe-barbe", aspect: "portrait" },
  { id: "c2", src: "/gallery/coup26.jpeg", alt: "Full Imperial", tags: ["fade", "beard"], suggestedServiceId: "combo-coupe-barbe", aspect: "square" },
  { id: "c3", src: "/gallery/coup27.jpeg", alt: "Premium combo", tags: ["fade", "beard", "linework"], suggestedServiceId: "combo-coupe-barbe", aspect: "square" },

  // Kids
  { id: "k1", src: "/gallery/coup15.jpeg", alt: "Coupe enfant", tags: ["kids"], suggestedServiceId: "coupe-enfant", aspect: "square" },
  { id: "k2", src: "/gallery/coup8.jpeg", alt: "Kids fresh cut", tags: ["kids"], suggestedServiceId: "coupe-enfant", aspect: "portrait" },
  { id: "k3", src: "/gallery/coup16.jpeg", alt: "Little Imperial", tags: ["kids", "fade"], suggestedServiceId: "coupe-enfant", aspect: "square" },
  { id: "k4", src: "/gallery/coup7.jpeg", alt: "Coupe junior", tags: ["kids"], suggestedServiceId: "coupe-enfant", aspect: "square" },
];

// Hero rotating backgrounds — 3 best shots
export const heroImages = [
  "/gallery/coup20.jpeg",
  "/gallery/coup10.jpeg",
  "/gallery/coup30.jpeg",
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

// Boutique — "The Imperial Atelier"
// Selection curatee dispo au studio. Prix indicatifs.
export type ShopCategory = "perfume" | "shoes";

export interface ShopItem {
  id: string;
  category: ShopCategory;
  name: string; // editorial name
  brand?: string;
  description: string;
  price: number; // EUR
  image: string;
  badge?: string; // "Edition limitee", "Best-seller"...
}

export const shopItems: ShopItem[] = [
  // Parfums
  {
    id: "imperial-noir",
    category: "perfume",
    name: "Imperial Noir",
    description: "Oud, ambre noir, cuir. Sillage profond, longue tenue.",
    price: 89,
    image: "/shop/perfumes/p1.jpeg",
    badge: "Best-seller",
  },
  {
    id: "oud-royal",
    category: "perfume",
    name: "Oud Royal",
    description: "Oud rare, rose damascena, safran. Edition signature.",
    price: 120,
    image: "/shop/perfumes/p2.jpeg",
    badge: "Edition limitee",
  },
  {
    id: "marine-ostende",
    category: "perfume",
    name: "Marine d'Ostende",
    description: "Embruns, bergamote, vetiver. L'esprit cote belge.",
    price: 75,
    image: "/shop/perfumes/p3.jpeg",
  },
  {
    id: "velvet-amber",
    category: "perfume",
    name: "Velvet Amber",
    description: "Ambre, vanille bourbon, tonka. Chaleur enveloppante.",
    price: 85,
    image: "/shop/perfumes/p4.jpeg",
  },
  {
    id: "citrus-belge",
    category: "perfume",
    name: "Citrus Belge",
    description: "Yuzu, neroli, the vert. Frais, lumineux, signature jour.",
    price: 70,
    image: "/shop/perfumes/p5.jpeg",
  },
  {
    id: "sable-dore",
    category: "perfume",
    name: "Sable Dore",
    description: "Iris, cedre, musc dore. Elegance discrete.",
    price: 95,
    image: "/shop/perfumes/p6.jpeg",
  },

  // Chaussures
  {
    id: "the-statement",
    category: "shoes",
    name: "The Statement",
    description: "Sneaker premium cuir blanc. Coupe sobre, finition main.",
    price: 180,
    image: "/shop/shoes/c1.jpeg",
    badge: "Best-seller",
  },
  {
    id: "court-royale",
    category: "shoes",
    name: "Court Royale",
    description: "Court classique, cuir grain. Polyvalence absolue.",
    price: 160,
    image: "/shop/shoes/c2.jpeg",
  },
  {
    id: "the-loafer",
    category: "shoes",
    name: "The Loafer",
    description: "Mocassin daim, semelle souple. Chic decontracte.",
    price: 145,
    image: "/shop/shoes/c3.jpeg",
  },
  {
    id: "the-runner",
    category: "shoes",
    name: "The Runner",
    description: "Runner technique, mesh respirant. Confort city.",
    price: 135,
    image: "/shop/shoes/c4.jpeg",
  },
  {
    id: "the-classic",
    category: "shoes",
    name: "The Classic",
    description: "Sneaker noir bas. Le passe-partout signature.",
    price: 150,
    image: "/shop/shoes/c5.jpeg",
  },
];
