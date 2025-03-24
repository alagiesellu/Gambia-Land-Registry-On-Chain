import { ChevronRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/custom-button";

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Gambian landscape with houses"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-400/10 rounded-full translate-x-1/4 translate-y-1/4 blur-2xl"></div>
              
              {/* Stats cards */}
              <div className="absolute top-6 -right-12 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg z-20 animate-float">
                <p className="text-sm text-muted-foreground mb-1">Registered Lands</p>
                <p className="text-2xl font-bold text-primary">15,000+</p>
              </div>
              
              <div className="absolute -bottom-8 -left-12 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg z-20 animate-float" style={{ animationDelay: "1s" }}>
                <p className="text-sm text-muted-foreground mb-1">Processing Time</p>
                <p className="text-2xl font-bold text-primary">Reduced by 70%</p>
              </div>
            </div>
          </div>
          
          {/* Content side */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              About The Project
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Modernizing Land Registry in The Gambia
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              The Gambia Land Registry On-Chain project aims to transform how land ownership is recorded and verified in The Gambia. By leveraging blockchain technology, we're creating a secure, transparent, and accessible system that serves all citizens.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <ChevronRight className="text-primary" size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Secure Land Ownership</h3>
                  <p className="text-muted-foreground">
                    Our blockchain-based system ensures that land records cannot be altered or tampered with, providing immutable proof of ownership.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <ChevronRight className="text-primary" size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Reducing Conflicts</h3>
                  <p className="text-muted-foreground">
                    Clear documentation and community validation processes help reduce land disputes and conflicts over boundaries.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <ChevronRight className="text-primary" size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Economic Growth</h3>
                  <p className="text-muted-foreground">
                    Secure land rights boost economic development by enabling citizens to use their land as collateral and attract investment.
                  </p>
                </div>
              </div>
            </div>
            
            <ButtonLink to="/about" variant="default">
              Learn More About Our Vision
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
