import { getCityData } from '../data/itineraryData';

export function buildScenesList(cityId = 'barcelona') {
  const cityData = getCityData(cityId);
  const scenes = [];

  // Scene 0: Intro
  scenes.push({
    id: 'intro',
    type: 'intro',
    cityId: cityData.id,
    cityName: cityData.name,
    title: `${cityData.name} 2026`,
    subtitle: cityData.id === 'madrid' 
      ? 'Roteiro Cinematográfico Express — O Melhor de Madrid em 1 Tarde & Noite' 
      : 'Roteiro Cinematográfico de 4 Dias',
    duration: 8000, // 8s
    themeColor: cityData.id === 'madrid' ? '#e63946' : '#e9c46a',
    accentColor: cityData.id === 'madrid' ? '#ffb703' : '#f4a261',
    gradient: cityData.id === 'madrid' 
      ? 'linear-gradient(135deg, #1f080b 0%, #381216 50%, #0d0d12 100%)' 
      : 'linear-gradient(135deg, #090a0f 0%, #1e130c 50%, #0d0d12 100%)',
    image: cityData.heroImage
  });

  // Days & Attractions
  cityData.daysData.forEach((day) => {
    // Day Intro Card
    scenes.push({
      id: `day_${day.dayNumber}_intro_${cityData.id}`,
      type: 'day_card',
      cityId: cityData.id,
      cityName: cityData.name,
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
      image: day.attractions[0]?.image || cityData.heroImage
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
        cityId: cityData.id,
        cityName: cityData.name,
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
    cityId: cityData.id,
    cityName: cityData.name,
    title: `Painel Técnico & Orçamento (${cityData.name})`,
    subtitle: 'Planejamento financeiro, rotas e links oficiais',
    duration: 9999999, // Infinite
    themeColor: cityData.id === 'madrid' ? '#e63946' : '#3a86ff',
    accentColor: cityData.id === 'madrid' ? '#ffb703' : '#00f5d4',
    gradient: cityData.id === 'madrid'
      ? 'linear-gradient(135deg, #1c090c 0%, #301015 50%, #090a0f 100%)'
      : 'linear-gradient(135deg, #070e17 0%, #0d1e33 50%, #090a0f 100%)',
    image: cityData.heroImage
  });

  return scenes;
}
