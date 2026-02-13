"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    location: "New York, USA",
    rating: 5,
    text: "Absolutely incredible experience! Our guide was so knowledgeable about the wildlife and made the night walk truly magical. We saw red-eyed tree frogs, a sleeping toucan, and even a sloth! Highly recommend.",
    date: "2 weeks ago",
    avatar: "SM",
  },
  {
    name: "Thomas Weber",
    location: "Berlin, Germany",
    rating: 5,
    text: "The best tour we did in Costa Rica. Small group, very personal attention, and our guide's passion for nature was contagious. The waterfall hike was breathtaking. A must-do in La Fortuna!",
    date: "1 month ago",
    avatar: "TW",
  },
  {
    name: "Emma Johnson",
    location: "London, UK",
    rating: 5,
    text: "We booked the combo day tour and it was worth every penny. From the hanging bridges to the hot springs, every moment was perfect. The traditional lunch was delicious too!",
    date: "3 weeks ago",
    avatar: "EJ",
  },
  {
    name: "Carlos Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    text: "Una experiencia maravillosa. El guia conoce cada rincon del bosque y nos mostro animales que nunca hubieramos visto solos. El tour nocturno fue increible. 100% recomendado.",
    date: "1 month ago",
    avatar: "CR",
  },
  {
    name: "Jennifer & Mark",
    location: "Toronto, Canada",
    rating: 5,
    text: "Highlight of our honeymoon! The safari float was so peaceful and we saw monkeys, iguanas, and a crocodile. Our guide was patient, fun, and incredibly knowledgeable. Thank you for an unforgettable day!",
    date: "2 months ago",
    avatar: "JM",
  },
  {
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    rating: 5,
    text: "Amazing wildlife tour! We saw three different species of sloths, toucans, and howler monkeys. The guide had professional spotting equipment and explained everything in detail. Best tour in La Fortuna.",
    date: "3 weeks ago",
    avatar: "YT",
  },
  {
    name: "Marie Dupont",
    location: "Paris, France",
    rating: 5,
    text: "Excellente experience dans la foret tropicale! Le guide etait tres professionnel et passionné. Les ponts suspendus offrent une vue magnifique. Je recommande vivement cette aventure.",
    date: "1 month ago",
    avatar: "MD",
  },
  {
    name: "David & Lisa",
    location: "Sydney, Australia",
    rating: 5,
    text: "We've done tours all over the world, and this was hands down one of the best. The personalized attention, the small group size, and the guide's encyclopedic knowledge of the rainforest made this special.",
    date: "2 weeks ago",
    avatar: "DL",
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="flex-shrink-0 w-[350px] bg-white rounded-xl p-6 shadow-md border border-gray-100 mx-3">
      {/* Google header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-forest-600 flex items-center justify-center text-white font-semibold text-sm">
          {review.avatar}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">
            {review.name}
          </h4>
          <p className="text-gray-500 text-xs">{review.location}</p>
        </div>
        <svg
          className="ml-auto w-5 h-5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      </div>
      {/* Stars */}
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
        ))}
        <span className="text-gray-400 text-xs ml-2">{review.date}</span>
      </div>
      {/* Text */}
      <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
    </div>
  );
}

export default function Reviews() {
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-forest-600 font-semibold text-sm tracking-[0.2em] uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
              Guests Say
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
              — {reviews.length * 12}+ reviews on Google
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
    </section>
  );
}
