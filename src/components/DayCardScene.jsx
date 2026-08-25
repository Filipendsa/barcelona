import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Sun, 
  Coins, 
  Layers, 
  Info, 
  ArrowRight,
  Flame
} from 'lucide-react';

export function DayCardScene({ scene, onNext }) {
  const { dayNumber, date, title, subtitle, specialNotice, attractionCount, costEstimate, themeColor } = scene;

  return (
    <div className="cinema-stage-card">
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center gap-4 sm:gap-5 py-2">
        
        {/* Day Number Pill */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-2xl backdrop-blur-md"
          style={{ 
            backgroundColor: `${themeColor}25`,
            borderColor: `${themeColor}60`,
            color: themeColor
          }}
        >
          <Calendar size={16} />
          <span className="font-display font-bold text-xs sm:text-sm tracking-widest uppercase">
            Capítulo 0{dayNumber} • {date}
          </span>
        </div>

        {/* Day Title */}
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-tight">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="font-serif italic text-base sm:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed text-balance">
          {subtitle}
        </p>

        {/* Special Notice Banner with generous padding */}
        {specialNotice && (
          <div
            className={`w-full max-w-2xl p-4 sm:p-6 rounded-2xl border text-left backdrop-blur-xl shadow-2xl ${
              specialNotice.type === 'shabbat'
                ? 'bg-amber-950/70 border-amber-500/40 text-amber-100'
                : specialNotice.type === 'highlight'
                ? 'bg-teal-950/70 border-teal-500/40 text-teal-100'
                : 'bg-neutral-900/80 border-white/20 text-neutral-100'
            }`}
          >
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="p-2.5 rounded-xl bg-white/10 shrink-0 mt-0.5">
                {specialNotice.type === 'shabbat' ? (
                  <Sun size={22} className="text-amber-400" />
                ) : specialNotice.type === 'highlight' ? (
                  <Flame size={22} className="text-teal-400" />
                ) : (
                  <Info size={22} className="text-blue-400" />
                )}
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base mb-1 flex items-center gap-2">
                  <span>{specialNotice.title}</span>
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {specialNotice.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Day Stats Row with generous padding */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-neutral-300 pt-1">
          <div className="glass-panel px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10">
            <Layers size={16} className="text-amber-400" />
            <span>{attractionCount} atrações programadas</span>
          </div>

          <div className="glass-panel px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10">
            <Coins size={16} className="text-teal-400" />
            <span>
              Ingressos: <strong className="text-white font-bold">{costEstimate === 0 ? '€0 (Gratuito)' : `~€${costEstimate}`}</strong>
            </span>
          </div>

          <div className="glass-panel px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10">
            <MapPin size={16} className="text-blue-400" />
            <span>Partida: Av. de Gaudí 27</span>
          </div>
        </div>

        {/* Action Button to Next Slide */}
        <button
          onClick={onNext}
          className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 border border-white/20 transition-all hover:scale-105 cursor-pointer mt-2"
        >
          <span>Ver roteiro deste dia</span>
          <ArrowRight size={16} />
        </button>

      </div>
    </div>
  );
}
