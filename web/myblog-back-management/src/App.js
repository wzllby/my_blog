import './App.css'
import rou from './routes';
import { useRoutes } from 'react-router-dom';

function App() {
  const routes = useRoutes(rou)
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
