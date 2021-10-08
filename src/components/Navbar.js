import { NavLink } from 'react-router-dom'

function Navbar () {
  return (
    <header>
      <div>
        <NavLink to={'/'} exact className="">
            Home
        </NavLink>
        <NavLink to={'/quiz'} className="">
            QuizPage
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar