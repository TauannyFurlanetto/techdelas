import {BrowserRouter} from 'react-router-dom'

import Routes from './routes';
import Cabecalho from './components/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cabecalho />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;