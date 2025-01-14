import React, { useState } from "react";

const CustomCard = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };


  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto my-6">
      {!submitted ? (
        <div>
          <h2 className="text-xl font-bold text-pink-600 mb-4">
            Écris ton message !
          </h2>
          <textarea
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            rows="4"
            placeholder="Exprime tes sentiments ici ❤️..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="mt-4 w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700"
          >
            Envoyer
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold text-pink-600 mb-4">
            Ton message :
          </h2>
          <p className="bg-pink-50 p-4 rounded-md text-gray-700">{message}</p>
        </div>
      )}
    </div>
  );
};

export default CustomCard;
