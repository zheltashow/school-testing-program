import React from "react";
import Question from "./Question";

interface ShortAnswerQuestionProps {
  question: string;
  answer: string;
  onChange: (answer: string) => void;
}

const ShortAnswerQuestion: React.FC<ShortAnswerQuestionProps> = ({
  question,
  answer,
  onChange,
}) => {
  return (
    <Question question={question}>
      <input
        type="text"
        value={answer}
        onChange={(e) => onChange(e.target.value)}
      />
    </Question>
  );
};

export default ShortAnswerQuestion;
