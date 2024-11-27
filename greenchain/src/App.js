import './App.css'
import useRoutes from 'react-router-dom'
import {ROUTES} from './Route/Routes';

function App() {
  return (
    useRoutes(ROUTES)
  );
}

export default App;
