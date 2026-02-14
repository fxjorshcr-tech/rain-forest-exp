import { supabase } from "@/lib/supabase";

export interface Tour {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  price: number;
  duration: string;
  startTimes: string[];
  schedule: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  minPeople: number;
  maxGroup: string;
  image: string;
  gallery: string[];
  includes: string[];
  whatToBring: string[];
  highlights: string[];
  note: string;
}

interface TourRow {
  slug: string;
  title: string;
  short_title: string;
  description: string;
  long_description: string;
  price: number;
  duration: string;
  start_times: string[];
  schedule: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  min_people: number;
  max_group: string;
  image: string;
  gallery: string[];
  includes: string[];
  what_to_bring: string[];
  highlights: string[];
  note: string;
}

function mapRow(row: TourRow): Tour {
  return {
    slug: row.slug,
    title: row.title,
    shortTitle: row.short_title,
    description: row.description,
    longDescription: row.long_description,
    price: row.price,
    duration: row.duration,
    startTimes: row.start_times,
    schedule: row.schedule,
    difficulty: row.difficulty,
    minPeople: row.min_people,
    maxGroup: row.max_group,
    image: row.image,
    gallery: row.gallery,
    includes: row.includes,
    whatToBring: row.what_to_bring,
    highlights: row.highlights,
    note: row.note,
  };
}

const SUPABASE =
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public";

// Static fallback data (used when Supabase is unavailable or for client components)
export const tours: Tour[] = [
  {
    slug: "night-walk",
    title: "Night Rainforest Walk",
    shortTitle: "Night Walk",
    description:
      "Discover the magnificent nocturnal world of the rainforest. Through a gentle 1.5-hour walk, observe wildlife such as frogs, including the famous red-eyed tree frog, nocturnal and diurnal birds, insects that camouflage with the environment in impressive ways, and much more — an experience to live.",
    longDescription:
      "As darkness falls over the rainforest, a completely different world comes alive. The Night Rainforest Walk is one of our most magical experiences, taking you deep into the tropical forest after sunset to discover the incredible nocturnal wildlife that calls this place home.\n\nDuring this guided walk of approximately 1.5 hours, your certified naturalist guide will use specialized optical equipment to help you spot the incredible creatures that emerge at night. From the iconic red-eyed tree frog perched on a leaf to sleeping toucans, venomous snakes safely observed from a distance, and insects that camouflage so perfectly you'd never see them on your own.\n\nThe sounds of the rainforest at night are unlike anything you've experienced — a symphony of frogs, insects, and nocturnal birds that creates an atmosphere both thrilling and deeply peaceful. This tour is perfect for nature lovers, photographers, and anyone seeking an unforgettable adventure.",
    price: 70,
    duration: "3 hours",
    startTimes: ["5:00 PM"],
    schedule: "Daily departures",
    difficulty: "Easy",
    minPeople: 2,
    maxGroup: "Small groups",
    image: `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.46%20AM%20(2).jpeg`,
    gallery: [
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.46%20AM%20(2).jpeg`,
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.47%20AM%20(2).jpeg`,
    ],
    includes: [
      "Certified naturalist guide",
      "Small groups",
      "Park entrance fee",
      "Water & snacks",
      "Optical equipment",
    ],
    whatToBring: ["Insect repellent", "Rain jacket", "Comfortable clothing", "Flashlight"],
    highlights: [
      "Spot the famous red-eyed tree frog",
      "Observe nocturnal birds and sleeping toucans",
      "See camouflaged insects and exotic spiders",
      "Professional optical equipment provided",
      "Expert naturalist guide shares deep knowledge",
    ],
    note: "This tour requires a minimum of 2 adults.",
  },
  {
    slug: "sloth-tour",
    title: "Sloth & Wildlife Tour",
    shortTitle: "Sloth Tour",
    description:
      "Through a guided safari in the rainforest, you can enjoy these beautiful and interesting mammals in their natural habitat, as well as observe other animals such as monkeys, toucans, frogs, and more.",
    longDescription:
      "The Sloth & Wildlife Tour is a guided safari through the lush rainforest, designed to bring you face to face with one of Costa Rica's most beloved creatures — the sloth. These gentle, slow-moving mammals are fascinating to observe in their natural habitat, and our expert guides know exactly where to find them.\n\nBut sloths are just the beginning. As you walk through the forest trails, you'll have the opportunity to spot howler monkeys swinging through the canopy, colorful toucans perched on branches, tiny poison dart frogs on the forest floor, and a incredible variety of tropical birds and reptiles.\n\nYour certified naturalist guide provides professional optical equipment including spotting scopes and binoculars, ensuring you get incredible close-up views of every animal. This tour is perfect for families, wildlife photographers, and anyone who wants a relaxed, immersive experience in the rainforest.",
    price: 70,
    duration: "3 hours",
    startTimes: ["8:00 AM", "2:00 PM"],
    schedule: "Daily departures",
    difficulty: "Easy",
    minPeople: 2,
    maxGroup: "Small groups",
    image: `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.46%20AM%20(3).jpeg`,
    gallery: [
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.46%20AM%20(3).jpeg`,
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.46%20AM%20(1).jpeg`,
    ],
    includes: [
      "Certified naturalist guide",
      "Small groups",
      "Park entrance fee",
      "Water & snacks",
      "Optical equipment",
    ],
    whatToBring: ["Insect repellent", "Rain jacket", "Comfortable clothing"],
    highlights: [
      "Observe sloths in their natural habitat",
      "Spot monkeys, toucans, and frogs",
      "Professional spotting scopes & binoculars",
      "Relaxed walk suitable for all ages",
      "Small group for personalized experience",
    ],
    note: "This tour requires a minimum of 2 adults.",
  },
  {
    slug: "hanging-bridges",
    title: "Arenal Hanging Bridges",
    shortTitle: "Hanging Bridges",
    description:
      "With more than 250 hectares of forest, the hanging bridges reserve is the perfect place to learn from a naturalist guide about the natural history of this ecosystem. Walk at canopy level across 6 hanging bridges and observe animals such as monkeys, birds, snakes, and much more.",
    longDescription:
      "The Arenal Hanging Bridges experience takes you into a 250-hectare forest reserve where you'll walk among the treetops on 6 spectacular hanging bridges. This is one of the most popular activities in La Fortuna, and for good reason — the perspective from the canopy level is absolutely breathtaking.\n\nAs you cross each bridge, suspended high above the forest floor, your certified naturalist guide will share fascinating insights about the ecosystem, the plant life, and the incredible animals that inhabit this ancient forest. You'll learn about the complex relationships between species and how this tropical rainforest functions as one of the most biodiverse places on Earth.\n\nKeep your eyes open for howler monkeys, white-faced capuchins, colorful toucans, exotic snakes, and dozens of bird species. The reserve's well-maintained trails and bridges offer a safe and comfortable way to experience the rainforest from a completely unique vantage point.",
    price: 75,
    duration: "3 hours",
    startTimes: ["6:00 AM", "7:00 AM", "2:00 PM"],
    schedule: "Daily departures",
    difficulty: "Moderate",
    minPeople: 2,
    maxGroup: "Small groups",
    image: `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.47%20AM%20(4).jpeg`,
    gallery: [
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.47%20AM%20(4).jpeg`,
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.47%20AM%20(1).jpeg`,
    ],
    includes: [
      "Certified naturalist guide",
      "Small groups",
      "Park entrance fee",
      "Water & snacks",
      "Optical equipment",
    ],
    whatToBring: ["Insect repellent", "Rain jacket", "Comfortable clothing"],
    highlights: [
      "Walk across 6 hanging bridges at canopy level",
      "250+ hectares of pristine rainforest reserve",
      "Spot monkeys, toucans, and exotic birds",
      "Panoramic views of the forest canopy",
      "Learn about the ecosystem from expert guide",
    ],
    note: "This tour requires a minimum of 2 adults.",
  },
  {
    slug: "volcano-hike",
    title: "Arenal Volcano Hike",
    shortTitle: "Volcano Hike",
    description:
      "Arenal Volcano is the youngest volcano in Costa Rica. Through a 2-hour hike on the 1968 lava flow, you'll learn about the eruptive history of this important Costa Rican massif, while enjoying magnificent views of the perfectly conical volcano, Lake Arenal, and surrounding areas.",
    longDescription:
      "The Arenal Volcano is Costa Rica's youngest and most iconic volcano, and this hike takes you directly along the historic 1968 lava flow — one of the most dramatic geological events in the country's history. During approximately 2 hours of trekking, you'll walk through a landscape that tells the story of destruction and renewal.\n\nYour certified naturalist guide will share the fascinating 7,000-year history of Arenal Volcano, from its formation to the catastrophic 1968 eruption that destroyed the town of Tabacón, to the incredible way nature has reclaimed the lava fields. You'll see how pioneer plants have colonized the volcanic rock, creating a unique ecosystem found nowhere else.\n\nThe views from the lava trails are simply spectacular — the perfectly conical shape of Arenal rising above you, the vast Lake Arenal stretching into the distance, and the surrounding green mountains completing a panorama that will take your breath away. This is a must-do experience for anyone visiting La Fortuna.",
    price: 65,
    duration: "3 hours",
    startTimes: ["7:30 AM", "2:00 PM"],
    schedule: "Daily departures",
    difficulty: "Moderate",
    minPeople: 2,
    maxGroup: "Small groups",
    image: `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.48%20AM%20(2).jpeg`,
    gallery: [
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.48%20AM%20(2).jpeg`,
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.49%20AM.jpeg`,
    ],
    includes: [
      "Certified naturalist guide",
      "Small groups",
      "Park entrance fee",
      "Water & snacks",
      "Optical equipment",
    ],
    whatToBring: ["Insect repellent", "Rain jacket", "Comfortable clothing"],
    highlights: [
      "Hike the historic 1968 lava flow",
      "Learn 7,000 years of volcanic history",
      "Spectacular views of the perfect cone",
      "See how nature reclaims lava fields",
      "Panoramic views of Lake Arenal",
    ],
    note: "This tour requires a minimum of 2 adults.",
  },
  {
    slug: "birdwatching",
    title: "Birdwatching Tour",
    shortTitle: "Birdwatching",
    description:
      "Costa Rica is known for its great biodiversity, and with more than 900 bird species, it's paradise for bird lovers. On a walk through the foothills of Arenal Volcano in a private reserve, you can observe a great number of birds including toucans, tanagers, warblers, trogons, motmots, and many more colorful species.",
    longDescription:
      "Costa Rica is one of the world's premier birdwatching destinations, home to more than 900 species of birds — and the Arenal region is one of the richest birding areas in the entire country. This tour takes you through a private reserve on the foothills of the Arenal Volcano, where the diversity of habitats creates ideal conditions for an extraordinary variety of birdlife.\n\nYour certified naturalist guide is an experienced birder who knows exactly where and when to find the most spectacular species. Using professional optical equipment including high-powered spotting scopes and binoculars, you'll get incredible views of toucans, tanagers, warblers, trogons, motmots, hummingbirds, and many other colorful tropical birds.\n\nWhether you're a seasoned birder looking to add to your life list or a casual nature lover who simply enjoys the beauty of tropical birds, this tour offers an unforgettable experience. The early morning departure (5:15 AM) takes advantage of peak bird activity, while the afternoon option offers a different set of species to observe.",
    price: 75,
    duration: "4 hours",
    startTimes: ["5:15 AM", "2:30 PM"],
    schedule: "Daily departures",
    difficulty: "Easy",
    minPeople: 2,
    maxGroup: "Small groups",
    image: `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.48%20AM.jpeg`,
    gallery: [
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.48%20AM.jpeg`,
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.47%20AM%20(2).jpeg`,
    ],
    includes: [
      "Certified naturalist guide",
      "Small groups",
      "Park entrance fee",
      "Water & snacks",
      "Optical equipment",
    ],
    whatToBring: ["Insect repellent", "Rain jacket", "Comfortable clothing"],
    highlights: [
      "900+ bird species in Costa Rica",
      "Spot toucans, trogons, motmots & tanagers",
      "Professional spotting scopes provided",
      "Private reserve on Arenal Volcano foothills",
      "Expert birding guide with deep knowledge",
    ],
    note: "This tour requires a minimum of 2 adults.",
  },
  {
    slug: "rio-celeste",
    title: "Rio Celeste Adventure",
    shortTitle: "Rio Celeste",
    description:
      "Local legend says that when God painted the sky, he washed his brushes in the Celeste River. Through a 6km hike in a rainforest you can enjoy one of the wonders of Costa Rica — the magical place where the water changes its colors.",
    longDescription:
      "Local legend says that when God finished painting the sky, he came down to the Celeste River and washed his brushes — and that's how the river got its incredible sky-blue color. The scientific explanation is equally fascinating: the color comes from a chemical reaction between sulfur and calcium carbonate particles originating from the nearby Tenorio Volcano.\n\nThis full-day adventure takes you on a 6-kilometer hike through pristine rainforest within the Tenorio Volcano National Park. Along the way, you'll discover several breathtaking points of interest: the stunning Celeste River Waterfall cascading into a turquoise pool, the mysterious Blue Lagoon, a viewpoint overlooking the Tenorio Volcano, and \"Los Teñideros\" (The Dyeing Pot) — the exact magical spot where two clear rivers meet and the water suddenly turns an otherworldly shade of blue.\n\nThe hike through the dense rainforest is an experience in itself, with opportunities to spot wildlife including monkeys, toucans, and exotic tropical birds. This is one of Costa Rica's most extraordinary natural wonders and a must-see for every visitor.",
    price: 120,
    duration: "7 hours",
    startTimes: ["7:30 AM"],
    schedule: "Daily departures",
    difficulty: "Moderate",
    minPeople: 2,
    maxGroup: "Small groups",
    image: `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.48%20AM%20(4).jpeg`,
    gallery: [
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.48%20AM%20(4).jpeg`,
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.47%20AM%20(1).jpeg`,
    ],
    includes: [
      "Certified naturalist guide",
      "Small groups",
      "National Park entrance fee",
      "Water & snacks",
      "Optical equipment",
    ],
    whatToBring: ["Insect repellent", "Rain jacket", "Comfortable clothing"],
    highlights: [
      "See the magical sky-blue Celeste River",
      "Visit the stunning Celeste Waterfall",
      "Discover Los Teñideros where water changes color",
      "6km hike through pristine rainforest",
      "Explore Tenorio Volcano National Park",
    ],
    note: "This tour requires a minimum of 2 adults.",
  },
  {
    slug: "best-of-arenal",
    title: "The Best of Arenal — Full Day Combo",
    shortTitle: "Best of Arenal",
    description:
      "In this guided excursion you can discover the 3 main attractions of the Fortuna area: the 1968 Lava Flow hike, La Fortuna Waterfall, and the Hanging Bridges — all in one unforgettable day with a traditional Costa Rican lunch included.",
    longDescription:
      "This is the ultimate La Fortuna experience — a full day that combines the three most iconic attractions of the Arenal area into one unforgettable adventure.\n\nYour day begins in the morning with a visit to the 1968 Lava Flow, where you'll embark on a 2-hour hike learning about the last 7,000 years of Arenal Volcano's history. Walking along the ancient lava trails, you'll discover how nature has reclaimed these volcanic landscapes and enjoy spectacular views of the perfectly conical volcano.\n\nNext, you'll visit the famous La Fortuna Waterfall, where you can take a refreshing swim in the crystal-clear, cool waters of the Fortuna River at the base of this impressive 70-meter cascade — one of the most beautiful waterfalls in all of Costa Rica.\n\nAfter working up an appetite, you'll enjoy a delicious traditional Costa Rican lunch (\"casado\") before heading to the Hanging Bridges. Here, you'll walk through one of the oldest forests in the area, crossing suspended bridges at canopy level where you can observe monkeys, snakes, frogs, and magnificent birds.\n\nThis combo tour is the best way to experience everything La Fortuna has to offer in a single day.",
    price: 170,
    duration: "8 hours",
    startTimes: ["7:30 AM"],
    schedule: "Daily departures",
    difficulty: "Moderate",
    minPeople: 2,
    maxGroup: "Small groups",
    image: `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.49%20AM%20(1).jpeg`,
    gallery: [
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.49%20AM%20(1).jpeg`,
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.48%20AM%20(2).jpeg`,
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.47%20AM%20(4).jpeg`,
    ],
    includes: [
      "Certified naturalist guide",
      "Traditional Costa Rican lunch",
      "Small groups",
      "All park entrance fees",
      "Water & snacks",
      "Optical equipment",
    ],
    whatToBring: ["Insect repellent", "Rain jacket", "Comfortable clothing"],
    highlights: [
      "3 top attractions in 1 day",
      "Hike the 1968 Arenal lava flow",
      "Swim at La Fortuna Waterfall",
      "Cross hanging bridges at canopy level",
      "Traditional Costa Rican lunch included",
    ],
    note: "This tour requires a minimum of 2 adults.",
  },
  {
    slug: "costa-rican-family-visit",
    title: "Visit a Costa Rican Family",
    shortTitle: "Family Visit",
    description:
      "Costa Rica is a country incredibly rich in biodiversity, but also in culture. In this activity you'll discover the roots of our farmers by visiting a Costa Rican family — be a farmer for a day, milk a cow, extract sugar cane juice, and enjoy a traditional lunch.",
    longDescription:
      "Costa Rica is famous for its incredible biodiversity, but the country is equally rich in culture and tradition. This unique experience takes you beyond the typical tourist trail to discover the authentic roots of Costa Rican rural life by visiting a real local family.\n\nDuring this 2-hour immersive tour, you'll step into the daily life of a Costa Rican farming family and become a \"farmer for a day.\" You'll participate in hands-on activities that have been part of Costa Rican rural life for generations: feeding the farm animals, milking a cow by hand, learning to extract fresh sugar cane juice using a traditional press (trapiche), and discovering the process of distilling Costa Rica's traditional liquor.\n\nThe experience culminates with a delicious traditional Costa Rican lunch prepared by the family, giving you a true taste of authentic \"Tico\" cuisine. This is more than a tour — it's a genuine cultural exchange that gives you a deep appreciation for the warmth, hospitality, and traditions of the Costa Rican people.\n\nPerfect for families, couples, and anyone who wants to go beyond nature tours and experience the human side of Costa Rica.",
    price: 70,
    duration: "3 hours",
    startTimes: ["9:30 AM", "12:00 PM"],
    schedule: "Daily departures",
    difficulty: "Easy",
    minPeople: 2,
    maxGroup: "Small groups",
    image: `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.46%20AM.jpeg`,
    gallery: [
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.46%20AM.jpeg`,
      `${SUPABASE}/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.46%20AM%20(1).jpeg`,
    ],
    includes: [
      "Certified naturalist guide",
      "Small groups",
      "Entrance fee",
      "Water & snacks",
      "Optical equipment",
    ],
    whatToBring: ["Insect repellent", "Rain jacket", "Comfortable clothing"],
    highlights: [
      "Visit a real Costa Rican farming family",
      "Milk a cow and feed farm animals",
      "Extract fresh sugar cane juice",
      "Taste traditional Costa Rican liquor",
      "Enjoy authentic home-cooked lunch",
    ],
    note: "This tour requires a minimum of 2 adults.",
  },
];

// Async functions that fetch from Supabase (with static fallback)
export async function getTours(): Promise<Tour[]> {
  try {
    const { data, error } = await supabase
      .from("rain_forest_exp_tours")
      .select("*")
      .eq("active", true)
      .order("sort_order");

    if (error || !data || data.length === 0) return tours;
    return data.map(mapRow);
  } catch {
    return tours;
  }
}

export async function getTourBySlug(slug: string): Promise<Tour | undefined> {
  try {
    const { data, error } = await supabase
      .from("rain_forest_exp_tours")
      .select("*")
      .eq("slug", slug)
      .eq("active", true)
      .single();

    if (error || !data) return tours.find((t) => t.slug === slug);
    return mapRow(data);
  } catch {
    return tours.find((t) => t.slug === slug);
  }
}
