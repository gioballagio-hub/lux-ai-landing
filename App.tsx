
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Clock, 
  Settings, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  BarChart3,
  Bot,
  X,
  Target,
  Layers,
  ShieldCheck,
  BarChartHorizontal
} from 'lucide-react';

// URL di conversione centralizzato
const CALENDAR_URL = "https://calendar.app.google/uokojpnrms98Kerc6";

// Nota: Sostituisci questo URL con il percorso del tuo file logo se caricato localmente
// Per ora usiamo una rappresentazione stilizzata coerente con l'immagine fornita
const LogoBrand: React.FC<{ size?: 'sm' | 'md' }> = ({ size = 'md' }) => (
  <div className="flex items-center mt-6">
    <img 
      src="/logo_AIXUM_senza_sfondo.png" 
      alt="AIXUM - Italian AI Solutions"
      className={`${size === 'sm' ? 'h-28 md:h-32' : 'h-28 md:h-40'} w-auto object-contain`}
    />
  </div>
);

// --- Header Component ---
const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <LogoBrand />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#soluzione" className="hover:text-[#D4AF37] transition-colors">Soluzione</a>
          <a href="#moduli" className="hover:text-[#D4AF37] transition-colors">Corsi</a>
          <a href="#chi-sono" className="hover:text-[#D4AF37] transition-colors">Chi sono</a>
          <a 
            href={CALENDAR_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 gold-gradient text-black rounded-full font-bold gold-glow transition-all"
          >
            Prenota Consulenza
          </a>
        </nav>
      </div>
    </header>
  );
};

// --- Hero Section ---
const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-28 px-6">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F9A602]/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card gold-border text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-8">
          <Zap size={14} /> Leadership AI per il Business
        </div>
        <h1 className="font-display font-extrabold mb-8 leading-tight">
          <span className="block text-4xl sm:text-5xl md:text-5xl text-white">Migliora la tua PMI con l'AI:</span>
          <span className="block text-5xl sm:text-6xl md:text-7xl gold-text-gradient italic mt-2">Risultati Concreti, <br />In Poco Tempo.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Trasformiamo processi obsoleti in vantaggi competitivi misurabili. Percorsi formativi sull'AI progettati esclusivamente per il tessuto imprenditoriale italiano.
        </p>
      </div>
    </section>
  );
};

// --- Course Detail Modal ---
interface Course {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  fullDescription: string;
  outcomes: string[];
  techStack: string[];
  icon: React.ReactNode;
  popular: boolean;
}

const CourseModal: React.FC<{ course: Course; onClose: () => void }> = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-3xl glass-card gold-border rounded-[32px] overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
        >
          <X size={24} className="text-gray-400" />
        </button>

        <div className="overflow-y-auto p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-black">
              {course.icon}
            </div>
            <div>
              <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">{course.subtitle}</p>
              <h3 className="text-3xl font-display font-bold">{course.title}</h3>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Target size={18} className="text-[#D4AF37]" /> Visione del Percorso
              </h4>
              <p className="text-gray-400 leading-relaxed text-lg italic">
                "{course.fullDescription}"
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#D4AF37]" /> Cosa otterrai
                </h4>
                <ul className="space-y-3">
                  {course.outcomes.map((o, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Layers size={18} className="text-[#D4AF37]" /> Moduli Tecnici
                </h4>
                <div className="flex flex-wrap gap-2">
                  {course.techStack.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-md bg-white/5 text-gray-300 text-xs border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold">Pronto per il prossimo step?</p>
              <p className="text-gray-500 text-sm">Parla con un nostro esperto per personalizzare questo modulo.</p>
            </div>
            <a 
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 gold-gradient text-black rounded-xl font-bold gold-glow flex items-center justify-center gap-2"
            >
              Prenota Sessione <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Privacy Modal ---
const PrivacyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl glass-card gold-border rounded-[32px] overflow-hidden max-h-[90vh] flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
        >
          <X size={24} className="text-gray-400" />
        </button>

        <div className="overflow-y-auto p-8 md:p-12">
          <h2 className="text-3xl font-display font-bold mb-2">Privacy Policy</h2>
          <p className="text-sm text-gray-500 mb-8">Ultimo aggiornamento: 18 Febbraio 2026</p>
          
          <div className="space-y-8 text-gray-400 leading-relaxed">
            <section>
              <h3 className="text-white font-bold text-xl mb-3">Titolare del Trattamento dei Dati</h3>
              <p>Il brand AIXUM è un servizio offerto da GIBA Solutions di Giovanni Ballardin. Il Titolare del Trattamento è Giovanni Ballardin, con sede legale in VIA VESPUCCI AMERIGO N. 82, 35030 - Selvazzano Dentro (PD) - IT, P.IVA: IT05606970282, email: info@aixum.it.</p>
            </section>

            <section>
              <h3 className="text-white font-bold text-xl mb-3">Tipologie di Dati Raccolti</h3>
              <p>Raccogliamo dati personali per fornire e migliorare i nostri servizi. Le tipologie di dati raccolti includono:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong className="text-gray-300">Dati di Navigazione:</strong> Indirizzi IP, tipo di browser, orari di accesso e altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente, raccolti tramite cookie o altre tecnologie di tracciamento.</li>
                <li><strong className="text-gray-300">Dati forniti volontariamente dall'utente:</strong> Nome, cognome, indirizzo email, numero di telefono e informazioni aziendali fornite tramite servizi di terze parti come Google Calendar per la prenotazione di consulenze.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-white font-bold text-xl mb-3">Finalità e Base Giuridica del Trattamento</h3>
              <p>I dati sono trattati per le seguenti finalità:</p>
               <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong className="text-gray-300">Erogazione del servizio:</strong> Per rispondere a richieste di informazioni e gestire le prenotazioni (base giuridica: esecuzione di misure precontrattuali).</li>
                <li><strong className="text-gray-300">Miglioramento del sito:</strong> Utilizzo di dati aggregati e anonimi per analizzare il traffico e migliorare l'esperienza utente, previo consenso (base giuridica: consenso).</li>
                <li><strong className="text-gray-300">Adempimenti di legge:</strong> Per obblighi legali e fiscali a cui il Titolare è soggetto.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-white font-bold text-xl mb-3">Cookie Policy</h3>
              <p>Questo sito utilizza cookie tecnici, necessari al funzionamento, e cookie analitici di terze parti (es. Google Analytics) per raccogliere informazioni in forma aggregata. L'installazione dei cookie non essenziali avviene solo previo tuo esplicito consenso. Puoi gestire o revocare il tuo consenso in qualsiasi momento tramite il pannello "Preferenze Cookie" accessibile dal footer del sito.</p>
            </section>

            <section>
              <h3 className="text-white font-bold text-xl mb-3">Comunicazione dei Dati e Terze Parti</h3>
              <p>I tuoi dati non saranno diffusi. Potranno essere comunicati a fornitori di servizi esterni (es. Calendar per le prenotazioni, fornitori di servizi tecnici, hosting provider) nominati, se necessario, Responsabili del Trattamento. L'elenco aggiornato dei Responsabili potrà sempre essere richiesto al Titolare del Trattamento.</p>
            </section>
            
            <section>
              <h3 className="text-white font-bold text-xl mb-3">Periodo di Conservazione</h3>
              <p>I dati sono conservati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti e nel rispetto delle normative vigenti. I dati per finalità di marketing basate sul consenso sono conservati fino a revoca dello stesso.</p>
            </section>
            
            <section>
              <h3 className="text-white font-bold text-xl mb-3">Diritti dell'Interessato (Artt. 15-22 GDPR)</h3>
              <p>In qualità di interessato, hai il diritto di:</p>
               <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Ottenere la conferma dell'esistenza o meno di dati personali che ti riguardano.</li>
                <li>Ottenere l'indicazione dell'origine dei dati, delle finalità e modalità del trattamento.</li>
                <li>Ottenere l'aggiornamento, la rettificazione o l'integrazione dei dati.</li>
                <li>Richiedere la cancellazione (diritto all'oblio), la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge.</li>
                <li>Opporti, in tutto o in parte, per motivi legittimi, al trattamento dei dati personali che ti riguardano.</li>
                <li>Revocare il consenso in qualsiasi momento senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca.</li>
                <li>Proporre reclamo a un'autorità di controllo (Garante per la Protezione dei Dati Personali).</li>
              </ul>
              <p className="mt-4">Per esercitare i tuoi diritti, puoi contattare il Titolare all'indirizzo email indicato.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Course Modules ---
const Modules: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    {
      id: "auto",
      title: "Analisi Vendite",
      subtitle: "Il Futuro Operativo",
      features: ["Analisi dati", "Redazione report", "Presentazione risultati"],
      fullDescription: "Analizza i tuoi dati di vendita e realizza strategie d'azione efficaci e costruite su misura per la tua attività.",
      outcomes: [
        "Analisi aggregata comportamento clienti",
        "Analisi comportamento specifico cliente",
        "Definizione di una strategia completa",
        "Definizione timing piano d'azione"
      ],
      techStack: ["Chat GPT", "Claude", "Gamma"],
      icon: <Settings size={24} />,
      popular: false
    },
    {
      id: "gen",
      title: "Processi Vendita Efficienti",
      subtitle: "Creatività Scalabile",
      features: ["Strategie di Prompting", "Content Marketing Avanzato", "Deep Data Analysis"],
      fullDescription: "Impara a utilizzare l'AI generativa non come un giocattolo, ma come un moltiplicatore di output per il marketing, le vendite e la ricerca.",
      outcomes: [
        "Produzione contenuti 10x più veloce",
        "Risparmio stimato di 7,2 ore settimanali/persona",
        "Analisi predittiva dei trend di mercato",
        "Creazione di prototipi e materiali marketing in real-time"
      ],
      techStack: ["ChatGPT", "Claude", "Agenti AI"],
      icon: <Bot size={24} />,
      popular: true
    },
    {
      id: "strat",
      title: "Tutoring",
      subtitle: "Visione Esecutiva",
      features: ["Applicazione prompt", "Mindset AI", "Creazione promt"],
      fullDescription: "Per studenti che desiderano verificare e migliorare la corretta applicazione dell'AI. Verificare, capire dove migliorare e come ragionare per utilizzare al meglio l'AI.",
      outcomes: [
        "Supervisione nell'utilizzo degli strumenti",
        "Sessione di risposta alle domande",
        "Assegnazione di esercizi/test da svolgere per applicare le nozioni apprese"
      ],
      techStack: ["Chat GPT", "Claude", "Notebook LLM"],
      icon: <BarChart3 size={24} />,
      popular: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0d0d0d]" id="moduli">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Percorsi di <span className="gold-text-gradient">Alta Formazione</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Scegli il modulo più adatto alla fase di crescita della tua azienda. Ogni corso include sessioni di consulenza in presenza.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((c) => (
            <div key={c.id} className={`relative p-10 rounded-3xl border ${c.popular ? 'border-[#D4AF37] bg-white/[0.04]' : 'border-white/10 bg-white/[0.02]'} hover:translate-y-[-8px] transition-all duration-300 group`}>
              {c.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-gradient text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Più Richiesto
                </div>
              )}
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center mb-8 border border-white/5 group-hover:gold-border transition-colors">
                <div className="text-[#D4AF37]">{c.icon}</div>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">{c.subtitle}</p>
              <h3 className="text-2xl font-bold mb-6">{c.title}</h3>
              <ul className="space-y-4 mb-10 text-gray-400">
                {c.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setSelectedCourse(c)}
                className={`w-full py-4 rounded-xl font-bold transition-all ${c.popular ? 'gold-gradient text-black gold-glow' : 'glass-card gold-border text-white hover:bg-white/5'}`}
              >
                Scopri Dettagli
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedCourse && (
        <CourseModal 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
        />
      )}
    </section>
  );
};

// --- About Me Section ---
const AboutMe: React.FC = () => {
  return (
    <section id="chi-sono" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 md:gap-20 items-center">
        <div className="md:col-span-2">
          <img
            src="/giovanni-ballardin.jpg"
            alt="Giovanni Ballardin, fondatore di AIXUM"
            className="rounded-3xl w-full h-auto object-cover aspect-[4/5] gold-border shadow-2xl shadow-black/30"
          />
        </div>
        <div className="md:col-span-3">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Chi <span className="gold-text-gradient">sono</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light">
            <p>
              Sono Giovanni Ballardin, Ingegnere Gestionale con esperienza in consulenza aziendale, ottimizzazione dei processi e formazione professionale.
            </p>
            <p>
              Ho affiancato imprese di diversi settori — dalla distribuzione alla manifattura — nell'analisi operativa, nella pianificazione strategica e nell'introduzione di strumenti digitali. Svolgo attività didattica come docente presso enti formativi accreditati, tra cui l'Istituto Veneto per il Lavoro e Confartigianato.
            </p>
            <p>
              Negli ultimi anni ho approfondito in modo sistematico l'applicazione dell'Intelligenza Artificiale in contesti aziendali concreti, con un focus sulle PMI italiane: non come tecnologia fine a sé stessa, ma come leva per <span className="text-white font-medium">semplificare processi, ridurre sprechi e liberare tempo</span> per le attività ad alto valore aggiunto.
            </p>
            <p className="text-white font-medium border-l-4 border-[#D4AF37] pl-6 py-2 italic">
              AIXUM nasce da questa doppia esperienza: la solidità metodologica dell'ingegneria gestionale unita a una conoscenza pratica degli strumenti AI oggi accessibili a qualsiasi impresa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0d0d0d]" id="soluzione">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            L'inerzia tecnologica è<br/>
            il <span className="gold-text-gradient">vero costo</span><br/>
            della tua azienda.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">Mentre i competitor adottano strumenti di automazione intelligenti, la tua azienda rischia di rimanere legata a flussi di lavoro del decennio scorso.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Clock size={32} className="text-[#D4AF37]" />, title: "Tempo Sprecato", desc: "Il 60% dei task amministrativi può essere velocizzato." },
            { icon: <TrendingUp size={32} className="text-[#D4AF37]" />, title: "Costi Operativi Alti", desc: "L'AI riduce i costi di gestione fino al 40%." },
            { icon: <Settings size={32} className="text-[#D4AF37]" />, title: "Decisioni Intuitive", desc: "Navigare a vista senza analisi dei dati è un rischio." }
          ].map((p, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
              <div className="mb-6">{p.icon}</div>
              <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 relative" id="contatti">
      <div className="max-w-4xl mx-auto glass-card gold-border p-12 md:p-20 rounded-[40px] text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Pronto a trasformare la tua azienda?</h2>
        <a 
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-6 gold-gradient text-black rounded-2xl font-extrabold text-xl gold-glow hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto max-w-md"
        >
          Inizia Ora <ChevronRight />
        </a>
      </div>
    </section>
  );
};

// --- GDPR & Cookie Components ---

const CookiePreferencesModal: React.FC<{
  onClose: () => void;
  onSave: (prefs: { analytics: boolean }) => void;
}> = ({ onClose, onSave }) => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(() => {
    const savedPrefsJSON = localStorage.getItem('cookiePreferences');
    if (savedPrefsJSON) {
      try {
        const savedPrefs = JSON.parse(savedPrefsJSON);
        return !!savedPrefs.analytics;
      } catch (e) {
        console.error("Failed to parse cookie preferences:", e);
        return false;
      }
    }
    return false;
  });

  const handleSave = () => {
    onSave({ analytics: analyticsEnabled });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} />
      <div className="relative w-full max-w-2xl glass-card gold-border rounded-[32px] overflow-hidden">
        <div className="p-8 md:p-12">
          <h3 className="text-2xl font-display font-bold mb-4">Preferenze Cookie</h3>
          <p className="text-gray-400 mb-8">
            Per offrirti la migliore esperienza possibile, utilizziamo i cookie. Seleziona le tue preferenze qui sotto. Puoi modificarle in qualsiasi momento.
          </p>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <ShieldCheck size={18} className="text-[#D4AF37]" /> Cookie Strettamente Necessari
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Sempre attivi. Questi cookie sono essenziali per il funzionamento del sito.</p>
                </div>
                <div className="w-12 h-6 flex items-center rounded-full bg-green-500/50 p-1">
                  <div className="w-4 h-4 rounded-full bg-white shadow-md"></div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
               <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <BarChartHorizontal size={18} className="text-[#D4AF37]" /> Cookie Analitici
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Ci aiutano a capire come usi il sito per migliorarlo.</p>
                </div>
                 <button
                   role="switch"
                   aria-checked={analyticsEnabled}
                   onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                   className={`${
                     analyticsEnabled ? 'bg-green-500' : 'bg-gray-600'
                   } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                 >
                   <span
                     className={`${
                       analyticsEnabled ? 'translate-x-6' : 'translate-x-1'
                     } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                   />
                 </button>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button onClick={handleSave} className="w-full px-8 py-4 gold-gradient text-black rounded-xl font-bold gold-glow">
              Salva Preferenze
            </button>
            <button onClick={onClose} className="w-full px-8 py-4 glass-card gold-border rounded-xl font-bold text-lg hover:bg-white/5">
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const CookieConsentBanner: React.FC<{
  onAccept: () => void;
  onReject: () => void;
  onCustomize: () => void;
}> = ({ onAccept, onReject, onCustomize }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-6">
       <div className="max-w-4xl mx-auto glass-card gold-border p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6">
          <p className="text-sm text-gray-300 flex-grow">
            Questo sito utilizza cookie per migliorare la tua esperienza. Rispettiamo la tua privacy e ti diamo il pieno controllo su quali cookie facoltativi abilitare.
          </p>
          <div className="flex items-center gap-4 flex-shrink-0 w-full md:w-auto">
            <button onClick={onReject} className="w-full md:w-auto px-6 py-3 glass-card gold-border rounded-xl font-bold hover:bg-white/5 transition-all">
              Rifiuta Tutti
            </button>
            <button onClick={onAccept} className="w-full md:w-auto px-6 py-3 gold-gradient text-black rounded-xl font-bold gold-glow transition-all">
              Accetta Tutti
            </button>
          </div>
          <button onClick={onCustomize} className="text-xs text-gray-500 hover:text-white underline whitespace-nowrap">
            Personalizza
          </button>
       </div>
    </div>
  );
};


const Footer: React.FC<{ onPrivacyClick: () => void; onCookiePrefsClick: () => void; }> = ({ onPrivacyClick, onCookiePrefsClick }) => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <LogoBrand size="md" />
        <p className="text-sm text-gray-600 order-3 md:order-2">© {new Date().getFullYear()} AIXUM. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-gray-500 order-2 md:order-3">
          <button onClick={onPrivacyClick} className="hover:text-[#D4AF37] cursor-pointer">Privacy Policy</button>
          <button onClick={onCookiePrefsClick} className="hover:text-[#D4AF37] cursor-pointer">Preferenze Cookie</button>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCookiePrefs, setShowCookiePrefs] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<'pending' | 'accepted' | 'rejected' | 'custom'>('pending');

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setCookieConsent(consent as any);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify({ analytics: true }));
    setCookieConsent('accepted');
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookiePreferences', JSON.stringify({ analytics: false }));
    setCookieConsent('rejected');
  };

  const handleSavePreferences = (prefs: { analytics: boolean }) => {
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    setCookieConsent('custom');
    setShowCookiePrefs(false);
  };
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Modules />
        <AboutMe />
        <FinalCTA />
      </main>
      <Footer onPrivacyClick={() => setShowPrivacy(true)} onCookiePrefsClick={() => setShowCookiePrefs(true)} />

      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
      {showCookiePrefs && <CookiePreferencesModal onClose={() => setShowCookiePrefs(false)} onSave={handleSavePreferences} />}
      
      {cookieConsent === 'pending' && (
        <CookieConsentBanner 
          onAccept={handleAcceptAll}
          onReject={handleRejectAll}
          onCustomize={() => setShowCookiePrefs(true)}
        />
      )}
    </div>
  );
};

export default App;
