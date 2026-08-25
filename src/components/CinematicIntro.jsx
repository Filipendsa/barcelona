import React from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Sun, 
  Compass, 
  Coins
} from 'lucide-react';
import { LODGING_INFO, TRIP_META } from '../data/itineraryData';

export function CinematicIntro({ onStartTour, onOpenTechHub }) {
  return (
    <div className="cinema-stage-card">
      <div className="relative z-10 cinema-intro-container">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-lg shadow-amber-500/10">
          <Sparkles size={15} className="text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Apresentação Oficial da Viagem • Catalunha, Espanha</span>
        </div>

        {/* Main Title - Fluid Scaling */}
        <h1 className="cinema-title-hero">
          BARCELONA
        </h1>

        {/* Subtitle */}
        <p className="cinema-subtitle-hero text-balance">
          4 dias de arte de Gaudí, ruelas góticas medievais, brisa do Mediterrâneo e momentos inesquecíveis.
        </p>

        {/* Key Trip Cards Grid with Generous Padding */}
        <div className="cinema-cards-grid">
          {/* Card 1: Data */}
          <div className="cinema-summary-card">
            <div className="flex items-center gap-2 text-amber-400 mb-1.5">
              <Calendar size={18} />
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider">Período</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white leading-snug">13 a 16 de Setembro</p>
            <p className="text-xs text-neutral-400 mt-1">Chegada Sáb 10:35 (4 dias)</p>
          </div>

          {/* Card 2: Hospedagem */}
          <div className="cinema-summary-card">
            <div className="flex items-center gap-2 text-teal-400 mb-1.5">
              <MapPin size={18} />
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider">Nossa Base</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white leading-snug">Av. de Gaudí 27</p>
            <p className="text-xs text-neutral-400 mt-1">A 2 min da Sagrada Família</p>
          </div>

          {/* Card 3: Shabat */}
          <div className="cinema-summary-card">
            <div className="flex items-center gap-2 text-amber-300 mb-1.5">
              <Sun size={18} />
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider">Sábado / Shabat</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white leading-snug">100% Contemplativo</p>
            <p className="text-xs text-neutral-400 mt-1">Sem gastos até o pôr do sol (20:03)</p>
          </div>

          {/* Card 4: Transporte */}
          <div className="cinema-summary-card">
            <div className="flex items-center gap-2 text-blue-400 mb-1.5">
              <Compass size={18} />
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider">Mobilidade</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white leading-snug">A pé & Metrô T-Casual</p>
            <p className="text-xs text-neutral-400 mt-1">10 viagens por apenas €13</p>
          </div>
        </div>

        {/* CTA Action Buttons with ample breathing room */}
        <div className="cinema-actions-row">
          <button
            onClick={onStartTour}
            className="btn-cinema px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-neutral-950 font-bold text-sm sm:text-base flex items-center gap-2.5 shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer border-0"
          >
            <div className="w-7 h-7 rounded-full bg-neutral-950 text-amber-400 flex items-center justify-center">
              <Play size={14} fill="currentColor" />
            </div>
            <span>Iniciar Apresentação do Roteiro</span>
          </button>

          <button
            onClick={onOpenTechHub}
            className="px-6 py-3.5 sm:py-4 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-white/20 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer"
          >
            <Coins size={16} className="text-amber-400" />
            <span>Ver Tabela de Custos & Ingressos</span>
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
