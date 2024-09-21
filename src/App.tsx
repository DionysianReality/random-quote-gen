import { useState } from "react";
import "./App.css";

const getRandomIndexFrom = (items: string[]) => {
  return Math.floor(Math.random() * items.length);
};

function getRandomHexColor() {
  // Generate a random number between 0 and 16777215 (0xFFFFFF)
  const randomNumber = Math.floor(Math.random() * 16777215);

  // Convert the number to a hexadecimal string and pad with leading zeros if necessary
  const hexString = randomNumber.toString(16).padStart(6, "0");

  // Return the hex code with the '#' prefix
  return `#${hexString}`;
}

const QuoteGenerator = () => {
  const quotes = [
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "I am not afraid... I was born to do this. - Joan of Arc",
    "Believe you can and you’re halfway there. - Theodore Roosevelt",
  ];
  const [currentQuote, setCurrentQuote] = useState<string>("");

  const handleRandomQuote = () => {
    setCurrentQuote(quotes[getRandomIndexFrom(quotes)]);
  };

  return (
    <main
      style={{
        backgroundColor: getRandomHexColor(),
        padding: "2rem",
        borderRadius: 10,
        boxShadow: "0.33rem 0.33rem #454545",
      }}
    >
      <h1 style={{ color: "white" }}>Random Quote Generator</h1>
      <h3 style={{ backgroundColor: "white", padding: 20, borderRadius: 20 }}>
        <span style={{ color: currentQuote.length > 0 ? "black" : "gray" }}>
          {currentQuote.length > 0 ? currentQuote : "Quotes await..."}
        </span>
      </h3>
      <button onClick={handleRandomQuote}>Generate Random Quote</button>
    </main>
  );
};

function App() {
  return (
    <>
      <QuoteGenerator />
    </>
  );
}

export default App;
