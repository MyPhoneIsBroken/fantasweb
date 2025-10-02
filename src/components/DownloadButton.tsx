import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

interface DownloadButtonProps {
  platform: "ios" | "android";
  className?: string;
}

export const DownloadButton = ({
  platform,
  className
}: DownloadButtonProps) => {
  const isIOS = platform === "ios";
  const url = isIOS 
    ? "https://apps.apple.com/au/app/fantas/id6751865881?platform=iphone"
    : "https://play.google.com/store/apps/details?id=au.com.fantas.fantas&hl=en";
  
  return (
    <Button 
      variant="outline" 
      size="lg" 
      className={`
        group relative overflow-hidden bg-card/50 border-primary/20 
        hover:border-primary/40 hover:bg-primary/10 hover:shadow-glow
        transition-all duration-300 min-w-[200px] h-14
        backdrop-blur-sm
        ${className}
      `}
      asChild
    >
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={`Download Fantas on ${isIOS ? "App Store" : "Google Play"}`}
      >
        <div className="flex items-center gap-3">
          {isIOS ? <Apple className="w-6 h-6 text-primary" /> : <Smartphone className="w-6 h-6 text-primary" />}
          <div className="flex flex-col items-start">
            <span className="text-xs text-muted-foreground">
              {isIOS ? "Download on the" : "Get it on"}
            </span>
            <span className="text-sm font-semibold text-foreground">
              {isIOS ? "App Store" : "Google Play"}
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 mx-0 my-0 px-0 py-0" />
      </a>
    </Button>
  );
};