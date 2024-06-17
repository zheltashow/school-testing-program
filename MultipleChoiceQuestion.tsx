import React from "react";
import Question from "./Question";

interface MultipleChoiceQuestionProps {
  question: string;
  options: string[];
  selectedOptions: string[];
  onChange: (option: string) => void;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  question,
  options,
  selectedOptions,
  onChange,
}) => {
  return (
    <Question question={question}>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => onChange(option)}
          />
          {option}
        </label>
      ))}
    </Question>
  );
};

export default MultipleChoiceQuestion;
