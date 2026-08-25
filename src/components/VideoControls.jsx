import React from 'react';
import { 
  Play, 
  Pause, 
  Layers, 
  Volume2, 
  VolumeX, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

export function VideoControls({
  isPlaying,
  onTogglePlay,
  onPrev,
  onNext,
  currentSceneIndex,
  totalScenes,
  currentScene,
  playbackSpeed,
  onChangePlaybackSpeed,
  isMuted,
  onToggleMute,
  onOpenSlideDrawer
}) {
  return (
    <div className="cinema-controls-dock font-serif">
      
      {/* Left: Slide Info Pill */}
      <div className="flex items-center gap-1.5 pl-1">
        <button
          onClick={onOpenSlideDrawer}
          title="Abrir gaveta de slides (PowerPoint)"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-transparent hover:bg-white/10 text-neutral-300 hover:text-white border border-white/20 text-xs font-medium transition-all cursor-pointer"
        >
          <Layers size={14} className="text-amber-400" />
          <span className="hidden sm:inline">Slides</span>
        </button>

        <span className="text-xs text-neutral-300 font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/15 hidden sm:inline-block">
          {currentSceneIndex + 1}/{totalScenes}
        </span>
      </div>

      {/* Center: Main Playback Controls */}
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={currentSceneIndex === 0}
          title="Slide anterior (Seta Esquerda)"
          className="p-2 rounded-full bg-transparent border border-white/20 hover:bg-white/10 text-neutral-200 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronLeft size={17} />
        </button>

        {/* Play / Pause Toggle Button (Sleek Outline Style) */}
        <button
          onClick={onTogglePlay}
          title={isPlaying ? "Pausar vídeo (Barra de Espaço)" : "Dar play no vídeo (Barra de Espaço)"}
          className="p-2.5 sm:p-3 rounded-full bg-amber-500/15 border border-amber-400/80 text-amber-300 hover:bg-amber-500/30 transition-all hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center shadow-lg shadow-amber-500/10"
        >
          {isPlaying ? (
            <Pause size={17} fill="currentColor" />
          ) : (
            <Play size={17} fill="currentColor" className="ml-0.5" />
          )}
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentSceneIndex === totalScenes - 1}
          title="Próximo slide (Seta Direita)"
          className="p-2 rounded-full bg-transparent border border-white/20 hover:bg-white/10 text-neutral-200 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronRight size={17} />
        </button>
      </div>

      {/* Right: Playback Speed & Sound Controls */}
      <div className="flex items-center gap-1.5 pr-1">
        {/* Speed selector */}
        <button
          onClick={onChangePlaybackSpeed}
          title="Velocidade da Apresentação Automática"
          className="px-2.5 py-1 rounded-full bg-transparent hover:bg-white/10 text-neutral-300 hover:text-amber-300 border border-white/20 text-xs font-bold transition-all cursor-pointer"
        >
          {playbackSpeed}x
        </button>

        {/* Music Toggle */}
        <button
          onClick={onToggleMute}
          title={isMuted ? "Ligar Trilha Sonora Flamenca" : "Mutar Trilha Sonora"}
          className={`p-2 rounded-full border transition-all cursor-pointer ${
            !isMuted 
              ? 'bg-amber-500/15 border-amber-400/60 text-amber-300' 
              : 'bg-transparent border-white/20 text-neutral-400 hover:text-white'
          }`}
        >
          {!isMuted ? <Volume2 size={15} /> : <VolumeX size={15} />}
        </button>
      </div>

    </div>
  );
}
