import { Routes, Route, Navigate } from "react-router-dom"
import { Button } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import RegistrationPage from "./ui/RegistrationPage";
import LoginPage from "./ui/LoginPage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
