
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/custom-card";
import { MapPin, Phone, Mail, Clock, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in">About Gambia Land Registry</h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
              Securing land ownership through transparent and efficient digital registration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                The Gambia Land Registry is committed to ensuring secure, transparent, and efficient 
                land administration services for all citizens and stakeholders. Our mission is to maintain 
                a comprehensive and accurate record of land ownership that supports economic development, 
                reduces land disputes, and promotes investor confidence in The Gambia.
              </p>
              <p className="text-muted-foreground">
                Through our blockchain-based platform, we aim to modernize the land registration process, 
                making it accessible, transparent, and tamper-proof, while preserving the historical and 
                cultural significance of land in Gambian society.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
              <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
              <p className="text-muted-foreground mb-6">
                We envision a Gambia where every parcel of land is properly documented, where ownership is 
                securely recorded, and where land transactions are conducted with confidence and ease. 
              </p>
              <p className="text-muted-foreground">
                By leveraging modern technology and innovative approaches, we are creating a land 
                administration system that supports sustainable development, protects property rights, 
                and contributes to social stability and economic growth throughout The Gambia.
              </p>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Integrity",
                  description: "We maintain the highest standards of honesty and ethical conduct in all our operations.",
                  icon: Award,
                  delay: 400
                },
                {
                  title: "Transparency",
                  description: "We ensure open access to land information and maintain clear processes that build public trust.",
                  icon: Users,
                  delay: 500
                },
                {
                  title: "Innovation",
                  description: "We embrace new technologies and methods to continuously improve our services.",
                  icon: Clock,
                  delay: 600
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${value.delay}ms` }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <value.icon className="text-primary" size={24} />
                      </div>
                      <CardTitle className="mb-2">{value.title}</CardTitle>
                      <CardDescription>{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-8 mb-16 animate-fade-in" style={{ animationDelay: "700ms" }}>
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Our Location</h3>
                <p className="text-muted-foreground">Ministry of Lands, Banjul, The Gambia</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Phone Number</h3>
                <p className="text-muted-foreground">+220 000 0000</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Email Address</h3>
                <p className="text-muted-foreground">info@gambialand.gm</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
