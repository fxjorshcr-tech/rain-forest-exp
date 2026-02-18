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
      "As darkness falls over the rainforest, a completely different world comes alive. The Night Rainforest Walk is one of our most magical experiences, taking you deep into the tropical forest after sunset to discover the incredible nocturnal wildlife that calls this place home.\n\nYour naturalist guide Gabriel will provide flashlights and specialized optical equipment for the observation of nocturnal creatures. The walk follows an easy, wide, and safe trail through the forest — approximately 1.5 hours of gentle walking that's accessible for all fitness levels. You don't need any special preparation; just bring your curiosity and sense of adventure.\n\nFrom the iconic red-eyed tree frog perched on a leaf to sleeping toucans, venomous snakes safely observed from a distance, and insects that camouflage so perfectly you'd never see them on your own — the diversity of nocturnal life is astonishing. The sounds of the rainforest at night are unlike anything you've experienced — a symphony of frogs, insects, and nocturnal birds that creates an atmosphere both thrilling and deeply peaceful.\n\nThis tour is perfect for nature lovers, photographers, and anyone seeking an unforgettable adventure. We'll pick you up from your hotel in La Fortuna and bring you back after the walk.",
    price: 70,
    duration: "3 hours",
    startTimes: ["5:00 PM"],
    schedule: "Daily departures",
    difficulty: "Easy",
    minPeople: 2,
    maxGroup: "Small groups",
    image: `${SUPABASE}/Rain%20Forest%20Ex/caminata-nocturna-1.webp`,
    gallery: [
      `${SUPABASE}/Rain%20Forest%20Ex/caminata-nocturna-1.webp`,
      `${SUPABASE}/Rain%20Forest%20Ex/caminata-nocturna-2.webp`,
      `${SUPABASE}/Rain%20Forest%20Ex/caminata-nocturna-3.webp`,
      `${SUPABASE}/Rain%20Forest%20Ex/caminata-nocturna-4.webp`,
      `${SUPABASE}/Rain%20Forest%20Ex/caminata-nocturna-5.webp`,
    ],
    includes: [
      "Round-trip hotel transportation in La Fortuna",
      "Certified naturalist guide",
      "Small groups",
      "Park entrance fee",
      "Water & snacks",
      "Flashlights & optical equipment",
    ],
    whatToBring: ["Insect repellent", "Rain jacket", "Comfortable clothing"],
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
      "The Sloth & Wildlife Tour is a guided safari through the lush rainforest, designed to bring you face to face with one of Costa Rica's most beloved creatures — the sloth. These gentle, slow-moving mammals are fascinating to observe in their natural habitat, and your expert guide Gabriel knows exactly where to find them.\n\nThe walk covers approximately 2 kilometers on mostly flat terrain, making it an easy and relaxed experience suitable for all ages and fitness levels. Along the way, you'll cross 2 hanging bridges that offer spectacular views of the forest canopy, and walk through beautiful tropical wet forest with its characteristic lush vegetation.\n\nBut sloths are just the beginning. As you walk through the trails, you'll have the opportunity to spot howler monkeys swinging through the canopy, colorful toucans perched on branches, tiny poison dart frogs on the forest floor, and an incredible variety of tropical birds and reptiles.\n\nAt the end of the tour, you'll enjoy a delicious tropical fruit snack while taking in a stunning view of the Arenal Volcano — the perfect way to wrap up your rainforest experience. Gabriel provides professional optical equipment including spotting scopes and binoculars, ensuring you get incredible close-up views of every animal.",
    price: 70,
    duration: "3 hours",
    startTimes: ["8:00 AM", "2:00 PM"],
    schedule: "Daily departures",
    difficulty: "Easy",
    minPeople: 2,
    maxGroup: "Small groups",
    image: `${SUPABASE}/Rain%20Forest%20Ex/perezosos1.webp`,
    gallery: [
      `${SUPABASE}/Rain%20Forest%20Ex/perezosos1.webp`,
      `${SUPABASE}/Rain%20Forest%20Ex/perezosos2.webp`,
      `${SUPABASE}/Rain%20Forest%20Ex/perezosos3.webp`,
      `${SUPABASE}/Rain%20Forest%20Ex/perezosos4.webp`,
    ],
    includes: [
      "Round-trip hotel transportation in La Fortuna",
      "Certified naturalist guide",
      "Small groups",
      "Park entrance fee",
      "Tropical fruit snack & water",
      "Optical equipment",
    ],
    whatToBring: ["Insect repellent", "Rain jacket", "Comfortable clothing"],
    highlights: [
      "Observe sloths in their natural habitat",
      "Cross 2 hanging bridges over the canopy",
      "Spot monkeys, toucans, and frogs",
      "Tropical fruit snack with Arenal Volcano view",
      "Easy 2km walk on mostly flat terrain",
      "Professional spotting scopes & binoculars",
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
      "The Arenal Hanging Bridges experience takes you into a 250-hectare forest reserve where you'll walk among the treetops on 6 spectacular hanging bridges. This is one of the most popular activities in La Fortuna, and for good reason — the perspective from the canopy level is absolutely breathtaking.\n\nThe terrain is relatively easy, with only some short slopes along the way, making this tour suitable for all ages and fitness levels. The well-maintained trails and bridges are safe and comfortable, allowing you to focus entirely on the incredible surroundings rather than worrying about the difficulty of the hike.\n\nAs you cross each bridge, suspended high above the forest floor, your guide Gabriel will share fascinating insights about the ecosystem, the plant life, and the incredible animals that inhabit this ancient forest. You'll learn about the complex relationships between species and how this tropical rainforest functions as one of the most biodiverse places on Earth.\n\nKeep your eyes open for howler monkeys, white-faced capuchins, colorful toucans, exotic snakes, and dozens of bird species. Gabriel's trained eye and professional optical equipment will help you spot wildlife you'd never find on your own.",
    price: 75,
    duration: "3 hours",
    startTimes: ["6:00 AM", "7:00 AM", "2:00 PM"],
    schedule: "Daily departures",
    difficulty: "Moderate",
    minPeople: 2,
    maxGroup: "Small groups",
    image: `${SUPABASE}/Rain%20Forest%20Ex/puentes1.webp`,
    gallery: [
      `${SUPABASE}/Rain%20Forest%20Ex/puentes1.webp`,
      `${SUPABASE}/Rain%20Forest%20Ex/puentes2.webp`,
      `${SUPABASE}/Fotos/mistico-hanging-bridges-arenal-view.webp`,
      `${SUPABASE}/Fotos/mistico-hanging-bridges-arenal.webp`,
      `${SUPABASE}/Fotos/mistico-park-hanging-bridges.webp`,
    ],
    includes: [
      "Round-trip hotel transportation in La Fortuna",
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
      "Easy terrain suitable for all ages",
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
      "The Arenal Volcano is Costa Rica's youngest and most iconic volcano, and this hike takes you directly along the historic 1968 lava flow — one of the most dramatic geological events in the country's history. During approximately 2 hours of trekking, you'll walk through a landscape that tells the story of destruction and renewal.\n\nYour guide Gabriel will share the fascinating 7,000-year history of Arenal Volcano, from its formation to the catastrophic 1968 eruption that destroyed the towns of Tabacón and Pueblo Nuevo, to the incredible way nature has reclaimed the lava fields. You'll see how pioneer plants have colonized the volcanic rock, creating a unique ecosystem found nowhere else.\n\nThe views from the lava trails are simply spectacular — the perfectly conical shape of Arenal rising above you, the vast Lake Arenal stretching into the distance, and the surrounding green mountains completing a panorama that will take your breath away.\n\nIf you wish, you can add a visit to the hot springs of your choice (additional cost), where you'll be able to enjoy the naturally heated thermal waters on your own for approximately three hours — the perfect way to relax after the hike. This is a must-do experience for anyone visiting La Fortuna.",
    price: 65,
    duration: "3 hours",
    startTimes: ["7:30 AM", "2:00 PM"],
    schedule: "Daily departures",
    difficulty: "Moderate",
    minPeople: 2,
    maxGroup: "Small groups",
    image: `${SUPABASE}/Rain%20Forest%20Ex/caminata1.jpg`,
    gallery: [
      `${SUPABASE}/Rain%20Forest%20Ex/caminata1.jpg`,
      `${SUPABASE}/Rain%20Forest%20Ex/caminata2.jpg`,
      `${SUPABASE}/Rain%20Forest%20Ex/caminata3.jpg`,
      `${SUPABASE}/Rain%20Forest%20Ex/caminata4.jpg`,
      `${SUPABASE}/Rain%20Forest%20Ex/caminata6.jpg`,
      `${SUPABASE}/Rain%20Forest%20Ex/caminata7.jpg`,
    ],
    includes: [
      "Round-trip hotel transportation in La Fortuna",
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
      "Optional hot springs visit (extra cost)",
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
    image: `${SUPABASE}/Rain%20Forest%20Ex/aves1.webp`,
    gallery: [
      `${SUPABASE}/Rain%20Forest%20Ex/aves1.webp`,
      `${SUPABASE}/Rain%20Forest%20Ex/aves2.webp`,
      `${SUPABASE}/Rain%20Forest%20Ex/aves3.webp`,
      `${SUPABASE}/Rain%20Forest%20Ex/aves4.webp`,
      `${SUPABASE}/Rain%20Forest%20Ex/aves5.webp`,
      `${SUPABASE}/Rain%20Forest%20Ex/aves6.webp`,
      `${SUPABASE}/Rain%20Forest%20Ex/aves7.webp`,
    ],
    includes: [
      "Round-trip hotel transportation in La Fortuna",
      "Certified naturalist guide",
      "Small groups",
      "Park entrance fee",
      "Water & snacks",
      "Professional optical equipment",
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
      "Local legend says that when God finished painting the sky, he came down to the Celeste River and washed his brushes — and that's how the river got its incredible sky-blue color. The scientific explanation is equally fascinating: the color comes from a chemical reaction between sulfur and calcium carbonate particles originating from the nearby Tenorio Volcano.\n\nThis full-day adventure takes you on a 6-kilometer hike through pristine rainforest within the Tenorio Volcano National Park. Along the way, you'll discover several breathtaking points of interest: the stunning Celeste River Waterfall cascading into a turquoise pool, the mysterious Blue Lagoon, a viewpoint overlooking the Tenorio Volcano, and \"Los Teñideros\" (The Dyeing Pot) — the exact magical spot where two clear rivers meet and the water suddenly turns an otherworldly shade of blue.\n\nThe hike through the dense rainforest is an experience in itself, with opportunities to spot wildlife including monkeys, toucans, and exotic tropical birds.\n\nWe'll wrap up this incredible experience with a delicious traditional Costa Rican lunch — the perfect finishing touch to our visit to one of the most fascinating places in Costa Rica. This is one of the country's most extraordinary natural wonders and a must-see for every visitor.",
    price: 120,
    duration: "7 hours",
    startTimes: ["7:30 AM"],
    schedule: "Daily departures",
    difficulty: "Moderate",
    minPeople: 2,
    maxGroup: "Small groups",
    image: `${SUPABASE}/Rain%20Forest%20Ex/caminata7.jpg`,
    gallery: [
      `${SUPABASE}/Rain%20Forest%20Ex/caminata7.jpg`,
      `${SUPABASE}/Rain%20Forest%20Ex/rio-celeste2.jpeg`,
      `${SUPABASE}/Fotos/rio-celeste-river-tenorio-blueriver-costa-rica.webp`,
      `${SUPABASE}/Fotos/rio-celeste-hike-tenorio-volcano-national-park-waterfalls-in-costa-rica-1.webp`,
    ],
    includes: [
      "Round-trip hotel transportation in La Fortuna",
      "Certified naturalist guide",
      "Traditional Costa Rican lunch",
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
      "Traditional Costa Rican lunch included",
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
      "This is the ultimate La Fortuna experience — a full day that combines the three most iconic attractions of the Arenal area into one unforgettable adventure.\n\nYour day begins in the morning with a visit to the 1968 Lava Flow, where you'll embark on a 2-hour hike learning about the last 7,000 years of Arenal Volcano's history. Walking along the ancient lava trails, you'll discover how nature has reclaimed these volcanic landscapes and enjoy spectacular views of the perfectly conical volcano.\n\nNext, you'll visit the famous La Fortuna Waterfall, where you can take a refreshing swim in the crystal-clear, cool waters of the Fortuna River at the base of this impressive 70-meter cascade — one of the most beautiful waterfalls in all of Costa Rica.\n\nAfter working up an appetite, you'll enjoy a delicious traditional Costa Rican lunch (\"casado\") before heading to the Hanging Bridges. Here, you'll walk through one of the oldest forests in the area, crossing suspended bridges at canopy level where you can observe monkeys, snakes, frogs, and magnificent birds.\n\nWhen you book this tour, you can also choose from around 5 different hot springs options (additional cost) to relax after a long and exciting day. You'll have approximately 3 hours to soak in the naturally heated thermal waters before being transported back to your hotel — the perfect ending to the perfect day in La Fortuna.",
    price: 170,
    duration: "8 hours",
    startTimes: ["7:30 AM"],
    schedule: "Daily departures",
    difficulty: "Moderate",
    minPeople: 2,
    maxGroup: "Small groups",
    image: `${SUPABASE}/Rain%20Forest%20Ex/combo1.jpeg`,
    gallery: [
      `${SUPABASE}/Rain%20Forest%20Ex/combo1.jpeg`,
      `${SUPABASE}/Rain%20Forest%20Ex/combo2.jpeg`,
      `${SUPABASE}/Rain%20Forest%20Ex/combo3.jpeg`,
      `${SUPABASE}/Rain%20Forest%20Ex/combo4.jpg`,
      `${SUPABASE}/Rain%20Forest%20Ex/combo5.jpg`,
      `${SUPABASE}/Rain%20Forest%20Ex/combo6.jpg`,
      `${SUPABASE}/Rain%20Forest%20Ex/combo7.jpeg`,
    ],
    includes: [
      "Round-trip hotel transportation in La Fortuna",
      "Certified naturalist guide",
      "Traditional Costa Rican lunch",
      "Small groups",
      "All park entrance fees",
      "Water & snacks",
      "Optical equipment",
    ],
    whatToBring: ["Insect repellent", "Rain jacket", "Comfortable clothing", "Swimsuit & towel"],
    highlights: [
      "3 top attractions in 1 day",
      "Hike the 1968 Arenal lava flow",
      "Swim at La Fortuna Waterfall",
      "Cross hanging bridges at canopy level",
      "Traditional Costa Rican lunch included",
      "Optional hot springs visit (~3 hours, extra cost)",
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
      "Round-trip hotel transportation in La Fortuna",
      "Certified naturalist guide",
      "Small groups",
      "Entrance fee",
      "Water & snacks",
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
  if (!supabase) return tours;
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
  if (!supabase) return tours.find((t) => t.slug === slug);
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
