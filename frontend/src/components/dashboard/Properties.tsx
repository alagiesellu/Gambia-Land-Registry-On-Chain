/**
 * Dashboard Properties Component
 * Displays user's registered properties with search, filter, and map visualization
 * Provides interface for viewing and managing land registry entries
 */
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, MapPin, Building, Filter, MoreHorizontal, Plus } from "lucide-react";
import { Link } from "react-router-dom";

// Mock property data for demonstration
const mockProperties = [
  {
    id: 1,
    title: "Residential Plot - Banjul",
    location: "Banjul, Capital Region",
    registrationNumber: "GBA-1234-A",
    status: "approved",
    coordinates: "13.4557° N, 16.5787° W",
    area: "450 sq m",
    type: "residential",
    registrationDate: "Jan 15, 2023",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Agricultural Land - Central River",
    location: "Central River Division",
    registrationNumber: "CRD-5678-B",
    status: "approved",
    coordinates: "13.5368° N, 14.9615° W",
    area: "2.5 hectares",
    type: "agricultural",
    registrationDate: "Mar 3, 2023",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Commercial Property - Serekunda",
    location: "Serekunda, Kanifing",
    registrationNumber: "KMC-9012-C",
    status: "pending",
    coordinates: "13.4382° N, 16.6784° W",
    area: "800 sq m",
    type: "commercial",
    registrationDate: "Jun 22, 2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Vacant Land - North Bank",
    location: "North Bank Division",
    registrationNumber: "NBD-3456-D",
    status: "draft",
    coordinates: "13.5670° N, 16.2359° W",
    area: "1200 sq m",
    type: "vacant",
    registrationDate: "Sep 10, 2023",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=200&auto=format&fit=crop"
  },
];

// Property status badge variants
const getStatusBadge = (status: string) => {
  switch (status) {
    case 'approved':
      return <Badge variant="success">Approved</Badge>;
    case 'pending':
      return <Badge variant="warning">Pending Approval</Badge>;
    case 'draft':
      return <Badge variant="outline">Draft</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

const DashboardProperties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  // Filter properties based on search query and active tab
  const filteredProperties = mockProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.registrationNumber.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    return matchesSearch && property.status === activeTab;
  });

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">My Properties</h2>
          <p className="text-muted-foreground">
            Manage and view your registered land properties
          </p>
        </div>
        
        <Button asChild>
          <Link to="/dashboard/properties/register" className="flex items-center gap-1">
            <Plus size={18} />
            Register New Property
          </Link>
        </Button>
      </div>
      
      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search properties..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full sm:w-auto"
        >
          <TabsList className="w-full sm:w-auto grid grid-cols-3 sm:flex sm:space-x-0">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Filter size={18} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter By</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Date (Newest)</DropdownMenuItem>
            <DropdownMenuItem>Date (Oldest)</DropdownMenuItem>
            <DropdownMenuItem>Name (A-Z)</DropdownMenuItem>
            <DropdownMenuItem>Type</DropdownMenuItem>
            <DropdownMenuItem>Area (Largest)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {/* View toggle */}
      <Tabs defaultValue="grid">
        <div className="flex justify-end">
          <TabsList>
            <TabsTrigger value="grid">Grid</TabsTrigger>
            <TabsTrigger value="map">Map</TabsTrigger>
          </TabsList>
        </div>
        
        {/* Grid view */}
        <TabsContent value="grid" className="mt-6">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <div className="h-48 relative">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      {getStatusBadge(property.status)}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{property.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground text-sm gap-1">
                      <MapPin size={14} />
                      <span>{property.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Registration</p>
                        <p className="font-medium">{property.registrationNumber}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Area</p>
                        <p className="font-medium">{property.area}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Type</p>
                        <p className="font-medium capitalize">{property.type}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Registered</p>
                        <p className="font-medium">{property.registrationDate}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t flex justify-between pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/dashboard/properties/${property.id}`}>View Details</Link>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal size={18} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Download Certificate</DropdownMenuItem>
                        <DropdownMenuItem>Share Details</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Report Issue</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center">
              <div className="flex flex-col items-center gap-3 mb-4">
                <Building size={48} className="text-muted-foreground" />
                <h3 className="text-xl font-semibold">No properties found</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                {searchQuery 
                  ? "No properties match your search criteria. Try different keywords."
                  : "You haven't registered any properties yet."}
              </p>
              <Button asChild>
                <Link to="/dashboard/properties/register">Register Your First Property</Link>
              </Button>
            </Card>
          )}
        </TabsContent>
        
        {/* Map view */}
        <TabsContent value="map" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="border border-border rounded-lg h-[600px] flex items-center justify-center bg-muted/50">
                <div className="text-center">
                  <Building size={48} className="mx-auto mb-3 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground max-w-lg mx-auto mb-4">
                    An interactive map will be displayed here showing property locations
                    with visualization of boundaries and neighboring properties.
                  </p>
                  <Button variant="secondary">Load Map Data</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardProperties; 