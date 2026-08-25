import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, Sparkles, CheckCircle2, Play } from 'lucide-react';

export function SlideDeckDrawer({ 
  isOpen, 
  onClose, 
  scenes, 
  currentSceneIndex, 
  onSelectScene 
}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
        />

        {/* Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative z-10 w-full max-w-md sm:max-w-xl h-full bg-neutral-950/95 border-l border-white/15 p-6 flex flex-col shadow-2xl overflow-hidden backdrop-blur-2xl"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                <Layers size={20} />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white">
                  Índice de Slides ({scenes.length})
                </h3>
                <p className="text-xs text-neutral-400">
                  Navegue livremente como em uma apresentação
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Slides List */}
          <div className="flex-1 overflow-y-auto py-4 space-y-2.5 pr-1">
            {scenes.map((scene, idx) => {
              const isSelected = idx === currentSceneIndex;
              const isDayCard = scene.type === 'day_card';
              const isIntro = scene.type === 'intro';
              const isTechHub = scene.type === 'tech_hub';

              const title = isIntro 
                ? 'Abertura Cinematográfica'
                : isDayCard 
                ? `Dia ${scene.dayNumber}: ${scene.title}`
                : isTechHub 
                ? 'Painel Técnico & Orçamento'
                : scene.attraction?.name;

              const subtitle = isIntro
                ? 'Barcelona 2026 • 13 a 16 de Setembro'
                : isDayCard
                ? scene.date
                : isTechHub
                ? 'Custos, Ingressos & Rotas'
                : `${scene.attraction?.time} • ${scene.attraction?.period}`;

              return (
                <button
                  key={scene.id}
                  onClick={() => {
                    onSelectScene(idx);
                    onClose();
                  }}
                  className={`w-full p-3 rounded-2xl border text-left transition-all flex items-center gap-3.5 group cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-500 text-white shadow-lg'
                      : 'bg-neutral-900/70 hover:bg-neutral-800/80 border-white/5 text-neutral-300'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-16 h-12 rounded-xl overflow-hidden shrink-0 border border-white/10">
                    <img
                      src={scene.image || '/images/barcelona_hero.jpg'}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 bg-amber-500/30 flex items-center justify-center">
                        <Play size={14} fill="white" className="text-white" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-white/10 text-neutral-300">
                        #{idx + 1}
                      </span>
                      {isDayCard && (
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-500 text-neutral-950">
                          CAPÍTULO
                        </span>
                      )}
                      {scene.attraction?.priceFormatted && (
                        <span className="text-[10px] font-bold text-amber-300 ml-auto">
                          {scene.attraction.priceFormatted}
                        </span>
                      )}
                    </div>
                    <h5 className="font-semibold text-xs sm:text-sm text-white truncate group-hover:text-amber-200 transition-colors">
                      {title}
                    </h5>
                    <p className="text-[11px] text-neutral-400 truncate">
                      {subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Drawer Footer */}
          <div className="pt-3 border-t border-white/10 text-center shrink-0">
            <span className="text-[11px] text-neutral-400">
              Use as setas ← e → do teclado para navegar rapidamente
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
