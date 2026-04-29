'use client';
import { useState } from 'react';
import { Instagram, Send, Facebook, X, Car, Plane, MapPin, Images, Menu, Star, Globe } from 'lucide-react';
// Импортируем твои данные
import { TOURS, CONTACTS, LANGUAGES } from './tours-data';

export default function Home() {
  const [lang, setLang] = useState('en'); 
  const [activeAlbum, setActiveAlbum] = useState<any>(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Берем переводы из твоего файла
  const t = LANGUAGES[lang] || LANGUAGES.en;

  // Названия пунктов меню
  const menu: any = {
    ru: { home: "Главная", trips: "Экскурсии", gallery: "Галерея", transfer: "Трансфер", contact: "Контакты" },
    en: { home: "Home", trips: "Trips", gallery: "Gallery", transfer: "Transfer", contact: "Contacts" },
    de: { home: "Startseite", trips: "Touren", gallery: "Galerie", transfer: "Transfer", contact: "Kontakte" },
    pl: { home: "Główna", trips: "Wycieczki", gallery: "Galeria", transfer: "Transfer", contact: "Kontakty" },
    fr: { home: "Accueil", trips: "Excursions", gallery: "Galerie", transfer: "Transfert", contact: "Contacts" },
    ro: { home: "Acasă", trips: "Excursii", gallery: "Galerie", transfer: "Transfer", contact: "Contact" }
  }[lang] || { home: "Home", trips: "Trips", gallery: "Gallery", transfer: "Transfer", contact: "Contacts" };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* МОДАЛКА ГАЛЕРЕИ (ОТКРЫВАЕТСЯ ПРИ КЛИКЕ НА ТУР) */}
      {activeAlbum && (
        <div className="fixed inset-0 z-[200] bg-slate-950/98 backdrop-blur-xl flex items-center justify-center p-4">
           <button onClick={() => setActiveAlbum(null)} className="absolute top-6 right-6 text-white z-[210] hover:rotate-90 transition-transform">
             <X size={40} />
           </button>
           <div className="max-w-6xl w-full h-full overflow-y-auto p-4 custom-scrollbar">
             <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic mb-10 mt-16 tracking-tighter">
               {activeAlbum.names[lang]}
             </h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
               {activeAlbum.gallery?.map((img: string, idx: number) => (
                 <div key={idx} className="aspect-square overflow-hidden rounded-2xl border border-white/10">
                   <img src={img} className="w-full h-full object-cover" alt="Gallery" />
                 </div>
               ))}
             </div>
             <div className="max-w-4xl bg-white/5 rounded-[2.5rem] p-8 border border-white/10 backdrop-blur-sm mb-20">
               <p className="text-white text-lg leading-relaxed opacity-90 whitespace-pre-line">{activeAlbum.desc[lang]}</p>
               <div className="mt-10">
                 <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(t.waHello + activeAlbum.names[lang])}`} 
                    className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl inline-block">
                   {t.btn} — ${activeAlbum.price}
                 </a>
               </div>
             </div>
           </div>
        </div>
      )}

      {/* НАВИГАЦИЯ (logo.svg) */}
      <nav className="bg-white/95 backdrop-blur-lg border-b sticky top-0 z-[100] px-4 h-20 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 h-full">
          <img src="/logo.svg" alt="Logo" className="h-10 md:h-12 w-auto" />
          <div className="flex flex-col leading-[0.8]">
            <span className="text-xl md:text-2xl font-black uppercase italic tracking-tighter">AHWAN</span>
            <span className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-orange-600">TOUR</span>
          </div>
        </a>

        {/* Десктоп Меню */}
        <div className="hidden lg:flex gap-6 items-center ml-auto mr-8">
          {Object.entries(menu).map(([key, label]: any) => (
            <a key={key} href={`#${key}`} className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-600 hover:text-orange-600 italic">{label}</a>
          ))}
          <div className="flex gap-1 ml-4 border-l pl-4">
            {Object.keys(LANGUAGES).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`text-[10px] font-bold px-2 py-1 rounded ${lang === l ? 'bg-orange-600 text-white' : 'text-slate-400'}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}><Menu size={28} /></button>
      </nav>

      {/* HERO (Используем картинку Луксора как фон) */}
      <section id="home" className="relative h-[80vh] flex items-center justify-center text-center bg-slate-900">
          <img src={TOURS[2].image} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Background" />
          <div className="relative z-10 px-6">
            <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-4 text-white leading-none">{t.heroTitle}</h1>
            <p className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm md:text-xl">{t.heroSub}</p>
          </div>
      </section>

      {/* ТУРЫ (Прямые ссылки из твоего файла) */}
      <section id="trips" className="max-w-7xl mx-auto py-24 px-6 scroll-mt-20">
        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-16 text-center">{t.toursTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOURS.map((tour: any) => (
            <div key={tour.id} className="group bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="h-72 w-full relative overflow-hidden cursor-pointer" onClick={() => setActiveAlbum(tour)}>
                <img src={tour.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-1 rounded-full font-black text-xs shadow-lg">${tour.price}</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase italic mb-6 leading-tight">{tour.names[lang]}</h3>
                <button onClick={() => setActiveAlbum(tour)} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-colors">
                  {t.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSFER (Используем car5.jpeg, которую ты просил добавить) */}
      <section id="transfer" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8">{t.transTitle} <span className="text-orange-600">{t.transName}</span></h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">{t.transDesc}</p>
              <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\D/g, '')}`} className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em]">BOOK NOW</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <img src="/images/transfer/car1.jpeg" className="rounded-3xl shadow-xl aspect-[3/4] object-cover border-4 border-white" alt="Car" />
                <div className="space-y-4">
                  <img src="/images/transfer/car2.jpeg" className="rounded-3xl shadow-xl aspect-square object-cover border-4 border-white" alt="Car" />
                  <img src="/images/transfer/car5.jpeg" className="rounded-3xl shadow-xl aspect-square object-cover border-4 border-white" alt="Car" />
                </div>
            </div>
        </div>
      </section>

      {/* ГАЛЕРЕЯ (Картинки из первого тура - Оранжевый остров) */}
      <section id="gallery" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-black uppercase italic mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TOURS[0].gallery.slice(0, 8).map((img: string, idx: number) => (
              <div key={idx} className="aspect-square rounded-2xl overflow-hidden shadow-md">
                <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform" alt="Gallery" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-20 bg-slate-950 text-white text-center">
          <div className="flex flex-col items-center gap-6 mb-12">
            <img src="/logo.svg" className="h-12 w-auto invert" alt="Logo" />
            <div className="flex gap-8 opacity-60">
              <a href={CONTACTS.instagram} target="_blank"><Instagram /></a>
              <a href={CONTACTS.facebook} target="_blank"><Facebook /></a>
              <a href={CONTACTS.telegram} target="_blank"><Send /></a>
            </div>
          </div>
          <p className="text-slate-700 text-[10px] uppercase font-bold tracking-widest italic">Ahvan Tour Egypt © 2026</p>
      </footer>
    </main>
  );
}