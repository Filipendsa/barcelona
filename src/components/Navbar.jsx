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
  Sparkles,
  MapPin,
  Map as MapIcon
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
  scenes,
  currentCity,
  onSelectCity
}) {
  const isTechHub = currentScene?.type === 'tech_hub';
  const isMadrid = currentCity === 'madrid';

  return (
    <header className="cinema-header">
      <div className="cinema-header-inner flex items-center justify-between gap-2">
        
        {/* Left: City Switcher Menu (Barcelona / Madrid Tabs) */}
        <div className="flex items-center gap-2">
          {/* Main City Tabs */}
          <div className="flex items-center p-1 bg-neutral-950/90 rounded-full border border-white/20 shadow-md">
            <button
              onClick={() => onSelectCity('barcelona')}
              className={`px-3 py-1 text-xs font-serif rounded-full transition-all flex items-center gap-1.5 cursor-pointer border ${
                !isMadrid
                  ? 'border-amber-400 text-amber-300 bg-amber-500/20 font-bold shadow-sm'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span>Barcelona</span>
              <span className="text-[10px] opacity-75 hidden sm:inline">(13–16 Set)</span>
            </button>

            <button
              onClick={() => onSelectCity('madrid')}
              className={`px-3 py-1 text-xs font-serif rounded-full transition-all flex items-center gap-1.5 cursor-pointer border ${
                isMadrid
                  ? 'border-red-400 text-red-300 bg-red-500/20 font-bold shadow-sm'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
              <span>Madrid</span>
              <span className="text-[10px] opacity-75 hidden sm:inline">(16 Set)</span>
            </button>
          </div>
        </div>

        {/* Center: Quick Day Jumpers (Outline Style) */}
        <div className="hidden lg:flex items-center gap-1.5 bg-neutral-950/80 p-1.5 rounded-full border border-white/15 shadow-inner">
          <button
            onClick={() => onJumpToScene(0)}
            className={`px-3.5 py-1 text-xs font-serif rounded-full transition-all cursor-pointer border ${
              currentScene?.type === 'intro' 
                ? (isMadrid ? 'border-red-400/80 text-red-300 bg-red-500/15 font-bold shadow-sm' : 'border-amber-400/80 text-amber-300 bg-amber-500/15 font-bold shadow-sm')
                : 'border-transparent text-neutral-300 hover:text-white hover:border-white/20'
            }`}
          >
            Início
          </button>

          {!isMadrid ? (
            [1, 2, 3].map((dayNum) => {
              const isCurrentDay = currentScene?.dayNumber === dayNum;
              const daySceneIdx = scenes.findIndex(s => s.type === 'day_card' && s.dayNumber === dayNum);
              
              const dayLabels = {
                1: 'Gaudí',
                2: 'Ciência & Feira',
                3: 'Gótico & Barça'
              };

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
                  <span className="text-[9px] opacity-80">({dayLabels[dayNum]})</span>
                </button>
              );
            })
          ) : (
            <button
              onClick={() => {
                const daySceneIdx = scenes.findIndex(s => s.type === 'day_card');
                onJumpToScene(daySceneIdx >= 0 ? daySceneIdx : 1);
              }}
              className={`px-3.5 py-1 text-xs font-serif rounded-full transition-all flex items-center gap-1 cursor-pointer border ${
                currentScene?.type === 'day_card' || (currentScene?.type === 'attraction' && !isTechHub)
                  ? 'border-red-400/80 text-red-300 bg-red-500/15 font-bold shadow-sm' 
                  : 'border-transparent text-neutral-300 hover:text-white hover:border-white/20'
              }`}
            >
              <span>1 Tarde Express (13h45–23h55)</span>
            </button>
          )}

          <button
            onClick={() => onJumpToScene(scenes.length - 1)}
            className={`px-3.5 py-1 text-xs font-serif rounded-full transition-all flex items-center gap-1.5 cursor-pointer border ${
              isTechHub 
                ? 'border-teal-400 text-teal-300 bg-teal-500/15 font-bold shadow-sm' 
                : 'border-transparent text-neutral-300 hover:text-white hover:border-white/20'
            }`}
          >
            <MapIcon size={13} className="text-amber-400" />
            <span>Mapas & Guia</span>
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
