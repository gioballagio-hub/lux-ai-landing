
import React from 'react';
import { 
  Cpu, 
  TrendingUp, 
  Clock, 
  Settings, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  BarChart3,
  Bot
} from 'lucide-react';

// URL di conversione centralizzato
const CALENDLY_URL = "https://calendly.com/aixum-info/30min";

// --- Header Component ---
const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
            <Cpu className="text-black w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter uppercase">
            Lux<span className="gold-text-gradient">AI</span> Academy
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#soluzione" className="hover:text-[#D4AF37] transition-colors">Soluzione</a>
          <a href="#moduli" className="hover:text-[#D4AF37] transition-colors">Corsi</a>
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
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F9A602]/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card gold-border text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-8">
          <Zap size={14} /> Leadership AI per il Business
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-[1.1]">
          Scala la tua PMI con l'AI:<br />
          <span className="gold-text-gradient italic">Risultati Reali, Non Hype.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Trasformiamo processi obsoleti in vantaggi competitivi misurabili. Percorsi formativi d'élite progettati esclusivamente per il tessuto imprenditoriale italiano.
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
        
        {/* Social Proof Placeholder */}
        <div className="mt-20">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-[0.2em] mb-8">Tecnologie Integrate & Partner</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-bold text-white flex items-center gap-2 tracking-tighter">OpenAI</span>
            <span className="text-2xl font-bold text-white flex items-center gap-2 tracking-tighter">Anthropic</span>
            <span className="text-2xl font-bold text-white flex items-center gap-2 tracking-tighter">Google AI</span>
            <span className="text-2xl font-bold text-white flex items-center gap-2 tracking-tighter">Mistral</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Pain Points ---
const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <Clock className="w-8 h-8 text-[#D4AF37]" />,
      title: "Tempo Sprecato",
      desc: "Il 60% dei task amministrativi può essere automatizzato, ma le PMI continuano a gestirli manualmente."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#D4AF37]" />,
      title: "Costi Operativi Alti",
      desc: "Processi inefficienti mangiano i margini di profitto. L'AI riduce i costi di gestione fino al 40%."
    },
    {
      icon: <Settings className="w-8 h-8 text-[#D4AF37]" />,
      title: "Decisioni Intuitive",
      desc: "Senza analisi dei dati basata su AI, stai navigando a vista in un mercato sempre più guidato dalla precisione."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0d0d0d]" id="soluzione">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">L'inerzia tecnologica è il <br/><span className="gold-text-gradient">vero costo</span> della tua azienda.</h2>
          <p className="text-gray-400 max-w-xl">Mentre i competitor adottano strumenti di automazione intelligenti, la tua azienda rischia di rimanere legata a flussi di lavoro del decennio scorso.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
              <div className="mb-6 p-4 rounded-xl bg-white/[0.03] w-fit group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- The Solution ---
const Solution: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-0 gold-gradient blur-[80px] opacity-20 -z-10" />
            <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="AI Workspace" 
              className="rounded-3xl border border-white/10 shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 p-6 glass-card border border-white/10 rounded-2xl hidden lg:block">
              <p className="text-[#D4AF37] font-bold text-3xl">+85%</p>
              <p className="text-xs uppercase tracking-widest text-gray-400">Efficienza Media</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Metodologia <span className="gold-text-gradient">ROI-First</span></h2>
          <p className="text-gray-400 text-lg mb-8">
            Non insegniamo a usare tool, insegniamo a costruire sistemi. Il nostro approccio si concentra sul ritorno sull'investimento immediato attraverso tre pilastri fondamentali:
          </p>
          <ul className="space-y-6">
            {[
              "Analisi preventiva dei flussi di lavoro aziendali",
              "Integrazione pratica di agenti AI autonomi",
              "Formazione del team per una transizione fluida"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="text-[#D4AF37] mt-1 shrink-0" />
                <span className="text-gray-200 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// --- Course Modules ---
const Modules: React.FC = () => {
  const courses = [
    {
      title: "AI & Automazione",
      subtitle: "Il Futuro Operativo",
      features: ["Workflow con Zapier/Make", "Customer Service via AI", "Automazione Documentale"],
      icon: <Settings className="text-[#D4AF37]" />,
      popular: false
    },
    {
      title: "Generative AI Business",
      subtitle: "Creatività Scalabile",
      features: ["Strategie di Prompting d'Elite", "Content Marketing Automizzato", "Deep Data Analysis"],
      icon: <Bot className="text-[#D4AF37]" />,
      popular: true
    },
    {
      title: "Strategia & Leadership",
      subtitle: "Visione Esecutiva",
      features: ["Compliance & Etica AI", "Business Model Innovation", "Change Management"],
      icon: <BarChart3 className="text-[#D4AF37]" />,
      popular: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0d0d0d]" id="moduli">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Percorsi di <span className="gold-text-gradient">Alta Formazione</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Scegli il modulo più adatto alla fase di crescita della tua azienda. Ogni corso include sessioni di consulenza 1-to-1.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((c, idx) => (
            <div key={idx} className={`relative p-10 rounded-3xl border ${c.popular ? 'border-[#D4AF37] bg-white/[0.04]' : 'border-white/10 bg-white/[0.02]'} hover:translate-y-[-8px] transition-all duration-300 group`}>
              {c.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-gradient text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Più Richiesto
                </div>
              )}
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center mb-8 border border-white/5 group-hover:gold-border transition-colors">
                {c.icon}
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
              <a 
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-4 rounded-xl font-bold transition-all ${c.popular ? 'gold-gradient text-black gold-glow' : 'glass-card gold-border text-white hover:bg-white/5'}`}
              >
                Scopri Dettagli
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Final CTA ---
const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 relative" id="contatti">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-[#D4AF37]/10 blur-[150px]" />
      </div>
      <div className="max-w-4xl mx-auto glass-card gold-border p-12 md:p-20 rounded-[40px] text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Pronto a trasformare la tua azienda?</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Le candidature per il trimestre Q4 sono aperte. Selezioniamo solo 10 PMI ogni 3 mesi per garantire la massima qualità della formazione e dell'integrazione tecnologica.
        </p>
        <a 
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-6 gold-gradient text-black rounded-2xl font-extrabold text-xl gold-glow hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto max-w-md"
        >
          Inizia Ora <ChevronRight />
        </a>
        <p className="mt-8 text-sm text-gray-500 font-medium">Consulenza gratuita di 30 minuti inclusa.</p>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 gold-gradient rounded-md flex items-center justify-center">
            <Cpu className="text-black w-4 h-4" />
          </div>
          <span className="text-lg font-display font-bold tracking-tighter uppercase">
            Lux<span className="gold-text-gradient">AI</span> Academy
          </span>
        </div>
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Termini & Condizioni</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">LinkedIn</a>
        </div>
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Lux AI Training Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// --- Main App Component ---
const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Modules />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
