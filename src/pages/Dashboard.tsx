import { useState } from "react";
import { MapView } from "@/components/dashboard/MapView";
import { ControlPanel } from "@/components/dashboard/ControlPanel";
import { ReportModal } from "@/components/dashboard/ReportModal";
import { RouteModal } from "@/components/dashboard/RouteModal";
import { Navigation } from "@/components/Navigation";

const Dashboard = () => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [showRouteModal, setShowRouteModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<[number, number] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex h-[calc(100vh-4rem)]">
        <ControlPanel 
          onShowReportModal={() => setShowReportModal(true)}
          onShowRouteModal={() => setShowRouteModal(true)}
        />
        <div className="flex-1">
          <MapView 
            onMapClick={(position) => setSelectedPosition(position)}
            selectedPosition={selectedPosition}
          />
        </div>
      </div>
      
      {showReportModal && (
        <ReportModal
          position={selectedPosition}
          onClose={() => setShowReportModal(false)}
        />
      )}
      
      {showRouteModal && (
        <RouteModal
          onClose={() => setShowRouteModal(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;