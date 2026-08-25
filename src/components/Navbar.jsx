import React from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  Layers, 
  Receipt,
  Sparkles
} from 'lucide-react';

export function Navbar({ 
  currentScene, 
  totalScenes, 
  isPlaying, 
  onTogglePlay, 
  isMuted, 
  onToggleMute, 
  isFullscreen, 
  onToggleFullscreen,
  onJumpToScene,
  onOpenSlideDrawer,
  scenes
}) {
  const isTechHub = currentScene?.type === 'tech_hub';

  return (
    <header className="cinema-header">
      <div className="cinema-header-inner">
        
        {/* Left: Branding & Lodging Base */}
        <button 
          onClick={() => onJumpToScene(0)}
          className="flex items-center gap-2.5 text-left group transition-transform hover:scale-105 cursor-pointer bg-transparent border-0"
        >
          <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-400/50 flex items-center justify-center text-amber-300 font-bold text-xs tracking-wider shrink-0 shadow-sm">
            BCN
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-sm sm:text-base tracking-wider text-amber-200 group-hover:text-amber-100 transition-colors">
                BARCELONA
              </span>
              <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 font-medium border border-amber-500/30">
                13–16 SET
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 font-serif hidden md:block">
              Base: Av. de Gaudí 27 (Eixample)
            </p>
          </div>
        </button>

        {/* Center: Quick Day Jumpers (Outline Style) */}
        <div className="hidden lg:flex items-center gap-1.5 bg-neutral-950/80 p-1.5 rounded-full border border-white/15 shadow-inner">
          <button
            onClick={() => onJumpToScene(0)}
            className={`px-3.5 py-1 text-xs font-serif rounded-full transition-all cursor-pointer border ${
              currentScene?.type === 'intro' 
                ? 'border-amber-400/80 text-amber-300 bg-amber-500/15 font-bold shadow-sm' 
                : 'border-transparent text-neutral-300 hover:text-white hover:border-white/20'
            }`}
          >
            Início
          </button>

          {[1, 2, 3, 4].map((dayNum) => {
            const isCurrentDay = currentScene?.dayNumber === dayNum;
            const daySceneIdx = scenes.findIndex(s => s.type === 'day_card' && s.dayNumber === dayNum);
            
            return (
              <button
                key={dayNum}
                onClick={() => onJumpToScene(daySceneIdx)}
                className={`px-3.5 py-1 text-xs font-serif rounded-full transition-all flex items-center gap-1 cursor-pointer border ${
                  isCurrentDay && !isTechHub
                    ? 'border-amber-400/80 text-amber-300 bg-amber-500/15 font-bold shadow-sm' 
                    : 'border-transparent text-neutral-300 hover:text-white hover:border-white/20'
                }`}
              >
                <span>Dia {dayNum}</span>
                {dayNum === 1 && <span className="text-[9px] text-amber-300/80">(Shabat)</span>}
                {dayNum === 2 && <span className="text-[9px] text-teal-300/80">(Gaudí)</span>}
              </button>
            );
          })}

          <button
            onClick={() => onJumpToScene(scenes.length - 1)}
            className={`px-3.5 py-1 text-xs font-serif rounded-full transition-all flex items-center gap-1.5 cursor-pointer border ${
              isTechHub 
                ? 'border-teal-400 text-teal-300 bg-teal-500/15 font-bold shadow-sm' 
                : 'border-transparent text-neutral-300 hover:text-white hover:border-white/20'
            }`}
          >
            <Receipt size={13} />
            <span>Preços & Guia</span>
          </button>
        </div>

        {/* Right: Sound, Slide Deck & Fullscreen Controls */}
        <div className="flex items-center gap-2">
          {/* Slide Deck Drawer Trigger */}
          <button
            onClick={onOpenSlideDrawer}
            title="Ver todos os slides (Modo Apresentação)"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-transparent hover:bg-white/5 text-neutral-300 hover:text-white border border-white/20 transition-all text-xs font-serif cursor-pointer"
          >
            <Layers size={14} className="text-amber-400" />
            <span className="hidden sm:inline">Slides</span>
          </button>

          {/* Music Flamenca Toggle */}
          <button
            onClick={onToggleMute}
            title={isMuted ? "Ativar Trilha Sonora Flamenca" : "Mutar Trilha Sonora"}
            className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 font-serif cursor-pointer ${
              !isMuted 
                ? 'bg-amber-500/15 border-amber-400/50 text-amber-300' 
                : 'bg-transparent border-white/20 text-neutral-400 hover:text-white'
            }`}
          >
            {!isMuted ? <Volume2 size={15} /> : <VolumeX size={15} />}
            <span className="text-xs hidden md:inline">
              {!isMuted ? 'Música ON' : 'Música'}
            </span>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            title={isFullscreen ? "Sair da Tela Cheia" : "Tela Cheia"}
            className="p-2 rounded-full bg-transparent hover:bg-white/5 text-neutral-300 hover:text-white border border-white/20 transition-all cursor-pointer"
          >
            {isFullscreen ? <Minimize size={15} /> : <Maximize size={15} />}
          </button>
        </div>

      </div>
    </header>
  );
}
