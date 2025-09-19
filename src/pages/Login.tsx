import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Users, Shield, BookOpen, Award, BarChart3 } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("student");

  const handleLogin = (role: string) => {
    // Simulate login - in real app this would authenticate
    localStorage.setItem("userRole", role);
    
    switch (role) {
      case "student":
        navigate("/dashboard");
        break;
      case "faculty":
        navigate("/faculty");
        break;
      case "admin":
        navigate("/admin");
        break;
      default:
        navigate("/dashboard");
    }
  };

  const LoginForm = ({ role }: { role: string }) => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Enter your password" />
      </div>
      <Button 
        onClick={() => handleLogin(role)}
        className="w-full bg-gradient-primary text-white font-medium hover:opacity-90 transition-smooth"
      >
        Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}
      </Button>
    </div>
  );

  const features = [
    {
      icon: Award,
      title: "Achievement Tracking",
      description: "Log and verify your academic and extracurricular achievements"
    },
    {
      icon: BookOpen,
      title: "Digital Portfolio",
      description: "Generate professional portfolios from your verified activities"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Track your academic progress and involvement over time"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="h-16 w-16 mr-4" />
            <h1 className="text-5xl font-bold">Smart Student Hub</h1>
          </div>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Your comprehensive platform for tracking achievements, managing portfolios, 
            and showcasing academic excellence.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-card">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Login Section */}
      <div className="py-16 px-6">
        <div className="max-w-md mx-auto">
          <Card className="shadow-card-hover">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
              <CardDescription>
                Choose your role to access your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="student" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Student
                  </TabsTrigger>
                  <TabsTrigger value="faculty" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Faculty
                  </TabsTrigger>
                  <TabsTrigger value="admin" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Admin
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="student">
                  <LoginForm role="student" />
                </TabsContent>
                
                <TabsContent value="faculty">
                  <LoginForm role="faculty" />
                </TabsContent>
                
                <TabsContent value="admin">
                  <LoginForm role="admin" />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;