import logo from '../public/images/logo.svg'
import mockup from '../public/images/illustration-mockups.svg'
import facebook from '../public/images/icon-facebook.svg'
import twitter from '../public/images/icon-twitter.svg'
import './App.css'

function App() {

  return (
    <div className='container'>
      <header>
        {/* <h1 className='sr-only'>Huddle landing page</h1> */}
         <img className='logo' src={logo} alt=""></img>
         <img className='mockup' src={mockup} alt=""></img>
      </header>
      <main>
        <h2>Build The Community Your Fans Will Love</h2>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
          Create connections with your users as you engage in genuine discussion. 
        </p>
        <a className="register" href="">Register</a>
        </main>
        <footer>
         <nav>
            <a href=""><img src={facebook} alt=""></img></a>
            <a href=""><img src={twitter} alt=""></img></a>
         </nav>
        </footer>
    </div>
  )
}

export default App
