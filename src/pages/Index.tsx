import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  MapPin, 
  Route, 
  BarChart3, 
  AlertTriangle, 
  Clock,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-cityscape.jpg";

const Index = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-time Monitoring",
      description: "Track road conditions and safety hazards in real-time with our advanced detection system."
    },
    {
      icon: Route,
      title: "Safe Route Planning",
      description: "Get optimized routes that avoid known hazards and prioritize your safety."
    },
    {
      icon: AlertTriangle,
      title: "Instant Reporting",
      description: "Report road issues instantly with photo evidence and GPS coordinates."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into traffic patterns and safety trends."
    }
  ];

  const stats = [
    { value: "10k+", label: "Issues Detected" },
    { value: "99.2%", label: "Accuracy Rate" },
    { value: "2.4min", label: "Avg Response Time" },
    { value: "24/7", label: "Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient-primary">
                IndiTwin
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Link to="/dashboard">
                <Button className="btn-hero">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary/20">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Smart city infrastructure" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Smart Infrastructure
                <br />
                <span className="text-gradient-primary">Safety Monitoring</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                IndiTwin revolutionizes urban safety with AI-powered road monitoring, 
                real-time hazard detection, and intelligent route planning for safer cities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link to="/dashboard">
                <Button size="lg" className="btn-hero min-w-48">
                  <Shield className="w-5 h-5 mr-2" />
                  Start Monitoring
                </Button>
              </Link>
              
              <Button size="lg" variant="outline" className="min-w-48">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Safety Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets urban planning for unprecedented road safety monitoring and management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-interactive p-6">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Make Your City Safer?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join the smart city revolution with IndiTwin's advanced safety monitoring platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" className="min-w-48">
                <Shield className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
            </Link>
            
            <Button size="lg" variant="outline" className="min-w-48 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Clock className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient-primary">
                IndiTwin
              </span>
            </div>
            
            <p className="text-muted-foreground text-center">
              © 2024 IndiTwin. Making cities safer through intelligent monitoring.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
