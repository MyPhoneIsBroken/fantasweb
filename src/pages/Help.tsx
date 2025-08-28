import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Help = () => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast({
        title: "Message required",
        description: "Please enter your message before sending.",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link with pre-filled content
    const emailSubject = "Help Center Request - Fantas";
    const emailBody = encodeURIComponent(message);
    const mailtoLink = `mailto:admin@fantas.com.au?subject=${emailSubject}&body=${emailBody}`;
    
    // Open the email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with your message.",
    });
    
    // Clear the message after sending
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Help Center</h1>
          <p className="text-lg text-muted-foreground">
            Need assistance? Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Contact Support</CardTitle>
              <CardDescription>
                Send your message to: <span className="font-semibold text-primary">admin@fantas.com.au</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you. For account deletion or data requests, please provide your account details..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[120px] bg-background/50 border-primary/20 focus:border-primary/40"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Common Requests */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 mt-6">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Common Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium text-foreground">Account Deletion:</span> Request to permanently delete your account and all associated data
                </div>
                <div>
                  <span className="font-medium text-foreground">Data Export:</span> Request a copy of your personal data stored on the platform
                </div>
                <div>
                  <span className="font-medium text-foreground">Technical Support:</span> Issues with app functionality or platform access
                </div>
                <div>
                  <span className="font-medium text-foreground">General Inquiries:</span> Questions about services, policies, or platform features
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Help;