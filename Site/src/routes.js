import { Switch, Route } from 'react-router-dom';

// import Error404 from './pages/Errors/Error404';
import Artigo from './pages/artigo';
import Podcasts from './pages/Podcasts';
import Escreva from './pages/Escreva';
import Sobre from './pages/Sobre';
import Home from './pages/Home';
import PostPages from './pages/Posts';
import Error404 from './pages/Erro'
function Routes() {
  return (
    <div className="container-lg">
      <Switch>
        <Route path='/' exact component={Home} /> {/* Rota que termina em '/', deve direcionar ao home */}
        <Route path='/podcasts' component={Podcasts}/>
        <Route path='/artigo/:artigo' component={Artigo} />
        <Route path='/escreva' component={Escreva} />
        <Route path='/sobre' component={Sobre} />
        <Route path = '/posts'component={PostPages} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default Routes;