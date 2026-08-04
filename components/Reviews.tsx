'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface ReviewsProps {
  lang?: string;
}

export default function Reviews({ lang = 'en' }: ReviewsProps) {
  const isRu = lang === 'ru';

  const reviews = [
    {
      id: 1,
      name: isRu ? 'Елена' : 'Elena',
      country: isRu ? 'Казахстан' : 'Kazakhstan',
      rating: 5,
      tour: isRu ? 'Морская прогулка на остров Утопия' : 'Utopia Island Boat Trip',
      text: isRu
        ? 'Замечательная организация! Трансфер приехал вовремя, гид отлично говорил по-русски. Обед на корабле был вкусным, а снорклинг просто незабываемый.'
        : 'Wonderful organization! Transfer arrived right on time, guide was great. Delicious lunch on the boat and unforgettable snorkeling.',
      date: isRu ? 'Март 2026' : 'March 2026'
    },
    {
      id: 2,
      name: 'Ahmed & Sarah',
      country: 'UK',
      rating: 5,
      tour: 'Super Safari Quad & Bedouin Village',
      text: 'Amazing experience! Driving quads through the desert was super fun, and the sunset in the bedouin village was picturesque. Highly recommended Ahvan Tour!',
      date: isRu ? 'Февраль 2026' : 'February 2026'
    },
    {
      id: 3,
      name: isRu ? 'Максим' : 'Maxim',
      country: isRu ? 'Украина' : 'Ukraine',
      rating: 5,
      tour: isRu ? 'Луксор — Долина Царей' : 'Luxor & Valley of the Kings',
      text: isRu
        ? 'Ездили в Луксор маленькой группой на комфортном авто. Всё прошло без спешки, гид-историк рассказал очень много интересного. Спасибо Ахмеду за сервис!'
        : 'Great private tour to Luxor in a comfortable car. No rush, very knowledgeable guide. Special thanks to Ahmed for the top-class service!',
      date: isRu ? 'Апрель 2026' : 'April 2026'
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
            {isRu ? 'Отзывы наших гостей' : 'Guest Reviews'}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            {isRu
              ? 'Честные впечатления и эмоции туристов, доверивших нам свой отдых в Египте.'
              : 'Real feedback from travelers who booked their Egypt adventures with us.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex text-amber-400 gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-6 text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="border-t border-slate-700/60 pt-4 mt-auto">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-white text-sm">
                    {review.name} <span className="text-slate-400 font-normal">({review.country})</span>
                  </span>
                  <span className="text-xs text-slate-500">{review.date}</span>
                </div>
                <p className="text-xs text-amber-400 font-medium">
                  {review.tour}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}