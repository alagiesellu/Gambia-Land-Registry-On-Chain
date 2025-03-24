
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/custom-button";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in">Contact Us</h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
              Have questions about land registration? We're here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Our team is here to assist you with any inquiries related to land registration, 
                ownership verification, or our digital platform. Feel free to reach out through 
                any of the following channels:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Office Location</h3>
                    <p className="text-muted-foreground">Ministry of Lands, Banjul, The Gambia</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Address</h3>
                    <p className="text-muted-foreground">info@gambialand.gov.gm</p>
                    <p className="text-muted-foreground">support@gambialand.gov.gm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone Numbers</h3>
                    <p className="text-muted-foreground">+220 345 6789 (Main Office)</p>
                    <p className="text-muted-foreground">+220 456 7890 (Support)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Working Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 4:30 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-border shadow-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="text-primary" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">Send a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter message subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Type your message here..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full"
                    loading={isSubmitting}
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h2 className="text-2xl font-bold mb-6 text-center">Our Location</h2>
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl overflow-hidden h-96 border border-border">
              {/* Placeholder for Google Maps (in a real app you would integrate Google Maps API here) */}
              <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                <p className="text-muted-foreground">Map integration would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Contact;
