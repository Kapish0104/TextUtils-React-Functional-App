
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  const[mode, setMode] = useState('light');// lets us know if dark mode is enabled or not.
  const[alert, setAlert] = useState(null);// lets us know if dark mode is enabled or not.
  const[color,setColor] = useState('white');

  const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      });

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

const changeColor = (siteColor)=>{
  console.log("here" + siteColor);
  document.body.style.backgroundColor = siteColor;
  setColor(siteColor);
  if(siteColor === 'white' || siteColor === 'orange') {
    setMode('light');
  }
  else
    setMode('dark');
}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#5b3660';
      showAlert("Dark Mode Has Been Enabled", "success");
    }
    else {
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Light Mode Has Been Enabled", "success");
        }
  }

  return (
    <>
      <Router>
        <Navbar  changeColor={changeColor} mode={mode} title="TextUtils" aboutText="About" toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3" >
          <Routes>
            <Route path="/about" element={<About color={color} mode={mode}/>}/>
            <Route path="/" element={<TextForm color={color} showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/>}/>
          </Routes>
        </div>
      </Router>  
    </>
  );
}

export default App;
