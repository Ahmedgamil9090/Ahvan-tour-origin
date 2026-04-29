'use client';
import { useState } from 'react';
import { Instagram, Send, Facebook, X, Car, Plane, MapPin, Images, Menu, Phone, ShieldCheck, Globe, Star } from 'lucide-react';
import { TOURS, CONTACTS, LANGUAGES } from './tours-data';

export default function Home() {
  const [lang, setLang] = useState('en'); 
  const [activeAlbum, setActiveAlbum] = useState<any>(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const t = LANGUAGES[lang];

  // Меню с добавленным разделом About Us
  const menu = {
    ru: { home: "Главная", trips: "Экскурсии", gallery: "Галерея", about: "О нас", transfer: "Трансфер", contact: "Контакты" },
    en: { home: "Home", trips: "Trips", gallery: "Gallery", about: "About Us", transfer: "Transfer", contact: "Contacts" },
    de: { home: "Startseite", trips: "Touren", gallery: "Galerie", about: "Über uns", transfer: "Transfer", contact: "Kontakte" },
    pl: { home: "Główna", trips: "Wycieczki", gallery: "Galeria", about: "O nas", transfer: "Transfer", contact: "Kontakt" },
    fr: { home: "Accueil", trips: "Excursions", gallery: "Galerie", about: "À propos", transfer: "Transfert", contact: "Contacts" },
    ro: { home: "Acasă", trips: "Tururi", gallery: "Galerie", about: "Despre noi", transfer: "Transfer", contact: "Contact" }
  }[lang] || { home: "Home", trips: "Trips", gallery: "Gallery", about: "About Us", transfer: "Transfer", contact: "Contacts" };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* 1. MODAL DATA PROTECTION */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[300] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-8 border-b flex justify-between items-center bg-slate-50">
              <span className="font-black uppercase italic tracking-tighter text-xl text-slate-900">Data Protection</span>
              <button onClick={() => setIsPrivacyOpen(false)} className="text-slate-400 hover:text-black transition-colors"><X /></button>
            </div>
            <div className="p-8 overflow-y-auto text-sm text-slate-600 space-y-6 leading-relaxed custom-scrollbar">
              <p className="font-bold">Responsible: Ahmed (Ahvan Tour)</p>
              <p>We process data exclusively for tour bookings via WhatsApp. No third-party data distribution.</p>
              <p>You have the right to request deletion of your contact data at any time.</p>
            </div>
            <div className="p-6 bg-slate-50 border-t">
              <button onClick={() => setIsPrivacyOpen(false)} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* 2. NAVIGATION */}
      <nav className="bg-white/95 backdrop-blur-lg border-b sticky top-0 z-[100] px-4 h-20 flex justify-between items-center shadow-sm">
        <a href="#home" className="flex items-center h-full shrink-0">
          <div className="bg-white p-1 rounded-lg border border-slate-100">
            <img src="/ahvan.svg" alt="AhVan Tour" className="h-10 md:h-14 w-auto object-contain" />
          </div>
        </a>

        <div className="hidden lg:flex gap-8 items-center ml-auto mr-8">
          {Object.entries(menu).map(([key, label]) => (
            <a key={key} href={`#${key}`} className="text-[11px] uppercase font-black tracking-[0.2em] text-slate-600 hover:text-orange-600 transition-colors italic">{label}</a>
          ))}
          <div className="flex gap-1 ml-4 border-l pl-6">
            {Object.keys(LANGUAGES).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`text-[10px] font-bold px-2 py-1 rounded-md border ${lang === l ? 'bg-orange-600 text-white border-orange-600' : 'text-slate-400 border-transparent'}`}>{LANGUAGES[l].name}</button>
            ))}
          </div>
        </div>

        <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={28} />
        </button>

        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b shadow-2xl lg:hidden flex flex-col p-6 gap-5 animate-in slide-in-from-top">
            {Object.entries(menu).map(([key, label]) => (
              <a key={key} href={`#${key}`} onClick={() => setIsMenuOpen(false)} className="text-lg uppercase font-black tracking-widest text-slate-900 border-b pb-2 italic">{label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO & TRIPS & GALLERY (Твой код без изменений) */}
      <section id="home"> {/* ... */}</section>
      <section id="trips"> {/* ... */}</section>
      <section id="gallery"> {/* ... */}</section>

      {/* 3. SECTION: ABOUT US (Добавляем сюда!) */}
      <section id="about" className="py-24 bg-white scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" // ЗАМЕНИТЬ НА ФОТО АХМЕДА
                  className="w-full aspect-[4/5] object-cover" 
                  alt="Ahmed - Ahvan Tour Founder" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-8 rounded-3xl shadow-xl hidden md:block z-20">
                <div className="text-4xl font-black italic leading-none">2006</div>
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-80">Experience Since</div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-orange-600 font-black uppercase text-xs tracking-[0.3em] mb-6">
                <ShieldCheck size={18} /> Trusted Expertise
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-slate-900 mb-8">
                About <span className="text-orange-600">Us</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>My name is <span className="text-slate-900 font-black italic">Ahmed</span>, founder of Ahvan Tour and a passionate excursion planner since 2006. With many years of experience in tourism, I offer customized trips and unforgettable experiences across Egypt.</p>
                <p>I currently live in <span className="text-slate-900 font-bold border-b-2 border-orange-600">Germany</span> but I am originally Egyptian. This unique background allows me to understand both cultures and provide a reliable, professional, and customer-focused service.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {["Desert safari", "Boat trips", "Private Cairo/Luxor", "Transfers"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-black uppercase tracking-wider text-slate-800">
                      <Star size={14} className="text-orange-600 fill-orange-600" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRANSFER SECTION (Твой код) */}
      <section id="transfer"> {/* ... */}</section>

      {/* 5. FOOTER (Исправленный) */}
      <footer id="contact" className="py-20 bg-slate-950 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="text-4xl font-black italic text-orange-600 mb-4 tracking-tighter uppercase">AhVan Tour</div>
          <a href={`tel:${CONTACTS.phone}`} className="text-xl font-bold mb-10 tracking-widest">{CONTACTS.phone}</a>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-12">
            {/* Твои соцсети */}
          </div>

          <button 
            onClick={() => setIsPrivacyOpen(true)}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 hover:text-orange-600 transition-colors mb-6"
          >
            Data Protection
          </button>
          
          <p className="text-slate-800 text-[10px] uppercase tracking-[0.4em] font-bold">Quality matters. Since 2026.</p>
        </div>
      </footer>
    </main>
  );
}