import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Shield, 
  MapPin,
  Clock,
  BarChart3,
  Download
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const Analytics = () => {
  // Mock data for charts
  const weeklyData = [
    { day: 'Mon', incidents: 12, resolved: 10 },
    { day: 'Tue', incidents: 8, resolved: 9 },
    { day: 'Wed', incidents: 15, resolved: 12 },
    { day: 'Thu', incidents: 20, resolved: 18 },
    { day: 'Fri', incidents: 25, resolved: 22 },
    { day: 'Sat', incidents: 18, resolved: 16 },
    { day: 'Sun', incidents: 14, resolved: 15 },
  ];

  const issueTypes = [
    { name: 'Potholes', value: 45, color: '#ef4444' },
    { name: 'Barricades', value: 30, color: '#f97316' },
    { name: 'Debris', value: 15, color: '#eab308' },
    { name: 'Flooding', value: 10, color: '#3b82f6' },
  ];

  const riskAreas = [
    { area: 'MG Road', risk: 85, incidents: 23 },
    { area: 'Ring Road', risk: 72, incidents: 18 },
    { area: 'CP Metro', risk: 68, incidents: 15 },
    { area: 'Khan Market', risk: 55, incidents: 12 },
    { area: 'Karol Bagh', risk: 45, incidents: 9 },
  ];

  const kpis = [
    {
      title: "Total Issues",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: AlertTriangle,
      color: "text-destructive"
    },
    {
      title: "Resolution Rate",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      icon: Shield,
      color: "text-success"
    },
    {
      title: "Avg Response Time",
      value: "2.4min",
      change: "-0.3min",
      trend: "down",
      icon: Clock,
      color: "text-primary"
    },
    {
      title: "Safe Routes",
      value: "156",
      change: "+8",
      trend: "up",
      icon: MapPin,
      color: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Safety Analytics
            </h1>
            <p className="text-muted-foreground">
              Comprehensive insights into city infrastructure safety
            </p>
          </div>
          
          <Button className="btn-success mt-4 md:mt-0">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            const isPositive = kpi.trend === "up";
            
            return (
              <Card key={index} className="card-elevated">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {kpi.title}
                  </CardTitle>
                  <Icon className={`w-4 h-4 ${kpi.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpi.value}</div>
                  <p className="text-xs text-muted-foreground flex items-center mt-1">
                    {isPositive ? (
                      <TrendingUp className="w-3 h-3 mr-1 text-success" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1 text-success" />
                    )}
                    {kpi.change} from last week
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Weekly Incidents Chart */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span>Weekly Incident Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="incidents" 
                    stroke="hsl(var(--destructive))" 
                    strokeWidth={2}
                    name="Incidents"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="resolved" 
                    stroke="hsl(var(--success))" 
                    strokeWidth={2}
                    name="Resolved"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Issue Types Distribution */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-accent" />
                <span>Issue Type Distribution</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={issueTypes}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {issueTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Risk Areas Table */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-warning" />
              <span>Top Risk Areas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                      Location
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                      Risk Score
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                      Incidents (30d)
                    </th>
                    <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {riskAreas.map((area, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">{area.area}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div 
                              className="h-2 rounded-full bg-gradient-to-r from-success to-destructive" 
                              style={{ width: `${area.risk}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">{area.risk}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{area.incidents}</td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;