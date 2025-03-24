/**
 * Dashboard Documents Component
 * Manages land registry-related documents with upload, organize and download capabilities
 * Provides secure document access and verification
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Search, 
  FileText, 
  Download, 
  FileUp, 
  MoreVertical, 
  Eye,
  FileCheck,
  Calendar,
  Filter
} from "lucide-react";

// Mock document data for demonstration
const mockDocuments = [
  {
    id: 1,
    name: "Land Title Certificate - Banjul",
    type: "certificate",
    category: "ownership",
    property: "Residential Plot - Banjul",
    size: "2.4 MB",
    uploadDate: "Jan 15, 2023",
    status: "verified"
  },
  {
    id: 2,
    name: "Survey Map - Central River",
    type: "map",
    category: "survey",
    property: "Agricultural Land - Central River",
    size: "4.8 MB",
    uploadDate: "Mar 10, 2023",
    status: "verified"
  },
  {
    id: 3,
    name: "Deed of Transfer",
    type: "legal",
    category: "transfer",
    property: "Commercial Property - Serekunda",
    size: "1.2 MB",
    uploadDate: "Jun 25, 2023",
    status: "pending"
  },
  {
    id: 4,
    name: "Property Tax Receipt",
    type: "receipt",
    category: "tax",
    property: "Residential Plot - Banjul",
    size: "0.8 MB",
    uploadDate: "Sep 2, 2023",
    status: "verified"
  },
  {
    id: 5,
    name: "Boundary Agreement",
    type: "legal",
    category: "boundary",
    property: "Agricultural Land - Central River",
    size: "3.1 MB",
    uploadDate: "Oct 18, 2023",
    status: "pending"
  }
];

// Status badge variants
const getStatusBadge = (status: string) => {
  switch (status) {
    case 'verified':
      return <Badge variant="success" className="capitalize">Verified</Badge>;
    case 'pending':
      return <Badge variant="outline" className="capitalize">Pending</Badge>;
    default:
      return <Badge className="capitalize">{status}</Badge>;
  }
};

// Document type icon
const getDocumentIcon = (type: string) => {
  switch (type) {
    case 'certificate':
      return <FileCheck className="h-5 w-5 text-emerald-500" />;
    case 'map':
      return <FileText className="h-5 w-5 text-blue-500" />;
    case 'legal':
      return <FileText className="h-5 w-5 text-violet-500" />;
    case 'receipt':
      return <FileText className="h-5 w-5 text-amber-500" />;
    default:
      return <FileText className="h-5 w-5" />;
  }
};

const DashboardDocuments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  // Filter documents based on search query and active tab
  const filteredDocuments = mockDocuments.filter(document => {
    const matchesSearch = document.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         document.property.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    return matchesSearch && document.status === activeTab;
  });

  // Handle file upload simulation
  const handleFileUpload = () => {
    alert("File upload dialog would open here");
    // In a real implementation, this would trigger file selection and upload
  };

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Documents</h2>
          <p className="text-muted-foreground">
            Manage and access your land registry documents
          </p>
        </div>
        
        <Button onClick={handleFileUpload} className="flex items-center gap-1">
          <FileUp size={18} />
          Upload Document
        </Button>
      </div>
      
      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search documents..."
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
            <TabsTrigger value="verified">Verified</TabsTrigger>
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
            <DropdownMenuItem>Document Type</DropdownMenuItem>
            <DropdownMenuItem>Property</DropdownMenuItem>
            <DropdownMenuItem>Size</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {/* Documents table */}
      <Card>
        <CardContent className="p-0">
          {filteredDocuments.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document</TableHead>
                  <TableHead>Property</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="hidden md:table-cell">Size</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDocuments.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getDocumentIcon(doc.type)}
                        <span className="font-medium">{doc.name}</span>
                      </div>
                      <div className="md:hidden text-xs text-muted-foreground mt-1">
                        {doc.uploadDate} · {doc.size}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{doc.property}</span>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center gap-1 text-sm">
                        <Calendar size={14} className="text-muted-foreground" />
                        {doc.uploadDate}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <span className="text-sm">{doc.size}</span>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(doc.status)}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="cursor-pointer">
                            <Eye size={16} className="mr-2" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Download size={16} className="mr-2" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="cursor-pointer">
                            Share
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer text-destructive">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <FileText size={48} className="text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No documents found</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                {searchQuery 
                  ? "No documents match your search criteria. Try different keywords."
                  : "You haven't uploaded any documents yet."}
              </p>
              <Button onClick={handleFileUpload}>Upload Your First Document</Button>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Document categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-emerald-500" />
              Certificates
            </CardTitle>
            <CardDescription>
              Official land ownership certificates
            </CardDescription>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            2
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" size="sm" className="w-full">
              View Certificates
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-500" />
              Legal Documents
            </CardTitle>
            <CardDescription>
              Deeds, transfers, and agreements
            </CardDescription>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            2
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" size="sm" className="w-full">
              View Legal Documents
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 text-amber-500" />
              Maps & Surveys
            </CardTitle>
            <CardDescription>
              Property maps and survey records
            </CardDescription>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            1
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" size="sm" className="w-full">
              View Maps
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default DashboardDocuments; 