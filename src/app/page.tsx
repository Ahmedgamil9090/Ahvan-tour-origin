'use client';
import { useState } from 'react';
import { Instagram, Send, Facebook, X, Car, Plane, MapPin } from 'lucide-react';
import { TOURS, CONTACTS, LANGUAGES } from './tours-data';

export default function Home() {
  const [lang, setLang] = useState('en'); 
  const [activeAlbum, setActiveAlbum] = useState<any>(null); 
  const t = LANGUAGES[lang];

  // Динамическое меню (Трансфер теперь после Галереи)
  const menu = {
    ru: { home: "Главная", trips: "Экскурсии", gallery: "Галерея", transfer: "Трансфер", contact: "Контакты" },
    en: { home: "Home", trips: "Trips", gallery: "Gallery", transfer: "Transfer", contact: "Contacts" },
    de: { home: "Startseite", trips: "Touren", gallery: "Galerie", transfer: "Transfer", contact: "Kontakte" },
    pl: { home: "Główna", trips: "Wycieczki", gallery: "Galeria", transfer: "Transfer", contact: "Kontakt" },
    fr: { home: "Accueil", trips: "Excursions", gallery: "Galerie", transfer: "Transfert", contact: "Contacts" },
    ro: { home: "Acasă", trips: "Tururi", gallery: "Galerie", transfer: "Transfer", contact: "Contact" }
  }[lang] || { home: "Home", trips: "Trips", gallery: "Gallery", transfer: "Transfer", contact: "Contacts" };

  // Собираем все фото из всех туров для общей галереи
  const allPhotos = TOURS.flatMap((tour: any) => tour.gallery || []);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* MODAL GALLERY & DESCRIPTION */}
      {activeAlbum && (
        <div className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button 
            onClick={() => setActiveAlbum(null)} 
            className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors z-[210]"
          >
            <X size={40} />
          </button>
          
          <div className="max-w-6xl w-full h-full overflow-y-auto p-4 custom-scrollbar">
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic mb-10 mt-16 tracking-tighter">
              {activeAlbum.names[lang]}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {activeAlbum.gallery?.map((img: string, idx: number) => (
                <div key={idx} className="aspect-square overflow-hidden rounded-2xl bg-slate-800 shadow-2xl border border-white/5">
                  <img src={img} className="w-full h-full object-cover" alt="" loading="lazy" />
                </div>
              ))}
            </div>

            <div className="max-w-4xl bg-white/5 rounded-3xl p-8 md:p-12 mb-20 border border-white/10 backdrop-blur-sm">
              <h3 className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm mb-6">
                {lang === 'ru' ? 'О программе экскурсии' : 'About the program'}
              </h3>
              <p className="text-white text-xl md:text-2xl leading-relaxed font-medium opacity-90 whitespace-pre-line">
                {activeAlbum.desc[lang]}
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <a 
                  href={`https://wa.me/${CONTACTS.whatsapp}?text=${encodeURIComponent(t.waHello + activeAlbum.names[lang])}`} 
                  target="_blank" 
                  className="bg-orange-600 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-orange-500 transition-all"
                >
                  {t.btn} — ${activeAlbum.price}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NAVIGATION */}
      <nav className="bg-white/95 backdrop-blur-lg border-b sticky top-0 z-50 px-6 h-20 flex justify-between items-center shadow-sm">
          <div className="font-black text-orange-600 italic uppercase text-2xl">
            AhVan <span className="text-slate-400 text-[11px] not-italic tracking-[0.4em] block font-bold">Tour</span>
          </div>
          <div className="hidden lg:flex gap-9 items-center">
            {Object.entries(menu).map(([key, label]) => (
              <a key={key} href={`#${key}`} className="text-[11px] uppercase font-black tracking-[0.25em] text-slate-600 hover:text-orange-600 transition-colors italic">{label}</a>
            ))}
          </div>
          <div className="flex gap-1">
            {Object.keys(LANGUAGES).map((l) => (
              <button 
                key={l} 
                onClick={() => setLang(l)} 
                className={`text-[10px] font-bold px-3 py-2 rounded-full border transition-all ${lang === l ? 'bg-orange-600 text-white border-orange-600' : 'text-slate-500 border-slate-200 hover:border-orange-300'}`}
              >
                {LANGUAGES[l].name}
              </button>
            ))}
          </div>
      </nav>

      {/* HERO SECTION */}
      <section 
        id="home" 
        className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden bg-slate-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://i2.wp.com/see.news/images/2024/03/-1711659992-0.jpg?resize=750,500&ssl=1')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
          <div className="relative z-10 px-6 max-w-5xl mx-auto">
            <div className="h-1.5 w-24 bg-orange-600 mx-auto mb-10 rounded-full"></div>
            <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-6 leading-none text-white drop-shadow-2xl">{t.heroTitle}</h1>
            <p className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm md:text-lg drop-shadow-md bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full inline-block">{t.heroSub}</p>
          </div>
      </section>

      {/* TRIPS SECTION */}
      <section id="trips" className="max-w-7xl mx-auto py-24 px-6 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4 text-slate-900">{t.toursTitle}</h2>
          <p className="text-slate-400 uppercase tracking-widest font-bold text-sm italic">Choose your perfect adventure</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOURS.map((tour: any) => (
            <div key={tour.id} className="group bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div 
                className="h-72 w-full relative overflow-hidden cursor-pointer" 
                onClick={() => setActiveAlbum(tour)}
              >
                <img src={tour.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                <div className="absolute top-5 right-5 z-20 bg-orange-600 text-white px-5 py-2 rounded-full font-black text-xs shadow-xl tracking-widest">${tour.price}</div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/30">View Gallery</div>
                </div>
              </div>
              <div className="p-8 text-slate-900">
                <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight">{tour.names[lang]}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 h-12 line-clamp-2">{tour.desc[lang]}</p>
                <a 
                  href={`https://wa.me/${CONTACTS.whatsapp}?text=${encodeURIComponent(t.waHello + tour.names[lang])}`} 
                  target="_blank" 
                  className="block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-orange-600 transition-all shadow-lg"
                >
                  {t.btn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION (НОВАЯ) */}
      <section id="gallery" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4 text-slate-900">
              {lang === 'ru' ? 'Галерея' : 'Gallery'}
            </h2>
            <p className="text-orange-600 uppercase tracking-widest font-bold text-xs">Capturing memories from every trip</p>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {allPhotos.slice(0, 12).map((img, idx) => (
              <div key={idx} className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <img src={img} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFER SECTION (ПЕРЕМЕЩЕНА ПОСЛЕ ГАЛЕРЕИ) */}
      <section id="transfer" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-black uppercase tracking-widest mb-6">Premium Service</div>
              <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none text-slate-900">
                {t.transTitle} <span className="text-orange-600">{t.transName}</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {t.transDesc}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                 <div className="flex items-center gap-3 font-black uppercase text-[10px] text-slate-700 tracking-wider"><Plane className="text-orange-600" size={18}/> Airport Meeting</div>
                 <div className="flex items-center gap-3 font-black uppercase text-[10px] text-slate-700 tracking-wider"><MapPin className="text-orange-600" size={18}/> All Egypt</div>
                 <div className="flex items-center gap-3 font-black uppercase text-[10px] text-slate-700 tracking-wider"><Car className="text-orange-600" size={18}/> New Cars</div>
              </div>
              <a href={`https://wa.me/${CONTACTS.whatsapp}?text=${encodeURIComponent("Hello! I want to book a transfer.")}`} target="_blank" className="bg-slate-900 text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-orange-600 transition-all inline-block">{t.btn}</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000" className="rounded-3xl shadow-xl aspect-[3/4] object-cover" alt=""/>
              <div className="space-y-4 pt-8">
                <img src="https://images.unsplash.com/photo-1559416523-140dd32c7c72?q=80&w=1000" className="rounded-3xl shadow-xl aspect-square object-cover" alt=""/>
                <div className="bg-orange-600 rounded-3xl p-6 text-white font-black italic uppercase text-lg">Fast. Safe. Direct Prices.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-20 text-center bg-slate-950 text-white scroll-mt-20">
          <div className="text-4xl font-black italic text-orange-600 mb-6 tracking-tighter uppercase">AhVan Tour</div>
          <div className="flex justify-center gap-8 mb-8 opacity-50">
              <Instagram className="hover:text-orange-500 cursor-pointer transition-colors" size={20} />
              <Send className="hover:text-orange-500 cursor-pointer transition-colors" size={20} />
              <Facebook className="hover:text-orange-500 cursor-pointer transition-colors" size={20} />
          </div>
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.4em] font-bold">Quality matters. Since 2026.</p>
      </footer>
    </main>
  );
}