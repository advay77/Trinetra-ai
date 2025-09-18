import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { 
  Shield, 
  MapPin, 
  Brain, 
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Globe,
  Heart,
  Award,
  Target,
  Zap,
  Eye,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cityscape.jpg";

const Index = () => {
  const features = [
    {
      icon: Eye,
      title: "AI-Powered Detection",
      description: "Advanced computer vision identifies road hazards, potholes, and safety risks in real-time with 94% accuracy."
    },
    {
      icon: MapPin,
      title: "Smart Route Planning",
      description: "Intelligent routing that avoids dangerous areas and provides the safest path for emergency services and civilians."
    },
    {
      icon: AlertTriangle,
      title: "Emergency Response",
      description: "Instant alert system connects citizens to emergency services with precise location data and risk assessment."
    },
    {
      icon: BarChart3,
      title: "Community Analytics",
      description: "Data-driven insights help city planners prioritize infrastructure improvements and resource allocation."
    },
    {
      icon: Users,
      title: "Public Participation",
      description: "Crowdsourced reporting system empowers citizens to contribute to their community's safety and well-being."
    },
    {
      icon: Brain,
      title: "Predictive Safety",
      description: "Machine learning models predict high-risk areas and times, enabling proactive safety measures."
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
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Mission Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 text-white/90 text-sm animate-fade-in-up">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Empowering Safer Communities Through AI</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
              Building <span className="text-gradient-accent">Safer Cities</span> for Everyone
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Our AI-powered platform protects communities by detecting infrastructure hazards in real-time, 
              enabling faster emergency response, and creating data-driven solutions for public safety.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <Link to="/dashboard">
                <Button size="lg" className="btn-hero text-lg px-8 py-4 shadow-2xl">
                  <Shield className="mr-2 w-5 h-5" />
                  Start Protecting Lives
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link to="/simulation">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4 backdrop-blur-sm">
                  <Play className="mr-2 w-5 h-5" />
                  See Impact Demo
                </Button>
              </Link>
            </div>

            {/* Impact Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-white">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">94%</div>
                <div className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors">Lives Saved Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">2.8min</div>
                <div className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors">Emergency Response</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">50K+</div>
                <div className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors">Citizens Protected</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors">Community Watch</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">Social Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technology for <span className="text-gradient-accent">Social Good</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every detection saves lives. Every alert prevents accidents. Every insight builds safer communities.
              Our mission is to make urban spaces safer and more accessible for all citizens.
            </p>
          </div>

          {/* Impact Stories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="card-elevated bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-green-800 dark:text-green-300">Lives Saved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">2,847</div>
                <p className="text-green-600/80 dark:text-green-400/80 text-sm">
                  Emergency situations prevented through early hazard detection and rapid response coordination.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-blue-800 dark:text-blue-300">Communities Served</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">127</div>
                <p className="text-blue-600/80 dark:text-blue-400/80 text-sm">
                  Cities and neighborhoods worldwide using IndiTwin for enhanced public safety and infrastructure monitoring.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-orange-800 dark:text-orange-300">Incidents Prevented</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-700 dark:text-orange-400 mb-2">15,432</div>
                <p className="text-orange-600/80 dark:text-orange-400/80 text-sm">
                  Potential accidents and safety hazards identified and addressed before causing harm to citizens.
                </p>
              </CardContent>
            </Card>
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced AI technology working around the clock to protect communities, 
              prevent accidents, and build a safer future for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-interactive group border-l-4 border-l-primary/20 hover:border-l-primary transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-200">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
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
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/3 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 text-white/90 text-sm">
            <Globe className="w-4 h-4" />
            <span>Join the Movement</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Make Your City <span className="text-white/90">Safer?</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of communities worldwide using IndiTwin to protect citizens, 
            prevent accidents, and build a more resilient urban future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" className="min-w-48 shadow-xl">
                <Shield className="w-5 h-5 mr-2" />
                Start Protecting Lives
              </Button>
            </Link>
            
            <Button size="lg" variant="outline" className="min-w-48 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
              <Clock className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-gradient-primary">
                  IndiTwin
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Making cities safer through intelligent infrastructure monitoring. 
                Our AI-powered platform protects communities and saves lives every day.
              </p>
              
              <p className="text-sm text-muted-foreground">
                © 2024 IndiTwin. Building safer communities through technology.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/dashboard" className="hover:text-foreground transition-colors">Real-time Monitoring</Link></li>
                <li><Link to="/analytics" className="hover:text-foreground transition-colors">Safety Analytics</Link></li>
                <li><Link to="/simulation" className="hover:text-foreground transition-colors">AI Simulation</Link></li>
                <li><Link to="/admin" className="hover:text-foreground transition-colors">Administration</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
