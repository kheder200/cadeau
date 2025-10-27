import { useState } from "react";
import { Button } from "@/components/ui/button";
import Quiz from "@/components/Quiz";
import { Heart, Sparkles, Gift } from "lucide-react";
import roseBouquet from "@/assets/rose-bouquet.jpg";

const Index = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);

  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background floating-hearts-bg">
      {/* Floating hearts background */}
      {[...Array(15)].map((_, i) => (
        <div key={i} className="floating-heart">
          ♥
        </div>
      ))}
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden z-10">
        {/* Floating hearts decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Heart className="absolute top-20 left-[10%] text-primary/20 animate-float" size={40} style={{ animationDelay: '0s' }} />
          <Heart className="absolute top-40 right-[15%] text-accent/20 animate-float" size={32} style={{ animationDelay: '1s' }} />
          <Heart className="absolute bottom-32 left-[20%] text-secondary/40 animate-float" size={36} style={{ animationDelay: '2s' }} />
          <Sparkles className="absolute top-60 right-[25%] text-rose-gold/30 animate-float" size={28} style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          {/* Bouquet Image */}
          <div className="mb-12 relative">
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
            <img 
              src={roseBouquet} 
              alt="Beautiful pink rose bouquet"
              className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl"
            />
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Happy Birthday, Aya! <Heart className="inline-block animate-pulse-heart text-primary" />
          </h1>

          {/* Sub-headline */}
          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.5s' }}>
            This page is a small reflection of the beautiful soul you are.
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToQuiz}
            size="lg"
            className="font-body text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group"
            style={{ animationDelay: '0.7s' }}
          >
            Open Your Gift
            <Heart className="ml-2 group-hover:animate-pulse-heart" size={20} />
          </Button>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {!quizCompleted && (
            <Quiz onQuizComplete={() => setQuizCompleted(true)} />
          )}
        </div>
      </section>

      {/* Grand Reveal Section - Hidden until quiz is completed */}
      {quizCompleted && (
        <section className="py-32 px-6 bg-gradient-to-t from-secondary/30 to-transparent relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Gift Unlocked */}
            <div className="mb-12 animate-fade-in">
              <Gift 
                className="mx-auto text-rose-gold animate-pulse-heart mb-6" 
                size={120} 
                strokeWidth={1.5}
              />
              <div className="relative inline-block">
                <Heart 
                  className="absolute -top-16 -left-16 text-rose-gold/40 animate-pulse-heart" 
                  size={80} 
                  fill="currentColor"
                  style={{ animationDelay: '0.3s' }}
                />
                <Heart 
                  className="absolute -top-12 -right-12 text-rose-gold/40 animate-pulse-heart" 
                  size={60} 
                  fill="currentColor"
                  style={{ animationDelay: '0.6s' }}
                />
                <h2 className="font-heading text-5xl md:text-7xl font-bold text-primary mb-8 animate-fade-in">
                  Gift Unlocked! 🎁
                </h2>
              </div>
            </div>
            
            <Heart 
              className="mx-auto mb-8 text-primary animate-pulse-heart" 
              size={64} 
            />
            
            <p className="font-heading text-3xl md:text-4xl text-foreground mb-8 leading-relaxed italic animate-fade-in" style={{ animationDelay: '0.3s' }}>
              "May this year bring you the deepest joys, the wildest adventures, and all the love you deserve."
            </p>

            <div className="mt-12 pt-8 border-t-2 border-secondary animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <p className="font-heading text-2xl text-accent">
                With all my love,
              </p>
              <p className="font-heading text-3xl text-primary mt-2">
                Your Friend ❤️
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
