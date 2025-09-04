import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, BarChart3, Settings, Shield, LogOut, MapPin } from 'lucide-react';

const AdminPanel = () => {
  const { logout, currentUser } = useAuth();

  const adminStats = [
    { title: 'Total Users', value: '0', icon: Users, color: 'bg-primary' },
    { title: 'Collection Centers', value: '0', icon: MapPin, color: 'bg-primary-light' },
    { title: 'Total Collections', value: '0', icon: BarChart3, color: 'bg-accent' }
  ];

  const adminActions = [
    { title: 'Manage Users', description: 'View and manage user accounts', icon: Users },
    { title: 'Collection Analytics', description: 'View collection statistics and reports', icon: BarChart3 },
    { title: 'System Settings', description: 'Configure system settings and parameters', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary-light/10 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-6 h-6 text-primary" />
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Admin
              </Badge>
            </div>
            <h1 className="text-3xl font-bold gradient-text">Admin Panel</h1>
            <p className="text-muted-foreground">Welcome, {currentUser?.email}</p>
          </div>
          <Button 
            variant="outline" 
            onClick={logout}
            className="border-primary/20 hover:bg-primary/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Admin Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {adminStats.map((stat, index) => (
            <Card key={index} className="backdrop-blur-sm bg-card/80 border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Admin Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {adminActions.map((action, index) => (
            <Card key={index} className="backdrop-blur-sm bg-card/80 border-primary/20 hover:border-primary/40 transition-colors cursor-pointer group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <action.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {action.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-primary/20 hover:bg-primary/10 hover:border-primary/40"
                >
                  Access
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Overview */}
        <Card className="backdrop-blur-sm bg-card/80 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              System Overview
            </CardTitle>
            <CardDescription>
              Monitor the overall performance of the Baccho platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">0</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center p-4 bg-primary-light/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary-light">0</div>
                  <div className="text-sm text-muted-foreground">Collections Today</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-accent">0</div>
                  <div className="text-sm text-muted-foreground">Points Awarded</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">0kg</div>
                  <div className="text-sm text-muted-foreground">CO₂ Saved</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;