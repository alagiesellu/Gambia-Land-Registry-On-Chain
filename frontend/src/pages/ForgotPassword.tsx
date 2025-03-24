
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/custom-button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate password reset request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log("Password reset requested for:", email);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-border overflow-hidden animate-scale-in">
              <div className="p-8">
                <div className="mb-2">
                  <Link to="/login" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft size={16} className="mr-2" />
                    Back to login
                  </Link>
                </div>
                
                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-8">
                      <h1 className="text-2xl font-bold mb-2">Forgot Password</h1>
                      <p className="text-muted-foreground">
                        Enter your email address and we'll send you a link to reset your password
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <Mail size={18} />
                          </div>
                          <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full rounded-md border border-input bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            required
                          />
                        </div>
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full"
                        loading={isLoading}
                      >
                        Send Reset Link
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-green-600 dark:text-green-400" size={32} />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Check Your Email</h2>
                    <p className="text-muted-foreground mb-6">
                      We've sent a password reset link to:
                      <br />
                      <span className="font-medium text-foreground">{email}</span>
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      If you don't see the email, check your spam folder or
                      <button 
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="text-primary hover:underline font-medium ml-1"
                      >
                        try another email
                      </button>
                    </p>
                    <Link 
                      to="/login" 
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors"
                    >
                      Return to Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default ForgotPassword;
