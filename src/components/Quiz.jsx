import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "Quelle est ma couleur préférée ?",
      options: ["Bleu", "Rose", "Vert", "Rouge"],
      answer: "Rose",
    },
    {
      question: "Où avons-nous eu notre premier rendez-vous ?",
      options: ["Café", "Plage", "Restaurant", "Cinéma"],
      answer: "Restaurant",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto my-6">
      {showScore ? (
        <h2 className="text-center text-xl font-bold text-pink-600">
          Tu as obtenu {score}/{questions.length} bonnes réponses !
        </h2>
      ) : (
        <div>
          <h2 className="text-xl font-bold text-pink-600 mb-4">
            {questions[currentQuestion].question}
          </h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="block w-full bg-pink-100 text-pink-700 py-2 px-4 rounded-md mb-2 hover:bg-pink-200"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
