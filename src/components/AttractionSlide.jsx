import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  MapPin, 
  ExternalLink, 
  Lightbulb, 
  Sun, 
  Sunset, 
  Moon, 
  Sparkles,
  Ticket
} from 'lucide-react';

export function AttractionSlide({ scene }) {
  const { attraction, dayNumber, dayDate, indexInDay, totalInDay, themeColor, image } = scene;

  // Icon based on time period
  const getPeriodIcon = (period) => {
    if (period.includes('Noite')) return <Moon size={14} className="text-indigo-400" />;
    if (period.includes('Tarde') || period.includes('Pôr do Sol')) return <Sunset size={14} className="text-amber-400" />;
    return <Sun size={14} className="text-amber-300" />;
  };

  return (
    <div className="cinema-stage-card font-serif">
      <div className="cinema-attraction-grid">
        
        {/* Left Column: Information & Details */}
        <div className="flex flex-col items-start text-left gap-3.5 sm:gap-4">
          
          {/* Top Meta Bar */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Day Badge */}
            <span 
              className="px-3 py-1 rounded-full text-xs font-serif font-bold uppercase tracking-wider border backdrop-blur-md"
              style={{
                backgroundColor: `${themeColor}15`,
                borderColor: `${themeColor}50`,
                color: themeColor
              }}
            >
              Dia 0{dayNumber} • {dayDate.split(',')[0]}
            </span>

            {/* Time & Period */}
            <span className="px-3 py-1 rounded-full bg-neutral-900/90 border border-white/15 text-neutral-300 text-xs font-serif flex items-center gap-1.5 backdrop-blur-md">
              {getPeriodIcon(attraction.period)}
              <span>{attraction.time}</span>
            </span>

            {/* Slide Index Counter */}
            <span className="px-2.5 py-1 rounded-full bg-white/10 text-neutral-300 text-xs font-serif">
              {indexInDay} de {totalInDay}
            </span>

            {/* Optional Tag if Camp Nou */}
            {attraction.isOptional && (
              <span className="px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/35 text-xs font-serif font-bold flex items-center gap-1">
                <Sparkles size={12} />
                <span>OPÇÃO SUGERIDA</span>
              </span>
            )}
          </div>

          {/* Attraction Title */}
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            {attraction.name}
          </h2>

          {/* Narrative Description */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-200 leading-relaxed font-normal text-balance">
            {attraction.description}
          </p>

          {/* Padded Route & Tip Cards */}
          <div className="w-full space-y-3 pt-1">
            {/* Route from base */}
            <div className="cinema-info-box">
              <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                <MapPin size={17} />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs uppercase font-bold text-blue-300 tracking-wider block">
                  Como Chegar (Saindo da Av. de Gaudí 27)
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 mt-1 leading-relaxed">
                  {attraction.routeFromHotel}
                </p>
              </div>
            </div>

            {/* Practical Tip */}
            {attraction.tips && (
              <div className="cinema-tip-box">
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                  <Lightbulb size={17} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase font-bold text-amber-300 tracking-wider block">
                    Dica Prática de Visitação
                  </span>
                  <p className="text-xs sm:text-sm text-amber-100/90 mt-1 leading-relaxed">
                    {attraction.tips}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Price Tag & Official Ticket Button */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Price Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/15 backdrop-blur-md text-xs">
              <Ticket size={16} className={attraction.price > 0 ? "text-amber-400" : "text-teal-400"} />
              <span className="text-neutral-400">Ingresso:</span>
              <span className="font-bold text-white">
                {attraction.priceFormatted || (attraction.price > 0 ? `€${attraction.price.toFixed(2)}` : 'Grátis')}
              </span>
            </div>

            {/* Official Link Button (Sleek Outline Style) */}
            {attraction.ticketUrl && (
              <a
                href={attraction.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                <span>Site Oficial de Compra</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>

        </div>

        {/* Right Column: Crisp Photo Card with Captions */}
        <div className="hidden lg:block">
          <div className="relative group rounded-3xl overflow-hidden p-2.5 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl border border-white/15 backdrop-blur-md">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={image}
                alt={attraction.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-3.5 left-4 right-4 text-left">
                <span className="text-[10px] uppercase font-bold text-amber-300 tracking-widest block mb-0.5">
                  {attraction.category}
                </span>
                <h4 className="text-base font-bold text-white truncate">
                  {attraction.name}
                </h4>
                <div className="flex items-center justify-between text-xs text-neutral-300 mt-1">
                  <span>Duração: ~{attraction.duration}</span>
                  <span className="font-semibold text-teal-300">{attraction.priceFormatted}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
