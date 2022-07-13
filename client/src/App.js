import { Routes, Route, Navigate } from "react-router-dom"
import { Button } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import RegistrationPage from "./components/RegistrationPage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
