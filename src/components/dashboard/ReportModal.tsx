import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, Upload, MapPin, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";


interface ReportModalProps {
  position: [number, number] | null;
  onClose: () => void;
}

export const ReportModal = ({ position, onClose }: ReportModalProps) => {
  const [reportType, setReportType] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async () => {
    if (!reportType || !description || !severity) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Mock API call - in real implementation, would call POST /api/detect
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Report Submitted",
        description: "Your safety report has been submitted successfully.",
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background rounded-lg shadow-lg border border-border overflow-hidden w-full max-w-2xl mx-auto my-4 sm:my-8">
      <div className="border-b border-border px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-accent" />
          <h2 className="text-lg font-semibold">Report Safety Issue</h2>
        </div>
      </div>
      <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
        <form id="report-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4 sm:space-y-6">
          {/* Location Display */}
          {position && (
            <div className="flex items-start sm:items-center space-x-2 text-sm text-muted-foreground bg-muted p-2 rounded-md">
              <MapPin className="w-4 h-4 mt-0.5 sm:mt-0 flex-shrink-0" />
              <span className="break-all">Location: {position[0].toFixed(4)}, {position[1].toFixed(4)}</span>
            </div>
          )}

          {/* Report Type */}
          <div className="space-y-2">
            <Label htmlFor="reportType">Issue Type *</Label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select issue type" />
              </SelectTrigger>
              <SelectContent className="max-h-60 overflow-y-auto">
                <SelectItem value="pothole" className="text-sm sm:text-base">Pothole</SelectItem>
                <SelectItem value="barricade" className="text-sm sm:text-base">Road Barricade</SelectItem>
                <SelectItem value="debris" className="text-sm sm:text-base">Road Debris</SelectItem>
                <SelectItem value="flooding" className="text-sm sm:text-base">Flooding</SelectItem>
                <SelectItem value="accident" className="text-sm sm:text-base">Accident</SelectItem>
                <SelectItem value="construction" className="text-sm sm:text-base">Construction Work</SelectItem>
                <SelectItem value="other" className="text-sm sm:text-base">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Severity */}
          <div className="space-y-2">
            <Label htmlFor="severity">Severity Level *</Label>
            <Select value={severity} onValueChange={setSeverity}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select severity" />
              </SelectTrigger>
              <SelectContent className="max-h-60 overflow-y-auto">
                <SelectItem value="low" className="text-sm sm:text-base">Low - Minor inconvenience</SelectItem>
                <SelectItem value="medium" className="text-sm sm:text-base">Medium - Affects traffic flow</SelectItem>
                <SelectItem value="high" className="text-sm sm:text-base">High - Safety hazard</SelectItem>
                <SelectItem value="critical" className="text-sm sm:text-base">Critical - Immediate danger</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the issue in detail..."
              rows={3}
              className="min-h-[100px] text-sm sm:text-base"
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label>Photo Evidence</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
              {image ? (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <div className="flex items-center space-x-2 flex-1 min-w-0">
                    <Camera className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm text-success truncate">{image.name}</span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setImage(null)}
                    className="w-full sm:w-auto justify-center"
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <label className="flex flex-col items-center space-y-2 cursor-pointer p-2">
                  <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground" />
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">Upload a photo</p>
                    <p className="text-xs text-muted-foreground mt-1">Click or drag & drop</p>
                    <p className="text-xs text-muted-foreground">Supports JPG, PNG (max 5MB)</p>
                  </div>
                  <Input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
          </div>
        </form>
      </div>
      <div className="bg-muted/50 px-4 sm:px-6 py-3 sm:py-4 flex flex-col-reverse sm:flex-row justify-end gap-3 border-t border-border">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onClose}
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          form="report-form"
          disabled={!reportType || isSubmitting}
          className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : "Submit Report"}
        </Button>
      </div>
    </div>
  );
};