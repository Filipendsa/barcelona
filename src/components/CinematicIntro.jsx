import React from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Sun, 
  Compass, 
  Coins,
  ShoppingBag,
  Building2,
  Landmark,
  Layers
} from 'lucide-react';
import { getCityData } from '../data/itineraryData';

export function CinematicIntro({ onStartTour, onOpenTechHub, currentCity, onSelectCity }) {
  const cityData = getCityData(currentCity);
  const isMadrid = currentCity === 'madrid';

  return (
    <div className="cinema-stage-card font-serif">
      <div className="relative z-10 cinema-intro-container font-serif">
        
        {/* City Toggle Selector Pill in Intro */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="inline-flex items-center p-1 bg-neutral-950/80 rounded-full border border-white/20 backdrop-blur-md shadow-lg">
            <button
              onClick={() => onSelectCity('barcelona')}
              className={`px-4 py-1.5 rounded-full text-xs font-serif font-bold transition-all cursor-pointer border ${
                !isMadrid
                  ? 'border-amber-400 text-amber-300 bg-amber-500/20 shadow-md'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              🏰 Barcelona (13–16 Set)
            </button>
            <button
              onClick={() => onSelectCity('madrid')}
              className={`px-4 py-1.5 rounded-full text-xs font-serif font-bold transition-all cursor-pointer border ${
                isMadrid
                  ? 'border-red-400 text-red-300 bg-red-500/20 shadow-md'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              👑 Madrid (16 Set - Express)
            </button>
          </div>
        </div>

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm font-medium backdrop-blur-md">
          <Sparkles size={14} className="text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Apresentação Oficial da Viagem • {cityData.country}</span>
        </div>

        {/* Main Title */}
        <h1 className="cinema-title-hero uppercase">
          {cityData.name}
        </h1>

        {/* Subtitle */}
        <p className="cinema-subtitle-hero text-balance max-w-3xl">
          {!isMadrid
            ? '3 noites e 4 dias de arte de Gaudí, feiras, ciência interativa, Camp Nou, labirinto gótico e mar Mediterrâneo.'
            : '1 tarde e noite intensiva (13:45 às 23:55) — Do marco do Quilômetro Zero ao Palácio Real, compras na Gran Vía, tapas e Retiro.'}
        </p>

        {/* Key Trip Cards Grid */}
        <div className="cinema-cards-grid">
          {!isMadrid ? (
            <>
              {/* Barcelona Cards */}
              <div className="cinema-summary-card">
                <div className="flex items-center gap-2 text-amber-400 mb-1.5">
                  <Calendar size={16} />
                  <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-wider">Período</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">13 a 16 de Setembro</p>
                <p className="text-xs text-neutral-400 mt-1">Chegada Dom 10:40 (4 dias)</p>
              </div>

              <div className="cinema-summary-card">
                <div className="flex items-center gap-2 text-teal-400 mb-1.5">
                  <MapPin size={16} />
                  <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-wider">Nossa Base</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">Av. de Gaudí 27</p>
                <p className="text-xs text-neutral-400 mt-1">A 2 min da Sagrada Família</p>
              </div>

              <div className="cinema-summary-card">
                <div className="flex items-center gap-2 text-amber-300 mb-1.5">
                  <Layers size={16} />
                  <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-wider">Eixo & Ciência</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">Gaudí, Feira & CosmoCaixa</p>
                <p className="text-xs text-neutral-400 mt-1">Encants, Ciutadella e Güell</p>
              </div>

              <div className="cinema-summary-card">
                <div className="flex items-center gap-2 text-blue-400 mb-1.5">
                  <Compass size={16} />
                  <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-wider">Mobilidade</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">A pé & Metrô T-Casual</p>
                <p className="text-xs text-neutral-400 mt-1">10 viagens por ~€12,15</p>
              </div>
            </>
          ) : (
            <>
              {/* Madrid Cards */}
              <div className="cinema-summary-card">
                <div className="flex items-center gap-2 text-red-400 mb-1.5">
                  <Calendar size={16} />
                  <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-wider">Horário Express</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">Quarta, 16/09 (13h45–23h55)</p>
                <p className="text-xs text-neutral-400 mt-1">Escala intensiva na capital</p>
              </div>

              <div className="cinema-summary-card">
                <div className="flex items-center gap-2 text-amber-400 mb-1.5">
                  <Landmark size={16} />
                  <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-wider">Eixo Histórico</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">Sol, Plaza Mayor & Palácio</p>
                <p className="text-xs text-neutral-400 mt-1">100% a pé no centro antigo</p>
              </div>

              <div className="cinema-summary-card">
                <div className="flex items-center gap-2 text-amber-300 mb-1.5">
                  <ShoppingBag size={16} />
                  <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-wider">Compras & Tapas</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">Gran Vía & São Miguel</p>
                <p className="text-xs text-neutral-400 mt-1">Lojas, gastronomia e cafés</p>
              </div>

              <div className="cinema-summary-card">
                <div className="flex items-center gap-2 text-teal-400 mb-1.5">
                  <Building2 size={16} />
                  <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-wider">Parque & Regresso</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">Retiro UNESCO & Voo</p>
                <p className="text-xs text-neutral-400 mt-1">Palácio de Cristal e voo 23:55</p>
              </div>
            </>
          )}
        </div>

        {/* CTA Action Buttons */}
        <div className="cinema-actions-row">
          <button
            onClick={onStartTour}
            className={isMadrid ? "btn-outline-gold text-red-200 border-red-500/40" : "btn-outline-gold"}
          >
            <Play size={15} className={isMadrid ? "text-red-300" : "text-amber-300"} fill="currentColor" />
            <span>Iniciar Roteiro de {cityData.name}</span>
          </button>

          <button
            onClick={onOpenTechHub}
            className="btn-outline-glass"
          >
            <Coins size={15} className="text-amber-400" />
            <span>Custos, Ingressos & Mapas ({cityData.name})</span>
          </button>
        </div>

        {/* Keyboard hint */}
        <p className="text-xs text-neutral-400 mt-1">
          Pressione <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 font-mono text-[10px] text-neutral-200">Espaço</kbd> para pausar/play • Use as <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 font-mono text-[10px] text-neutral-200">Setas</kbd> para navegar
        </p>

      </div>
    </div>
  );
}
