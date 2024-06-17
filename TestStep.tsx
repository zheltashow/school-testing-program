import React from "react";
import SingleChoiceQuestion from "./SingleChoiceQuestion";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import ShortAnswerQuestion from "./ShortAnswerQuestion";
import LongAnswerQuestion from "./LongAnswerQuestion";

interface QuestionData {
  id: number;
  type: string;
  question: string;
  options?: string[];
}

interface TestStepProps {
  questionData: QuestionData;
  answer: any;
  onChange: (answer: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const TestStep: React.FC<TestStepProps> = ({
  questionData,
  answer,
  onChange,
  onNext,
  onPrev,
}) => {
  const renderQuestion = () => {
    switch (questionData.type) {
      case "single-choice":
        return (
          <SingleChoiceQuestion
            question={questionData.question}
            options={questionData.options || []}
            selectedOption={answer}
            onChange={onChange}
          />
        );
      case "multiple-choice":
        return (
          <MultipleChoiceQuestion
            question={questionData.question}
            options={questionData.options || []}
            selectedOptions={answer}
            onChange={onChange}
          />
        );
      case "short-answer":
        return (
          <ShortAnswerQuestion
            question={questionData.question}
            answer={answer}
            onChange={onChange}
          />
        );
      case "long-answer":
        return (
          <LongAnswerQuestion
            question={questionData.question}
            answer={answer}
            onChange={onChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderQuestion()}
      <button onClick={onPrev} disabled={!onPrev}>
        Назад
      </button>
      <button onClick={onNext} disabled={!onNext}>
        Далее
      </button>
    </div>
  );
};

export default TestStep;
