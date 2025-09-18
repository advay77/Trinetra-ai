import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-success';
      case 'medium': return 'text-warning';
      case 'high': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getRiskBadgeColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-success/10 text-success border-success/20';
      case 'medium': return 'bg-warning/10 text-warning border-warning/20';
      case 'high': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Route className="w-5 h-5 text-success" />
            <span>Emergency Route Planner</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Location Inputs */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="start">Start Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
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
                <Navigation className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
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

          {/* Calculate Button */}
          <Button
            onClick={handleCalculateRoutes}
            className="w-full btn-success"
            disabled={isCalculating}
          >
            {isCalculating ? "Calculating Routes..." : "Calculate Emergency Routes"}
          </Button>

          {/* Route Results */}
          {routes.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Route Options</h3>
              
              {routes.map((route, index) => (
                <div key={index} className="card-elevated p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {route.type === 'safe' ? (
                        <Shield className="w-5 h-5 text-success" />
                      ) : (
                        <Route className="w-5 h-5 text-primary" />
                      )}
                      <span className="font-medium capitalize">
                        {route.type} Route
                      </span>
                    </div>
                    
                    <div className={`px-2 py-1 rounded-full text-xs border ${getRiskBadgeColor(route.riskLevel)}`}>
                      {route.riskLevel} risk
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{route.distance}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
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

          {/* Info Box */}
          <div className="bg-muted/50 p-3 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <Shield className="w-4 h-4 inline mr-1" />
              Safe routes avoid known hazards and high-risk areas, though they may take longer.
            </p>
          </div>

          {/* Close Button */}
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};