import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Target, TrendingUp, MessageSquare, Calendar, Star, CheckCircle, Loader2 } from 'lucide-react';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MentorAI Hub
            </h1>
            <Badge variant="secondary">Beta</Badge>
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <Link to="/dashboard">
                <Button>Go to Dashboard</Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button variant="hero">Get Started</Button>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              The Future of
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Professional Mentoring
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Connect with mentors and mentees through our AI-powered platform. 
              Build meaningful relationships, achieve your goals, and unlock your potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              {user ? (
                <Link to="/dashboard">
                  <Button size="xl" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              ) : (
                <Link to="/auth">
                  <Button size="xl" className="bg-white text-primary hover:bg-white/90">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              )}
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Why Choose MentorAI Hub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with human wisdom to create 
              the most effective mentoring experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-medium border-0 hover:shadow-large transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Smart Matching</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes skills, goals, and personality to find perfect mentor-mentee pairs.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0 hover:shadow-large transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Goal Tracking</h3>
                <p className="text-muted-foreground">
                  Set, track, and achieve your professional goals with guided milestones.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0 hover:shadow-large transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Progress Analytics</h3>
                <p className="text-muted-foreground">
                  Gain insights into your growth with detailed analytics and recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0 hover:shadow-large transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Real-time Communication</h3>
                <p className="text-muted-foreground">
                  Stay connected with integrated messaging and video call capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0 hover:shadow-large transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Session Scheduling</h3>
                <p className="text-muted-foreground">
                  Effortlessly schedule and manage mentoring sessions with calendar integration.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0 hover:shadow-large transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Verified mentors and continuous feedback ensure high-quality experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">10K+</div>
              <div className="text-white/80">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">5K+</div>
              <div className="text-white/80">Successful Matches</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">95%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-white/80">Industries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of professionals who are already growing with MentorAI Hub.
            </p>
            {user ? (
              <Link to="/dashboard">
                <Button size="xl" variant="hero">
                  Continue Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button size="xl" variant="hero">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">MentorAI Hub</h3>
              <p className="text-muted-foreground">
                Empowering professional growth through intelligent mentoring.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Features</div>
                <div>Pricing</div>
                <div>API</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>About</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Documentation</div>
                <div>Help Center</div>
                <div>Blog</div>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 MentorAI Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
