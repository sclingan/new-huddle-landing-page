import logo from '../public/images/logo.svg'
import mockup from '../public/images/illustration-mockups.svg'
import './App.css'

function App() {

  return (
    <div className='container'>
      <header>
         <img className='logo' src={logo} alt=""></img>
         <img src={mockup} alt=""></img>
      </header>
      <main>
        <h2>Build The Community Your Fans Will Love</h2>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
          Create connections with your users as you engage in genuine discussion. 
        </p>
        <a href="">Register</a>
        </main>
        <footer>
         <nav>

         </nav>
        </footer>
    </div>
  )
}

export default App
