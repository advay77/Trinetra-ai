import { useState } from "react";
import { MapView } from "@/components/dashboard/MapView";
import { ControlPanel } from "@/components/dashboard/ControlPanel";
import { ReportModal } from "@/components/dashboard/ReportModal";
import { RouteModal } from "@/components/dashboard/RouteModal";
import { Navigation } from "@/components/Navigation";

export const Dashboard = () => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [showRouteModal, setShowRouteModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<[number, number] | null>(null);

  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <div className="flex h-[calc(100vh-4rem)] relative z-0">
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
      
      {/* Modal Backdrop */}
      {(showReportModal || showRouteModal) && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      )}
      
      {/* Modals */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        {showReportModal && (
          <div className="w-full max-w-md pointer-events-auto">
            <ReportModal
              position={selectedPosition}
              onClose={() => setShowReportModal(false)}
            />
          </div>
        )}
        
        {showRouteModal && (
          <div className="w-full max-w-2xl pointer-events-auto">
            <RouteModal
              onClose={() => setShowRouteModal(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
};