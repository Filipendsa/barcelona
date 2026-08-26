import React, { useState, useMemo, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Clock
} from 'lucide-react';
import { getCityData } from '../data/itineraryData';

// Component to dynamically re-center/fit bounds when selected day changes
function MapRecenter({ bounds }) {
  const map = useMap();
  useEffect(() => {
    if (bounds && bounds.length > 0) {
      try {
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
      } catch (e) {
        // fallback
      }
    }
  }, [bounds, map]);
  return null;
}

export function InteractiveMap({ currentCity = 'barcelona', selectedDayFilter = 'all' }) {
  const cityData = getCityData(currentCity);
  const isMadrid = currentCity === 'madrid';

  const [activeDay, setActiveDay] = useState(selectedDayFilter);

  // Sync activeDay if prop changes
  useEffect(() => {
    setActiveDay(selectedDayFilter);
  }, [selectedDayFilter]);

  // Extract all points for the selected view
  const { points, polylineCoords, dayRouteUrl } = useMemo(() => {
    const pts = [];
    const poly = [];

    // Base Lodging Point
    if (cityData.lodgingInfo?.coordinates) {
      pts.push({
        id: 'hotel_base',
        name: cityData.lodgingInfo.name,
        address: cityData.lodgingInfo.address,
        time: 'Ponto de Partida / Base',
        category: 'Hospedagem & Recepção',
        priceFormatted: 'Base',
        isBase: true,
        coordinates: cityData.lodgingInfo.coordinates,
        googleMapsUrl: cityData.lodgingInfo.googleMapsUrl,
        dayNumber: 0,
        themeColor: '#e9c46a',
        image: cityData.heroImage
      });
    }

    cityData.daysData.forEach(day => {
      if (activeDay === 'all' || activeDay === day.dayNumber.toString() || activeDay === day.dayNumber) {
        day.attractions.forEach((attraction, idx) => {
          if (attraction.coordinates) {
            pts.push({
              ...attraction,
              orderIndex: idx + 1,
              dayNumber: day.dayNumber,
              dayTitle: day.title,
              themeColor: day.themeColor || '#e9c46a'
            });
            poly.push([attraction.coordinates.lat, attraction.coordinates.lng]);
          }
        });
      }
    });

    // Find route url
    let routeUrl = null;
    if (activeDay !== 'all') {
      const currentDayObj = cityData.daysData.find(d => d.dayNumber.toString() === activeDay.toString());
      routeUrl = currentDayObj?.googleMapsDayRoute;
    } else {
      routeUrl = cityData.daysData[0]?.googleMapsDayRoute;
    }

    return { points: pts, polylineCoords: poly, dayRouteUrl: routeUrl };
  }, [cityData, activeDay]);

  // Compute map bounds
  const bounds = useMemo(() => {
    const validCoords = points.filter(p => p.coordinates).map(p => [p.coordinates.lat, p.coordinates.lng]);
    return validCoords.length > 0 ? validCoords : (isMadrid ? [[40.4168, -3.7038]] : [[41.4036, 2.1744]]);
  }, [points, isMadrid]);

  const defaultCenter = isMadrid ? [40.4168, -3.7038] : [41.4036, 2.1744];

  // Custom Leaflet DivIcon for pins
  const createCustomIcon = (point) => {
    if (point.isBase) {
      return L.divIcon({
        className: 'custom-leaflet-base-pin',
        html: `
          <div style="
            background: #e9c46a;
            color: #0d0d12;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 14px;
            box-shadow: 0 0 20px rgba(233, 196, 106, 0.9), 0 4px 10px rgba(0,0,0,0.6);
            border: 2.5px solid #ffffff;
            cursor: pointer;
          ">
            🏠
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -18]
      });
    }

    const color = point.themeColor || '#3a86ff';
    const number = point.orderIndex || '•';

    return L.divIcon({
      className: 'custom-leaflet-attraction-pin',
      html: `
        <div style="
          background: ${color};
          color: #ffffff;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 12px;
          box-shadow: 0 0 16px ${color}88, 0 4px 8px rgba(0,0,0,0.5);
          border: 2px solid #ffffff;
          cursor: pointer;
        ">
          ${number}
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -16]
    });
  };

  return (
    <div className="w-full space-y-4">
      
      {/* Map Control Bar & Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-neutral-950/90 border border-white/15 backdrop-blur-md">
        
        {/* Day Filter Pills */}
        <div className="flex items-center flex-wrap gap-1.5">
          <button
            onClick={() => setActiveDay('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
              activeDay === 'all'
                ? 'border-amber-400 bg-amber-500/20 text-amber-300 font-bold'
                : 'border-transparent text-neutral-300 hover:text-white bg-white/5'
            }`}
          >
            🗺️ Todos os Dias
          </button>

          {cityData.daysData.map(day => (
            <button
              key={day.dayNumber}
              onClick={() => setActiveDay(day.dayNumber.toString())}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                activeDay === day.dayNumber.toString()
                  ? 'border-teal-400 bg-teal-500/20 text-teal-300 font-bold'
                  : 'border-transparent text-neutral-300 hover:text-white bg-white/5'
              }`}
            >
              Dia {day.dayNumber}: {day.date.split(',')[0]}
            </button>
          ))}
        </div>

        {/* Action: Open in Google Maps */}
        {dayRouteUrl && (
          <a
            href={dayRouteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-xs px-3.5 py-1.5 shrink-0 flex items-center gap-1.5"
          >
            <Navigation size={13} className="text-amber-400" />
            <span>Abrir Trajeto no Google Maps ↗</span>
          </a>
        )}
      </div>

      {/* Interactive Leaflet Map Box */}
      <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900 aspect-[16/10] sm:aspect-[16/9] min-h-[380px] z-0">
        <MapContainer
          center={defaultCenter}
          zoom={13}
          scrollWheelZoom={false}
          className="w-full h-full"
          style={{ width: '100%', height: '100%', minHeight: '380px', background: '#0a0d14' }}
        >
          {/* CartoDB Dark Matter tile layer for a sleek cinematic appearance */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />

          <MapRecenter bounds={bounds} />

          {/* Polyline connecting the route stops */}
          {polylineCoords.length > 1 && (
            <Polyline
              positions={polylineCoords}
              pathOptions={{
                color: activeDay === 'all' ? '#e9c46a' : (cityData.daysData.find(d => d.dayNumber.toString() === activeDay.toString())?.themeColor || '#3a86ff'),
                weight: 4,
                opacity: 0.8,
                dashArray: '8, 6'
              }}
            />
          )}

          {/* Render markers */}
          {points.map((point) => (
            <Marker
              key={point.id}
              position={[point.coordinates.lat, point.coordinates.lng]}
              icon={createCustomIcon(point)}
            >
              <Popup className="cinema-custom-popup">
                <div className="p-2 text-neutral-900 max-w-[240px] font-sans">
                  {point.image && (
                    <div className="rounded-lg overflow-hidden mb-2 aspect-video">
                      <img src={point.image} alt={point.name} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="flex items-center justify-between text-[10px] text-amber-700 font-bold uppercase mb-1">
                    <span>{point.category}</span>
                    <span>{point.priceFormatted}</span>
                  </div>
                  <h4 className="font-bold text-sm text-neutral-900 leading-tight mb-1">
                    {point.name}
                  </h4>
                  <p className="text-xs text-neutral-600 mb-2 flex items-center gap-1">
                    <Clock size={11} />
                    <span>{point.time}</span>
                  </p>
                  {point.googleMapsUrl && (
                    <a
                      href={point.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 w-full py-1.5 px-2.5 rounded-lg bg-neutral-900 text-amber-300 hover:bg-neutral-800 text-xs font-bold transition-all text-center"
                    >
                      <MapPin size={12} />
                      <span>Ver no Google Maps</span>
                      <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Map Legend Overlay */}
        <div className="absolute bottom-3 left-3 z-[400] p-2.5 rounded-xl bg-neutral-950/85 border border-white/15 backdrop-blur-md text-[11px] text-neutral-300 space-y-1.5 shadow-xl pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-amber-400 text-neutral-950 font-bold flex items-center justify-center text-[9px]">🏠</span>
            <span className="font-semibold text-white">Nossa Base (Av. Gaudí 27)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center text-[9px]">1</span>
            <span>Paradas Sequenciais (1, 2, 3...)</span>
          </div>
        </div>

      </div>

      {/* Sequential Stops List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
        {points.filter(p => !p.isBase).map((stop, i) => (
          <a
            key={stop.id}
            href={stop.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.name + ' ' + cityData.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-amber-400/50 flex items-center justify-between gap-2.5 transition-all group"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span 
                className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center font-bold text-xs text-white shadow"
                style={{ backgroundColor: stop.themeColor || '#3a86ff' }}
              >
                {stop.orderIndex || i + 1}
              </span>
              <div className="min-w-0 text-left">
                <h5 className="font-bold text-xs text-neutral-200 truncate group-hover:text-amber-200 transition-colors">
                  {stop.name}
                </h5>
                <span className="text-[10px] text-neutral-400 block">{stop.time}</span>
              </div>
            </div>
            <ExternalLink size={12} className="text-neutral-500 group-hover:text-amber-400 shrink-0" />
          </a>
        ))}
      </div>

    </div>
  );
}
