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
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-accent" />
            <span>Report Safety Issue</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Location Display */}
          {position && (
            <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-muted p-2 rounded-md">
              <MapPin className="w-4 h-4" />
              <span>
                Location: {position[0].toFixed(4)}, {position[1].toFixed(4)}
              </span>
            </div>
          )}

          {/* Report Type */}
          <div className="space-y-2">
            <Label htmlFor="reportType">Issue Type *</Label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger>
                <SelectValue placeholder="Select issue type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pothole">Pothole</SelectItem>
                <SelectItem value="barricade">Road Barricade</SelectItem>
                <SelectItem value="debris">Road Debris</SelectItem>
                <SelectItem value="flooding">Flooding</SelectItem>
                <SelectItem value="accident">Accident</SelectItem>
                <SelectItem value="construction">Construction Work</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Severity */}
          <div className="space-y-2">
            <Label htmlFor="severity">Severity Level *</Label>
            <Select value={severity} onValueChange={setSeverity}>
              <SelectTrigger>
                <SelectValue placeholder="Select severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low - Minor inconvenience</SelectItem>
                <SelectItem value="medium">Medium - Affects traffic flow</SelectItem>
                <SelectItem value="high">High - Safety hazard</SelectItem>
                <SelectItem value="critical">Critical - Immediate danger</SelectItem>
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
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label>Photo Evidence</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-4">
              {image ? (
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-success" />
                  <span className="text-sm text-success">{image.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setImage(null)}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <label className="flex flex-col items-center space-y-2 cursor-pointer">
                  <Upload className="w-6 h-6 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Click to upload photo
                  </span>
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

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="flex-1 btn-safety"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};