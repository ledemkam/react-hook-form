import logo from './logo.svg';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
 //ract hook form : varaible  

 const {register, handleSubmit,watch, formState: {errors}} = useForm();


 // method
  const formSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section>
        <form onSubmit={handleSubmit(formSubmit)}>
          {(errors.email || errors.password) && <p style={{color: "red"}}>bitte email oder password eingeben</p>}
        <p>
          <label htmlFor="email"  style={{display:"block"}}>email</label>
          <input type="text" {...register('email',{required: true})}  placeholder='Adresse email' />
        </p>
        <p>
          <label htmlFor="password" style={{display:"block"}}>password</label>
          <input type="password" {...register('password',{required: true})} placeholder='Mot de passe' />
        </p>
          <div style={{textAlign: "right"}}>
          <button>inscription</button>
          </div>
        </form>
        </section>
       
      </header>
    </div>
  );
}

export default App;
