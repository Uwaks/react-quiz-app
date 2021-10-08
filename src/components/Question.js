import React from 'react'
import { useHistory } from 'react-router-dom'


function Question({ data, setData, currentQuest, setCurrentQuest, correct, score, setScore  }) {
  const [selected, setSelected] = React.useState()
  const history = useHistory()

  const handleSelect = (ans) => {
    if (selected === ans && selected === correct) {
      return 'select'
    } else if (selected === ans && selected !== correct) {
      return 'wrong'
    } else if (selected === ans) {
      return 'select'
    }
  }

  const handleCheck = (ans) => {
    setSelected(ans)
    if (ans === correct) setScore(score + 1)
  }


  return (
    <>
      <h2>Question {currentQuest + 1}</h2>
      <div>{data[currentQuest].question}</div>
      {data && data.map(ans => (
        <button 
          key={ans} 
          onClick={() => handleCheck(ans)}
          className={`${selected && handleSelect(ans)}`}
        >{ans}</button>
      ))}
    </>
        
  )
}

export default Question
