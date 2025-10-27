import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface QuizProps {
  onQuizComplete: () => void;
}

interface Question {
  id: number;
  question: string;
  options: { label: string; value: string }[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What do you think I love most about you?",
    options: [
      { label: "A. The way you ignore me in messenger", value: "A" },
      { label: "B. The way you talk .", value: "B" },
      { label: "C. Your personality.", value: "C" },
      { label: "D. Honestly? Everything about you.", value: "D" },
    ],
    correctAnswer: "D",
  },
  {
    id: 2,
    question: "When you were last feeling sick, how much do you think I was thinking about you?",
    options: [
      { label: "A. A little, I hope you were feeling better soon.", value: "A" },
      { label: "B. I couldn't stop thinking about you and wishing, I’d take your pain if I could—just to see you smile again.", value: "B" },
      { label: "C. SomeWhat—I thought about you every time I took a breath .", value: "C" },
      { label: "D. Zero—I was busy playing video games (I know, I know ^-^).", value: "D" },
    ],
    correctAnswer: "B",
  },
  {
    id: 3,
    question: "How much do you think I miss you right this second?",
    options: [
      { label: "A. A little bit, like a song stuck in my head.", value: "A" },
      { label: "B. Quite a bit—I wish I had a reason to text you.", value: "B" },
      { label: "C. More than \"some what.\"", value: "C" },
      { label: "D. An unbelievable amount. It's the best part of my day when we connect.", value: "D" },
    ],
    correctAnswer: "D",
  },
];

const Quiz = ({ onQuizComplete }: QuizProps) => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState<number | null>(null);
  const [showError, setShowError] = useState(false);

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setShowError(false);
  };

  const handleSubmit = () => {
    const allAnswered = questions.every((q) => answers[q.id]);
    if (!allAnswered) {
      setShowError(true);
      setScore(null);
      return;
    }

    let correctCount = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    setScore(correctCount);

    if (correctCount === 3) {
      setTimeout(() => {
        onQuizComplete();
      }, 2000);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
          Hey Ayoosh 💛 
        </h2>
        <p className="font-body text-lg text-muted-foreground">
        Answer these questions correctly and I’ve got something special to tell you at the end 
        </p>
      </div>

      <div className="space-y-8">
        {questions.map((question, index) => (
          <Card
            key={question.id}
            className="p-6 bg-card border-2 border-secondary shadow-lg animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="font-heading text-xl md:text-2xl text-foreground mb-6">
              {question.id}. {question.question}
            </h3>
            <RadioGroup
              value={answers[question.id] || ""}
              onValueChange={(value) => handleAnswerChange(question.id, value)}
            >
              <div className="space-y-4">
                {question.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3">
                    <RadioGroupItem value={option.value} id={`q${question.id}-${option.value}`} />
                    <Label
                      htmlFor={`q${question.id}-${option.value}`}
                      className="font-body text-base cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          onClick={handleSubmit}
          size="lg"
          className="font-body text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Submit Answers
        </Button>

        {score !== null && (
          <div className="mt-8 animate-fade-in">
            {score === 3 ? (
              <div className="text-center">
                <p className="font-heading text-3xl text-primary font-bold mb-2">
                  Perfect Score! 🎉
                </p>
                <p className="font-body text-xl text-accent">
                  {score}/3 - Unlocking your gift...
                </p>
              </div>
            ) : (
              <div className="text-center">
                <p className="font-heading text-2xl text-destructive font-bold mb-2">
                  Not quite! You scored {score}/3
                </p>
                <p className="font-body text-lg text-muted-foreground">
                  The answers are always about love and devotion! Try again.
                </p>
              </div>
            )}
          </div>
        )}

        {showError && score === null && (
          <p className="mt-6 font-body text-destructive animate-fade-in">
            Please answer all questions before submitting.
          </p>
        )}
      </div>
    </div>
  );
};

export default Quiz;
