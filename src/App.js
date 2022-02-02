// import logo from './logo.svg';
import './App.css';
import logo from './assets/logo.svg'
import Garage from './design/design'
function App() {
  return (
    <div className="App">
      <section>
        <div className="container">
          <div className="img">
            <img src={logo} alt="logo"/>
            </div>
          <h1>Sign in</h1>
          <p>Use your Google Account</p>
          <input type = "email" placeholder ="Email or Phone" />
          <p >forgot Email?</p>
          <p className='black'>Not your computer? Use Guest mode to sign in privately.</p>
          <p>Learn more</p>
          <p>create account</p>
          <Garage />
        </div>
      </section>
    

    </div>
  );
}

export default App;
