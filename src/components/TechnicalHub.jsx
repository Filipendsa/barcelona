import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Play, 
  RotateCcw, 
  Layers, 
  Ticket, 
  ExternalLink, 
  MapPin, 
  Users, 
  Coins, 
  CheckCircle2, 
  Sun, 
  ShieldCheck, 
  Train, 
  Utensils, 
  Sparkles,
  Navigation,
  CreditCard,
  ChevronRight,
  Info,
  Calendar,
  Check
} from 'lucide-react';
import { 
  LODGING_INFO, 
  TRIP_META, 
  PRICING_BREAKDOWN, 
  FREE_ATTRACTIONS, 
  PRACTICAL_TIPS,
  DAYS_DATA 
} from '../data/itineraryData';

export function TechnicalHub({ onReplayTour, onJumpToScene, scenes }) {
  const [includeCampNou, setIncludeCampNou] = useState(true);
  const GROUP_SIZE = 6; // Fixo para 6 pessoas
  const [activeTab, setActiveTab] = useState('pricing'); // 'pricing' | 'slides' | 'logistics' | 'tips'

  const handleReplay = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
    onReplayTour();
  };

  // Base pricing
  const baseTickets = PRICING_BREAKDOWN.filter(item => item.name !== "Camp Nou (Barça Immersive Tour)");
  const campNouTicket = PRICING_BREAKDOWN.find(item => item.name === "Camp Nou (Barça Immersive Tour)");

  const perPersonBase = baseTickets.reduce((acc, item) => acc + item.price, 0);
  const perPersonTotal = includeCampNou ? perPersonBase + (campNouTicket?.price || 0) : perPersonBase;
  const groupTotal = perPersonTotal * GROUP_SIZE;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-white space-y-8 font-serif" style={{ paddingTop: '140px', paddingBottom: '140px' }}>
      
      {/* Background Decorative Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full space-y-8">
        
        {/* Hub Header & Action Buttons */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl bg-gradient-to-r from-neutral-900/95 via-neutral-900/85 to-neutral-900/95 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-semibold border border-teal-500/30 mb-2.5">
                <Sparkles size={14} />
                <span>Central de Planejamento & Guia Oficial</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight mb-2">
                Painel Técnico & Orçamento
              </h1>
              <p className="text-neutral-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Custos oficiais para o nosso grupo de <strong className="text-amber-300">6 pessoas</strong>, links diretos para ingressos e rotas saindo da <strong className="text-amber-300">Avinguda de Gaudí 27</strong>.
              </p>
            </div>

            {/* Replay Presentation Button (Outline Style) */}
            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full lg:w-auto">
              <button
                onClick={handleReplay}
                className="btn-outline-gold"
              >
                <RotateCcw size={15} />
                <span>Reassistir Apresentação 🎬</span>
              </button>

              <button
                onClick={() => setActiveTab('slides')}
                className="btn-outline-glass"
              >
                <Layers size={15} className="text-amber-400" />
                <span>Mural de Slides ({scenes.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs (Outline Style) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-950/80 rounded-full border border-white/15 max-w-xl shadow-inner">
          <button
            onClick={() => setActiveTab('pricing')}
            className={`flex-1 min-w-[120px] py-2 px-4 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
              activeTab === 'pricing'
                ? 'border-amber-400/80 text-amber-300 bg-amber-500/15 font-bold shadow-sm'
                : 'border-transparent text-neutral-300 hover:text-white hover:border-white/20'
            }`}
          >
            <Coins size={14} />
            <span>Preços (6 Pessoas)</span>
          </button>

          <button
            onClick={() => setActiveTab('slides')}
            className={`flex-1 min-w-[120px] py-2 px-4 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
              activeTab === 'slides'
                ? 'border-amber-400/80 text-amber-300 bg-amber-500/15 font-bold shadow-sm'
                : 'border-transparent text-neutral-300 hover:text-white hover:border-white/20'
            }`}
          >
            <Layers size={14} />
            <span>Mural de Slides</span>
          </button>

          <button
            onClick={() => setActiveTab('logistics')}
            className={`flex-1 min-w-[120px] py-2 px-4 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
              activeTab === 'logistics'
                ? 'border-amber-400/80 text-amber-300 bg-amber-500/15 font-bold shadow-sm'
                : 'border-transparent text-neutral-300 hover:text-white hover:border-white/20'
            }`}
          >
            <MapPin size={14} />
            <span>Hospedagem & Metrô</span>
          </button>

          <button
            onClick={() => setActiveTab('tips')}
            className={`flex-1 min-w-[120px] py-2 px-4 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
              activeTab === 'tips'
                ? 'border-amber-400/80 text-amber-300 bg-amber-500/15 font-bold shadow-sm'
                : 'border-transparent text-neutral-300 hover:text-white hover:border-white/20'
            }`}
          >
            <Info size={14} />
            <span>Dicas & Shabat</span>
          </button>
        </div>

        {/* TAB 1: PRICING FOR 6 PEOPLE */}
        {activeTab === 'pricing' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Executive Budget Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Card 1: Grupo Total */}
              <div className="glass-panel p-5 rounded-3xl border border-amber-500/35 bg-neutral-900/90 text-left">
                <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider flex items-center gap-1.5 mb-1">
                  <Users size={14} />
                  <span>Total do Grupo (6 Pessoas)</span>
                </span>
                <p className="text-3xl font-bold text-white">
                  €{groupTotal.toFixed(2)}
                </p>
                <p className="text-[11px] text-neutral-400 mt-1">
                  {includeCampNou ? 'Todos os ingressos + Camp Nou' : 'Ingressos sem Camp Nou'}
                </p>
              </div>

              {/* Card 2: Custo Por Pessoa */}
              <div className="glass-panel p-5 rounded-3xl border border-teal-500/30 bg-neutral-900/90 text-left">
                <span className="text-[10px] uppercase font-bold text-teal-300 tracking-wider flex items-center gap-1.5 mb-1">
                  <Coins size={14} />
                  <span>Custo por Pessoa</span>
                </span>
                <p className="text-3xl font-bold text-white">
                  €{perPersonTotal.toFixed(2)}
                </p>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Média por pessoa para toda a viagem
                </p>
              </div>

              {/* Card 3: Transporte Metrô */}
              <div className="glass-panel p-5 rounded-3xl border border-blue-500/30 bg-neutral-900/90 text-left">
                <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider flex items-center gap-1.5 mb-1">
                  <Train size={14} />
                  <span>Transporte T-Casual</span>
                </span>
                <p className="text-3xl font-bold text-white">
                  €78,00
                </p>
                <p className="text-[11px] text-neutral-400 mt-1">
                  6 cartões de 10 viagens (€13 cada)
                </p>
              </div>

              {/* Card 4: Toggle Camp Nou */}
              <div className="glass-panel p-5 rounded-3xl border border-white/15 bg-neutral-900/90 text-left flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block mb-1">
                    Camp Nou Barça Tour (€28)
                  </span>
                  <p className="text-xs text-neutral-200 font-medium">
                    {includeCampNou ? '6 Ingressos inclusos' : 'Apenas quem quiser'}
                  </p>
                </div>
                <button
                  onClick={() => setIncludeCampNou(!includeCampNou)}
                  className={`mt-2 py-2 px-3 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                    includeCampNou
                      ? 'border-teal-400/80 text-teal-300 bg-teal-500/15'
                      : 'border-white/20 text-neutral-400 hover:text-white bg-transparent'
                  }`}
                >
                  <Check size={14} className="inline mr-1" />
                  <span>{includeCampNou ? 'INCLUSO PARA OS 6' : 'OPCIONAL'}</span>
                </button>
              </div>

            </div>

            {/* Structured Tickets Directory List */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <Ticket className="text-amber-400" size={20} />
                    <span>Tabela Oficial de Ingressos (6 Pessoas)</span>
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Preços unitários e total para 6 pessoas com links diretos para compras oficiais
                  </p>
                </div>
              </div>

              <div className="divide-y divide-white/5 space-y-2">
                {PRICING_BREAKDOWN.map((item, idx) => {
                  const isCampNou = item.name.includes("Camp Nou");
                  if (isCampNou && !includeCampNou) return null;
                  const groupItemTotal = item.price * GROUP_SIZE;

                  return (
                    <div key={idx} className="pt-3 pb-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-white/[0.02] px-3 rounded-2xl transition-colors">
                      {/* Attraction Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                          <h4 className="font-bold text-sm sm:text-base text-white truncate">
                            {item.name}
                          </h4>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                            {item.day}
                          </span>
                          {item.status.includes('Opcional') && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 font-bold border border-amber-500/30">
                              OPCIONAL
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-400 pl-4 leading-relaxed">
                          {item.notes}
                        </p>
                      </div>

                      {/* Pricing Columns */}
                      <div className="flex items-center gap-6 shrink-0 pl-4 md:pl-0">
                        <div className="text-right">
                          <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Unitário</span>
                          <span className="text-sm font-bold text-neutral-200">€{item.price.toFixed(2)}</span>
                        </div>

                        <div className="text-right bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/25">
                          <span className="text-[10px] uppercase text-amber-300 block font-bold">Total (6x)</span>
                          <span className="text-base font-bold text-amber-300">€{groupItemTotal.toFixed(2)}</span>
                        </div>

                        {/* Buy Link (Outline Button) */}
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-gold text-xs px-3.5 py-1.5"
                          >
                            <span>Comprar</span>
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Free Attractions Visual Grid */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 text-left">
              <div className="mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="text-teal-400" size={20} />
                    <span>13 Atrações e Momentos Gratuitos Já Inclusos no Roteiro</span>
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Nenhum ingresso necessário para esses pontos turísticos
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-500/15 text-teal-300 font-bold text-xs border border-teal-500/30 hidden sm:inline-block">
                  Custo: €0,00
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {FREE_ATTRACTIONS.map((free, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-neutral-900/80 border border-white/10 flex items-center justify-between gap-2 hover:border-teal-500/40 transition-all">
                    <div>
                      <span className="text-neutral-200 font-medium text-xs sm:text-sm block">{free.name}</span>
                      <span className="text-[11px] text-neutral-400">{free.day}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-500/15 text-teal-300 font-bold text-xs shrink-0 border border-teal-500/30">
                      Grátis
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: POWERPOINT / SLIDE DECK GRID */}
        {activeTab === 'slides' && (
          <div className="space-y-6 animate-fadeIn text-left">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div>
                <h3 className="font-serif text-lg font-bold text-white">Mural de Slides da Apresentação</h3>
                <p className="text-xs text-neutral-400">Clique em qualquer slide para pular diretamente para ele</p>
              </div>
              <button
                onClick={handleReplay}
                className="btn-outline-gold text-xs px-3 py-1.5"
              >
                <RotateCcw size={13} />
                <span>Começar do Início</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {scenes.map((scene, idx) => {
                const isDayCard = scene.type === 'day_card';
                const isAttraction = scene.type === 'attraction';
                const isIntro = scene.type === 'intro';

                const title = isIntro 
                  ? 'Abertura: Barcelona 2026'
                  : isDayCard 
                  ? `Capítulo: Dia ${scene.dayNumber} - ${scene.title}`
                  : scene.attraction?.name;

                const subtitle = isAttraction ? `${scene.attraction?.time} • Dia ${scene.dayNumber}` : scene.subtitle;

                return (
                  <button
                    key={scene.id}
                    onClick={() => onJumpToScene(idx)}
                    className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/60 bg-neutral-900 text-left transition-all hover:scale-[1.02] shadow-lg flex flex-col cursor-pointer aspect-video"
                  >
                    <img
                      src={scene.image || '/images/barcelona_hero.jpg'}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-black/30" />

                    <div className="relative z-10 p-3.5 flex flex-col justify-between h-full">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded-full bg-black/70 text-[10px] text-amber-300 border border-white/10">
                          Slide #{idx + 1}
                        </span>
                        {isDayCard && (
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40 text-[10px]">
                            DIA {scene.dayNumber}
                          </span>
                        )}
                      </div>

                      <div>
                        <h5 className="font-bold text-xs sm:text-sm text-white line-clamp-1 group-hover:text-amber-200 transition-colors">
                          {title}
                        </h5>
                        <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                          {subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: HOSPEDAGEM & METRÔ */}
        {activeTab === 'logistics' && (
          <div className="space-y-8 animate-fadeIn text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Hotel Information Card */}
              <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-white/15">
                <div className="flex items-center gap-3.5 text-amber-400 mb-6">
                  <div className="p-3 rounded-2xl bg-amber-500/15 text-amber-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">
                      {LODGING_INFO.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-200/80 mt-0.5">
                      {LODGING_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mt-4">
                  {LODGING_INFO.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-neutral-900/70 border border-white/10">
                      <CheckCircle2 size={16} className="text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-neutral-200 leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-xs text-amber-300 uppercase tracking-wider">Estações de Metrô Próximas</h5>
                    <p className="text-xs text-neutral-300 mt-1">
                      Sagrada Família (L2 Roxa, L5 Azul) e Sant Pau (L5 Azul)
                    </p>
                  </div>
                  <Train size={24} className="text-amber-400 shrink-0 ml-3" />
                </div>
              </div>

              {/* Day by Day Distance Matrix */}
              <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-white/15">
                <h4 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                  <Navigation className="text-blue-400" size={20} />
                  <span>Deslocamentos por Dia (Saindo da Av. Gaudí)</span>
                </h4>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-white/10 text-xs sm:text-sm">
                    <div className="flex items-center justify-between font-bold text-amber-300 mb-1">
                      <span>Dia 1: Sábado (Eixample & Praia)</span>
                      <span>100% a pé / metrô L4</span>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      Sagrada Família (2 min a pé) → Sant Pau (7 min a pé) → Passeig de Gràcia (20 min) → Praia (Metrô L4).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-white/10 text-xs sm:text-sm">
                    <div className="flex items-center justify-between font-bold text-teal-300 mb-1">
                      <span>Dia 2: Domingo (Gaudí Completo)</span>
                      <span>A pé + Ônibus 24 + Metrô L3</span>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      Sagrada (2 min) → Casa Vicens (15 min) → Parc Güell (Ônibus 24) → Batlló & Milà (Metrô L3) → Fonte Mágica (Metrô L3 Espanya).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-white/10 text-xs sm:text-sm">
                    <div className="flex items-center justify-between font-bold text-purple-300 mb-1">
                      <span>Dia 3: Segunda (Centro Gótico & Ciutadella)</span>
                      <span>Metrô L2 + 100% a pé</span>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      Metrô direto até Liceu (15 min). Todo o Bairro Gótico, Catedral, Boqueria, El Born e Parque da Ciutadella são 100% caminháveis.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-white/10 text-xs sm:text-sm">
                    <div className="flex items-center justify-between font-bold text-blue-300 mb-1">
                      <span>Dia 4: Terça (Montjuïc & Camp Nou)</span>
                      <span>Metrô L5 / L2</span>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      Camp Nou: Metrô L5 direto sem baldeação (18 min). Reunião na Plaça Espanya às 12:30 para subida conjunta de Montjuïc.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 4: DICAS PRÁTICAS & SHABAT */}
        {activeTab === 'tips' && (
          <div className="space-y-6 animate-fadeIn text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRACTICAL_TIPS.map((tip, idx) => (
                <div key={idx} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-amber-500/15 text-amber-300 shrink-0">
                    <Sun size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-white mb-1.5">{tip.title}</h4>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {tip.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
