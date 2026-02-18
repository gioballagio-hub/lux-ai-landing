
import React, { useState } from 'react';
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
  Layers
} from 'lucide-react';

// URL di conversione centralizzato
const CALENDLY_URL = "https://calendar.app.google/uokojpnrms98Kerc6";

// Nota: Sostituisci questo URL con il percorso del tuo file logo se caricato localmente
// Per ora usiamo una rappresentazione stilizzata coerente con l'immagine fornita
const LogoBrand: React.FC<{ size?: 'sm' | 'md' }> = ({ size = 'md' }) => (
  <div className="flex items-center mt-6">
    <img 
      src="/logo_AIXUM_senza_sfondo.png" 
      alt="AIXUM - Italian AI Solutions"
      className={`${size === 'sm' ? 'h-26 md:h-28' : 'h-28 md:h-40'} w-auto object-contain`}
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
            href={CALENDLY_URL} 
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
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F9A602]/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card gold-border text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-8">
          <Zap size={14} /> Leadership AI per il Business
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-[1.1]">
          Scala la tua PMI con l'AI:<br />
          <span className="gold-text-gradient italic">Risultati Concreti, <br />In Poco Tempo.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Trasformiamo processi obsoleti in vantaggi competitivi misurabili. Percorsi formativi sull'AI progettati esclusivamente per il tessuto imprenditoriale italiano.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 gold-gradient text-black rounded-xl font-extrabold text-lg gold-glow transition-all flex items-center justify-center gap-3"
          >
            Prenota la tua Consulenza <ArrowRight size={20} />
          </a>
          <a 
            href="#moduli"
            className="w-full sm:w-auto px-10 py-5 glass-card gold-border rounded-xl font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center"
          >
            Scopri i Percorsi
          </a>
        </div>
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
              href={CALENDLY_URL}
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
          <h2 className="text-3xl font-display font-bold mb-8">Privacy Policy</h2>
          
          <div className="space-y-8 text-gray-400 leading-relaxed">
            <section>
              <h3 className="text-white font-bold text-xl mb-3">1. Raccolta dei Dati</h3>
              <p>AIXUM raccoglie i dati personali forniti volontariamente attraverso il form di contatto e le richieste di consulenza. I dati raccolti includono nome, email, numero di telefono e informazioni aziendali.</p>
            </section>
            
            <section>
              <h3 className="text-white font-bold text-xl mb-3">2. Utilizzo dei Dati</h3>
              <p>I dati raccolti vengono utilizzati esclusivamente per rispondere alle richieste di informazioni, fornire i servizi richiesti e inviare comunicazioni relative ai nostri corsi e servizi di consulenza AI.</p>
            </section>
            
            <section>
              <h3 className="text-white font-bold text-xl mb-3">3. Conservazione e Sicurezza</h3>
              <p>I dati personali sono conservati in modo sicuro e protetti contro accessi non autorizzati. Implementiamo misure di sicurezza tecniche e organizzative appropriate per proteggere le informazioni.</p>
            </section>
            
            <section>
              <h3 className="text-white font-bold text-xl mb-3">4. Diritti dell'Utente</h3>
              <p>Hai il diritto di accedere, rettificare, cancellare i tuoi dati personali o opporti al loro trattamento. Per esercitare questi diritti, contattaci via email.</p>
            </section>
            
            <section>
              <h3 className="text-white font-bold text-xl mb-3">5. Cookie</h3>
              <p>Il sito utilizza cookie tecnici necessari per il funzionamento e cookie analitici per migliorare l'esperienza utente. Puoi gestire le preferenze sui cookie nelle impostazioni del browser.</p>
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
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">L'inerzia tecnologica è il <br/><span className="gold-text-gradient">vero costo</span> della tua azienda.</h2>
          <p className="text-gray-400 max-w-xl">Mentre i competitor adottano strumenti di automazione intelligenti, la tua azienda rischia di rimanere legata a flussi di lavoro del decennio scorso.</p>
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
          href={CALENDLY_URL}
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

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="py-12 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <LogoBrand size="sm" />
          <p className="text-sm text-gray-600 order-3 md:order-2">© {new Date().getFullYear()} AIXUM. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500 order-2 md:order-3">
            <button onClick={() => setShowPrivacy(true)} className="hover:text-[#D4AF37] cursor-pointer">Privacy</button>
            
          </div>
        </div>
      </footer>

      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </>
  );
};

const App: React.FC = () => {
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
      <Footer />
    </div>
  );
};

export default App;
