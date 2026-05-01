'use client';
import { useState } from 'react';
import { Instagram, Send, Facebook, X, Car, Plane, MapPin, Images, Menu, ShieldCheck, Globe, Star } from 'lucide-react';
import { TOURS, CONTACTS, LANGUAGES } from './tours-data';

export default function Home() {
  const [lang, setLang] = useState('en'); 
  const [activeAlbum, setActiveAlbum] = useState<any>(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const t = LANGUAGES[lang];

  const ABOUT_CONTENT: any = {
    ru: {
      title: "О нас",
      founder: "Меня зовут Ахмед, я основатель Ahvan Tour. С 2006 года я организую лучшие экскурсии по всему Египту.",
      background: "Живу в Германии, египтянин по происхождению. Гарантирую немецкую точность и египетское гостеприимство.",
      badge: "С 2006"
    },
    de: {
      title: "Über uns",
      founder: "Mein Name ist Ahmed, Gründer von Ahvan Tour. Seit 2006 plane ich die besten Ausflüge in ganz Ägypten.",
      background: "Ich lebe in Deutschland, bin gebürtiger Ägypter. Ich garantiere deutsche Präzision und ägyptische Gastfreundschaft.",
      badge: "Seit 2006"
    },
    en: {
      title: "About Us",
      founder: "My name is Ahmed, founder of Ahvan Tour. Since 2006, I've been organizing the best excursions across Egypt.",
      background: "Living in Germany, native Egyptian. I guarantee German precision and Egyptian hospitality.",
      badge: "Since 2006"
    }
  };

  const currentAbout = ABOUT_CONTENT[lang] || ABOUT_CONTENT.en;
  const menu: any = {
    ru: { home: "Главная", trips: "Экскурсии", gallery: "Галерея", about: "О нас", transfer: "Трансфер", contact: "Контакты" },
    en: { home: "Home", trips: "Trips", gallery: "Gallery", about: "About Us", transfer: "Transfer", contact: "Contacts" },
    de: { home: "Startseite", trips: "Touren", gallery: "Galerie", about: "Über uns", transfer: "Transfer", contact: "Kontakte" }
  }[lang] || { home: "Home", trips: "Trips", gallery: "Gallery", about: "About Us", transfer: "Transfer", contact: "Contacts" };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* MODALS */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[300] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-[2rem] p-8 shadow-2xl relative text-left">
            <button onClick={() => setIsPrivacyOpen(false)} className="absolute top-6 right-6"><X /></button>
            <h3 className="text-2xl font-black uppercase italic mb-6">Data Protection</h3>
            <p className="text-slate-600 mb-4">Verantwortlich: Ahmed (Ahvan Tour). Daten werden nur für WhatsApp-Buchungen verwendet.</p>
            <button onClick={() => setIsPrivacyOpen(false)} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs">Close</button>
          </div>
        </div>
      )}

      {activeAlbum && (
        <div className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4">
           <button onClick={() => setActiveAlbum(null)} className="absolute top-6 right-6 text-white z-[210]"><X size={40} /></button>
           <div className="max-w-6xl w-full h-full overflow-y-auto p-4 custom-scrollbar">
             <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic mb-10 mt-16 tracking-tighter">{activeAlbum.names[lang]}</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
               {activeAlbum.gallery?.map((img: string, idx: number) => (
                 <div key={idx} className="aspect-square overflow-hidden rounded-2xl border border-white/5 shadow-2xl"><img src={img} className="w-full h-full object-cover" alt="" /></div>
               ))}
             </div>
             <div className="max-w-4xl bg-white/5 rounded-[2.5rem] p-8 border border-white/10 backdrop-blur-sm">
               <p className="text-white text-xl leading-relaxed opacity-90 whitespace-pre-line">{activeAlbum.desc[lang]}</p>
               <div className="mt-10">
                 <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(t.waHello + activeAlbum.names[lang])}`} className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl inline-block">{t.btn} — ${activeAlbum.price}</a>
               </div>
             </div>
           </div>
        </div>
      )}

      {/* NAVIGATION */}
      <nav className="bg-white/95 backdrop-blur-lg border-b sticky top-0 z-[100] px-4 h-20 flex justify-between items-center shadow-sm">
        <a href="#home" className="flex items-center gap-2 h-full shrink-0">
          <img src="logo.svg" alt="Logo" className="h-9 md:h-14 w-auto object-contain" />
          <div className="flex leading-none gap-1">
            <span className="text-xl md:text-2xl font-black uppercase italic tracking-tighter">Ahvan</span>
            <span className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-orange-600">Tour</span>
          </div>
        </a>

        <div className="hidden lg:flex gap-7 items-center ml-auto mr-8">
          {Object.entries(menu).map(([key, label]: any) => (
            <a key={key} href={`#${key}`} className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-600 hover:text-orange-600 transition-colors italic">{label}</a>
          ))}
          <div className="flex gap-1 ml-4 border-l pl-6">
            {Object.keys(LANGUAGES).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`text-[10px] font-bold px-2 py-1 rounded-md border ${lang === l ? 'bg-orange-600 text-white border-orange-600' : 'text-slate-400 border-transparent'}`}>{LANGUAGES[l].name}</button>
            ))}
          </div>
        </div>

        <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}><Menu size={28} /></button>

        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b shadow-2xl lg:hidden flex flex-col p-6 gap-4 animate-in slide-in-from-top z-[150]">
            {Object.entries(menu).map(([key, label]: any) => (
              <a key={key} href={`#${key}`} onClick={() => setIsMenuOpen(false)} className="text-lg uppercase font-black tracking-widest text-slate-900 border-b pb-2 italic">{label}</a>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {Object.keys(LANGUAGES).map((l) => (
                <button key={l} onClick={() => { setLang(l); setIsMenuOpen(false); }} className={`flex-1 min-w-[60px] text-xs font-bold py-3 rounded-xl border ${lang === l ? 'bg-orange-600 text-white' : 'bg-slate-50 text-slate-500'}`}>{LANGUAGES[l].name}</button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* 1. HERO - Главный экран */}
      <section id="home" className="relative h-[75vh] flex items-center justify-center text-center bg-slate-900" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://i2.wp.com/see.news/images/2024/03/-1711659992-0.jpg?resize=750,500&ssl=1')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="relative z-10 px-6">
            <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-6 text-white leading-none">{t.heroTitle}</h1>
            <p className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm md:text-lg bg-black/30 backdrop-blur-md px-6 py-2 rounded-full inline-block">{t.heroSub}</p>
          </div>
      </section>

      {/* 2. TRIPS - Твои продажи */}
      <section id="trips" className="max-w-7xl mx-auto py-24 px-6 scroll-mt-20">
        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-16 text-center">{t.toursTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOURS.map((tour: any) => (
            <div key={tour.id} className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="h-80 w-full relative overflow-hidden cursor-pointer" onClick={() => setActiveAlbum(tour)}>
                <img src={tour.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                <div className="absolute top-5 right-5 z-20 bg-orange-600 text-white px-5 py-2 rounded-full font-black text-xs">${tour.price}</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight">{tour.names[lang]}</h3>
                <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(t.waHello + tour.names[lang])}`} target="_blank" className="block w-full bg-slate-900 text-white text-center py-4 rounded-2xl font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-orange-600 transition-all">{t.btn}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. GALLERY - Фото */}
      <section id="gallery" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {TOURS.slice(0, 4).map((tour: any) => (
              <div key={tour.id} onClick={() => setActiveAlbum(tour)} className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer">
                <img src={tour.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <Images className="text-white" size={32} />
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* 3. TRANSFER - Машины */}
      <section id="transfer" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none">{t.transTitle} <span className="text-orange-600">{t.transName}</span></h2>
              <p className="text-slate-600 text-lg mb-8">{t.transDesc}</p>
              <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}`} className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest inline-block shadow-lg">{t.btn}</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <img src="/images/transfer/car1.jpeg" className="rounded-[2.5rem] shadow-xl aspect-[3/4] object-cover border-4 border-white" alt="" />
                <div className="space-y-4">
                  <img src="/images/transfer/car2.jpeg" className="rounded-[2.5rem] shadow-xl aspect-square object-cover border-4 border-white" alt="" />
                  <img src="/images/transfer/car5.jpeg" className="rounded-[2.5rem] shadow-xl aspect-square object-cover border-4 border-white" alt="" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT US - Коротко и внизу */}
      <section id="about" className="py-24 bg-slate-50 border-y scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <img src="/logo.svg" className="h-20 w-auto mx-auto mb-8" alt="Logo" />
           <h2 className="text-4xl font-black uppercase italic mb-6 tracking-tighter">{currentAbout.title}</h2>
           <p className="text-slate-600 text-xl leading-relaxed mb-4">{currentAbout.founder}</p>
           <p className="text-slate-500">{currentAbout.background}</p>
           <div className="inline-block mt-8 px-6 py-2 bg-orange-600 text-white rounded-full font-black uppercase text-[10px] tracking-widest">{currentAbout.badge}</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-slate-950 text-white text-center">
          <div className="flex justify-center gap-8 mb-12 opacity-60">
            <a href={CONTACTS.instagram} target="_blank"><Instagram size={24}/></a>
            <a href={CONTACTS.telegram} target="_blank"><Send size={24}/></a>
            <a href={CONTACTS.facebook} target="_blank"><Facebook size={24}/></a>
          </div>
          <button onClick={() => setIsPrivacyOpen(true)} className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 hover:text-orange-600 mb-6">Data Protection</button>
          <p className="text-slate-800 text-[10px] uppercase font-bold tracking-widest">Ahvan Tour Egypt © 2026</p>
      </footer>
    </main>
  );
}