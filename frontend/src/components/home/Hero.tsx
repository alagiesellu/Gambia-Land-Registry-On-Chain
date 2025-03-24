
import { useState, useEffect } from "react";
import { Search, Shield, Database, Users } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/custom-button";
import SearchBar from "@/components/ui/SearchBar";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white dark:from-slate-950 dark:to-slate-900 -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-[5%] w-80 h-80 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6 transition-all duration-700 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            Secure <span className="text-primary">Land Registry</span> For The Gambia
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            A modern, transparent, and secure blockchain-based land registry system that ensures property rights for all Gambian citizens.
          </p>
          
          <div 
            className={`flex flex-col md:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-400 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <ButtonLink to="/register" variant="default" size="lg">
              Register Land
            </ButtonLink>
            <ButtonLink to="/search" variant="outline" size="lg">
              Search Registry
            </ButtonLink>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-600 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <SearchBar />
          </div>
        </div>
        
        {/* Features overview */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 transition-all duration-700 delay-800 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure</h3>
            <p className="text-muted-foreground">
              Blockchain technology ensures your land records are tamper-proof and secure.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Search className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Transparent</h3>
            <p className="text-muted-foreground">
              Easily verify land ownership with complete transparency and trust.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Database className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Efficient</h3>
            <p className="text-muted-foreground">
              Streamlined processes reduce bureaucracy and processing times.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Accessible</h3>
            <p className="text-muted-foreground">
              User-friendly interface makes land registration accessible to all citizens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
