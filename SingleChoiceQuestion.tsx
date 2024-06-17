import React from "react";
import Question from "./Question";

interface SingleChoiceQuestionProps {
  question: string;
  options: string[];
  selectedOption: string;
  onChange: (option: string) => void;
}

const SingleChoiceQuestion: React.FC<SingleChoiceQuestionProps> = ({
  question,
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <Question question={question}>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={() => onChange(option)}
          />
          {option}
        </label>
      ))}
    </Question>
  );
};

export default SingleChoiceQuestion;
