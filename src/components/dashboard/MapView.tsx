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

  // Mock data for demonstration - 20+ incidents across Delhi
  const mockAnomalies = [
    // Connaught Place Area
    { id: 1, position: [28.6304, 77.2177] as [number, number], type: "pothole", severity: "high", confidence: 0.94, timestamp: "2024-01-15 10:30" },
    { id: 2, position: [28.6289, 77.2065] as [number, number], type: "barricade", severity: "medium", confidence: 0.87, timestamp: "2024-01-15 11:15" },
    { id: 3, position: [28.6315, 77.2245] as [number, number], type: "crack", severity: "low", confidence: 0.76, timestamp: "2024-01-15 09:45" },
    
    // India Gate Area
    { id: 4, position: [28.6129, 77.2295] as [number, number], type: "pothole", severity: "high", confidence: 0.91, timestamp: "2024-01-15 14:20" },
    { id: 5, position: [28.6097, 77.2342] as [number, number], type: "debris", severity: "medium", confidence: 0.83, timestamp: "2024-01-15 15:10" },
    { id: 6, position: [28.6158, 77.2273] as [number, number], type: "waterlog", severity: "high", confidence: 0.88, timestamp: "2024-01-15 08:30" },
    
    // Karol Bagh Area
    { id: 7, position: [28.6519, 77.1904] as [number, number], type: "pothole", severity: "medium", confidence: 0.79, timestamp: "2024-01-15 12:45" },
    { id: 8, position: [28.6487, 77.1958] as [number, number], type: "barricade", severity: "low", confidence: 0.72, timestamp: "2024-01-15 13:20" },
    { id: 9, position: [28.6541, 77.1873] as [number, number], type: "crack", severity: "medium", confidence: 0.84, timestamp: "2024-01-15 16:15" },
    
    // Nehru Place Area
    { id: 10, position: [28.5494, 77.2500] as [number, number], type: "pothole", severity: "high", confidence: 0.92, timestamp: "2024-01-15 11:00" },
    { id: 11, position: [28.5516, 77.2531] as [number, number], type: "debris", severity: "medium", confidence: 0.81, timestamp: "2024-01-15 14:45" },
    { id: 12, position: [28.5472, 77.2469] as [number, number], type: "waterlog", severity: "low", confidence: 0.77, timestamp: "2024-01-15 07:30" },
    
    // Rajouri Garden Area
    { id: 13, position: [28.6465, 77.1205] as [number, number], type: "pothole", severity: "medium", confidence: 0.86, timestamp: "2024-01-15 10:15" },
    { id: 14, position: [28.6491, 77.1157] as [number, number], type: "crack", severity: "high", confidence: 0.89, timestamp: "2024-01-15 12:00" },
    { id: 15, position: [28.6438, 77.1253] as [number, number], type: "barricade", severity: "low", confidence: 0.74, timestamp: "2024-01-15 15:30" },
    
    // Dwarka Area
    { id: 16, position: [28.5921, 77.0460] as [number, number], type: "pothole", severity: "high", confidence: 0.93, timestamp: "2024-01-15 09:20" },
    { id: 17, position: [28.5895, 77.0521] as [number, number], type: "debris", severity: "medium", confidence: 0.82, timestamp: "2024-01-15 13:45" },
    { id: 18, position: [28.5947, 77.0399] as [number, number], type: "waterlog", severity: "medium", confidence: 0.85, timestamp: "2024-01-15 11:30" },
    
    // Lajpat Nagar Area
    { id: 19, position: [28.5678, 77.2436] as [number, number], type: "pothole", severity: "low", confidence: 0.78, timestamp: "2024-01-15 16:00" },
    { id: 20, position: [28.5702, 77.2389] as [number, number], type: "crack", severity: "medium", confidence: 0.80, timestamp: "2024-01-15 08:45" },
    
    // Rohini Area
    { id: 21, position: [28.7041, 77.1025] as [number, number], type: "barricade", severity: "high", confidence: 0.90, timestamp: "2024-01-15 14:00" },
    { id: 22, position: [28.7012, 77.1089] as [number, number], type: "pothole", severity: "medium", confidence: 0.83, timestamp: "2024-01-15 17:15" },
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
            <div class="p-3 min-w-[200px]">
              <div class="flex items-center justify-between mb-2">
                <h3 class="font-semibold text-sm capitalize">${anomaly.type}</h3>
                <span class="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">#${anomaly.id}</span>
              </div>
              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <span class="text-gray-600">Severity:</span>
                  <span class="font-medium capitalize ${anomaly.severity === 'high' ? 'text-red-600' : anomaly.severity === 'medium' ? 'text-orange-600' : 'text-yellow-600'}">${anomaly.severity}</span>
                </div>
                <div class="flex justify-between text-xs">
                  <span class="text-gray-600">Confidence:</span>
                  <span class="font-medium">${(anomaly.confidence * 100).toFixed(1)}%</span>
                </div>
                <div class="flex justify-between text-xs">
                  <span class="text-gray-600">Detected:</span>
                  <span class="font-medium">${anomaly.timestamp}</span>
                </div>
              </div>
              <div class="mt-2 pt-2 border-t border-gray-200">
                <button class="text-xs text-blue-600 hover:text-blue-800 font-medium">View Details</button>
              </div>
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