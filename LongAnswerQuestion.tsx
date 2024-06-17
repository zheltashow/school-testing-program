import React from "react";
import Question from "./Question";

interface LongAnswerQuestionProps {
  question: string;
  answer: string;
  onChange: (answer: string) => void;
}

const LongAnswerQuestion: React.FC<LongAnswerQuestionProps> = ({
  question,
  answer,
  onChange,
}) => {
  return (
    <Question question={question}>
      <textarea value={answer} onChange={(e) => onChange(e.target.value)} />
    </Question>
  );
};

export default LongAnswerQuestion;
