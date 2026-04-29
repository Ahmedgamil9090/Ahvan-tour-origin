{/* 1. MODAL DATA PROTECTION (Тот самый, что идет после контактов) */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[300] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-8 border-b flex justify-between items-center bg-slate-50">
              <span className="font-black uppercase italic tracking-tighter text-xl text-slate-900">Data Protection</span>
              <button onClick={() => setIsPrivacyOpen(false)} className="text-slate-400 hover:text-black transition-colors"><X /></button>
            </div>
            <div className="p-8 overflow-y-auto text-sm text-slate-600 space-y-6 leading-relaxed custom-scrollbar">
              <p className="font-bold">Responsible: Basem Hakim</p>
              <p>We process data exclusively for tour bookings via WhatsApp. No third-party data distribution.</p>
              <p>You have the right to request deletion of your contact data at any time.</p>
            </div>
            <div className="p-6 bg-slate-50 border-t">
              <button onClick={() => setIsPrivacyOpen(false)} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* 2. NAVIGATION (С обновленным меню) */}
      <nav className="bg-white/95 backdrop-blur-lg border-b sticky top-0 z-[100] px-4 h-20 flex justify-between items-center shadow-sm">
        <a href="#home" className="flex items-center h-full shrink-0">
          <div className="bg-white p-1 rounded-lg border border-slate-100">
            <img src="/logo.svg" alt="AhVan Tour" className="h-10 md:h-14 w-auto object-contain" />
          </div>
        </a>

        {/* Desktop Menu */}
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

        {/* Mobile Hamburger */}
        <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={28} />
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b shadow-2xl lg:hidden flex flex-col p-6 gap-5 animate-in slide-in-from-top">
            {Object.entries(menu).map(([key, label]) => (
              <a key={key} href={`#${key}`} onClick={() => setIsMenuOpen(false)} className="text-lg uppercase font-black tracking-widest text-slate-900 border-b pb-2 italic">{label}</a>
            ))}
            <div className="flex flex-wrap gap-2 pt-4">
              {Object.keys(LANGUAGES).map((l) => (
                <button key={l} onClick={() => { setLang(l); setIsMenuOpen(false); }} className={`flex-1 min-w-[60px] text-xs font-bold py-3 rounded-xl border ${lang === l ? 'bg-orange-600 text-white border-orange-600' : 'bg-slate-50 text-slate-500'}`}>{LANGUAGES[l].name}</button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden bg-slate-900" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://i2.wp.com/see.news/images/2024/03/-1711659992-0.jpg?resize=750,500&ssl=1')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
              <div className="h-72 w-full relative overflow-hidden cursor-pointer" onClick={() => setActiveAlbum(tour)}>
                <img src={tour.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                <div className="absolute top-5 right-5 z-20 bg-orange-600 text-white px-5 py-2 rounded-full font-black text-xs shadow-xl tracking-widest">${tour.price}</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight text-slate-900">{tour.names[lang]}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 h-12 line-clamp-2">{tour.desc[lang]}</p>
                <a href={`https://wa.me/${CONTACTS.whatsapp}?text=${encodeURIComponent(t.waHello + tour.names[lang])}`} target="_blank" className="block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-orange-600 transition-all shadow-lg">{t.btn}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION (Карточки альбомов) */}
      <section id="gallery" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4 text-slate-900">
              {lang === 'ru' ? 'Галерея' : 'Gallery'}
            </h2>
            <p className="text-orange-600 uppercase tracking-widest font-bold text-xs italic">Explore our photo albums</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOURS.map((tour: any) => (
              <div 
                key={tour.id} 
                onClick={() => setActiveAlbum(tour)}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-white"
              >
                <img src={tour.gallery?.[0] || tour.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="flex items-center gap-2 text-orange-500 mb-2">
                      <Images size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest">{tour.gallery?.length || 0} Photos</span>
                   </div>
                   <h3 className="text-white font-black uppercase italic tracking-tight text-xl leading-none">{tour.names[lang]}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFER SECTION */}
      <section id="transfer" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Левая колонка: Текст и инфо */}
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-black uppercase tracking-widest mb-6">
                Premium Service
              </div>
              <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none text-slate-900">
                {t.transTitle} <span className="text-orange-600">{t.transName}</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {t.transDesc}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                 <div className="flex items-center gap-3 font-black uppercase text-[10px] text-slate-700 tracking-wider">
                   <Plane className="text-orange-600" size={18}/> Airport Meeting
                 </div>
                 <div className="flex items-center gap-3 font-black uppercase text-[10px] text-slate-700 tracking-wider">
                   <MapPin className="text-orange-600" size={18}/> All Egypt
                 </div>
                 <div className="flex items-center gap-3 font-black uppercase text-[10px] text-slate-700 tracking-wider">
                   <Car className="text-orange-600" size={18}/> New Cars
                 </div>
              </div>
              
              <a 
                href={`https://wa.me/${CONTACTS.whatsapp}?text=${encodeURIComponent("Hello! I want to book a transfer.")}`} 
                target="_blank" 
                className="bg-slate-900 text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-orange-600 transition-all inline-block"
              >
                {t.btn}
              </a>
            </div>

            {/* Правая колонка: Сетка из 5 твоих фото */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Главное большое фото (вертикальное) */}
                <img 
                  src="/images/transfer/car1.jpeg" 
                  className="rounded-3xl shadow-xl aspect-[3/4] object-cover border border-slate-100" 
                  alt="Our Transfer Car 1"
                />
                
                <div className="space-y-4">
                  {/* Второе фото (квадратное) */}
                  <img 
                    src="/images/transfer/car2.jpeg" 
                    className="rounded-3xl shadow-xl aspect-square object-cover border border-slate-100" 
                    alt="Our Transfer Car 2"
                  />
                  {/* Оранжевая плашка для стиля */}
                  <div className="bg-orange-600 rounded-3xl p-6 text-white font-black italic uppercase text-lg leading-tight shadow-lg">
                    Fast. Safe. <br />Direct Prices.
                  </div>
                </div>
              </div>
              
              {/* Нижний ряд из оставшихся 3-х фото */}
              <div className="grid grid-cols-3 gap-4">
                <img 
                  src="/images/transfer/car3.jpeg" 
                  className="rounded-2xl shadow-md aspect-square object-cover border border-slate-100 hover:scale-105 transition-transform" 
                  alt="Our Transfer Car 3"
                />
                <img 
                  src="/images/transfer/car4.jpeg" 
                  className="rounded-2xl shadow-md aspect-square object-cover border border-slate-100 hover:scale-105 transition-transform" 
                  alt="Our Transfer Car 4"
                />
                <img
                  src="/images/transfer/car5.jpeg" 
                  className="rounded-2xl shadow-md aspect-square object-cover border border-slate-100 hover:scale-105 transition-transform" 
                  alt="Our Transfer Car 5"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-20 bg-slate-950 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center">
            
            {/* Logo */}
            <div className="text-4xl font-black italic text-orange-600 mb-4 tracking-tighter uppercase">
              AhVan Tour
            </div>
            
            {/* Phone Number */}
            <a 
              href={`tel:${CONTACTS.phone}`} 
              className="text-xl font-bold mb-10 hover:text-orange-500 transition-colors tracking-widest"
            >
              {CONTACTS.phone}
            </a>

            {/* Social Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-12">
              <a href={CONTACTS.instagram} target="_blank" className="flex flex-col items-center gap-2 group">
                <Instagram className="group-hover:text-orange-500 transition-colors" size={24} />
                <span className="text-[9px] uppercase font-bold tracking-widest opacity-50">Instagram</span>
              </a>
              
              <a href={`https://wa.me/${CONTACTS.whatsapp}`} target="_blank" className="flex flex-col items-center gap-2 group">
                <div className="font-bold text-xl group-hover:text-orange-500 transition-colors">WA</div>
                <span className="text-[9px] uppercase font-bold tracking-widest opacity-50">WhatsApp</span>
              </a>

              <a href={CONTACTS.telegram} target="_blank" className="flex flex-col items-center gap-2 group">
                <Send className="group-hover:text-orange-500 transition-colors" size={24} />
                <span className="text-[9px] uppercase font-bold tracking-widest opacity-50">Telegram</span>
              </a>

              <a href={CONTACTS.tiktok} target="_blank" className="flex flex-col items-center gap-2 group">
                <div className="font-bold text-xl group-hover:text-orange-500 transition-colors">TT</div>
                <span className="text-[9px] uppercase font-bold tracking-widest opacity-50">TikTok</span>
              </a>

              <a href={CONTACTS.facebook} target="_blank" className="flex flex-col items-center gap-2 group">
                <Facebook className="group-hover:text-orange-500 transition-colors" size={24} />
                <span className="text-[9px] uppercase font-bold tracking-widest opacity-50">Facebook</span>
              </a>

            </div>

            <div className="h-px w-20 bg-orange-600/30 mb-8"></div>
            
            <p className="text-slate-500 text-[10px] uppercase tracking-[0.4em] font-bold">
              Quality matters. Since 2026.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}