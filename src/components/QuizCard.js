import React from 'react'
import Question from './Question'

function QuizCard({ isLoading, data, score, setData, setScore }) {

  const [choice, setChoice] = React.useState()
  const [currentQuest, setCurrentQuest] = React.useState(0)


  return (
    <>
      <Question 
        data={data}
        setData={setData}
        currentQuest={currentQuest}
        setCurrentQuest={setCurrentQuest}
        correct={data[currentQuest]?.answer}
        score={score}
        setScore={setScore}
      />
    </>
  )
}

export default QuizCard
