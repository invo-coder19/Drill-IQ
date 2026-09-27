import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { activeWell, wells, type Well } from '@/lib/drill-data';

type Props = { onSelect: (well: Well) => void; selectedId?: string; radius: number; layer: 'street' | 'terrain' };
export default function WellMap({onSelect, selectedId, radius, layer}: Props) {
  const node = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  useEffect(() => {
    if (!node.current) return;
    const instance = L.map(node.current, {zoomControl: false, attributionControl: true, scrollWheelZoom: false}).setView([activeWell.lat, activeWell.lng], 12);
    map.current = instance;
    L.tileLayer(layer === 'terrain' ? 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png' : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: layer === 'terrain' ? '© OpenTopoMap · © OpenStreetMap' : '© OpenStreetMap contributors', maxZoom: 17}).addTo(instance);
    const circle = L.circle([activeWell.lat, activeWell.lng], {radius: radius*1000, color:'#3976ad', fillColor:'#3976ad', fillOpacity:.055, weight:1, dashArray:'5 5'}).addTo(instance);
    const activeIcon = L.divIcon({className:'map-marker-shell',html:'<div class="map-marker map-marker-active"><span class="map-marker-core"></span></div>',iconSize:[38,38],iconAnchor:[19,19]});
    L.marker([activeWell.lat,activeWell.lng],{icon:activeIcon,zIndexOffset:1000}).addTo(instance).bindTooltip('OIL-A-07 · Active well',{direction:'top',offset:[0,-14]});
    wells.filter(w => w.distance <= radius).forEach(w => {
      const kind = w.severity === 'High' && w.relevance >= 80 ? 'risk' : w.relevance >= 80 ? 'relevant' : 'normal';
      const icon = L.divIcon({className:'map-marker-shell',html:`<div class="map-marker map-marker-${kind} ${selectedId===w.id?'map-marker-selected':''}"><span></span></div>`,iconSize:[28,28],iconAnchor:[14,14]});
      L.marker([w.lat,w.lng],{icon}).addTo(instance).bindTooltip(`${w.id} · ${w.distance} km · ${w.relevance}% relevance`,{direction:'top',offset:[0,-10]}).on('click',()=>onSelect(w));
    });
    setTimeout(()=>instance.invalidateSize(),100);
    return () => { circle.remove(); instance.remove(); map.current=null; };
  },[onSelect,selectedId,radius,layer]);
  return <div ref={node} className="h-full w-full" aria-label="Interactive map of active and offset wells" />;
}
