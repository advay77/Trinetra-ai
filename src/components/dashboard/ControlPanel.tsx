import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  Route, 
  AlertTriangle, 
  Shield,
  Camera,
  TrendingUp as TrendingUpIcon,
  Play,
  MapPin
} from "lucide-react";

interface ControlPanelProps {
  onShowReportModal: () => void;
  onShowRouteModal: () => void;
}

export const ControlPanel = ({ onShowReportModal, onShowRouteModal }: ControlPanelProps) => {
  return (
    <div className="w-80 bg-card border-r border-border p-4 overflow-y-auto">
      <div className="space-y-6">
        {/* Quick Actions */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-lg flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              onClick={onShowReportModal}
              variant="destructive"
              className="w-full justify-start"
            >
              <Camera className="w-4 h-4 mr-2" />
              Report Issue
            </Button>
            
            <Button 
              onClick={onShowRouteModal}
              variant="default"
              className="w-full justify-start bg-green-600 hover:bg-green-700 text-white"
            >
              <Route className="w-4 h-4 mr-2" />
              Emergency Route
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => window.location.href = '/analytics'}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              View Analytics
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => window.location.href = '/simulation'}
            >
              <Play className="w-4 h-4 mr-2" />
              View Simulation
            </Button>
          </CardContent>
        </Card>

        {/* Current Status */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-lg">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Active Alerts</span>
                <span className="text-lg font-semibold text-destructive">7</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Safe Routes</span>
                <span className="text-lg font-semibold text-success">23</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Response Time</span>
                <span className="text-lg font-semibold text-primary">2.4m</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-lg">Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Major pothole detected</p>
                  <p className="text-xs text-muted-foreground">MG Road, 2 min ago</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Road construction</p>
                  <p className="text-xs text-muted-foreground">Ring Road, 15 min ago</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Traffic barricade</p>
                  <p className="text-xs text-muted-foreground">CP Metro, 1 hr ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-lg">Today's Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">42</p>
                <p className="text-xs text-muted-foreground">Issues Reported</p>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-success">31</p>
                <p className="text-xs text-muted-foreground">Issues Resolved</p>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">156</p>
                <p className="text-xs text-muted-foreground">Routes Planned</p>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-warning">8.2</p>
                <p className="text-xs text-muted-foreground">Avg Response</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};