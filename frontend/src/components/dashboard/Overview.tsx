/**
 * Dashboard Overview Component
 * Displays summary statistics, recent activity, and quick actions
 * Main landing page when user enters dashboard
 */
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, MapPin, FileText, CheckCircle, AlertCircle, Building, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for demonstration
const mockStats = [
  { title: "Total Properties", value: 4, icon: <Building className="h-5 w-5 text-primary" /> },
  { title: "Pending Approvals", value: 1, icon: <Clock className="h-5 w-5 text-amber-500" /> },
  { title: "Approved", value: 3, icon: <CheckCircle className="h-5 w-5 text-emerald-500" /> },
  { title: "Documents", value: 12, icon: <FileText className="h-5 w-5 text-blue-500" /> },
];

const mockActivity = [
  { 
    id: 1, 
    type: "approval", 
    title: "Property Registration Approved", 
    description: "Your property at Central River Division has been approved.",
    date: "Today, 2:30 PM",
    status: "success"
  },
  { 
    id: 2, 
    type: "document", 
    title: "Document Uploaded", 
    description: "Ownership certificate for Plot #GBA-234 uploaded.",
    date: "Yesterday, 10:15 AM",
    status: "info"
  },
  { 
    id: 3, 
    type: "request", 
    title: "Verification Request", 
    description: "Additional verification required for North Bank property.",
    date: "Mar 22, 2023",
    status: "warning"
  },
];

const mockProperties = [
  {
    id: 1,
    title: "Residential Plot - Banjul",
    location: "Banjul, Capital Region",
    registrationNumber: "GBA-1234-A",
    status: "approved",
    coordinates: "13.4557° N, 16.5787° W",
    area: "450 sq m"
  },
  {
    id: 2,
    title: "Agricultural Land - Central River",
    location: "Central River Division",
    registrationNumber: "CRD-5678-B",
    status: "approved",
    coordinates: "13.5368° N, 14.9615° W",
    area: "2.5 hectares"
  },
  {
    id: 3,
    title: "Commercial Property - Serekunda",
    location: "Serekunda, Kanifing",
    registrationNumber: "KMC-9012-C",
    status: "pending",
    coordinates: "13.4382° N, 16.6784° W",
    area: "800 sq m"
  },
];

const DashboardOverview = () => {
  return (
    <div className="space-y-8">
      {/* Stats overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main dashboard content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Properties overview card */}
        <Card className="md:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>My Properties</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard/properties" className="flex items-center gap-1">
                  View All <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <CardDescription>
              Overview of your registered land properties
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {mockProperties.map((property) => (
                <div key={property.id} className="p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{property.title}</h3>
                        <Badge variant={property.status === "approved" ? "success" : "outline"}>
                          {property.status === "approved" ? "Approved" : "Pending"}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground gap-1">
                        <MapPin size={14} />
                        <span>{property.location}</span>
                      </div>
                      <p className="text-sm">
                        <span className="text-muted-foreground">Registration: </span>
                        <span className="font-medium">{property.registrationNumber}</span>
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/dashboard/properties/${property.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t bg-muted/50 p-4">
            <Button asChild className="w-full">
              <Link to="/dashboard/properties/register">
                Register New Property
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Activity feed card */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest updates and notifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {mockActivity.map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  <div className={`rounded-full p-2 
                    ${activity.status === "success" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : ""}
                    ${activity.status === "warning" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" : ""}
                    ${activity.status === "info" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : ""}
                  `}>
                    {activity.type === "approval" && <CheckCircle size={20} />}
                    {activity.type === "document" && <FileText size={20} />}
                    {activity.type === "request" && <AlertCircle size={20} />}
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-sm">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t bg-muted/50 p-4 justify-center">
            <Button variant="ghost" size="sm" className="w-full">
              View All Activity
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
              <MapPin className="h-6 w-6" />
              <span>Register Land</span>
            </Button>
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
              <FileText className="h-6 w-6" />
              <span>Upload Document</span>
            </Button>
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
              <Activity className="h-6 w-6" />
              <span>Check Status</span>
            </Button>
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
              <Building className="h-6 w-6" />
              <span>Property Search</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview; 