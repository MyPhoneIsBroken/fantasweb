import { DownloadButton } from "@/components/DownloadButton";
import { Link } from "react-router-dom";
// Using the uploaded logo directly

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
          <img src="/lovable-uploads/deb8b299-1216-4351-bcc1-496010b5eb0f.png" alt="Fantas Logo" className="w-64 h-auto mx-auto mb-8 drop-shadow-2xl" />
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              Welcome to <span className="text-primary">Fantas</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Our platform makes it effortless to connect customers with trusted providers. A digital town-centre for &quot;all things, services.&quot;</p>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in-up">
          <DownloadButton platform="ios" />
          <DownloadButton platform="android" />
        </div>

        {/* Features Preview */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up delay-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="w-6 h-6 bg-primary rounded-full" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fast & Reliable</h3>
              <p className="text-muted-foreground text-sm">Lightning-fast performance with rock-solid reliability you can trust.</p>
            </div>
            
            <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="w-6 h-6 bg-primary rounded-full" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Intuitive Design</h3>
              <p className="text-muted-foreground text-sm">Beautifully crafted interface that feels natural and effortless to use.</p>
            </div>
            
            <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="w-6 h-6 bg-primary rounded-full" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Secure</h3>
              <p className="text-muted-foreground text-sm">Your data is protected with industry-leading security measures.</p>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex gap-6 text-sm text-muted-foreground animate-fade-in-up delay-300">
          <Link to="/terms" className="hover:text-primary transition-colors underline decoration-primary/30 hover:decoration-primary">
            Terms and Conditions
          </Link>
          <span>•</span>
          <Link to="/privacy" className="hover:text-primary transition-colors underline decoration-primary/30 hover:decoration-primary">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>;
};
export default Index;