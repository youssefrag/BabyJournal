import { Button } from '@mui/material'
import axios from 'axios'

function App() {

  const checkDb = () => {
    axios.post('http://localhost:5050/auth/checkDb')
  }

  return (
    <div className="App">
      <Button
        variant="contained"
        onClick={() => checkDb()}
      >
        Check Database
      </Button>
    </div>
  );
}

export default App;
