import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { buildScenesList } from './hooks/usePresentation';
import { audioManager } from './utils/audioManager';
import { Navbar } from './components/Navbar';
import { ProgressBar } from './components/ProgressBar';
import { CinematicIntro } from './components/CinematicIntro';
import { DayCardScene } from './components/DayCardScene';
import { AttractionSlide } from './components/AttractionSlide';
import { TechnicalHub } from './components/TechnicalHub';
import { VideoControls } from './components/VideoControls';
import { SlideDeckDrawer } from './components/SlideDeckDrawer';

export function App() {
  const [currentCity, setCurrentCity] = useState('barcelona');
  const scenes = useMemo(() => buildScenesList(currentCity), [currentCity]);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isSlideDrawerOpen, setIsSlideDrawerOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentScene = scenes[currentSceneIndex] || scenes[0];
  const isTechHub = currentScene?.type === 'tech_hub';
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  const handleSelectCity = useCallback((cityId) => {
    if (cityId !== currentCity) {
      setCurrentCity(cityId);
      setCurrentSceneIndex(0);
      setSceneProgress(0);
      setIsPlaying(false);
    }
  }, [currentCity]);

  // Jump to specific scene
  const handleJumpToScene = useCallback((index) => {
    const validIndex = Math.max(0, Math.min(scenes.length - 1, index));
    setCurrentSceneIndex(validIndex);
    setSceneProgress(0);
    startTimeRef.current = Date.now();
  }, [scenes.length]);

  const handleNext = useCallback(() => {
    if (currentSceneIndex < scenes.length - 1) {
      handleJumpToScene(currentSceneIndex + 1);
    } else {
      setIsPlaying(false);
    }
  }, [currentSceneIndex, scenes.length, handleJumpToScene]);

  const handlePrev = useCallback(() => {
    if (currentSceneIndex > 0) {
      handleJumpToScene(currentSceneIndex - 1);
    }
  }, [currentSceneIndex, handleJumpToScene]);

  const handleTogglePlay = useCallback(() => {
    setIsPlaying(prev => {
      const nextState = !prev;
      if (nextState) {
        startTimeRef.current = Date.now() - (sceneProgress * (currentScene.duration / playbackSpeed));
      }
      return nextState;
    });
  }, [currentScene.duration, playbackSpeed, sceneProgress]);

  const handleStartTour = useCallback(() => {
    setIsMuted(false);
    audioManager.isMuted = false;
    audioManager.play();
    setIsPlaying(true);
    handleJumpToScene(1); // Jump to Day 1
  }, [handleJumpToScene]);

  const handleReplayTour = useCallback(() => {
    setIsMuted(false);
    audioManager.isMuted = false;
    audioManager.play();
    setIsPlaying(true);
    handleJumpToScene(0); // Start from intro
  }, [handleJumpToScene]);

  const handleOpenTechHub = useCallback(() => {
    setIsPlaying(false);
    handleJumpToScene(scenes.length - 1); // Last scene
  }, [handleJumpToScene, scenes.length]);

  const handleToggleMute = useCallback(() => {
    const muted = audioManager.toggleMute();
    setIsMuted(muted);
    if (!muted && !audioManager.isPlaying) {
      audioManager.play();
    }
  }, []);

  const handleChangePlaybackSpeed = useCallback(() => {
    const speeds = [1, 1.25, 1.5, 0.75];
    const currentIdx = speeds.indexOf(playbackSpeed);
    const nextSpeed = speeds[(currentIdx + 1) % speeds.length];
    setPlaybackSpeed(nextSpeed);
  }, [playbackSpeed]);

  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault();
        handleTogglePlay();
      } else if (e.code === 'ArrowRight' || e.code === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft' || e.code === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.code === 'KeyM') {
        e.preventDefault();
        handleToggleMute();
      } else if (e.code === 'KeyF') {
        e.preventDefault();
        handleToggleFullscreen();
      } else if (e.code === 'Escape') {
        setIsSlideDrawerOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleTogglePlay, handleNext, handlePrev, handleToggleMute, handleToggleFullscreen]);

  // Video Autoplay Timer & Scrubber Progress
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
      return;
    }

    // Stop auto-play when reaching the technical hub so user can interact freely
    if (currentScene.type === 'tech_hub') {
      setIsPlaying(false);
      return;
    }

    startTimeRef.current = Date.now() - (sceneProgress * (currentScene.duration / playbackSpeed));

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const effectiveDuration = currentScene.duration / playbackSpeed;
      const progress = Math.min(1, elapsed / effectiveDuration);
      setSceneProgress(progress);

      if (progress >= 1) {
        handleNext();
      } else {
        timerRef.current = requestAnimationFrame(tick);
      }
    };

    timerRef.current = requestAnimationFrame(tick);

    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [isPlaying, currentSceneIndex, currentScene, playbackSpeed, handleNext]);

  return (
    <div className={isTechHub ? "cinema-app-scrollable" : "cinema-app-stage"}>
      
      {/* FULLSCREEN BLURRED BACKGROUND LAYER (100vw x 100vh) */}
      <div className="cinema-global-bg">
        <img
          key={currentScene.image || '/images/barcelona_hero.jpg'}
          src={currentScene.image || '/images/barcelona_hero.jpg'}
          alt="Atmospheric Background"
          className="cinema-global-bg-img"
        />
        <div className="cinema-global-bg-overlay" />
      </div>

      {/* Top Navbar */}
      <Navbar
        currentScene={currentScene}
        totalScenes={scenes.length}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        onJumpToScene={handleJumpToScene}
        onOpenSlideDrawer={() => setIsSlideDrawerOpen(true)}
        scenes={scenes}
        currentCity={currentCity}
        onSelectCity={handleSelectCity}
      />

      {/* Progress Timeline Scrubber */}
      <ProgressBar
        scenes={scenes}
        currentSceneIndex={currentSceneIndex}
        sceneProgress={sceneProgress}
        onJumpToScene={handleJumpToScene}
      />

      {/* Main Viewport Stage Container */}
      <main className={isTechHub ? "w-full" : "cinema-viewport-stage"}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentCity}_${currentScene.id}`}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 1.01 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className={isTechHub ? "w-full flex justify-center" : "w-full h-full flex items-center justify-center"}
          >
            {currentScene.type === 'intro' && (
              <CinematicIntro
                onStartTour={handleStartTour}
                onOpenTechHub={handleOpenTechHub}
                currentCity={currentCity}
                onSelectCity={handleSelectCity}
              />
            )}

            {currentScene.type === 'day_card' && (
              <DayCardScene
                scene={currentScene}
                onNext={handleNext}
              />
            )}

            {currentScene.type === 'attraction' && (
              <AttractionSlide
                scene={currentScene}
              />
            )}

            {currentScene.type === 'tech_hub' && (
              <TechnicalHub
                onReplayTour={handleReplayTour}
                onJumpToScene={handleJumpToScene}
                scenes={scenes}
                currentCity={currentCity}
                onSelectCity={handleSelectCity}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Bottom Video Controls Dock (Hidden on Tech Hub) */}
      {!isTechHub && (
        <VideoControls
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          onPrev={handlePrev}
          onNext={handleNext}
          currentSceneIndex={currentSceneIndex}
          totalScenes={scenes.length}
          currentScene={currentScene}
          playbackSpeed={playbackSpeed}
          onChangePlaybackSpeed={handleChangePlaybackSpeed}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
          onOpenSlideDrawer={() => setIsSlideDrawerOpen(true)}
        />
      )}

      {/* Slide Deck Modal Drawer */}
      <SlideDeckDrawer
        isOpen={isSlideDrawerOpen}
        onClose={() => setIsSlideDrawerOpen(false)}
        scenes={scenes}
        currentSceneIndex={currentSceneIndex}
        onSelectScene={handleJumpToScene}
      />

    </div>
  );
}

export default App;
