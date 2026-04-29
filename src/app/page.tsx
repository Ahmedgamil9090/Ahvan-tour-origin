'use client';
import { useState } from 'react';
import { Instagram, Send, Facebook, X, Car, Plane, MapPin, Images, Menu, Star, ShieldCheck } from 'lucide-react';
import { TOURS, CONTACTS, LANGUAGES } from './tours-data';

export default function Home() {
  const [lang, setLang] = useState('en'); 
  const [activeAlbum, setActiveAlbum] = useState<any>(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const t = LANGUAGES[lang];

  const menu: any = {
    ru: { home: "Главная", trips: "Экскурсии", gallery: "Галерея", about: "О нас", transfer: "Трансфер", contact: "Контакты" },
    en: { home: "Home", trips: "Trips", gallery: "Gallery", about: "About Us", transfer: "Transfer", contact: "Contacts" },
    de: { home: "Startseite", trips: "Touren", gallery: "Galerie", about: "Über uns", transfer: "Transfer", contact: "Kontakte" }
  }[lang] || { home: "Home", trips: "Trips", gallery: "Gallery", about: "About Us", transfer: "Transfer", contact: "Contacts" };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* NAVIGATION */}
      <nav className="bg-white/95 backdrop-blur-lg border-b sticky top-0 z-[100] px-4 h-20 flex justify-between items-center shadow-sm">
        <a href="#home" className="flex items-center gap-2 h-full shrink-0">
          {/* ИЗМЕНЕНО НА logo.svg */}
          <img 
            src="/logo.svg" 
            alt="Logo" 
            className="h-10 w-auto object-contain" 
          />
          <div className="flex leading-none gap-1">
            <span className="text-xl md:text-2xl font-black uppercase italic tracking-tighter">AHVAN</span>
            <span className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-orange-600">TOUR</span>
          </div>
        </a>

        <div className="hidden lg:flex gap-6 items-center ml-auto mr-8">
          {Object.entries(menu).map(([key, label]: any) => (
            <a key={key} href={`#${key}`} className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-600 hover:text-orange-600 transition-colors italic">{label}</a>
          ))}
          <div className="flex gap-1 ml-4 border-l pl-4">
            {['en', 'ru', 'de'].map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`text-[10px] font-bold px-2 py-1 rounded ${lang === l ? 'bg-orange-600 text-white' : 'text-slate-400'}`}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>

        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}><Menu size={28} /></button>
      </nav>

      {/* HERO */}
      <section id="home" className="relative h-[70vh] flex items-center justify-center text-center bg-slate-900 overflow-hidden">
          <img src="https://i2.wp.com/see.news/images/2024/03/-1711659992-0.jpg?resize=750,500&ssl=1" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Egypt" />
          <div className="relative z-10 px-6 text-white">
            <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-6 leading-none">{t.heroTitle}</h1>
            <p className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm md:text-lg bg-black/20 px-4 py-1 rounded-full inline-block">{t.heroSub}</p>
          </div>
      </section>

      {/* TRIPS */}
      <section id="trips" className="max-w-7xl mx-auto py-24 px-6 scroll-mt-20">
        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-16 text-center">{t.toursTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOURS.map((tour: any) => (
            <div key={tour.id} className="group bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-lg">
              <div className="h-72 w-full relative overflow-hidden cursor-pointer" onClick={() => setActiveAlbum(tour)}>
                <img src={tour.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={tour.names[lang]} />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-1 rounded-full font-black text-xs shadow-lg">${tour.price}</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase italic mb-6">{tour.names[lang]}</h3>
                <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}`} target="_blank" className="block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-colors">{t.btn}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSFER */}
      <section id="transfer" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">{t.transTitle} <span className="text-orange-600">{t.transName}</span></h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">{t.transDesc}</p>
              <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}`} className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest inline-block shadow-xl hover:bg-orange-600 uppercase">Book Transfer</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <img src="/images/transfer/car1.jpeg" className="rounded-[2.5rem] shadow-xl aspect-[3/4] object-cover border-4 border-white" alt="Car 1" />
                <div className="space-y-4">
                  <img src="/images/transfer/car2.jpeg" className="rounded-[2.5rem] shadow-xl aspect-square object-cover border-4 border-white" alt="Car 2" />
                  <img src="/images/transfer/car5.jpeg" className="rounded-[2.5rem] shadow-xl aspect-square object-cover border-4 border-white" alt="Car 5" />
                </div>
            </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-black uppercase italic mb-12 tracking-tighter">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TOURS.slice(0, 4).map((tour, idx) => (
              <div key={idx} className="aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white cursor-pointer" onClick={() => setActiveAlbum(tour)}>
                <img src={tour.image} className="w-full h-full object-cover hover:scale-105 transition-transform" alt="Gallery Image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-20 bg-slate-950 text-white text-center">
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="flex items-center gap-3">
               {/* ИЗМЕНЕНО НА logo.svg */}
               <img src="/logo.svg" className="h-10 w-auto invert" alt="Logo" />
               <span className="text-2xl font-black italic">AHVAN TOUR</span>
            </div>
            <div className="flex gap-8 opacity-60">
              <a href={CONTACTS.instagram} target="_blank"><Instagram size={24}/></a>
              <a href={CONTACTS.telegram} target="_blank"><Send size={24}/></a>
              <a href={CONTACTS.facebook} target="_blank"><Facebook size={24}/></a>
            </div>
          </div>
          <button onClick={() => setIsPrivacyOpen(true)} className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 hover:text-orange-600 mb-6">Data Protection</button>
          <p className="text-slate-900 text-[10px] uppercase font-bold tracking-widest italic">Ahvan Tour Egypt © 2026</p>
      </footer>
    </main>
  );
}