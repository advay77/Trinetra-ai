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
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-white border-white/70 bg-white/10 hover:bg-white hover:text-primary text-lg px-8 py-4 backdrop-blur-sm transition-all duration-300"
                >
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
                  Cities and neighborhoods worldwide using Trinetra for enhanced public safety and infrastructure monitoring.
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
            Join thousands of communities worldwide using Trinetra to protect citizens, 
            prevent accidents, and build a more resilient urban future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" className="min-w-48 shadow-xl">
                <Shield className="w-5 h-5 mr-2" />
                Start Protecting Lives
              </Button>
            </Link>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="min-w-48 border-primary-foreground/40 text-primary-foreground bg-white/5 hover:bg-white/20 transition-colors duration-300"
            >
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
      <footer className="bg-gradient-to-b from-card to-card/90 backdrop-blur-sm border-t border-border/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-gradient-primary">
                  Trinetra
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Making cities safer through intelligent infrastructure monitoring. 
                Our AI-powered platform protects communities and saves lives every day.
              </p>
              
              <div className="flex space-x-4 mt-4">
                <a href="https://x.com/AnandAdvay91289" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://github.com/advay77" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/advay-anand-a89024277/" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                © 2025 Trinetra. Building safer communities through technology.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mr-2 group-hover:bg-foreground transition-colors"></span>
                    Real-time Monitoring
                  </Link>
                </li>
                <li>
                  <Link to="/analytics" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mr-2 group-hover:bg-foreground transition-colors"></span>
                    Safety Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/simulation" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mr-2 group-hover:bg-foreground transition-colors"></span>
                    AI Simulation
                  </Link>
                </li>
                <li>
                  <Link to="/admin" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mr-2 group-hover:bg-foreground transition-colors"></span>
                    Administration
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mr-2 group-hover:bg-foreground transition-colors"></span>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mr-2 group-hover:bg-foreground transition-colors"></span>
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mr-2 group-hover:bg-foreground transition-colors"></span>
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mr-2 group-hover:bg-foreground transition-colors"></span>
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
