import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/Home/App';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './Pages/Cadastro/Video';
import CadastroCategoria from './Pages/Cadastro/Categoria';



ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={() => (<div>Pagina 404</div>)} />
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

