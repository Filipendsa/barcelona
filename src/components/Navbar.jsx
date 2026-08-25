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
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 text-neutral-950 font-black text-xs tracking-wider shrink-0">
            BCN
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-sm sm:text-base tracking-wider text-amber-200 group-hover:text-amber-100 transition-colors">
                BARCELONA
              </span>
              <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                13–16 SET
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 font-normal hidden md:block">
              Base: Av. de Gaudí 27 (Eixample)
            </p>
          </div>
        </button>

        {/* Center: Quick Day Jumpers */}
        <div className="hidden lg:flex items-center gap-1 bg-neutral-900/90 p-1 rounded-full border border-white/10 shadow-inner">
          <button
            onClick={() => onJumpToScene(0)}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-all cursor-pointer ${
              currentScene?.type === 'intro' 
                ? 'bg-amber-500 text-neutral-950 shadow font-semibold' 
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
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
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                  isCurrentDay && !isTechHub
                    ? 'bg-white/20 text-white shadow border border-white/20 font-semibold' 
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Dia {dayNum}</span>
                {dayNum === 1 && <span className="text-[9px] text-amber-300 opacity-90">(Shabat)</span>}
                {dayNum === 2 && <span className="text-[9px] text-teal-300 opacity-90">(Gaudí)</span>}
              </button>
            );
          })}

          <button
            onClick={() => onJumpToScene(scenes.length - 1)}
            className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
              isTechHub 
                ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold shadow' 
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 transition-all text-xs font-medium cursor-pointer"
          >
            <Layers size={15} className="text-amber-400" />
            <span className="hidden sm:inline">Slides</span>
          </button>

          {/* Music Flamenca Toggle */}
          <button
            onClick={onToggleMute}
            title={isMuted ? "Ativar Trilha Sonora Flamenca" : "Mutar Trilha Sonora"}
            className={`px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer ${
              !isMuted 
                ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 shadow-sm shadow-amber-500/20' 
                : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
            }`}
          >
            {!isMuted ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span className="text-xs font-medium hidden md:inline">
              {!isMuted ? 'Música ON' : 'Música'}
            </span>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            title={isFullscreen ? "Sair da Tela Cheia" : "Tela Cheia"}
            className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 transition-all cursor-pointer"
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
        </div>

      </div>
    </header>
  );
}
