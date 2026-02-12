import { DownloadButton } from "@/components/DownloadButton";
import { Link } from "react-router-dom";

const Index = () => {
  return <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Logo Section */}
        <div className="mb-12 animate-fade-in">
          <img src="/images/logo.png" alt="Fantas Logo" className="w-64 h-auto mx-auto mb-8 drop-shadow-2xl" />
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-foreground tracking-tight">
              Welcome to <span className="text-primary">Fantas</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Our platform makes it effortless to connect customers with trusted service-providers. A seamless digital town-centre for "all things, services."</p>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in-up">
          <DownloadButton platform="ios" />
          <DownloadButton platform="android" />
        </div>


        {/* Legal Links */}
        <div className="flex gap-6 text-sm text-muted-foreground animate-fade-in-up delay-300 py-[15px]">
          <Link to="/terms" className="hover:text-primary transition-colors underline decoration-primary/30 hover:decoration-primary">
            Terms and Conditions
          </Link>
          <span>•</span>
          <Link to="/privacy" className="hover:text-primary transition-colors underline decoration-primary/30 hover:decoration-primary">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link to="/help" className="hover:text-primary transition-colors underline decoration-primary/30 hover:decoration-primary">
            Help Center
          </Link>
        </div>
      </div>
    </div>;
};
export default Index;