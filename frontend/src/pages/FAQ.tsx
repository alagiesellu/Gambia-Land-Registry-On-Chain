
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openSection, setOpenSection] = useState<string | null>("general");
  
  const faqData = {
    general: [
      {
        question: "What is the Gambia Land Registry?",
        answer: "The Gambia Land Registry is a digital platform that securely records and manages land ownership information across The Gambia. Our blockchain-based system ensures transparent, tamper-proof records while simplifying the land registration process."
      },
      {
        question: "How does the digital land registry work?",
        answer: "Our digital land registry uses blockchain technology to create immutable records of land ownership. Each property is assigned a unique digital identifier, and all transactions are recorded on a secure ledger that cannot be altered, providing a reliable and transparent record of ownership."
      },
      {
        question: "Why is land registration important?",
        answer: "Land registration provides legal recognition of property ownership, reduces land disputes, facilitates property transactions, enables access to loans using land as collateral, and supports effective land management and planning by the government."
      }
    ],
    registration: [
      {
        question: "How do I register my land?",
        answer: "To register your land, you need to create an account on our platform, submit the required documentation (such as survey plans and proof of ownership), pay the registration fee, and have your application verified by our team. The specific documents required may vary depending on the type of property."
      },
      {
        question: "What documents do I need for land registration?",
        answer: "Typically, you'll need a valid ID, proof of ownership (such as a deed or previous registration certificate), a survey plan prepared by a licensed surveyor, tax clearance certificate, and any relevant transfer documents if you've recently acquired the land."
      },
      {
        question: "How long does the registration process take?",
        answer: "The standard processing time for land registration is 15-20 working days from the submission of a complete application. This timeline may vary depending on the complexity of the case and the volume of applications being processed."
      }
    ],
    verification: [
      {
        question: "How can I verify land ownership?",
        answer: "You can verify land ownership by using the search function on our platform. Enter the property's registration number, location details, or owner's name to access the public record. For official verification, you can request a certified extract from the registry for a small fee."
      },
      {
        question: "Is my personal information secure?",
        answer: "Yes, we take data security very seriously. While basic property information is publicly accessible for transparency, personal details are protected. Our blockchain technology ensures that records cannot be tampered with, and our system uses advanced encryption to protect user data."
      },
      {
        question: "Can I check if land has any disputes or liens?",
        answer: "Yes, our registry includes information about registered disputes, caveats, mortgages, and other encumbrances on the property. This information is available when you search for a property and is crucial to check before any property transaction."
      }
    ],
    technical: [
      {
        question: "What happens if I lose my registration details?",
        answer: "If you lose your registration details, you can recover access to your account through our identity verification process. This may involve providing proof of identity and answering security questions. For lost physical documentation, you can apply for certified copies from the registry."
      },
      {
        question: "How are land boundaries determined?",
        answer: "Land boundaries are determined through official surveys conducted by licensed surveyors. The survey coordinates are recorded in our system and form part of the official property record. In case of boundary disputes, historical records and ground verification may be used for resolution."
      },
      {
        question: "Can I update my property information?",
        answer: "Yes, property information can be updated for certain changes such as contact details or corrections to non-critical information. For major changes like boundary modifications or ownership transfers, a formal amendment process is required with appropriate documentation and verification."
      }
    ]
  };
  
  const handleSectionToggle = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
              Find answers to common questions about the Gambia Land Registry
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-16">
            {/* FAQ Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
              {[
                { id: "general", label: "General Information" },
                { id: "registration", label: "Registration Process" },
                { id: "verification", label: "Verification & Search" },
                { id: "technical", label: "Technical Questions" }
              ].map(category => (
                <button
                  key={category.id}
                  onClick={() => handleSectionToggle(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    openSection === category.id 
                      ? "bg-primary text-white shadow-md" 
                      : "bg-slate-100 dark:bg-slate-800 text-foreground hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            {/* FAQ Items */}
            {Object.entries(faqData).map(([category, questions], categoryIndex) => (
              <div 
                key={category}
                className={`space-y-4 animate-fade-in ${openSection === category ? "block" : "hidden"}`}
                style={{ animationDelay: `${300 + categoryIndex * 50}ms` }}
              >
                {questions.map((item, index) => (
                  <Collapsible key={index} className="border border-border rounded-lg overflow-hidden">
                    <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
                      <span>{item.question}</span>
                      <ChevronDown className="h-5 w-5 transition-transform ui-open:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white dark:bg-slate-800 text-muted-foreground">
                      <p>{item.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            ))}
          </div>
          
          <div className="max-w-2xl mx-auto text-center bg-slate-50 dark:bg-slate-900/50 rounded-xl p-8 border border-border animate-fade-in" style={{ animationDelay: "600ms" }}>
            <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              If you couldn't find the answer you were looking for, please don't hesitate to reach out to our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="default">Contact Us</Button>
              <Button href="mailto:support@gambialand.gov.gm" variant="outline">Email Support</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const Button = ({ 
  children, 
  href, 
  variant = "default" 
}: { 
  children: React.ReactNode; 
  href: string; 
  variant?: "default" | "outline"; 
}) => {
  return (
    <a 
      href={href} 
      className={`px-5 py-2 rounded-md font-medium transition-colors ${
        variant === "default" 
          ? "bg-primary text-white hover:bg-primary/90" 
          : "border border-primary text-primary hover:bg-primary/10"
      }`}
    >
      {children}
    </a>
  );
};

export default FAQ;
