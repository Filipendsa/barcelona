import { useMemo } from 'react';
import { DAYS_DATA, LODGING_INFO, TRIP_META } from '../data/itineraryData';

export function buildScenesList() {
  const scenes = [];

  // Scene 0: Intro
  scenes.push({
    id: 'intro',
    type: 'intro',
    title: 'Barcelona 2026',
    subtitle: 'Roteiro Cinematográfico de 4 Dias',
    duration: 8000, // 8s
    themeColor: '#e9c46a',
    accentColor: '#f4a261',
    gradient: 'linear-gradient(135deg, #090a0f 0%, #1e130c 50%, #0d0d12 100%)',
    image: '/images/barcelona_hero.jpg'
  });

  // Days & Attractions
  DAYS_DATA.forEach((day) => {
    // Day Intro Card
    scenes.push({
      id: `day_${day.dayNumber}_intro`,
      type: 'day_card',
      dayNumber: day.dayNumber,
      date: day.date,
      title: day.title,
      subtitle: day.subtitle,
      themeColor: day.themeColor,
      accentColor: day.accentColor,
      gradient: day.gradient,
      specialNotice: day.specialNotice,
      attractionCount: day.attractions.length,
      costEstimate: day.costEstimate,
      duration: 6500, // 6.5s
      image: day.attractions[0]?.image || '/images/barcelona_hero.jpg'
    });

    // Attractions
    day.attractions.forEach((attraction, idx) => {
      // Dynamic duration based on content
      let duration = 9000;
      if (attraction.price > 0 || attraction.isOptional || attraction.tips?.length > 40) {
        duration = 12000; // 12s for richer slides
      }

      scenes.push({
        id: attraction.id,
        type: 'attraction',
        dayNumber: day.dayNumber,
        dayDate: day.date,
        dayTitle: day.title,
        themeColor: day.themeColor,
        accentColor: day.accentColor,
        gradient: day.gradient,
        indexInDay: idx + 1,
        totalInDay: day.attractions.length,
        attraction: attraction,
        duration: duration,
        image: attraction.image
      });
    });
  });

  // Final Scene: Grand Finale & Technical Hub
  scenes.push({
    id: 'technical_hub',
    type: 'tech_hub',
    title: 'Painel Técnico & Orçamento',
    subtitle: 'Planejamento financeiro, rotas a partir da hospedagem e links oficiais',
    duration: 9999999, // Infinite
    themeColor: '#3a86ff',
    accentColor: '#00f5d4',
    gradient: 'linear-gradient(135deg, #070e17 0%, #0d1e33 50%, #090a0f 100%)',
    image: '/images/barcelona_hero.jpg'
  });

  return scenes;
}
