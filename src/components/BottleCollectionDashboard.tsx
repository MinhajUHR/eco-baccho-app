import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Recycle, Award, TrendingUp, LogOut } from 'lucide-react';

const BottleCollectionDashboard = () => {
  const { logout, currentUser } = useAuth();

  const stats = [
    { title: 'Bottles Collected', value: '0', icon: Recycle, color: 'bg-primary' },
    { title: 'Points Earned', value: '0', icon: Award, color: 'bg-primary-light' },
    { title: 'Environmental Impact', value: '0kg CO₂ saved', icon: Leaf, color: 'bg-accent' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary-light/10 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Bottle Collection Dashboard</h1>
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
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
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

        {/* Main Action Card */}
        <Card className="backdrop-blur-sm bg-card/80 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Recycle className="w-5 h-5 text-primary" />
              Start Collecting Bottles
            </CardTitle>
            <CardDescription>
              Begin your journey towards a sustainable future by collecting plastic bottles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold text-primary mb-2">How it works:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Collect plastic bottles from your neighborhood</li>
                  <li>• Bring them to our collection centers</li>
                  <li>• Earn points for each bottle collected</li>
                  <li>• Redeem points for eco-friendly rewards</li>
                </ul>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary"
                size="lg"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Start Collection
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Achievement Section */}
        <Card className="backdrop-blur-sm bg-card/80 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Your Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Eco Warrior Beginner
              </Badge>
              <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground">
                First Collection (0/1)
              </Badge>
              <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground">
                Green Champion (0/100)
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BottleCollectionDashboard;