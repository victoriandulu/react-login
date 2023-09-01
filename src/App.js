
import './App.css';
import profile from "./image/person.jpg"
import email2 from "./image/email2.jpg"
import password from "./image/password.jpg"

function App() {
  return (
    <div className="main">
     <div className='sub-main'>
<div>
  <div className='imgs'>
    <div className='container-imgs'>
      <img src={profile} alt='profile' className='profile'/>

    </div>

  </div>
  <div>
    <h1>LogIn Page</h1>
  </div>
  <div>
    <img src={email2} alt='email' className='email'/>
    <input type='text' placeholder='user name' className='name'/>
  </div>
  <div className='second-input'>
    <img src={password} alt='password' className='email'/>
    <input type='text' placeholder='password' className='name4'/>
  </div>
  <div className='login-button'>
  <button>LOG IN</button>
  </div>
  <div>
    <p>
      <a href = "#"> Forgot password ?</a> OR <a href = "#"> SIGN UP</a>
    </p>
  </div>
 
</div>
     </div>
    </div>
  );
}

export default App;
