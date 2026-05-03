import { SlideViewer } from "@/components/presentation/SlideViewer";
import { Slide00TeamIntro, Slide01Hook, Slide02Problem, Slide03MeetAsk, Slide04Comparison, Slide04bTechStack } from "@/components/presentation/slides/EarlySlides";
import { Slide05Architecture, Slide06Features, Slide07Limitations, Slide08Roadmap, Slide09BusinessModel } from "@/components/presentation/slides/LateSlides";

export const metadata = {
  title: 'Ask - Presentation',
  description: 'Project Ask Presentation - Jugaad Coder',
};

export default function PresentationPage() {
  const slides = [
    Slide00TeamIntro,
    Slide01Hook,
    Slide02Problem,
    Slide03MeetAsk,
    Slide04Comparison,
    Slide04bTechStack,
    Slide05Architecture,
    Slide06Features,
    Slide07Limitations,
    Slide09BusinessModel,
    Slide08Roadmap
  ];

  return (
    <main className="w-screen h-screen bg-bg text-text overflow-hidden">
       <SlideViewer slides={slides} />
    </main>
  );
}