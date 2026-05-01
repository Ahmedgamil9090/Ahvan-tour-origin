'use client';
import { useState } from 'react';
import { Instagram, Send, Facebook, X, ShieldCheck, Star, Menu } from 'lucide-react';
import { TOURS, CONTACTS, LANGUAGES } from './tours-data';

export default function Home() {
  const [lang, setLang] = useState('en'); 
  const [activeAlbum, setActiveAlbum] = useState<any>(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const t = LANGUAGES[lang];

   const CONTENT_DATA: any = {
    ru: {
      aboutTitle: "О нас",
      galleryTitle: "Галерея",
      welcome: "Добро пожаловать в Ahvan Tour",
      founder: "Меня зовут Ахмед, я основатель Ahvan Tour и страстный организатор экскурсий с 2006 года. С многолетним опытом в туризме, я предлагаю индивидуально спланированные поездки и незабываемые впечатления по всему Египту.",
      background: "В настоящее время я живу в Германии, но я египтянин по происхождению. Этот уникальный опыт позволяет мне понимать обе культуры и предоставлять надежный, профессиональный и ориентированный на клиента сервис.",
      listTitle: "Что мы предлагаем:",
      list: ["Сафари-приключения в пустыне", "Морские прогулки и острова", "Частные туры в Каир или Луксор", "Трансферы или индивидуальные запросы"],
      footerAbout: "Каждая поездка тщательно спланирована, чтобы обеспечить качество, комфорт и незабываемые воспоминания.",
      slogan: "Ahvan Tour — это доверие, опыт и исключительный сервис.",
      contactInvite: "Свяжитесь со мной для получения дополнительной информации или бронирования.",
      badge: "Опыт с 2006",
      privacyTitle: "Защита данных",
      privacyBody: (
        <div className="space-y-6 text-slate-600 text-left">
          <p>Лицом, ответственным в смысле законов о защите данных, в частности Общего регламента ЕС по защите данных (GDPR), является: <strong>Ahmed Gamil</strong></p>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Ваши права субъекта данных</h4>
            <p>Вы можете в любое время воспользоваться следующими правами:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-xs">
              <li>Информация о ваших данных, хранящихся у нас (ст. 15 GDPR)</li>
              <li>Исправление неверных персональных данных (ст. 16 GDPR)</li>
              <li>Удаление ваших данных, хранящихся у нас (ст. 17 GDPR)</li>
              <li>Ограничение обработки данных (ст. 18 GDPR)</li>
              <li>Возражение против обработки ваших данных (ст. 21 GDPR)</li>
              <li>Переносимость данных (ст. 20 GDPR)</li>
            </ul>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Общая информация</h4>
            <p>При доступе к нашему веб-сайту автоматически записывается информация общего характера (лог-файлы сервера). Это включает ваш IP-адрес, тип браузера и операционную систему. Это обрабатывается для обеспечения стабильности соединения и безопасности системы на основании ст. 6 (1) (f) GDPR.</p>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Файлы cookies</h4>
            <p>Как и многие другие веб-сайты, мы также используем «cookies». Это небольшие текстовые файлы, хранящиеся на вашем устройстве для улучшения пользовательского опыта.</p>
          </section>
        </div>
      ),
      privacyClose: "Закрыть"
    },
    en: {
      aboutTitle: "About Us",
      galleryTitle: "Gallery",
      welcome: "Welcome to Ahvan Tour",
      founder: "My name is Ahmed, founder of Ahvan Tour and a passionate excursion planner since 2006. With many years of experience in tourism, I offer customized trips and unforgettable experiences across Egypt.",
      background: "I currently live in Germany but I am originally Egyptian. This unique background allows me to understand both cultures and provide a reliable, professional, and customer-focused service.",
      listTitle: "Whether you are looking for:",
      list: ["Desert safari adventures", "Boat trips & island excursions", "Private tours to Cairo or Luxor", "Transfers or custom experiences"],
      footerAbout: "Every trip is carefully planned to ensure quality, comfort, and unforgettable memories.",
      slogan: "Ahvan Tour stands for trust, experience, and exceptional service.",
      contactInvite: "Feel free to contact me for more information or bookings.",
      badge: "Since 2006",
      privacyTitle: "Data Protection",
      privacyBody: (
        <div className="space-y-6 text-slate-600 text-left">
          <p>The person responsible within the meaning of the data protection laws, in particular the EU General Data Protection Regulation (GDPR), is: <strong>Ahmed Gamil</strong></p>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Your data subject rights</h4>
            <p>You can exercise the following rights at any time:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-xs">
              <li>Information about your data stored by us (Art. 15 GDPR)</li>
              <li>Correction of incorrect personal data (Art. 16 GDPR)</li>
              <li>Deletion of your data stored by us (Art. 17 GDPR)</li>
              <li>Restriction of data processing (Art. 18 GDPR)</li>
              <li>Objection to the processing of your data (Art. 21 GDPR)</li>
              <li>Data transferability (Art. 20 GDPR)</li>
            </ul>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">General Information</h4>
            <p>When you access our website, information of a general nature (server log files) is automatically recorded. This includes your IP address, browser type, and operating system. This is processed to ensure connection stability and system security based on Art. 6 (1) (f) GDPR.</p>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Cookies</h4>
            <p>Like many other websites, we also use "cookies". These are small text files stored on your device to improve the user experience.</p>
          </section>
        </div>
      ),
      privacyClose: "Close"
    },
    de: {
      aboutTitle: "Über uns",
      galleryTitle: "Galerie",
      welcome: "Willkommen bei Ahvan Tour",
      founder: "Mein Name ist Ahmed, Gründer von Ahvan Tour und leidenschaftlicher Ausflugsplaner seit 2006. Mit langjähriger Erfahrung biete ich maßgeschneiderte Reisen in ganz Ägypten an.",
      background: "Ich lebe derzeit in Deutschland, bin aber gebürtiger Ägypter. Dieser Hintergrund ermöglicht es mir, beide Kulturen zu verstehen und einen professionellen Service zu bieten.",
      listTitle: "Was wir anbieten:",
      list: ["Wüstensafari-Abenteuer", "Bootsfahrten & Inselausflüge", "Private Touren nach Kairo oder Luxor", "Transfers oder individuelle Erlebnisse"],
      footerAbout: "Jede Reise ist sorgfältig geplant, um Qualität, Komfort und unvergessliche Erinnerungen zu garantieren.",
      slogan: "Ahvan Tour steht für Vertrauen, Erfahrung und außergewöhnlichen Service.",
      contactInvite: "Kontaktieren Sie mich gerne für weitere Informationen oder Buchungen.",
      badge: "Seit 2006",
      privacyTitle: "Datenschutzerklärung",
      privacyBody: (
        <div className="space-y-6 text-slate-600 text-left">
          <p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutz-Grundverordnung (DSGVO), ist: <strong>Ahmed Gamil</strong></p>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Ihre Betroffenenrechte</h4>
            <p>Unter den angegebenen Kontaktdaten können Sie jederzeit folgende Rechte ausüben:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-xs">
              <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Allgemeine Informationen</h4>
            <p>Beim Zugriff auf unsere Website werden automatisch Informationen allgemeiner Natur (Server-Logfiles) erfasst. Diese umfassen IP-Adresse, Browsertyp und Betriebssystem. Dies dient der Gewährleistung eines reibungslosen Verbindungsaufbaus gemäß Art. 6 Abs. 1 lit. f DSGVO.</p>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Cookies</h4>
            <p>Wie viele andere Webseiten verwenden wir auch so genannte „Cookies“. Das sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden, um die Nutzung der Website zu verbessern.</p>
          </section>
        </div>
      ),
      privacyClose: "Schließen"
    },
    pl: {
      aboutTitle: "O nas",
      galleryTitle: "Galeria",
      welcome: "Witamy w Ahvan Tour",
      founder: "Nazywam się Ahmed, założyciel Ahvan Tour. Od 2006 roku z pasją planuję wycieczki i niezapomniane przeżycia w całym Egipcie.",
      background: "Obecnie mieszkam w Niemczech, ale pochodzę z Egiptu. Pozwala mi to doskonale rozumieć obie kultury i świadczyć usługi na najwyższym poziomie.",
      listTitle: "Szukasz jednej z tych atrakcji?",
      list: ["Pustynne safari", "Rejsy statkiem i wyspy", "Prywatne wycieczki do Kairu lub Luksoru", "Transfery i życzenia indywidualne"],
      footerAbout: "Każda podróż jest starannie zaplanowana, aby zapewnić jakość, komfort i niezapomniane wspomnienia.",
      slogan: "Ahvan Tour to zaufanie, doświadczenie i wyjątkowa obsługa.",
      contactInvite: "Zapraszam do kontaktu w celu uzyskania informacji lub rezerwacji.",
      badge: "Od 2006",
      privacyTitle: "Ochrona danych",
      privacyBody: (
        <div className="space-y-6 text-slate-600 text-left">
          <p>Osobą odpowiedzialną w rozumieniu przepisów o ochronie danych, w szczególności ogólnego rozporządzenia UE o ochronie danych (RODO), jest: <strong>Ahmed Gamil</strong></p>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Twoje prawa jako osoby, której dane dotyczą</h4>
            <p>W każdej chwili możesz skorzystać z następujących praw:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-xs">
              <li>Informacja o Twoich danych przechowywanych u nas (art. 15 RODO)</li>
              <li>Sprostowanie nieprawidłowych danych osobowych (art. 16 RODO)</li>
              <li>Usunięcie Twoich danych przechowywanych u nas (art. 17 RODO)</li>
              <li>Ograniczenie przetwarzania danych (art. 18 RODO)</li>
              <li>Sprzeciw wobec przetwarzania Twoich danych (art. 21 RODO)</li>
              <li>Przenoszenie danych (art. 20 RODO)</li>
            </ul>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Informacje ogólne</h4>
            <p>Podczas uzyskiwania dostępu do naszej strony internetowej automatycznie rejestrowane są informacje o charakterze ogólnym (pliki logów serwera). Obejmuje to adres IP, typ przeglądarki i system operacyjny. Jest to przetwarzane w celu zapewnienia stabilności połączenia na podstawie art. 6 ust. 1 lit. f RODO.</p>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Pliki cookies</h4>
            <p>Podobnie jak wiele innych stron internetowych, my również używamy tzw. „cookies”. Są to małe pliki tekstowe zapisywane na Twoim urządzeniu w celu poprawy komfortu użytkowania.</p>
          </section>
        </div>
      ),
      privacyClose: "Zamknij"
    },
    fr: {
      aboutTitle: "À propos",
      galleryTitle: "Galerie",
      welcome: "Bienvenue chez Ahvan Tour",
      founder: "Je m'appelle Ahmed, fondateur d'Ahvan Tour. Depuis 2006, je propose des voyages sur mesure et des expériences inoubliables à travers l'Égypte.",
      background: "Je vis actuellement en Allemagne mais je suis d'origine égyptienne, ce qui me permet d'offrir un service fiable et professionnel.",
      listTitle: "Ce que nous proposons :",
      list: ["Aventures en safari au désert", "Sorties en bateau", "Tours privés à Le Caire ou Louxor", "Transferts et demandes personnalisées"],
      footerAbout: "Chaque voyage est soigneusement planifié pour garantir qualité et confort.",
      slogan: "Ahvan Tour rime avec confiance, expérience et service exceptionnel.",
      contactInvite: "N'hésitez pas à me contacter pour plus d'informations.",
      badge: "Depuis 2006",
      privacyTitle: "Protection des données",
      privacyBody: (
        <div className="space-y-6 text-slate-600 text-left">
          <p>Le responsable au sens des lois sur la protection des données, notamment le Règlement Général sur la Protection des Données (RGPD) de l'UE, est : <strong>Ahmed Gamil</strong></p>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Vos droits en tant que personne concernée</h4>
            <p>Vous pouvez exercer les droits suivants à tout moment :</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-xs">
              <li>Information sur vos données stockées par nous (Art. 15 RGPD)</li>
              <li>Correction de données personnelles incorrectes (Art. 16 RGPD)</li>
              <li>Suppression de vos données stockées par nous (Art. 17 RGPD)</li>
              <li>Limitation du traitement des données (Art. 18 RGPD)</li>
              <li>Opposition au traitement de vos données (Art. 21 RGPD)</li>
              <li>Portabilité des données (Art. 20 RGPD)</li>
            </ul>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Informations générales</h4>
            <p>Lorsque vous accédez à notre site web, des informations de nature générale (fichiers journaux du serveur) sont automatiquement enregistrées. Cela inclut votre adresse IP, le type de navigateur et le système d'exploitation, conformément à l'Art. 6 (1) (f) du RGPD.</p>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Cookies</h4>
            <p>Comme beaucoup d'autres sites web, nous utilisons également des "cookies". Ce sont de petits fichiers texte stockés sur votre appareil pour améliorer l'expérience utilisateur.</p>
          </section>
        </div>
      ),
      privacyClose: "Fermer"
    },
    ro: {
      aboutTitle: "Despre noi",
      galleryTitle: "Galerie",
      welcome: "Bine ați venit la Ahvan Tour",
      founder: "Numele meu este Ahmed, fondatorul Ahvan Tour. Din 2006, planific cu pasiune excursii personalizate și experiențe de neuitat în tot Egiptul.",
      background: "Locuiesc în prezent în Germania, dar sunt originar din Egipt. Acest lucru îmi permite să ofer un serviciu profesionist și de încredere.",
      listTitle: "Indiferent ce căutați:",
      list: ["Aventuri safari în deșert", "Plimbări cu barca", "Tururi private la Cairo sau Luxor", "Transferuri și experiențe personalizate"],
      footerAbout: "Fiecare călătorie este planificată cu atenție pentru a asigura confort și amintiri de neuitat.",
      slogan: "Ahvan Tour înseamnă încredere, experiență și servicii excepționale.",
      contactInvite: "Contactați-mă pentru informații suplimentare sau rezervări.",
      badge: "Din 2006",
      privacyTitle: "Protecția datelor",
      privacyBody: (
        <div className="space-y-6 text-slate-600 text-left">
          <p>Persoana responsabilă în sensul legilor privind protecția datelor, în special Regulamentul General privind Protecția Datelor (GDPR) al UE, este: <strong>Ahmed Gamil</strong></p>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Drepturile dumneavoastră</h4>
            <p>Vă puteți exercita următoarele drepturi în orice moment:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-xs">
              <li>Informații despre datele dumneavoastră stocate (Art. 15 GDPR)</li>
              <li>Corectarea datelor cu caracter personal incorecte (Art. 16 GDPR)</li>
              <li>Ștergerea datelor dumneavoastră stocate (Art. 17 GDPR)</li>
              <li>Restricționarea procesării datelor (Art. 18 GDPR)</li>
              <li>Opoziția față de prelucrarea datelor (Art. 21 GDPR)</li>
              <li>Portabilitatea datelor (Art. 20 GDPR)</li>
            </ul>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Informații generale</h4>
            <p>Când accesați site-ul nostru, sunt înregistrate automat informații cu caracter general (fișiere jurnal de server). Acestea includ adresa IP, tipul de browser și sistemul de operare, în conformitate cu Art. 6 (1) (f) GDPR.</p>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 border-b pb-1 mb-2 text-base">Cookies</h4>
            <p>Ca multe alte site-uri web, folosim și noi așa-numitele „cookies”. Acestea sunt fișiere text mici stocate pe dispozitivul dumneavoastră pentru a îmbunătăți experiența utilizatorului.</p>
          </section>
        </div>
      ),
      privacyClose: "Închide"
    }
  };

  const cur = CONTENT_DATA[lang] || CONTENT_DATA.en;

  const menu: any = {
    ru: { home: "Главная", trips: "Экскурсии", gallery: "Галерея", transfer: "Трансфер", about: "О нас", contact: "Контакты" },
    en: { home: "Home", trips: "Trips", gallery: "Gallery", transfer: "Transfer", about: "About Us", contact: "Contacts" },
    de: { home: "Startseite", trips: "Touren", gallery: "Galerie", transfer: "Transfer", about: "Über uns", contact: "Kontakte" },
    pl: { home: "Główna", trips: "Wycieczki", gallery: "Galeria", transfer: "Transfer", about: "O nas", contact: "Kontakt" },
    fr: { home: "Accueil", trips: "Excursions", gallery: "Galerie", transfer: "Transfert", about: "À propos", contact: "Contacts" },
    ro: { home: "Acasă", trips: "Tururi", gallery: "Galerie", transfer: "Transfer", about: "Despre noi", contact: "Contact" }
  }[lang];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* MODAL DATA PROTECTION */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[300] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[85vh] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-8 border-b flex justify-between items-center bg-slate-50">
              <span className="font-black uppercase italic tracking-tighter text-xl">{cur.privacyTitle}</span>
              <button onClick={() => setIsPrivacyOpen(false)} className="hover:rotate-90 transition-transform"><X /></button>
            </div>
            <div className="p-8 overflow-y-auto text-sm text-slate-600 space-y-4 custom-scrollbar text-left">
              {cur.privacyBody}
            </div>
            <div className="p-6 bg-slate-50 border-t">
              <button onClick={() => setIsPrivacyOpen(false)} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition-colors">
                {cur.privacyClose}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL ALBUM */}
      {activeAlbum && (
        <div className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4">
            <button onClick={() => setActiveAlbum(null)} className="absolute top-6 right-6 text-white z-[210] hover:scale-110 transition-transform"><X size={40} /></button>
            <div className="max-w-6xl w-full h-full overflow-y-auto p-4 custom-scrollbar">
              <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic mb-10 mt-16 tracking-tighter">{activeAlbum.names[lang]}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {activeAlbum.gallery?.map((img: string, idx: number) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded-2xl border border-white/5"><img src={img} className="w-full h-full object-cover" alt="" /></div>
                ))}
              </div>
              <div className="max-w-4xl bg-white/5 rounded-[2.5rem] p-8 md:p-12 mb-20 border border-white/10 backdrop-blur-sm">
                <p className="text-white text-xl md:text-2xl leading-relaxed opacity-90 whitespace-pre-line">{activeAlbum.desc[lang]}</p>
                <div className="mt-10">
                  <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(t.waHello + activeAlbum.names[lang])}`} className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl inline-block">{t.btn} — ${activeAlbum.price}</a>
                </div>
              </div>
            </div>
        </div>
      )}

      {/* NAVIGATION */}
<nav className="bg-white/95 backdrop-blur-lg border-b sticky top-0 z-[100] px-4 h-20 flex items-center justify-between shadow-sm">
  
  {/* Контейнер для логотипа и названия */}
  <div className="flex-1 flex items-center relative h-full">
    
    {/* ЛОГО: Абсолютное позиционирование, чтобы не мешать центровке текста */}
    <a href="#home" className="absolute left-0 flex items-center h-full group">
        <img src="logo.jpeg" alt="Logo" className="h-10 md:h-14 w-auto object-contain transition-transform group-hover:rotate-12" />
    </a>

    {/* НАЗВАНИЕ: Теперь mx-auto сработает идеально, так как логотип вынесен из потока */}
    <span className="mx-auto font-black uppercase italic tracking-tighter text-xl md:text-2xl whitespace-nowrap">
        Ahvan <span className="text-orange-600">Tour</span>
    </span>
  </div>

  {/* ДЕСКТОПНОЕ МЕНЮ */}
  <div className="hidden lg:flex gap-7 items-center ml-8 mr-8">
    {Object.entries(menu).map(([key, label]: any) => (
      <a key={key} href={`#${key}`} className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-600 hover:text-orange-600 transition-colors italic">{label}</a>
    ))}
    <div className="flex gap-1 ml-4 border-l pl-6">
      {Object.keys(LANGUAGES).map((l) => (
        <button key={l} onClick={() => setLang(l)} className={`text-[10px] font-bold px-2 py-1 rounded-md border ${lang === l ? 'bg-orange-600 text-white border-orange-600' : 'text-slate-400 border-transparent'}`}>{LANGUAGES[l].name}</button>
      ))}
    </div>
  </div>

  {/* МОБИЛЬНАЯ КНОПКА */}
  <button className="lg:hidden p-2 text-slate-900 z-[160]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
    <Menu size={28} />
  </button>

  {/* MOBILE MENU */}
  {isMenuOpen && (
    <div className="absolute top-20 left-0 w-full bg-white border-b shadow-2xl lg:hidden flex flex-col p-6 gap-4 animate-in slide-in-from-top z-[150]">
      {Object.entries(menu).map(([key, label]: any) => (
        <a key={key} href={`#${key}`} onClick={() => setIsMenuOpen(false)} className="text-lg uppercase font-black tracking-widest text-slate-900 border-b pb-2 italic">{label}</a>
      ))}
      <button onClick={() => { setIsPrivacyOpen(true); setIsMenuOpen(false); }} className="text-sm text-left uppercase font-black tracking-widest text-orange-600 border-b pb-2 italic">{cur.privacyTitle}</button>
      <div className="flex flex-wrap gap-2 pt-2">
        {Object.keys(LANGUAGES).map((l) => (
          <button key={l} onClick={() => { setLang(l); setIsMenuOpen(false); }} className={`flex-1 min-w-[60px] text-xs font-bold py-3 rounded-xl border ${lang === l ? 'bg-orange-600 text-white' : 'bg-slate-50 text-slate-500'}`}>{LANGUAGES[l].name}</button>
        ))}
      </div>
    </div>
  )}
</nav>

      {/* HERO */}
      <section id="home" className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden bg-slate-900" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://i2.wp.com/see.news/images/2024/03/-1711659992-0.jpg?resize=750,500&ssl=1')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="relative z-10 px-6 max-w-5xl mx-auto text-white">
            <div className="h-1.5 w-24 bg-orange-600 mx-auto mb-10 rounded-full"></div>
            <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-6 leading-none">{t.heroTitle}</h1>
            <p className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm md:text-lg bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full inline-block">{t.heroSub}</p>
          </div>
      </section>

      {/* TRIPS */}
      <section id="trips" className="max-w-7xl mx-auto py-24 px-6 scroll-mt-24">
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
                <p className="text-slate-500 text-sm mb-8 h-12 line-clamp-2">{tour.desc[lang]}</p>
                <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(t.waHello + tour.names[lang])}`} target="_blank" className="block w-full bg-slate-900 text-white text-center py-4 rounded-2xl font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-orange-600 shadow-lg">{t.btn}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-white scroll-mt-20 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-16">{cur.galleryTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {TOURS.map((tour: any) => (
              <div key={tour.id} onClick={() => setActiveAlbum(tour)} className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg border-4 border-slate-50">
                <img src={tour.gallery?.[0] || tour.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 text-white">
                   <h3 className="font-black uppercase italic tracking-tight text-xl leading-none">{tour.names[lang]}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFER */}
      <section id="transfer" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 text-slate-900 leading-none">
                {t.transTitle} <span className="text-orange-600">{t.transName}</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8">{t.transDesc}</p>
              <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}?text=Hello! I want to book a transfer.`} target="_blank" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-orange-600 transition-all inline-block">{t.btn}</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <img src="/images/transfer/car1.jpeg" className="rounded-[2.5rem] shadow-xl aspect-[3/4] object-cover border-4 border-white" alt="Transfer 1" />
                <div className="space-y-4">
                  <img src="/images/transfer/car2.jpeg" className="rounded-[2.5rem] shadow-xl aspect-square object-cover border-4 border-white" alt="Transfer 2" />
                  <img src="/images/transfer/car5.jpeg" className="rounded-[2.5rem] shadow-xl aspect-square object-cover border-4 border-white" alt="Transfer 5" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="py-24 bg-slate-50 scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center items-center">
              <div className="relative z-10 w-full aspect-square max-w-[500px] bg-white rounded-[3.5rem] shadow-2xl border-8 border-white flex items-center justify-center p-12 overflow-hidden group">
                <img src="logo.svg" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" alt="Logo" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-8 rounded-3xl shadow-xl hidden md:block z-20">
                <div className="text-4xl font-black italic leading-none">2006</div>
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-80">{cur.badge}</div>
              </div>
            </div>
            <div className="relative z-10 text-left">
              <div className="flex items-center gap-2 text-orange-600 font-black uppercase text-xs tracking-[0.3em] mb-6"><ShieldCheck size={18} /> Reliable & Professional</div>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-slate-900 mb-8">{cur.aboutTitle}</h2>
              <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed">
                <p className="font-bold text-slate-900 text-2xl">{cur.welcome}</p>
                <p>{cur.founder}</p>
                <p>{cur.background}</p>
                
                <div className="pt-4">
                  <p className="font-black uppercase text-xs tracking-widest text-slate-900 mb-4">{cur.listTitle}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cur.list?.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-black uppercase text-slate-800 tracking-wider bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                        <Star size={12} className="text-orange-600 fill-orange-600" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="pt-4">{cur.footerAbout}</p>
                
                <div className="mt-8 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm italic text-slate-700 border-l-8 border-l-orange-600">
                  <span className="text-orange-600 mr-2">👉</span> {cur.slogan}
                </div>

                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{cur.contactInvite}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-24 bg-slate-950 text-white flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8 opacity-80 group cursor-pointer">
            <img src="logo.svg" alt="Logo" className="h-12 w-auto transition-transform group-hover:scale-110" />
            <span className="font-black uppercase italic tracking-tighter text-2xl">Ahvan Tour</span>
          </div>
          <a href={`tel:${CONTACTS.phone}`} className="text-2xl font-bold mb-12 tracking-widest hover:text-orange-500 transition-colors">{CONTACTS.phone}</a>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 mb-16 opacity-80">
            <a href={CONTACTS.instagram} target="_blank" className="flex flex-col items-center gap-2 group"><Instagram size={24} className="group-hover:text-orange-500 transition-colors" /><span className="text-[9px] uppercase font-bold tracking-widest opacity-50">Instagram</span></a>
            <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}`} target="_blank" className="flex flex-col items-center gap-2 group"><div className="font-black text-xl group-hover:text-orange-500 transition-colors">WA</div><span className="text-[9px] uppercase font-bold tracking-widest opacity-50">WhatsApp</span></a>
            <a href={CONTACTS.telegram} target="_blank" className="flex flex-col items-center gap-2 group"><Send size={24} className="group-hover:text-orange-500 transition-colors" /><span className="text-[9px] uppercase font-bold tracking-widest opacity-50">Telegram</span></a>
            <a href={CONTACTS.tiktok} target="_blank" className="flex flex-col items-center gap-2 group"><div className="font-black text-xl group-hover:text-orange-500 transition-colors">TT</div><span className="text-[9px] uppercase font-bold tracking-widest opacity-50">TikTok</span></a>
            <a href={CONTACTS.facebook} target="_blank" className="flex flex-col items-center gap-2 group"><Facebook size={24} className="group-hover:text-orange-500 transition-colors" /><span className="text-[9px] uppercase font-bold tracking-widest opacity-50">Facebook</span></a>
          </div>
          <div className="h-px w-20 bg-orange-600/30 mb-8"></div>
          <button onClick={() => setIsPrivacyOpen(true)} className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-orange-600 transition-colors mb-6">{cur.privacyTitle}</button>
          <p className="text-slate-800 text-[10px] uppercase tracking-[0.4em] font-bold italic">Ahvan Tour Egypt © 2026</p>
      </footer>
    </main>
  );
}