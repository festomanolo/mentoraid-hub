import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, LogOut, User, MessageSquare, Target, Calendar, Users, Bell } from 'lucide-react';

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MentorAI Hub
            </h1>
            <Badge variant="secondary" className="ml-2">
              Welcome back!
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button onClick={signOut} variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Welcome to Your Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your journey to meaningful mentoring relationships starts here. 
              Connect, learn, and grow with our AI-powered platform.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Mentorships</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">3</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Goals Achieved</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-secondary">12</div>
                <p className="text-xs text-muted-foreground">85% completion rate</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Messages</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">45</div>
                <p className="text-xs text-muted-foreground">5 unread messages</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sessions</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">8</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quick Actions */}
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Quick Actions
                </CardTitle>
                <CardDescription>
                  Get started with the most common tasks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start" variant="outline" size="lg">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send a Message
                </Button>
                <Button className="w-full justify-start" variant="outline" size="lg">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Session
                </Button>
                <Button className="w-full justify-start" variant="outline" size="lg">
                  <Target className="h-4 w-4 mr-2" />
                  Set New Goal
                </Button>
                <Button className="w-full justify-start" variant="hero" size="lg">
                  <Users className="h-4 w-4 mr-2" />
                  Find New Mentor
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Stay updated with your latest interactions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Goal completed: "Learn React"</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">New message from Sarah Chen</p>
                      <p className="text-xs text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Session scheduled for tomorrow</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coming Soon Features */}
          <Card className="shadow-medium border-0 bg-gradient-secondary text-white">
            <CardHeader>
              <CardTitle className="text-white">🚀 Coming Soon</CardTitle>
              <CardDescription className="text-white/80">
                Exciting features we're working on for you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">AI Matching</h3>
                  <p className="text-sm text-white/80">Smart mentor-mentee pairing</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">Real-time Chat</h3>
                  <p className="text-sm text-white/80">Instant messaging system</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">Progress Analytics</h3>
                  <p className="text-sm text-white/80">Detailed growth insights</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;