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
    <div className="cinema-controls-dock">
      
      {/* Left: Slide Info Pill */}
      <div className="flex items-center gap-1.5 pl-1">
        <button
          onClick={onOpenSlideDrawer}
          title="Abrir gaveta de slides (PowerPoint)"
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 text-xs font-semibold transition-all cursor-pointer"
        >
          <Layers size={14} className="text-amber-400" />
          <span className="hidden sm:inline">Slides</span>
        </button>

        <span className="text-xs font-mono text-neutral-300 font-bold px-2 py-1 rounded-full bg-white/5 border border-white/10 hidden sm:inline-block">
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
          className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-200 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 cursor-pointer border-0"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Play / Pause Toggle Button */}
        <button
          onClick={onTogglePlay}
          title={isPlaying ? "Pausar vídeo (Barra de Espaço)" : "Dar play no vídeo (Barra de Espaço)"}
          className="p-2.5 sm:p-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 shadow-lg shadow-amber-500/25 transition-all hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center border-0"
        >
          {isPlaying ? (
            <Pause size={18} fill="currentColor" />
          ) : (
            <Play size={18} fill="currentColor" className="ml-0.5" />
          )}
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentSceneIndex === totalScenes - 1}
          title="Próximo slide (Seta Direita)"
          className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-200 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 cursor-pointer border-0"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Right: Playback Speed & Sound Controls */}
      <div className="flex items-center gap-1.5 pr-1">
        {/* Speed selector */}
        <button
          onClick={onChangePlaybackSpeed}
          title="Velocidade da Apresentação Automática"
          className="px-2 py-1 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-amber-300 border border-white/10 text-xs font-mono font-bold transition-all cursor-pointer"
        >
          {playbackSpeed}x
        </button>

        {/* Music Toggle */}
        <button
          onClick={onToggleMute}
          title={isMuted ? "Ligar Trilha Sonora Flamenca" : "Mutar Trilha Sonora"}
          className={`p-1.5 sm:p-2 rounded-full border transition-all cursor-pointer ${
            !isMuted 
              ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 shadow-sm' 
              : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
          }`}
        >
          {!isMuted ? <Volume2 size={15} /> : <VolumeX size={15} />}
        </button>
      </div>

    </div>
  );
}
