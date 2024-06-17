import React, { useState, useEffect } from "react";
import TestStep from "./TestStep";
import "./App.css";

const questions = [
  {
    id: 1,
    type: "single-choice",
    question: "Выберите один вариант ответа",
    options: ["Вариант 1", "Вариант 2", "Вариант 3"],
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Выберите несколько вариантов ответа",
    options: ["Вариант A", "Вариант B", "Вариант C"],
  },
  {
    id: 3,
    type: "short-answer",
    question: "Введите короткий ответ",
  },
  {
    id: 4,
    type: "long-answer",
    question: "Введите развернутый ответ",
  },
];

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<any>({});

  useEffect(() => {
    const savedProgress = localStorage.getItem("testProgress");
    if (savedProgress) {
      const { step, answers } = JSON.parse(savedProgress);
      setCurrentStep(step);
      setAnswers(answers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "testProgress",
      JSON.stringify({ step: currentStep, answers })
    );
  }, [currentStep, answers]);

  const handleAnswerChange = (answer: any) => {
    setAnswers({ ...answers, [questions[currentStep].id]: answer });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="App">
      <h1>Тестирование учащихся</h1>
      <TestStep
        questionData={questions[currentStep]}
        answer={answers[questions[currentStep].id] || ""}
        onChange={handleAnswerChange}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default App;
