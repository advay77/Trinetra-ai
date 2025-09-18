import { useState, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Download, 
  BarChart3,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Upload,
  FileVideo
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Simulation = () => {
  const { toast } = useToast();
  const [isPlaying, setIsPlaying] = useState(false);
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock simulation data
  const simulationMetrics = {
    duration: "45:32",
    totalIncidents: 127,
    resolvedIncidents: 98,
    averageResponseTime: "2.8min",
    riskReduction: "34%",
    routeOptimization: "67%",
    accuracyRate: "94.2%",
    processedFrames: 81450
  };

  const simulationResults = [
    {
      metric: "Detection Accuracy",
      value: "94.2%",
      improvement: "+2.1%",
      icon: CheckCircle,
      color: "text-success"
    },
    {
      metric: "Response Time",
      value: "2.8min", 
      improvement: "-0.4min",
      icon: Clock,
      color: "text-primary"
    },
    {
      metric: "Risk Mitigation",
      value: "34%",
      improvement: "+8%",
      icon: AlertTriangle,
      color: "text-warning"
    },
    {
      metric: "Route Efficiency",
      value: "67%",
      improvement: "+12%",
      icon: TrendingUp,
      color: "text-accent"
    }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    toast({
      title: isPlaying ? "Simulation Paused" : "Simulation Playing",
      description: `Video ${isPlaying ? 'paused' : 'resumed'} at current position.`,
    });
  };

  const handleRestart = () => {
    setIsPlaying(false);
    toast({
      title: "Simulation Restarted",
      description: "Video has been reset to the beginning.",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download Started", 
      description: "Simulation video and results are being prepared for download.",
    });
  };

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setUploadedVideo(file);
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      toast({
        title: "Video Uploaded Successfully",
        description: `${file.name} is ready for simulation analysis.`,
      });
    } else {
      toast({
        title: "Invalid File Type",
        description: "Please upload a valid video file (MP4, MOV, AVI, etc.)",
        variant: "destructive",
      });
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              AI Simulation Analysis
            </h1>
            <p className="text-muted-foreground">
              Advanced infrastructure monitoring and safety analysis platform
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleVideoUpload}
              accept="video/*"
              className="hidden"
            />
            <Button onClick={handleUploadClick} variant="outline" className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Upload Video
            </Button>
            <Button onClick={handleDownload} className="btn-success">
              <Download className="w-4 h-4 mr-2" />
              Download Results
            </Button>
          </div>
        </div>

        {/* Upload Section - Show when no video */}
        {!videoUrl && (
          <Card className="card-elevated mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileVideo className="w-5 h-5 text-primary" />
                <span>Upload Infrastructure Video for Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                onClick={handleUploadClick}
                className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center hover:border-primary/50 hover:bg-muted/50 transition-all cursor-pointer"
              >
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Upload Your Infrastructure Video</h3>
                <p className="text-muted-foreground mb-4">
                  Drop your video file here or click to browse. Supports MP4, MOV, AVI formats up to 100MB.
                </p>
                <Button onClick={handleUploadClick} className="btn-safety">
                  Choose Video File
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player Section */}
          <div className="lg:col-span-2">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Play className="w-5 h-5 text-primary" />
                  <span>Simulation Playback</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Video Player */}
                <div className="relative bg-muted rounded-lg aspect-video mb-4 overflow-hidden">
                  {videoUrl ? (
                    <video
                      src={videoUrl}
                      className="w-full h-full object-cover"
                      controls={false}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                          <Play className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-muted-foreground">
                          AI analysis results will appear here
                          <br />
                          <span className="text-sm">Upload a video to start simulation</span>
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Mock progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/20 p-4">
                    <div className="flex items-center space-x-3">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={handlePlayPause}
                        className="text-white hover:bg-white/20"
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4" />
                        )}
                      </Button>
                      
                      <div className="flex-1 bg-white/20 rounded-full h-1">
                        <div 
                          className="bg-primary rounded-full h-1 transition-all"
                          style={{ width: isPlaying ? "45%" : "30%" }}
                        />
                      </div>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleRestart}
                        className="text-white hover:bg-white/20"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                      
                      <span className="text-white text-sm font-mono">
                        {isPlaying ? "20:32" : "13:45"} / {simulationMetrics.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Video Controls Info */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <p className="font-semibold">{simulationMetrics.processedFrames.toLocaleString()}</p>
                    <p className="text-muted-foreground">Frames Processed</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">{simulationMetrics.duration}</p>
                    <p className="text-muted-foreground">Total Duration</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">1080p</p>
                    <p className="text-muted-foreground">Resolution</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Metrics Sidebar */}
          <div className="space-y-6">
            {/* Overall Performance */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-lg">Overall Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Incidents Detected</span>
                    <span className="font-medium">{simulationMetrics.totalIncidents}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Incidents Resolved</span>
                    <span className="font-medium text-success">{simulationMetrics.resolvedIncidents}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <span className="font-medium">
                      {Math.round((simulationMetrics.resolvedIncidents / simulationMetrics.totalIncidents) * 100)}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <div className="space-y-4">
              {simulationResults.map((result, index) => {
                const Icon = result.icon;
                return (
                  <Card key={index} className="card-elevated">
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center`}>
                          <Icon className={`w-5 h-5 ${result.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{result.metric}</p>
                          <p className="text-2xl font-bold">{result.value}</p>
                          <p className="text-xs text-success">{result.improvement} vs baseline</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Analysis */}
        <Card className="card-elevated mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span>Simulation Analysis Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Key Findings</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Detection accuracy improved by 2.1% with new algorithm</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Average response time reduced to under 3 minutes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Route optimization efficiency increased by 12%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                    <span>Edge cases in low-light conditions need improvement</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Recommendations</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Deploy updated model to production environment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Increase training data for nighttime scenarios</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Implement enhanced alerting for critical incidents</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Schedule next simulation for Q2 performance review</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Simulation;