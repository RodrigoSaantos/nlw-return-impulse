import { useState } from "react";
import bugImageUrl from '../../assetes/bug.svg';
import ideaImageUrl from '../../assetes/idea.svg';
import thoughtImageUrl from '../../assetes/thought.svg';
import { CloseButton } from "../CloseButton";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";


export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Image de um inseto",
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Image de uma lâmpada",
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma balão de pensamento",
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null)
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">     
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep
         feedbackType={feedbackType} 
         onFeedbackREstartRequest={handleRestartFeedback}
        />
      ) }

      <footer className="text-xs text-neutral-400">
        Feito com 💖 by <a className="underline underline-offset-2" href="https://linkedin.com/in/rodrigosaantos">me</a>
      </footer>

    </div>
  )
}