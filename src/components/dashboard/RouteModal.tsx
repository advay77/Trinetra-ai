import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Route, MapPin, Clock, Shield, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RouteModalProps {
  onClose: () => void;
}

interface RouteResult {
  type: 'normal' | 'safe';
  distance: string;
  duration: string;
  riskLevel: 'low' | 'medium' | 'high';
  coordinates: [number, number][];
}

export const RouteModal = ({ onClose }: RouteModalProps) => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [routes, setRoutes] = useState<RouteResult[]>([]);
  const { toast } = useToast();

  const handleCalculateRoutes = async () => {
    if (!startLocation || !endLocation) {
      toast({
        title: "Missing Locations",
        description: "Please enter both start and destination locations.",
        variant: "destructive",
      });
      return;
    }

    setIsCalculating(true);

    try {
      // Mock API call - in real implementation, would call POST /api/route/emergency
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Mock route results
      const mockRoutes: RouteResult[] = [
        {
          type: 'safe',
          distance: '12.4 km',
          duration: '28 min',
          riskLevel: 'low',
          coordinates: [
            [28.6139, 77.2090],
            [28.6150, 77.2100],
            [28.6200, 77.2150],
          ]
        },
        {
          type: 'normal',
          distance: '8.7 km',
          duration: '18 min',
          riskLevel: 'medium',
          coordinates: [
            [28.6139, 77.2090],
            [28.6140, 77.2200],
            [28.6200, 77.2150],
          ]
        }
      ];

      setRoutes(mockRoutes);
      
      toast({
        title: "Routes Calculated",
        description: "Emergency routes have been calculated successfully.",
      });
    } catch (error) {
      toast({
        title: "Calculation Failed",
        description: "Unable to calculate routes. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCalculating(false);
    }
  };

  const getRiskBadgeColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden w-full max-w-2xl">
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center space-x-2">
          <Route className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Emergency Route</h2>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Find the safest route to your destination based on real-time hazard data.
        </p>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="start">Start Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                id="start"
                value={startLocation}
                onChange={(e) => setStartLocation(e.target.value)}
                placeholder="Enter starting point..."
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="end">Destination</Label>
            <div className="relative">
              <Navigation className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                id="end"
                value={endLocation}
                onChange={(e) => setEndLocation(e.target.value)}
                placeholder="Enter destination..."
                className="pl-10"
              />
            </div>
          </div>
        </div>

        <Button
          onClick={handleCalculateRoutes}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          disabled={isCalculating}
        >
          {isCalculating ? "Calculating Routes..." : "Calculate Emergency Routes"}
        </Button>

        {routes.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900">Route Options</h3>
            
            {routes.map((route, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3 bg-white shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {route.type === 'safe' ? (
                      <Shield className="w-5 h-5 text-green-600" />
                    ) : (
                      <Route className="w-5 h-5 text-blue-600" />
                    )}
                    <span className="font-medium capitalize text-gray-900">
                      {route.type} Route
                    </span>
                  </div>
                  
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRiskBadgeColor(route.riskLevel)}`}>
                    {route.riskLevel} risk
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{route.distance}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{route.duration}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Route Selected",
                      description: `${route.type} route has been set as your navigation.`,
                    });
                  }}
                >
                  Use This Route
                </Button>
              </div>
            ))}
          </div>
        )}

        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">
            <Shield className="w-4 h-4 inline mr-1 text-green-600" />
            Safe routes avoid known hazards and high-risk areas, though they may take longer.
          </p>
        </div>

        <div className="flex space-x-3 pt-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            variant="default"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isCalculating || routes.length === 0}
          >
            {isCalculating ? 'Calculating...' : 'Start Navigation'}
          </Button>
        </div>
      </div>
    </div>
  );
};