import react, {useState} from 'react';
import './App.css';
import instagram from '../src/img/instagram.png';
import logo from './img/logo.png';
import mensaje from './img/mensaje.png';
import wpp from './img/wpp.png';
import cel from './img/cel.png';
function App() {
  const [show, setShow] = useState('');
  return (
    <div className="App">
      <div className="logo">
      <img src={logo} alt="logo"/>
      </div>
      <div className="redes">
        <img src={instagram} className="red" alt="logo" onClick={()=>{window.location.href="https://instagram.com/iglu.branding?igshid=YmMyMTA2M2Y="}}/>
        <img src={mensaje} className="mensaje"  alt="logo" onClick={()=>{setShow('email')}}/>
        <img src={cel} className="red"  alt="logo" onClick={()=>{setShow('telefono')}}/>
        <div className='get'>
        <img src={wpp} className="wpp"  alt="logo"onClick={()=>{window.location.href="https://wa.link/g3ku3o/"}}/>
        <p>Get in touch!</p>
        </div>
    
      </div>
      {show === '' ? 
     <div className='prueba'></div>
       :
      <div className='contendorh3'>
        <h3 className='pop'>{show ==="email" ? "danielvinu@iglubranding.com" : "+1 3057998509"}</h3>
      </div>
      }
      <h3 className='web'>
        Web in development
      </h3>
    </div>
  );
}

export default App;
