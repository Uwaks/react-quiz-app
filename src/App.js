import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import QuizPage from './components/QuizPage'
import Footer from './components/Footer'
import Results from './components/Results'
import QuizCard from './components/QuizCard'



function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route path={'/quizcard'}>
          <QuizCard />
        </Route>
        <Route path={'/quiz'}>
          <QuizPage />
        </Route>
        <Route path={'/results'}>
          <Results />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
