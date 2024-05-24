import React from "react";
import { useState } from "react";
import questions from "./resources/quizQuestion.json";
import "./App.css";
function App() {
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const handlePrev = () => {
    setCurrentQuesIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  const handleNext = () => {
    setCurrentQuesIndex((prevIndex) =>
      Math.min(prevIndex + 1, questions.length - 1)
    );
  };
  const handleQuit = () => {
    alert("Are you sure you want to quit ?");
    setCurrentQuesIndex(0);
  };

  return (
    <div className="quiz-page">
      <div className="quiz">
        <div>
          <h1>Question</h1>
          <span>
            {currentQuesIndex + 1} of {questions.length}
          </span>
        </div>

        <div className="questions">
          <div className="ques">
            <h3>{questions[currentQuesIndex].question}</h3>
          </div>
          <div>
            <div className="options">
              <button>{questions[currentQuesIndex].optionA}</button>
              <button>{questions[currentQuesIndex].optionB}</button>
              <button>{questions[currentQuesIndex].optionC}</button>
              <button>{questions[currentQuesIndex].optionD}</button>
            </div>
            <div className="buttons">
              <button className="blue" onClick={handlePrev}>
                Previous
              </button>
              <button className="green" onClick={handleNext}>
                Next
              </button>
              <button className="red" onClick={handleQuit}>
                Quit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
