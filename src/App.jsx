import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  // when timeout is true the game stops
  const [questionNumber, setQuestionNumber] = useState(1);    
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "The language of Lakshqdweep is?",
      answers: [
        {
          text: "Tamil",
          correct: false,
        },
        {
          text: "Hindi",
          correct: false,
        },
        {
          text: "Malayalam",
          correct: true,
        },
        {
          text: "Telugu",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Pongal is a popular festival of which state?",
      answers: [
        {
          text: "Karnataka",
          correct: false,
        },
        {
          text: "Kerala",
          correct: false,
        },
        {
          text: "Tamil Nadu",
          correct: true,
        },
        {
          text: "Andhra Pradesh",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Ghototkach in Mahabharat was the son of?",
      answers: [
        {
          text: "Duryodhana",
          correct: false,
        },
        {
          text: "Arjuna",
          correct: false,
        },
        {
          text: "Yudhishthir",
          correct: false,
        },
        {
          text: "Bhima",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Dogri is spoken in which of the following states ?",
      answers: [
        {
          text: "Bihar",
          correct: false,
        },
        {
          text: "Orissa",
          correct: false,
        },
        {
          text: "Assam",
          correct: false,
        },
        {
          text: "Jammu & Kashmir",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: " In the game of ludo the discs or tokens are of how many colours?",
      answers: [
        {
          text: "One",
          correct: false,
        },
        {
          text: "Two",
          correct: false,
        },
        {
          text: "Three",
          correct: false,
        },
        {
          text: "Four",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: " Which of these sports requires you to shout out a word loudly during play?",
      answers: [
        {
          text: "Ludo",
          correct: false,
        },
        {
          text: "Kho-kho",
          correct: true,
        },
        {
          text: "Playing cards",
          correct: false,
        },
        {
          text: "Chess",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which of these spices is the smallest in size?",
      answers: [
        {
          text: "Ajwain",
          correct: true,
        },
        {
          text: "Jeera",
          correct: false,
        },
        {
          text: "Saunf",
          correct: false,
        },
        {
          text: "Methi Seeds",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">{username} earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }    
                  // hightlighting the active amount
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
