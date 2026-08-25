import React from 'react';

export function ProgressBar({ 
  scenes, 
  currentSceneIndex, 
  sceneProgress, 
  onJumpToScene 
}) {
  return (
    <div className="cinema-timeline-wrapper">
      <div className="cinema-timeline-inner">
        {scenes.map((scene, index) => {
          const isPassed = index < currentSceneIndex;
          const isCurrent = index === currentSceneIndex;
          
          let fillPercent = 0;
          if (isPassed) fillPercent = 100;
          else if (isCurrent) fillPercent = sceneProgress * 100;

          // Color based on type or day
          let barColor = '#e9c46a';
          if (scene.dayNumber === 1) barColor = '#e76f51';
          if (scene.dayNumber === 2) barColor = '#2a9d8f';
          if (scene.dayNumber === 3) barColor = '#8338ec';
          if (scene.dayNumber === 4) barColor = '#3a86ff';
          if (scene.type === 'tech_hub') barColor = '#00f5d4';

          const title = scene.type === 'intro'
            ? 'Início: Barcelona 2026'
            : scene.type === 'day_card'
            ? `Dia ${scene.dayNumber}: ${scene.title}`
            : scene.type === 'tech_hub'
            ? 'Painel Técnico & Custos'
            : `${scene.attraction?.name} (${scene.attraction?.time})`;

          return (
            <button
              key={scene.id}
              onClick={() => onJumpToScene(index)}
              title={title}
              className="group relative flex-1 h-2 rounded-full overflow-hidden bg-white/10 hover:h-2.5 transition-all cursor-pointer border-0"
            >
              <div 
                className="h-full rounded-full transition-all duration-100 ease-linear"
                style={{ 
                  width: `${fillPercent}%`,
                  backgroundColor: barColor,
                  boxShadow: isCurrent ? `0 0 8px ${barColor}` : 'none'
                }}
              />

              {/* Tooltip on hover */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center pointer-events-none z-50 whitespace-nowrap">
                <div className="bg-neutral-900/95 border border-white/20 px-2.5 py-1 rounded-md text-[11px] text-white shadow-2xl backdrop-blur-md">
                  <span className="font-semibold text-amber-300">
                    {index + 1}/{scenes.length}:
                  </span>{' '}
                  {title}
                </div>
                <div className="w-1.5 h-1.5 bg-neutral-900 rotate-45 border-r border-b border-white/20 -mt-1" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
