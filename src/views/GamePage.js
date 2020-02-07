import React, { useState, useEffect } from 'react'

const GamePage = () => {
  const [started, setStarted] = useState(true)
  const [timeLeft, setTimeLeft] = useState(10000)
  const questions = [
    {
      value: "Vad heter bandet?",
      rAnswer: "Bob Dylan",
      wAnswers: [
        "Bon Jovi",
        "Tom Petty",
        "Michael Bolton"
      ],
      video: "https://www.youtube.com/embed/QKcNyMBw818"
    }
  ]
  useEffect(() => {
    const logTime = () => {
      let timer = 10000
      let countdown = setInterval((timer = 1000) => {
        timer--

        setTimeLeft(timer)
        console.log('running', timer);

        if (timeLeft <= 0) {
          console.log("HAPPY NEW YEAR!!");
          clearInterval(countdown);
        }
      }, 1000);
      console.log(countdown);

    }
    logTime();

  }, [])


  const selectAnswer = (selected) => {
    console.log('you chose: ', selected)
  }
  const listAnswers = () => {
    const allAnswers = [...questions[0].wAnswers].concat(questions[0].rAnswer)
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5)
    return shuffledAnswers.map((answer, i) => {
      return <div key={i}
        className="answer-box"
        onClick={() => selectAnswer(answer)}
        style={{ backgroundColor: `rgba(${100 + (i * 40)},80,120,0.5)` }}
      >
        <div>{answer}</div>
      </div>
    })

  }
  const answers = listAnswers()
  return (
    <div>
      {started ?
        <div className="game-page">
          <div className="player" style={{ margin: '20px' }}>
            <iframe
              width="560"
              height="315"
              src={questions[0].video}
              frameBorder="0"
              autoPlay="1"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="0" />
          </div>
          <p className="question">{questions[0].value}</p>
          <div className="answers" >
            {answers}
          </div>
          <button onClick={() => console.log(timeLeft)}>{timeLeft}</button>

        </div>
        :
        <button onClick={setStarted}>Starta Spelet</button>}
    </div>
  )
}

export default GamePage