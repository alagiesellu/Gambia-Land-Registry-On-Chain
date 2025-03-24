/**
 * Dashboard Page Component
 * Provides user interface for managing land registry records and user account
 * Features property listing, registration status, and user settings
 */
import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { 
  HomeIcon, 
  FileText, 
  Map, 
  Settings, 
  Bell, 
  Search,
  Plus,
  ChevronRight,
  User,
  Landmark,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardOverview from "@/components/dashboard/Overview";
import DashboardProperties from "@/components/dashboard/Properties";
import DashboardDocuments from "@/components/dashboard/Documents";
import DashboardSettings from "@/components/dashboard/Settings";

// Mock data for demonstration
const mockNotifications = [
  { id: 1, title: "Land registration approved", date: "2 hours ago", read: false },
  { id: 2, title: "New document uploaded", date: "Yesterday", read: false },
  { id: 3, title: "Payment confirmed", date: "3 days ago", read: true },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [notifications, setNotifications] = useState(mockNotifications);
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop() || "overview";

  // Mark notification as read
  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map(notification => 
        notification.id === id 
          ? { ...notification, read: true } 
          : notification
      )
    );
  };

  // Count unread notifications
  const unreadCount = notifications.filter(notification => !notification.read).length;

  // Navigation items
  const navItems = [
    { path: "overview", icon: <HomeIcon size={20} />, label: "Overview" },
    { path: "properties", icon: <Map size={20} />, label: "My Properties" },
    { path: "documents", icon: <FileText size={20} />, label: "Documents" },
    { path: "settings", icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <div className="min-h-screen pt-16 bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Manage your land properties and documents
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full md:w-[200px] pl-8 rounded-full bg-background"
              />
            </div>
            
            {/* Notifications dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative rounded-full">
                  <Bell size={18} />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-destructive-foreground text-xs flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <ScrollArea className="h-[300px]">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <DropdownMenuItem key={notification.id} onSelect={() => markAsRead(notification.id)} className="p-0">
                        <div className={`w-full p-3 cursor-pointer ${!notification.read ? 'bg-muted/50' : ''}`}>
                          <div className="flex justify-between items-start">
                            <div className="font-medium">{notification.title}</div>
                            {!notification.read && <Badge variant="outline" className="ml-2">New</Badge>}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">{notification.date}</div>
                        </div>
                      </DropdownMenuItem>
                    ))
                  ) : (
                    <div className="p-4 text-center text-muted-foreground">
                      No notifications
                    </div>
                  )}
                </ScrollArea>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer justify-center font-medium">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* User menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar>
                    <AvatarImage src="/user-avatar.png" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Dashboard layout */}
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
          {/* Sidebar navigation */}
          <div className="hidden md:block">
            <Card className="sticky top-24">
              <CardContent className="p-4">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={`/dashboard/${item.path}`}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        currentPath === item.path
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div>
            {/* Mobile tabs navigation */}
            <div className="md:hidden mb-6">
              <Tabs value={currentPath} onValueChange={(value) => setActiveTab(value)}>
                <TabsList className="w-full justify-start overflow-x-auto no-scrollbar">
                  {navItems.map((item) => (
                    <TabsTrigger 
                      key={item.path} 
                      value={item.path}
                      asChild
                    >
                      <Link to={`/dashboard/${item.path}`} className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            
            {/* Dashboard content */}
            <Routes>
              <Route path="/" element={<DashboardOverview />} />
              <Route path="/overview" element={<DashboardOverview />} />
              <Route path="/properties" element={<DashboardProperties />} />
              <Route path="/documents" element={<DashboardDocuments />} />
              <Route path="/settings" element={<DashboardSettings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 