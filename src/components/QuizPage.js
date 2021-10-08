import React from 'react'
import { useHistory } from 'react-router-dom'

import QuizCard from './QuizCard'
import { getQuestions } from '../lib/api'

function QuizPage () {
  const [data, setData] = React.useState('')
  const [score, setScore] = React.useState()
  const isLoading = !data

  const history = useHistory()


  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getQuestions()
        const rawData = res.data.results
        const refData = rawData.map((item, index) => {
          const answer = decodeData(item.correct_answer)
          const options = [ 
            ...item.incorrect_answers.map(answer => decodeData(answer)), 
            answer
          ]
          return ({
            id: `${index}-${Date.now()}`,
            question: decodeData(item.question),
            answer: answer,
            options: options.sort(),
          }) 
        })
        setData(refData)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  // *** Data Decoding Function
  function decodeData(str) {
    const dataCleaner = document.createElement('textarea')
    dataCleaner.innerHTML = str
    return dataCleaner.value
  }


  return (
    <>
      <h1>This is the Quiz Page</h1>
      <section>
        <div>
          <QuizCard 
            isLoading={isLoading}
            data={data}
            score={score}
            setData={setData}
            setScore={setScore}
          />
        </div>
      </section>
     
    </>
    
  )
}

export default QuizPage