import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface LoveCardProps {
  message: string;
  index: number;
}

const LoveCard = ({ message, index }: LoveCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden border-2 border-secondary bg-card/80 backdrop-blur-sm shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 hover:scale-105 animate-fade-in"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <CardContent className="p-8 relative">
        <Heart 
          className="absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-40 transition-opacity animate-pulse-heart" 
          size={32}
        />
        <p className="font-body text-lg leading-relaxed text-foreground/90 relative z-10">
          {message}
        </p>
      </CardContent>
    </Card>
  );
};

export default LoveCard;
