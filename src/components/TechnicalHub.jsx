import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  RotateCcw, 
  Layers, 
  Ticket, 
  ExternalLink, 
  MapPin, 
  Users, 
  Coins, 
  CheckCircle2, 
  Sun, 
  Train, 
  Sparkles,
  Navigation,
  Info,
  Check,
  Map as MapIcon
} from 'lucide-react';
import { getCityData } from '../data/itineraryData';
import { InteractiveMap } from './InteractiveMap';

export function TechnicalHub({ onReplayTour, onJumpToScene, scenes, currentCity, onSelectCity }) {
  const cityData = getCityData(currentCity);
  const isMadrid = currentCity === 'madrid';

  const [includeCampNou, setIncludeCampNou] = useState(true);
  const GROUP_SIZE = 6; // Fixo para 6 pessoas
  const [activeTab, setActiveTab] = useState('logistics'); // 'logistics' | 'pricing' | 'slides' | 'tips'

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

  // Pricing calculation
  const pricingList = cityData.pricingBreakdown;
  const baseTickets = isMadrid 
    ? pricingList 
    : pricingList.filter(item => item.name !== "Camp Nou (Barça Immersive Tour)");
  
  const campNouTicket = !isMadrid ? pricingList.find(item => item.name === "Camp Nou (Barça Immersive Tour)") : null;

  const perPersonBase = baseTickets.reduce((acc, item) => acc + item.price, 0);
  const perPersonTotal = (!isMadrid && includeCampNou && campNouTicket) ? perPersonBase + campNouTicket.price : perPersonBase;
  const groupTotal = perPersonTotal * GROUP_SIZE;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-white space-y-8 font-serif" style={{ paddingTop: '140px', paddingBottom: '140px' }}>
      
      {/* Background Decorative Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full space-y-8">
        
        {/* City Selector Header Switcher */}
        <div className="flex items-center justify-center gap-3">
          <div className="inline-flex items-center p-1.5 bg-neutral-950/90 rounded-full border border-white/20 shadow-xl backdrop-blur-xl">
            <button
              onClick={() => onSelectCity('barcelona')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                !isMadrid
                  ? 'border-amber-400 text-amber-300 bg-amber-500/20 shadow-md'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              🏰 Roteiro Barcelona (13–16 Set)
            </button>
            <button
              onClick={() => onSelectCity('madrid')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isMadrid
                  ? 'border-red-400 text-red-300 bg-red-500/20 shadow-md'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              👑 Roteiro Madrid (16 Set - Express)
            </button>
          </div>
        </div>

        {/* Hub Header & Action Buttons */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl bg-gradient-to-r from-neutral-900/95 via-neutral-900/85 to-neutral-900/95 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-semibold border border-teal-500/30 mb-2.5">
                <Sparkles size={14} />
                <span>Central de Planejamento, Mapas & Guia Oficial ({cityData.name})</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight mb-2">
                Painel Técnico, Mapas & Orçamento — {cityData.name}
              </h1>
              <p className="text-neutral-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Mapas interativos com rotas traçadas, custos para o grupo de <strong className="text-amber-300">6 pessoas</strong>, links de compra e deslocamentos para <strong className="text-amber-300">{cityData.name}</strong>.
              </p>
            </div>

            {/* Replay Presentation Button */}
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

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-950/80 rounded-full border border-white/15 max-w-2xl shadow-inner">
          <button
            onClick={() => setActiveTab('logistics')}
            className={`flex-1 min-w-[120px] py-2 px-4 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
              activeTab === 'logistics'
                ? 'border-amber-400/80 text-amber-300 bg-amber-500/15 font-bold shadow-sm'
                : 'border-transparent text-neutral-300 hover:text-white hover:border-white/20'
            }`}
          >
            <MapIcon size={14} />
            <span>Mapas & Trajetos</span>
          </button>

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
            onClick={() => setActiveTab('tips')}
            className={`flex-1 min-w-[120px] py-2 px-4 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
              activeTab === 'tips'
                ? 'border-amber-400/80 text-amber-300 bg-amber-500/15 font-bold shadow-sm'
                : 'border-transparent text-neutral-300 hover:text-white hover:border-white/20'
            }`}
          >
            <Info size={14} />
            <span>Dicas Práticas</span>
          </button>
        </div>

        {/* TAB 1: MAPS & LOGISTICS (HIGHLIGHT) */}
        {activeTab === 'logistics' && (
          <div className="space-y-8 animate-fadeIn text-left">
            
            {/* Interactive Master Map Box */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-2 border-b border-white/10">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2.5">
                    <MapIcon className="text-amber-400" size={22} />
                    <span>Mapa Interativo de Atrações & Rotas — {cityData.name}</span>
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1">
                    Visualize o trajeto de cada dia com marcadores numerados e acesse as rotas detalhadas no Google Maps
                  </p>
                </div>
              </div>

              {/* Leaflet Master Map Component */}
              <InteractiveMap currentCity={currentCity} />
            </div>

            {/* Lodging Base & Distance Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Hotel / Base Info Card */}
              <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-white/15">
                <div className="flex items-center gap-3.5 text-amber-400 mb-6">
                  <div className="p-3 rounded-2xl bg-amber-500/15 text-amber-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">
                      {cityData.lodgingInfo.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-200/80 mt-0.5">
                      {cityData.lodgingInfo.address}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mt-4">
                  {cityData.lodgingInfo.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-neutral-900/70 border border-white/10">
                      <CheckCircle2 size={16} className="text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-neutral-200 leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-xs text-amber-300 uppercase tracking-wider">Transporte & Mobilidade</h5>
                    <p className="text-xs text-neutral-300 mt-1">
                      {cityData.tripMeta.transportPass}
                    </p>
                  </div>
                  <Train size={24} className="text-amber-400 shrink-0 ml-3" />
                </div>
              </div>

              {/* Step-by-Step Route Breakdown */}
              <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-white/15">
                <h4 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                  <Navigation className="text-blue-400" size={20} />
                  <span>Trajetos e Deslocamentos Detalhados</span>
                </h4>

                <div className="space-y-3.5">
                  {!isMadrid ? (
                    <>
                      <div className="p-4 rounded-2xl bg-neutral-900/80 border border-amber-500/25 text-xs sm:text-sm">
                        <div className="flex items-center justify-between font-bold text-amber-300 mb-1.5">
                          <span>Dia 1: Domingo (Chegada & Eixo Gaudí)</span>
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/15">100% a pé / metrô L5</span>
                        </div>
                        <p className="text-neutral-300 leading-relaxed">
                          El Prat BCN (10:40) → Base Av. Gaudí 27 → Sagrada Família (2 min a pé) → Casa Milà (Metrô L5 ou 15 min a pé) → Casa Batlló (350m descendo o Passeig de Gràcia).
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-neutral-900/80 border border-teal-500/25 text-xs sm:text-sm">
                        <div className="flex items-center justify-between font-bold text-teal-300 mb-1.5">
                          <span>Dia 2: Segunda (Feira, Parques & Ciência)</span>
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-teal-500/15">Tram T4 + Metrô L7 + Ônibus V19</span>
                        </div>
                        <p className="text-neutral-300 leading-relaxed">
                          Mercat dels Encants (Glòries) → Parc de la Ciutadella & Arco do Triunfo (Tram T4) → Almoço El Born → CosmoCaixa (FGC Linha L7) → Parc Güell (Ônibus V19 direto).
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-neutral-900/80 border border-blue-500/25 text-xs sm:text-sm">
                        <div className="flex items-center justify-between font-bold text-blue-300 mb-1.5">
                          <span>Dia 3: Terça (Gótico, Barça & Praia)</span>
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-500/15">Eixo direto Metrô Linha L3</span>
                        </div>
                        <p className="text-neutral-300 leading-relaxed">
                          Catedral (Grátis 08h30) → Bairro Gótico & Pont del Bisbe → La Boqueria (Liceu) → Spotify Camp Nou (Metrô L3 Palau Reial) → MNAC Montjuïc (Metrô L3 Espanya) → Praia de Barceloneta & Fonte Mágica.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-4 rounded-2xl bg-neutral-900/80 border border-red-500/25 text-xs sm:text-sm">
                        <div className="flex items-center justify-between font-bold text-red-300 mb-1.5">
                          <span>Dia 4: Quarta (Madrid Express 13:45–23:55)</span>
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-500/15">Cercanías C1 + 100% a pé</span>
                        </div>
                        <p className="text-neutral-300 leading-relaxed">
                          Desembarque MAD (13:45) → Consigna T4 & Cercanías a Sol → Porta do Sol & Plaza Mayor (15h) → Mercado São Miguel (16h30) → Palácio Real & Almudena (17h30) → Gran Vía & Cibeles (18h45) → Retiro (20h) → Jantar (21h15) → Aeroporto (22h) → Voo (23h55).
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

            </div>

            {/* Madrid Optional Attractions Section (if Madrid is active) */}
            {isMadrid && cityData.optionalAttractions && (
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 text-left">
                <div className="mb-4 pb-3 border-b border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                      <Sparkles className="text-amber-400" size={18} />
                      <span>Atrações Opcionais Mapeadas ao Longo do Trajeto em Madrid</span>
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Sugestões adicionais para quem desejar flexibilizar o percurso a pé
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {cityData.optionalAttractions.map((opt, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-neutral-900/90 border border-amber-500/20 flex flex-col justify-between gap-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-amber-300 block mb-1">
                          {opt.category} • {opt.priceFormatted}
                        </span>
                        <h5 className="font-bold text-sm text-white mb-1">{opt.name}</h5>
                        <p className="text-xs text-neutral-300 leading-relaxed">{opt.description}</p>
                      </div>
                      <span className="text-[11px] text-neutral-400 flex items-center gap-1">
                        <MapPin size={11} className="text-red-400" />
                        <span>{opt.location}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: PRICING FOR 6 PEOPLE */}
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
                  {!isMadrid
                    ? (includeCampNou ? 'Todos os ingressos + Camp Nou' : 'Ingressos sem Camp Nou')
                    : 'Estimativa de gastos essenciais em Madrid'}
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
                  Média individual para {cityData.name}
                </p>
              </div>

              {/* Card 3: Transporte */}
              <div className="glass-panel p-5 rounded-3xl border border-blue-500/30 bg-neutral-900/90 text-left">
                <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider flex items-center gap-1.5 mb-1">
                  <Train size={14} />
                  <span>Transporte</span>
                </span>
                <p className="text-3xl font-bold text-white">
                  {!isMadrid ? '€72,90' : '€15,60'}
                </p>
                <p className="text-[11px] text-neutral-400 mt-1">
                  {!isMadrid
                    ? '6 cartões T-Casual de 10 viagens (~€12,15)'
                    : '6 bilhetes Cercanías C1 ida/volta (~€2,60)'}
                </p>
              </div>

              {/* Card 4: Toggle / Highlight */}
              {!isMadrid ? (
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
              ) : (
                <div className="glass-panel p-5 rounded-3xl border border-red-500/30 bg-neutral-900/90 text-left flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-red-300 tracking-wider block mb-1">
                      Consigna + Trem
                    </span>
                    <p className="text-xs text-neutral-200 font-medium">
                      Guarda-volumes aeroporto + Cercanías direto
                    </p>
                  </div>
                  <span className="text-xs font-bold text-red-300 mt-2">
                    ~€12,60 / pessoa
                  </span>
                </div>
              )}

            </div>

            {/* Structured Tickets Directory List */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <Ticket className="text-amber-400" size={20} />
                    <span>Tabela Oficial de Ingressos & Gastos ({cityData.name})</span>
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Preços unitários e estimativa para o grupo de 6 pessoas
                  </p>
                </div>
              </div>

              <div className="divide-y divide-white/5 space-y-2">
                {pricingList.map((item, idx) => {
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
                          {item.status?.includes('Opcional') && (
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

                        {/* Buy Link */}
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
                    <span>{cityData.freeAttractions.length} Atrações Gratuitas em {cityData.name}</span>
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
                {cityData.freeAttractions.map((free, i) => (
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

        {/* TAB 3: POWERPOINT / SLIDE DECK GRID */}
        {activeTab === 'slides' && (
          <div className="space-y-6 animate-fadeIn text-left">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div>
                <h3 className="font-serif text-lg font-bold text-white">Mural de Slides — {cityData.name}</h3>
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
                  ? `Abertura: ${cityData.name}`
                  : isDayCard 
                  ? `Capítulo: ${scene.title}`
                  : scene.attraction?.name;

                const subtitle = isAttraction ? `${scene.attraction?.time} • ${scene.cityName}` : scene.subtitle;

                return (
                  <button
                    key={scene.id}
                    onClick={() => onJumpToScene(idx)}
                    className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/60 bg-neutral-900 text-left transition-all hover:scale-[1.02] shadow-lg flex flex-col cursor-pointer aspect-video"
                  >
                    <img
                      src={scene.image || cityData.heroImage}
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
                            {cityData.name}
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

        {/* TAB 4: DICAS PRÁTICAS & OBSERVAÇÕES */}
        {activeTab === 'tips' && (
          <div className="space-y-6 animate-fadeIn text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cityData.practicalTips.map((tip, idx) => (
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
