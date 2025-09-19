import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Plus, 
  FileText, 
  TrendingUp, 
  Award, 
  Calendar,
  BookOpen,
  Users,
  Target,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [recentActivities] = useState([
    {
      id: 1,
      title: "React Development Workshop",
      category: "Workshop",
      date: "2024-01-15",
      status: "approved",
      description: "Completed advanced React development workshop covering hooks and state management"
    },
    {
      id: 2,
      title: "Community Volunteering Program",
      category: "Volunteering",
      date: "2024-01-10",
      status: "pending",
      description: "Participated in local community service initiative for environmental cleanup"
    },
    {
      id: 3,
      title: "Summer Internship at TechCorp",
      category: "Internship",
      date: "2024-01-05",
      status: "approved",
      description: "3-month internship program focusing on software development and project management"
    }
  ]);

  const stats = {
    gpa: "3.85",
    credits: "142",
    attendance: "94%",
    achievements: 12
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
      case "rejected":
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      approved: "bg-success/10 text-success border-success/20",
      pending: "bg-warning/10 text-warning border-warning/20",
      rejected: "bg-destructive/10 text-destructive border-destructive/20"
    };
    
    return (
      <Badge className={`${variants[status as keyof typeof variants]} capitalize`}>
        {getStatusIcon(status)}
        <span className="ml-1">{status}</span>
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-white/20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-white/20 text-white text-xl font-semibold">
                  JD
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">Welcome back, John Doe</h1>
                <p className="text-white/80">Computer Science • Student ID: CS2024001</p>
              </div>
            </div>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card hover:shadow-card-hover transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current GPA</p>
                  <p className="text-2xl font-bold text-primary">{stats.gpa}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Credits Earned</p>
                  <p className="text-2xl font-bold text-secondary">{stats.credits}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="bg-info/10 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-info" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Attendance</p>
                  <p className="text-2xl font-bold text-info">{stats.attendance}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="bg-success/10 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                  <p className="text-2xl font-bold text-success">{stats.achievements}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={() => navigate("/add-achievement")}
                  className="w-full bg-gradient-primary text-white hover:opacity-90 transition-smooth"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Achievement
                </Button>
                <Button
                  onClick={() => navigate("/portfolio")}
                  variant="outline"
                  className="w-full"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Portfolio
                </Button>
                <Button
                  onClick={() => navigate("/profile")}
                  variant="outline"
                  className="w-full"
                >
                  <User className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Recent Activities
                </CardTitle>
                <CardDescription>
                  Your latest submitted achievements and their approval status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/30 transition-smooth"
                    >
                      <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                        <Award className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold truncate">{activity.title}</h4>
                          {getStatusBadge(activity.status)}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {activity.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(activity.date).toLocaleDateString()}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {activity.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;