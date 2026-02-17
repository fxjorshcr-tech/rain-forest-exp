"use client";

import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const AIRBNB_URL =
  "https://www.airbnb.co.cr/experiences/1114044?viralityEntryPoint=2&s=76&_set_bev_on_new_domain=1769402290_EAMzQ3YjA0ZjE4NW&set_everest_cookie_on_new_domain=1769402290.EAOTAwNzBiZTY1MDQyMz.6r_OkrJoZ9eWP-31fVg9jBkiO0e8ih6gDEIVBnAitlU";

const reviews = [
  {
    name: "Yeraldid",
    location: "Fullerton, California",
    rating: 5,
    text: "We had a great time with Josue. It's been our highlight of our trip thus far. We were able to see a Tucan, tarantula, unique hummingbird, spider monkies. The history and learning experience added to the experience. 10/10",
    date: "January 2026",
    avatar: "Y",
  },
  {
    name: "Ashmit",
    location: "United States",
    rating: 5,
    text: "The experience was truly magical from start to finish. We began the hike surrounded by thick clouds, which made us disappointed, but just as we reached the end of the lava trail, the skies cleared to reveal a breathtaking, picture-perfect view of the volcano — it felt incredibly rewarding and almost cinematic. Our guide was outstanding, sharing deep knowledge of Arenal's history and geology in a way that was engaging and easy to follow.",
    date: "January 2026",
    avatar: "A",
  },
  {
    name: "Eric",
    location: "Saint-Philippe, Canada",
    rating: 5,
    text: "What an amazing experience! We were kind of worried that it would be too much of a walk and a climb but it was just perfect. We never felt like if we were in a rush. Daniela took all the time to answer every single question we had and she was extremely knowledgable and funny. We very much appreciated this excursion as it's a fantastic site and we strongly recommend it.",
    date: "December 2025",
    avatar: "E",
  },
  {
    name: "Andrew",
    location: "Ann Arbor, Michigan",
    rating: 5,
    text: "This was a fascinating hike through volcanic territory filled with interesting facts from Gabriel and a few animal spottings. Gabriel made the trip very interesting, thrilling at times, and a great introduction to the Arenal area. Gabriel himself was a stellar guide who I would hire again and again.",
    date: "December 2025",
    avatar: "A",
  },
  {
    name: "Janine",
    location: "Newark, Delaware",
    rating: 5,
    text: "This experience was exactly what we were looking for. Our guide met us at the entrance and provided us so much useful information about what we were seeing. We hadn't yet seen a sloth on our trip and let the guide know. Within the first few minutes, she spotted one and got out the scope for us to take a look. Mission accomplished!",
    date: "November 2025",
    avatar: "J",
  },
  {
    name: "Peter",
    location: "Hamilton, Canada",
    rating: 5,
    text: "Tour guide was amazing, very knowledgeable about the location and very accommodating to our family. Highly recommend!",
    date: "November 2025",
    avatar: "P",
  },
  {
    name: "Rajiv",
    location: "New York, NY",
    rating: 5,
    text: "Gabriel's tour was a great experience especially if you're interested in geography and nature. He is extremely knowledgeable and was patient with all our questions. He even took a lot of pictures and videos from his scope when there were interesting finds along the way. I would strongly recommend his guided tour.",
    date: "April 2025",
    avatar: "R",
  },
  {
    name: "Griselda",
    location: "Tlaquepaque, Mexico",
    rating: 5,
    text: "Excelente atencion por parte de Gabriel, mucha informacion, siempre amable y resolviendo dudas, siempre atento en la comunicacion, en el inter del camino siempre estuvo dando alertas de donde debiamos pisar. Recomendado al 100!",
    date: "February 2025",
    avatar: "G",
  },
  {
    name: "Rachel",
    location: "New York, US",
    rating: 5,
    text: "The hike was great! Even though it was a rainy day and we couldn't see the volcano, Gabriel pointed out many things we wouldn't have noticed on our own and told us interesting facts about the wildlife and the land. Gabriel was very accommodating of our pace.",
    date: "February 2025",
    avatar: "R",
  },
  {
    name: "Sarah",
    location: "Chicago, Illinois",
    rating: 5,
    text: "Great opportunity to see the volcano and its surroundings! Climb to the viewing point and other points were very steep but not too bad overall. Our guide Gerardo was very knowledgeable and shared tons of information on the volcano! Would recommend!",
    date: "January 2025",
    avatar: "S",
  },
];

function AirbnbIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 ml-auto" fill="#FF5A5F">
      <path d="M12.001 18.275c-.918-1.209-1.758-2.469-2.509-3.771-.812-1.46-1.476-2.97-1.476-4.478 0-2.14 1.782-3.87 3.985-3.87 2.203 0 3.985 1.73 3.985 3.87 0 1.509-.664 3.018-1.476 4.478a29.82 29.82 0 01-2.509 3.771zm0 2.39c.104-.127.205-.253.32-.396a32.22 32.22 0 002.708-4.082c.895-1.61 1.64-3.316 1.64-5.161 0-2.916-2.395-5.26-5.339-5.26h-.658C7.726 5.766 5.33 8.11 5.33 11.026c0 1.845.746 3.55 1.64 5.16a32.22 32.22 0 002.708 4.083c.116.143.217.27.32.396l.166.206c.066.08.131.162.195.238l.31.36.332-.388.195-.238.166-.206c.038-.046.077-.094.115-.143l.224-.279zM12 12.376a2.35 2.35 0 110-4.7 2.35 2.35 0 010 4.7z" />
    </svg>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <a
      href={AIRBNB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-[350px] bg-white rounded-xl p-6 shadow-md border border-gray-100 mx-3 hover:shadow-lg transition-shadow cursor-pointer block"
    >
      {/* Airbnb header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-forest-600 flex items-center justify-center text-white font-semibold text-sm">
          {review.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm">
            {review.name}
          </h4>
          <p className="text-gray-500 text-xs">{review.location} &bull; {review.date}</p>
        </div>
        <AirbnbIcon />
      </div>
      {/* Stars */}
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
        ))}
      </div>
      {/* Text */}
      <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
    </a>
  );
}

export default function Reviews() {
  const { t } = useLanguage();
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-forest-600 font-semibold text-sm tracking-[0.2em] uppercase">
            {t.reviews.label}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {t.reviews.title1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
              {t.reviews.title2}
            </span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-gold-500 fill-gold-500"
                />
              ))}
            </div>
            <span className="text-gray-700 font-semibold">5.0</span>
            <span className="text-gray-500">
              — {reviews.length * 12}+ {t.reviews.reviewCount}
            </span>
          </div>
        </div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        <div className="animate-scroll-left flex w-max">
          {doubledReviews.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      {/* View all link */}
      <div className="text-center mt-10">
        <a
          href={AIRBNB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-forest-700 hover:text-forest-600 font-semibold transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF5A5F">
            <path d="M12.001 18.275c-.918-1.209-1.758-2.469-2.509-3.771-.812-1.46-1.476-2.97-1.476-4.478 0-2.14 1.782-3.87 3.985-3.87 2.203 0 3.985 1.73 3.985 3.87 0 1.509-.664 3.018-1.476 4.478a29.82 29.82 0 01-2.509 3.771zm0 2.39c.104-.127.205-.253.32-.396a32.22 32.22 0 002.708-4.082c.895-1.61 1.64-3.316 1.64-5.161 0-2.916-2.395-5.26-5.339-5.26h-.658C7.726 5.766 5.33 8.11 5.33 11.026c0 1.845.746 3.55 1.64 5.16a32.22 32.22 0 002.708 4.083c.116.143.217.27.32.396l.166.206c.066.08.131.162.195.238l.31.36.332-.388.195-.238.166-.206c.038-.046.077-.094.115-.143l.224-.279zM12 12.376a2.35 2.35 0 110-4.7 2.35 2.35 0 010 4.7z" />
          </svg>
          {t.reviews.viewAll}
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
