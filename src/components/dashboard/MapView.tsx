import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface MapViewProps {
  onMapClick: (position: [number, number]) => void;
  selectedPosition: [number, number] | null;
}

export const MapView = ({ onMapClick, selectedPosition }: MapViewProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup>(new L.LayerGroup());
  const [showAnomalies, setShowAnomalies] = useState(true);
  const [showHeatmap, setShowHeatmap] = useState(false);

  // Mock data for demonstration
  const mockAnomalies = [
    { id: 1, position: [28.6139, 77.2090] as [number, number], type: "pothole", severity: "high" },
    { id: 2, position: [28.6129, 77.2300] as [number, number], type: "barricade", severity: "medium" },
    { id: 3, position: [28.6200, 77.2150] as [number, number], type: "pothole", severity: "low" },
  ];

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([28.6139, 77.2090], 13);
    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add markers layer
    markersRef.current.addTo(map);

    // Handle map clicks
    map.on("click", (e) => {
      onMapClick([e.latlng.lat, e.latlng.lng]);
    });

    return () => {
      map.remove();
    };
  }, [onMapClick]);

  // Update anomaly markers
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    markersRef.current.clearLayers();

    if (showAnomalies) {
      mockAnomalies.forEach((anomaly) => {
        const color = anomaly.severity === "high" ? "#ef4444" : 
                     anomaly.severity === "medium" ? "#f97316" : "#eab308";
        
        const icon = L.divIcon({
          html: `<div style="background: ${color}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
          className: "custom-anomaly-marker",
          iconSize: [12, 12],
          iconAnchor: [6, 6],
        });

        const marker = L.marker(anomaly.position, { icon })
          .bindPopup(`
            <div class="p-2">
              <h3 class="font-semibold text-sm">${anomaly.type.charAt(0).toUpperCase() + anomaly.type.slice(1)}</h3>
              <p class="text-xs text-gray-600">Severity: ${anomaly.severity}</p>
              <p class="text-xs text-gray-500">ID: ${anomaly.id}</p>
            </div>
          `);

        markersRef.current.addLayer(marker);
      });
    }

    // Add selected position marker
    if (selectedPosition) {
      const selectedIcon = L.divIcon({
        html: '<div style="background: #3b82f6; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(59,130,246,0.4);"></div>',
        className: "selected-position-marker",
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      const selectedMarker = L.marker(selectedPosition, { icon: selectedIcon })
        .bindPopup('<div class="p-2"><h3 class="font-semibold text-sm">Selected Location</h3></div>');

      markersRef.current.addLayer(selectedMarker);
    }
  }, [showAnomalies, selectedPosition]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full rounded-lg shadow-lg" />
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 bg-card rounded-lg shadow-lg p-3 space-y-2 z-[1000]">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="anomalies"
            checked={showAnomalies}
            onChange={(e) => setShowAnomalies(e.target.checked)}
            className="rounded border-border"
          />
          <label htmlFor="anomalies" className="text-sm font-medium">
            Show Anomalies
          </label>
        </div>
        
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="heatmap"
            checked={showHeatmap}
            onChange={(e) => setShowHeatmap(e.target.checked)}
            className="rounded border-border"
          />
          <label htmlFor="heatmap" className="text-sm font-medium">
            Risk Heatmap
          </label>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-card rounded-lg shadow-lg p-3 z-[1000]">
        <h3 className="text-sm font-semibold mb-2">Legend</h3>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-xs">High Risk</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-xs">Medium Risk</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-xs">Low Risk</span>
          </div>
        </div>
      </div>
    </div>
  );
};