
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SearchBar from "@/components/ui/SearchBar";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Calendar, User, FileText, Search as SearchIcon } from "lucide-react";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    // Mock search functionality
    setIsSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      if (query.trim() === "") {
        setSearchResults([]);
      } else {
        // Mock data
        setSearchResults([
          {
            id: "LR-2023-001",
            title: "Residential Plot in Banjul",
            location: "Banjul Central, The Gambia",
            owner: "Mohammed Jallow",
            size: "1,200 sq meters",
            registrationDate: "12 May 2023",
            status: "verified"
          },
          {
            id: "LR-2023-045",
            title: "Commercial Land in Serekunda",
            location: "Serekunda Market Area, The Gambia",
            owner: "Fatou Ceesay Enterprises",
            size: "3,500 sq meters",
            registrationDate: "23 June 2023",
            status: "verified"
          },
          {
            id: "LR-2023-112",
            title: "Agricultural Land in Western Division",
            location: "Brikama Area, Western Division",
            owner: "Ousman Sowe",
            size: "20,000 sq meters",
            registrationDate: "17 August 2023",
            status: "pending"
          }
        ]);
      }
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in">Search Land Registry</h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Find property information by location, owner name, or registration number
            </p>
            
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <SearchBar 
                placeholder="Search by location, owner name, or registration number..." 
                onSearch={handleSearch}
              />
            </div>
          </div>
          
          <div className="mt-8">
            {isSearching ? (
              <div className="text-center py-12">
                <div className="inline-block w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <p className="mt-4 text-muted-foreground">Searching records...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold mb-4">Search Results ({searchResults.length})</h2>
                
                {searchResults.map((result) => (
                  <Card key={result.id} className="animate-fade-in hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 p-6 bg-slate-50 dark:bg-slate-900/50 flex flex-col">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm font-medium text-muted-foreground">Registry ID</span>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                              result.status === "verified" 
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                                : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                            }`}>
                              {result.status === "verified" ? "Verified" : "Pending"}
                            </span>
                          </div>
                          <CardTitle className="mb-2">{result.id}</CardTitle>
                          <CardDescription className="flex-1">{result.title}</CardDescription>
                          
                          <div className="mt-4 pt-4 border-t border-border">
                            <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                              View Full Details
                            </button>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3 p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex gap-2">
                              <MapPin size={18} className="text-primary min-w-[18px] mt-0.5" />
                              <div>
                                <p className="text-sm font-medium">Location</p>
                                <p className="text-muted-foreground">{result.location}</p>
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              <User size={18} className="text-primary min-w-[18px] mt-0.5" />
                              <div>
                                <p className="text-sm font-medium">Owner</p>
                                <p className="text-muted-foreground">{result.owner}</p>
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              <FileText size={18} className="text-primary min-w-[18px] mt-0.5" />
                              <div>
                                <p className="text-sm font-medium">Size</p>
                                <p className="text-muted-foreground">{result.size}</p>
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              <Calendar size={18} className="text-primary min-w-[18px] mt-0.5" />
                              <div>
                                <p className="text-sm font-medium">Registration Date</p>
                                <p className="text-muted-foreground">{result.registrationDate}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border border-dashed border-border rounded-xl bg-slate-50/50 dark:bg-slate-900/20">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <SearchIcon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">No Results Found</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Try searching by property location, owner name, or registration number to find land records.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default SearchPage;
